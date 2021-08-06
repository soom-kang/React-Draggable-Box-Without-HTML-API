import Box from '@/components/Box';
import Draggable from '@/components/Draggable';
import { useEffect } from 'react';
import './styles/App.css';

function App() {
	useEffect(() => {
		const consoleStyle = `
			font-family: -apple-system, sans-serif;
			font-size: 2.5em; 
			font-weight: 300;
			border-radius: 5px;
			padding: 15px;
			background: #1D222B;
			color: #fff;
			text-shadow:
				0 0 7px #bc13fe,
				0 0 10px #B4F8C8,
				0 0 21px #A0E7E5
	`;

		console.info('%c  🍩  Github.com/VannsKang  ', consoleStyle);
	});

	return (
		<div className='App' data-testid='app'>
			<div className='draggable-title neon-title'>
				<div>
					React Draggable Box <br /> without HTML Drag & Drop API
				</div>
			</div>
			<Draggable>
				<Box />
			</Draggable>
		</div>
	);
}

export default App;
