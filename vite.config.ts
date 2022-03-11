import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react({
			fastRefresh: process.env.NODE_ENV !== 'test',
		}),
	],
	resolve: {
		alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
	},
	server: {
		host: '0.0.0.0',
		port: 3030,
	},
});
