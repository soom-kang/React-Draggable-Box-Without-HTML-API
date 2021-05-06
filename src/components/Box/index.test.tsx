import { render, cleanup, screen } from '@testing-library/react';
import Box from '@/components/Box';

afterEach(cleanup);

describe('box component', () => {
	test('render box', () => {
		render(<Box />);
		const box = screen.getByTestId('box');
		expect(box).toHaveTextContent('BOX');
	});
});
