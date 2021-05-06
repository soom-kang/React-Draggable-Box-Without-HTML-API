import { render, screen, cleanup } from '@testing-library/react';
import App from './App';

afterEach(cleanup);

test('renders App check', () => {
	render(<App />);
	const app = screen.getByTestId('app');
	expect(app).toBeInTheDocument();
});
