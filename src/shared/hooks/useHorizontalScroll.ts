
const useHorizontalScroll = () => {
	const scrollLeft = (ref: React.MutableRefObject<any>) => {
		ref.current.scrollLeft -= 550;
	};
	const scrollRight = (ref: React.MutableRefObject<any>) => {
		ref.current.scrollLeft += 550;
	};

   

	return { scrollLeft, scrollRight };
};

export default useHorizontalScroll;
