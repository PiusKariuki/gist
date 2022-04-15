import { useRef, useEffect } from "react";

const useHorizontalScroll = () => {
	const scrollLeft = (ref: React.MutableRefObject<any>) => {
         console.log(ref?.current?.getBoundingClientRect());
		ref.current.scrollLeft -= 550;
	};
	const scrollRight = (ref: React.MutableRefObject<any>) => {
		ref.current.scrollLeft += 550;
	};

   

	return { scrollLeft, scrollRight };
};

export default useHorizontalScroll;
