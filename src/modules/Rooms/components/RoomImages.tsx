import React from "react";

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
					className="flex bg-center bg-cover bg-no-repeat w-[90vw] md:w-[16rem] h-[12rem] rounded-lg
               shadow-lg border-2"
					style={{ backgroundImage: `url(${img})` }}
				/>
			))}
		</div>
	);
};

export default RoomImages;
