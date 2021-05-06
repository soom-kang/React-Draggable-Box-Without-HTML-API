import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import Draggable from '@/components/Draggable';

afterEach(cleanup);

describe('Draggable Component', () => {
	test('check child component', () => {
		render(<Draggable />);
		const draggableBox = screen.getByTestId('draggableBox');
		expect(draggableBox).toBeInTheDocument();
	});
});
