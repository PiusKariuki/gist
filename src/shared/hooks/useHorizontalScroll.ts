import { useRef, useEffect } from "react";

 const  useHorizontalScroll = ()  =>{
	const elRef = useRef<any>();
	useEffect(() => {
		const el = elRef.current;
		if (el) {
			const onWheel = (e:any) => {
				if (e.deltaY == 0) return;
				e.preventDefault();
				el.scrollTo({
					left: el.scrollLeft + 4*e.deltaY,
					behavior: "smooth",
				});
			};
			el.addEventListener("wheel", onWheel);
			return () => el.removeEventListener("wheel", onWheel);
		}
	}, []);
	return elRef;
}

export default useHorizontalScroll