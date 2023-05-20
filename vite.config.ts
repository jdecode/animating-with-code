import {defineConfig} from 'vite';
import motionCanvas from '@motion-canvas/vite-plugin';
import ffmpeg from '@motion-canvas/ffmpeg';

// Expose host port 9000 to the container
export default defineConfig({
  server: {
    port: 9000,
    host: '23.205.1.1',
  },
  plugins: [
    motionCanvas(),
    ffmpeg(),
  ],
});
