import { useRef, useEffect } from "react";

const useHorizontalScroll = () => {
	const scrollLeft = (ref: React.MutableRefObject<any>) => {
		ref.current.scrollLeft -= 240;
	};
	const scrollRight = (ref: React.MutableRefObject<any>) => {
		ref.current.scrollLeft += 240;
	};

	return { scrollLeft, scrollRight };
};

export default useHorizontalScroll;
