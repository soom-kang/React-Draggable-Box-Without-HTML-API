import Box from '@/components/Box';
import Draggable from '@/components/Draggable';

import './App.css';

function App() {
	return (
		<div className='App' data-testid='app'>
			<Draggable>
				<Box />
			</Draggable>
		</div>
	);
}

export default App;
