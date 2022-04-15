import React from "react";

const Video: React.FC<{
	price: number;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ price, setOpen }) => {
	return (
		<div className="flex w-full relative little:px-4 px-6 md:px-0">
			<video
				controls
				src="/img/room.mp4"
				className="h-[35vh] md:h-[35vh] lg:h-[80vh] w-full rounded-lg
            bg-black-70"></video>
			<p
				className="absolute bottom-[50%] md:bottom-[30%]  left-[5%] translate-x-[-50%] text-xl
             font-semibold translate-y-[-50] text-white">
				GC.&nbsp;{price}
			</p>
			<button
				className="red-btn absolute bottom-[30%] md:bottom-[20%] left-[5%] 
            translate-x-[-50%]  translate-y-[-50] z-10"
				onClick={() => setOpen((prev: boolean) => !prev)}>
				Buy
			</button>
		</div>
	);
};

export default Video;
