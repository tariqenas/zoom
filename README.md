# Zoom-like Share & Record Demo

This workspace contains a simple browser-based demo app that shows how to:

- start a camera preview
- capture microphone audio
- share your screen or a window
- record a mixed stream to a downloadable video file

## Run locally

1. Open a terminal in `/workspaces/zoom`
2. Start a local server:

```bash
python3 -m http.server 8000
```

3. Open your browser at `http://localhost:8000`
4. Allow camera, microphone, and screen permissions when prompted.

## Files

- `index.html` — standalone HTML demo with embedded CSS and JavaScript

## GitHub Pages

A GitHub Actions workflow is included to publish this page automatically from the `main` branch.

After pushing to `main`, the page can be served at:

- `https://tariqenas.github.io/zoom/`

If you want a second static route like `apps.html`, add that file to the repo and push the change.

## Notes

This is a prototype demo and does not include peer-to-peer networking or a full meeting backend. It is a great starting point for building Zoom/Teams-style screen sharing and recording features.
