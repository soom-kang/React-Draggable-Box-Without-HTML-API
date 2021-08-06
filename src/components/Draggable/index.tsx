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
		if (isDragging && draggableArea.current && draggingBox.current) {
			const { offsetLeft, offsetTop, clientWidth, clientHeight } = draggableArea.current;
			const borderWidth = 6; // check the App.css

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

			if (offsetLeft < left && offsetTop < top && offsetRight > right && offsetBottom > bottom)
				setStyles({
					left,
					top,
				});
		}
	};

	const dragEnd = () => {
		setIsDragging(false);
	};

	return (
		<div className='outerContainer gradient'>
			<div ref={draggableArea} className='container shadow'>
				<div
					className='draggableBox neon-border'
					data-testid='draggableBox'
					ref={draggingBox}
					style={styles}
					onMouseDown={dragStart}
					onMouseMove={dragging}
					onMouseUp={dragEnd}
				>
					{children}
				</div>
			</div>
		</div>
	);
};

export default Draggable;
