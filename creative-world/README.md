# Creative World inside the voice presentation

Snapshot of Dr. Chantell McDowell’s public Creative World portfolio (Sites version 5, source commit `566f778d21eea470ddb02d1e41cd8b0ba668ece3`).

Public portfolio: https://makeherspace-creative-world.drchantellmcdowell.chatgpt.site

The presentation serves the city, all nine portfolio buildings, original illustrations and résumé files from the same host. Its Creative World button pauses the recording and opens the city in a panel; Back to presentation resumes it when it was playing. A city preview appears during the final closing remarks without changing the 420-second voice recording.

This embedded copy connects the portfolio’s presentation links to the current recorded presentation and its PowerPoint download. The frontend source ZIP opens GitHub. The original public Sites project remains the authoritative portfolio and is not modified by this snapshot.

From the repository root, run `node presentation/publish-web.js` to build the combined presentation and city in `presentation/web/`. The complete MERN backend is in `../backend/`; React frontend source is in `../src/`.
