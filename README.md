# GSNhub

Open-source launcher for Orbit, PS5, Xbox, and Fusion. Includes the complete hub HTML/CSS/JavaScript source, logos, HTML and SVG builds, and routing regression tests.

## Run locally

Requires Node.js 20 or later. No dependencies or API keys are needed.

```sh
npm test
npm run build
npm start
```

Open http://127.0.0.1:5189. Deploy the contents of dist/ to static hosting. The generated hub.svg can be embedded in an iframe. Keep the generated hubs/ directory alongside it for logo assets.

## Customize

Edit hubSites in src/gsnhub.mjs to change names, logos, descriptions, colors, and destinations. Each site requires its own fixed CDN origin. The launcher supports same-tab, fullscreen, and about:blank. Only the selected console loads. Pop-up permission may be needed for about:blank.

## Scope

This repository contains all hub launcher files. The games, console apps, music services, proxy backend, and Discord bot are separate systems; their source and credentials are not included. Console destinations depend on the hosted services being available. Fusion retains its hosted password prompt.

## License

Hub code is MIT licensed. Brand names and third-party logos are owned by their respective owners; the code license does not grant trademark rights or rights to third-party game content.
