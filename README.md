# Big Bang Animation

This is a three.js animation of the big bang that selects a random star and
zooms in on one of its planets

## Setting up dev environment

```bash
npm install
```

## Running the example locally

```bash
npm run dev
```

## Creating a Video from Exported Frames

If you have exported animation frames as images (e.g., `frame_0001.png`,
`frame_0002.png`, ...), you can use [ffmpeg](https://ffmpeg.org/) to combine
them into a video:

```bash
ffmpeg -framerate 30 -i frame_%04d.png -c:v libx264 -pix_fmt yuv420p output.mp4
```

- `-framerate 30` sets the video to 30 frames per second (adjust as needed).
- `-i frame_%04d.png` tells ffmpeg to use files named like `frame_0001.png`,
  `frame_0002.png`, etc.
- `-c:v libx264` uses the widely compatible H.264 codec.
- `-pix_fmt yuv420p` ensures compatibility with most players.
- `output.mp4` is the name of the resulting video file.

Make sure you run this command in the directory containing your exported frames.
