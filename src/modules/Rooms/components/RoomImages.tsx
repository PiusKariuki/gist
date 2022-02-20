import React from "react";
import { imgUrl } from "shared/http/Http";

interface Props {
	imgs: Array<string>;
}

const RoomImages: React.FC<Props> = ({ imgs }) => {
   
	return (
		<div className="flex flex-row flex-wrap justify-around md:justify-start items-center
       gap-[2rem] min-h-[30vh]">
			{imgs?.map((img: any, key: number) => (
				<div
					key={key}
					className="flex bg-center bg-contain bg-no-repeat w-[90vw] md:w-[16rem] h-[12rem] rounded-lg
               shadow-lg border-[0.2rem] border-black-40"
					style={{ backgroundImage: `url(${imgUrl}/${img})` }}
				/>
			))}
		</div>
	);
};

export default RoomImages;
