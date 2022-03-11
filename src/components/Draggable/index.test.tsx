import { render, screen, cleanup } from '@testing-library/react';
import Draggable from '@/components/Draggable';
import Box from '@/components/Box';

afterEach(cleanup);

describe('Draggable Component', () => {
	test('check child component', () => {
		render(<Draggable children={<Box />} />);
		const draggableBox = screen.getByTestId('draggableBox');
		expect(draggableBox).toBeInTheDocument();
	});
});
