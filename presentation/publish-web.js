import { readFile, writeFile, mkdir, copyFile, rm } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

// Publish the saved narration as a public page; preserve the original files.
const here = dirname(fileURLToPath(import.meta.url));
const output = join(here, 'web');
const creativeWorldUrl = 'https://makeherspace-creative-world.drchantellmcdowell.chatgpt.site';
let html = await readFile(join(here, 'Dr_Chantells_Tech_It_and_Go_capstone_project_Interactive.html'), 'utf8');
const embedded = html.match(/<script id="data" type="application\/json">([\s\S]*?)<\/script>/);
if (!embedded) throw new Error('Saved presentation data is missing.');
const source = JSON.parse(embedded[1]);
if (source.slides.length !== 9 || source.chapters.at(-1).end !== 420) {
  throw new Error('Expected the nine-topic, seven-minute voice presentation.');
}
await rm(output, { recursive: true, force: true });
await mkdir(join(output, 'assets'), { recursive: true });
await mkdir(join(output, 'downloads'), { recursive: true });

async function asset(value, name, expectedType) {
  const match = value.match(/^data:([^;,]+);base64,([\s\S]+)$/);
  if (!match || match[1] !== expectedType) throw new Error(`Invalid ${name} asset.`);
  await writeFile(join(output, 'assets', name), Buffer.from(match[2], 'base64'));
  return `assets/${name}`;
}
const data = {
  slides: [],
  chapters: source.chapters.map(({ index, title, start, end, duration }) => ({ index, title, start, end, duration })),
};
for (let i = 0; i < source.slides.length; i++) {
  data.slides.push(await asset(source.slides[i], `slide-${i + 1}.png`, 'image/png'));
}
data.audio = await asset(source.audio, 'narration.m4a', 'audio/mp4');
data.video = await asset(source.video, 'app-walkthrough.mp4', 'video/mp4');
data.appUrl = 'assets/demo.html';
await writeFile(join(output, data.appUrl), Buffer.from(source.app, 'base64'));

function replace(before, after) {
  if (!html.includes(before)) throw new Error(`Saved presentation changed: ${before.slice(0, 60)}`);
  html = html.replace(before, after);
}
// External media lets recipients stream and seek the recording normally.
html = html.replace(embedded[0], `<script id="data" type="application/json">${JSON.stringify(data)}</script>`);
replace('<p>Your capstone, in your voice.</p>', '<p>Dr. Chantell’s capstone, in her voice.</p>');
replace('<small>Follow the timed presentation or explore each topic.</small>', '<small>Tap Start to play the slides and recorded voice. Turn your sound on.</small>');
replace('Your voice · 7 minutes', 'Recorded voice · 7 minutes');
replace('<span id="chapter">', `<a id="creativeWorld" class="portfolio-link" href="${creativeWorldUrl}" target="_blank" rel="noopener noreferrer" aria-label="Open Dr. Chantell’s Creative World portfolio in a new tab">Creative World</a><span id="chapter">`);
replace('<button id="doneTopics">Explore topics</button>', `<button id="doneTopics">Explore topics</button><a id="doneCreativeWorld" class="portfolio-link" href="${creativeWorldUrl}" target="_blank" rel="noopener noreferrer">Explore Dr. Chantell’s Creative World</a><p class="portfolio-access">Portfolio access currently requires permission.</p>`);
replace('</style>', '\n.portfolio-link{display:inline-flex;align-items:center;justify-content:center;color:#26d9cf;background:#282032;border:1px solid #554064;border-radius:12px;padding:11px 14px;text-decoration:none;font-weight:700;white-space:nowrap}.portfolio-link:hover{background:#3f2b49;border-color:#26d9cf}.done-card .portfolio-link{margin:12px 0 0;white-space:normal}.portfolio-access{font-size:12px!important;margin:10px 0 0!important}@media(max-width:800px){footer{height:184px}main{bottom:184px}.controls .portfolio-link{font-size:12px;padding:9px 11px}}\n</style>');
replace('</head>', '<meta name="description" content="Dr. Chantell McDowell’s seven-minute Tech It &amp; Go! capstone presentation with her recorded voice and an interactive app demonstration."></head>');
replace('</style>', '\n#playbackNotice{position:fixed;top:86px;left:50%;transform:translateX(-50%);z-index:30;width:min(90vw,620px);padding:16px;background:#20142b;border:2px solid #ff1493;border-radius:12px;text-align:center;line-height:1.5}#playbackNotice a{color:#26d9cf;font-weight:700}\n</style>');
replace('<audio id="narration" preload="metadata"></audio>', '<audio id="narration" preload="metadata"></audio><div id="playbackNotice" role="status" aria-live="polite" hidden><span id="playbackMessage"></span> <a href="assets/narration.m4a" target="_blank" rel="noopener">Open recording</a></div>');
replace('audio.src=D.audio;', 'audio.src=D.audio;audio.muted=false;audio.volume=1;');
replace("async function play(){if(overview)focus(current);$('splash').hidden=true;$('done').hidden=true;if(audio.currentTime>=419.9){audio.currentTime=0;focus(0)}try{await audio.play()}catch(e){$('status').textContent='Press Play to start the recording.'}sync();}", "async function play(){if(overview)focus(current);$('done').hidden=true;$('playbackNotice').hidden=true;if(audio.currentTime>=419.9){audio.currentTime=0;focus(0)}try{await audio.play();$('splash').hidden=true}catch(e){$('playbackMessage').textContent='Tap Start or Play to hear the recording. If playback is blocked, open this page in Safari, Chrome, or Edge.';$('playbackNotice').hidden=false}sync();}");
replace("const bytes=Uint8Array.from(atob(D.app),c=>c.charCodeAt(0));$('appFrame').srcdoc=new TextDecoder().decode(bytes);", "$('appFrame').removeAttribute('srcdoc');$('appFrame').src=D.appUrl;");
replace("$('appFrame').srcdoc='';", "$('appFrame').src='about:blank';");
replace("window.addEventListener('resize',camera);focus(0);sync();", "audio.addEventListener('error',()=>{$('playbackMessage').textContent='The recording could not load. Refresh this page and tap Start again.';$('playbackNotice').hidden=false});window.addEventListener('resize',camera);focus(0);sync();");
replace("window.addEventListener('resize',camera);", "$('creativeWorld').addEventListener('click',pause);$('doneCreativeWorld').addEventListener('click',pause);window.addEventListener('resize',camera);");
await writeFile(join(output, 'index.html'), html);
for (const name of ['Dr_Chantells_Tech_It_and_Go_capstone_project.pptx', 'Dr_Chantells_Tech_It_and_Go_capstone_project_Extended.pptx']) {
  await copyFile(join(here, name), join(output, 'downloads', name));
}
console.log('Published nine topics, recorded voice, app walkthrough, and both PowerPoint downloads.');
