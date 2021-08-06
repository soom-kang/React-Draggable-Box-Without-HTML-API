import { useState, MutableRefObject, useRef, ReactNode, MouseEvent } from 'react';

const Draggable = <T extends { children: ReactNode }>({ children }: T) => {
	const draggableArea: MutableRefObject<HTMLDivElement | null> = useRef(null);
	const draggingBox: MutableRefObject<HTMLDivElement | null> = useRef(null);

	const [styles, setStyles] = useState({});
	const [diff, setDiff] = useState({ left: 0, top: 0, right: 0, bottom: 0 });
	const [isDragging, setIsDragging] = useState(false);

	const dragStart = (e: MouseEvent) => {
		const { left, right, top, bottom } = e.currentTarget.getBoundingClientRect();

		setDiff({
			left: e.screenX - left,
			top: e.screenY - top,
			right: right,
			bottom: bottom,
		});

		setIsDragging(true);
	};

	const dragging = (e: MouseEvent) => {
		const borderWidth = 6; // check the App.css

		if (!isDragging) return;

		try {
			if (!draggableArea.current || !draggingBox.current)
				throw new Error('Impossbile to drag for now!');

			const { offsetLeft, offsetTop, clientWidth, clientHeight } = draggableArea.current;

			const [boxWidth, boxHeight] = [
				draggingBox.current.clientWidth,
				draggingBox.current.clientHeight,
			];

			const [offsetRight, offsetBottom] = [
				offsetLeft + clientWidth - borderWidth,
				offsetTop + clientHeight - borderWidth,
			];

			let [left, top] = [e.screenX - diff.left, e.screenY - diff.top];
			let [right, bottom] = [left + boxWidth, top + boxHeight];

			if (offsetLeft > left || offsetTop > top || offsetRight < right || offsetBottom < bottom)
				throw new Error('Out of the draggable area!');

			setStyles({
				left,
				top,
			});
		} catch (error) {
			console.error(error.message);
		}
	};

	const dragEnd = () => {
		setIsDragging(false);
	};

	return (
		<div className='outerContainer gradient'>
			<div
				ref={draggableArea}
				className='container shadow'
				onMouseMove={dragging}
				onMouseUp={dragEnd}
			>
				<div
					className='draggableBox neon-border'
					data-testid='draggableBox'
					ref={draggingBox}
					style={styles}
					onMouseDown={dragStart}
				>
					{children}
				</div>
			</div>
		</div>
	);
};

export default Draggable;
