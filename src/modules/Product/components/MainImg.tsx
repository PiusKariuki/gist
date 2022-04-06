import React from "react";
import {
	faChevronLeft,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
	images: Array<string>;
	index: number;
	setIndex: React.Dispatch<React.SetStateAction<number>>;
}

const MainImg: React.FC<Props> = ({ images, index, setIndex }) => {
	return (
		<div className="flex flex-col space-y-10 w-full relative">
			{images && images.length > 0 ? (
            <img
					src={images && images[index]}
					alt="productImg"
					className="max-w-full object-cover flex max-h-[80vh] md:max-h-[60vh] xl:max-h-[90vh]"
					onError={({ currentTarget }) => {
						currentTarget.onerror = null;
						currentTarget.src = "/img/picture.png";
					}}
				/>
			) : (
				
				<img
					src="/img/picture.png"
					alt="productImg"
					className="w-full"
					onError={({ currentTarget }) => {
						currentTarget.onerror = null;
						currentTarget.src = "/img/picture.png";
					}}
				/>
			)}
			{images?.length > 1 ? (
				<>
					<FontAwesomeIcon
						onClick={() =>
							setIndex((prev: number) =>
								prev === 0 ? images?.length - 1 : prev - 1
							)
						}
						icon={faChevronLeft}
						size="3x"
						className="hidden md:flex absolute  left-0 top-[40%] md:left-8
               text-gray-300"
					/>
					<FontAwesomeIcon
						onClick={() =>
							setIndex((prev: number) =>
								prev === images?.length - 1 ? 0 : prev + 1
							)
						}
						icon={faChevronRight}
						size="3x"
						className="hidden md:flex absolute right-0 top-[40%] md:right-8 text-gray-300"
					/>
				</>
			) : null}
		</div>
	);
};

export default MainImg;
