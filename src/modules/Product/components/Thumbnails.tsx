import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../styles/product.css";
import useHorizontalScroll from "shared/hooks/useHorizontalScroll";
import React, { useRef } from "react";

interface Props {
	images: Array<string>;
	setIndex: React.Dispatch<React.SetStateAction<number>>;
}

const Thumbnails: React.FC<Props> = ({ images, setIndex }) => {
	const { scrollRight, scrollLeft } = useHorizontalScroll();
	const scrollRef = useRef<any>(null);

	return (
		<div className="flex relative justify-center">
			<div
				ref={scrollRef}
				className="flex flex-row gap-[2rem] overflow-x-scroll scroller">
				{images?.map((img: string, key: number) => {
					return (
						<img
							src={img}
							key={key}
							className="w-[6rem] md:w-[6rem] md:h-[4rem] rounded-lg bg-cover bg-center 
                     bg-no-repeat  cursor-pointer 
                     flex-shrink-0"
							onClick={() => setIndex(key)}
						/>
					);
				})}
				{/*......................................
                  *FLOATING BTNS FOR HORIZONTAL SCROLL
               ......................................*/}
				{images?.length > 5 ? (
					<>
						<div
							className=" 
                     w-[3.125rem]
                     h-[3.125rem] rounded-full translate-y-[-50%]
                     z-10 hidden lg:flex lg:absolute  left-0 top-[50%] 
                     ">
							<FontAwesomeIcon
								onClick={() => scrollLeft(scrollRef)}
								icon={faArrowLeft}
								className="flex text-[1.25rem] self-center mx-auto 
                        text-[#00bcd7]"
							/>
						</div>
						<div
							className="
                     z-10 hidden
                     lg:flex lg:absolute text-[2rem] translate-y-[-50%]
                     w-[3.125rem] h-[3.125rem] rounded-full right-0 top-[50%]
                     ">
							<FontAwesomeIcon
								onClick={() => scrollRight(scrollRef)}
								icon={faArrowRight}
								className="flex text-[1.25rem] self-center mx-auto
                        text-[#00bcd7]"
							/>
						</div>
					</>
				) : null}
			</div>
		</div>
	);
};

export default Thumbnails;
