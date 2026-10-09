# Dr. Chantell’s Tech It & Go capstone project

Both presentations are saved in this folder.

**[Play the seven-minute presentation with Dr. Chantell’s recorded voice](https://dr-chantell-tech-it-go-presentation.onrender.com/)**

Share that public playback link with classmates and reviewers. They can open it without a GitHub or Render account and select **Start 7-minute presentation**. The page streams the slides, voice recording, and app walkthrough. **Creative World** opens Dr. Chantell’s interactive portfolio city inside the presentation, with all nine buildings and résumé downloads. Her original recording remains exactly seven minutes. A city preview appears during the closing remarks, after the app video. Browser and file previews may not play embedded PowerPoint narration.

| File | Use |
| --- | --- |
| [Seven-minute PowerPoint](Dr_Chantells_Tech_It_and_Go_capstone_project.pptx?raw=true) | Nine slides with Dr. Chantell's edited recorded voice, automatic seven-minute timing, and an embedded app walkthrough. |
| [Extended PowerPoint](Dr_Chantells_Tech_It_and_Go_capstone_project_Extended.pptx?raw=true) | Preserved original 20-slide capstone presentation. |
| [Play the voice presentation online](https://dr-chantell-tech-it-go-presentation.onrender.com/) | Public browser playback with Dr. Chantell’s recorded voice, timed slides, a working sample app, and the interactive Creative World portfolio. |
| [Offline interactive presentation](Dr_Chantells_Tech_It_and_Go_capstone_project_Interactive.html?raw=true) | Download and open in a browser for offline playback. |
| [Opening instructions](START_HERE.txt) | PowerPoint playback and sample account instructions. |

## Present the seven-minute version

Open the PowerPoint in desktop PowerPoint. Select **Slide Show > From Beginning** with **Play Narrations** and **Use Timings** enabled. Narration and video are embedded. The slide timings total exactly seven minutes.

For the interactive version, open the public playback link above in Safari, Chrome, or Edge. Turn your sound on. Select **Start 7-minute presentation**. **Topics** zooms out to all sections. **Try the app** pauses the presentation so you can explore the equipment catalog, lessons, borrowing requests and staff tools. The sample app uses local demo data. **Creative World** pauses the recording while viewers drive the taxi or select a gold building nameplate; **Back to presentation** returns to the paused recording and resumes it if it was playing. The original offline HTML and PowerPoint files are preserved.

The interactive file is a Prezi-style HTML presentation, not a native Prezi project. The app demonstration uses the project's React source with an in-memory sample API. No live accounts or reservations are created. Use borrower@example.org or staff@example.org with any password.

The recording mentions the original Vercel frontend plan. The current repository documents Render for frontend and backend hosting. The presentation distinguishes this recorded plan from the current repository setup and does not claim live workflow verification.

## Earlier presentation sources

`generate-presentation.js` and the existing GitHub Actions presentation workflow retain the earlier deck generation path. The downloaded narrated PowerPoint uses the updated timing and embedded recording.

## Publish the public player

Render builds the dedicated voice-presentation site with `node presentation/publish-web.js` and publishes `presentation/web`. The script exports the saved presentation’s nine slide images, seven-minute AAC recording, app walkthrough video, and sample app to normal web assets. It adds a tenth Creative World topic for the final closing remarks and copies the public portfolio snapshot from the root `creative-world/` folder to the same host. The recording is unchanged. The city can also open in a new tab. **MERN GitHub** opens this combined repository; the footer, closing screen and city panel expose the frontend and backend source links. The separate portfolio is public at https://makeherspace-creative-world.drchantellmcdowell.chatgpt.site. It preserves both original decks and the offline interactive file. No database or sign-in is needed for presentation playback.
