import { useState, MutableRefObject, useRef, ReactNode, MouseEvent, TouchEvent } from 'react';
import { BrowserView, MobileView, isBrowser } from 'react-device-detect';

const Draggable = <T extends { children: ReactNode }>({ children }: T) => {
	const draggableArea: MutableRefObject<HTMLDivElement | null> = useRef(null);
	const draggingBox: MutableRefObject<HTMLDivElement | null> = useRef(null);

	const [styles, setStyles] = useState({});
	const [diff, setDiff] = useState({ left: 0, top: 0, right: 0, bottom: 0 });
	const [isDragging, setIsDragging] = useState(false);

	// DragStart
	const dragStart = (e: TouchEvent | MouseEvent) => {
		const { left, right, top, bottom } = e.currentTarget.getBoundingClientRect();
		const [getScreenX, getScreenY] = isBrowser
			? [(e as MouseEvent).screenX, (e as MouseEvent).screenY]
			: [
					Math.floor((e as TouchEvent).touches[0].screenX),
					Math.floor((e as TouchEvent).touches[0].screenY),
			  ];

		setDiff({
			left: getScreenX - left,
			top: getScreenY - top,
			right: right,
			bottom: bottom,
		});

		setIsDragging(true);
	};

	const dragging = (e: MouseEvent | TouchEvent) => {
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

			const [getScreenX, getScreenY] = isBrowser
				? [(e as MouseEvent).screenX, (e as MouseEvent).screenY]
				: [
						Math.floor((e as TouchEvent).touches[0].screenX),
						Math.floor((e as TouchEvent).touches[0].screenY),
				  ];

			let [left, top] = [getScreenX - diff.left, getScreenY - diff.top];
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
			{/* NOTE web view*/}
			<BrowserView>
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
			</BrowserView>

			{/* NOTE mobile view */}
			<MobileView>
				<div
					ref={draggableArea}
					className='container shadow'
					onTouchMove={dragging}
					onTouchEnd={dragEnd}
				>
					<div
						className='draggableBox neon-border'
						data-testid='draggableBox'
						ref={draggingBox}
						style={styles}
						onTouchStart={dragStart}
					>
						{children}
					</div>
				</div>
			</MobileView>
		</div>
	);
};

export default Draggable;
