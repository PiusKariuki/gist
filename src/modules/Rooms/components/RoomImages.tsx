import React from "react";

interface Props {
	imgs: Array<string>;
}

const RoomImages: React.FC<Props> = ({ imgs }) => {
	return (
		<div className="flex flex-row flex-wrap justify-around items-center gap-[2rem] min-h-[30vh]">
			{imgs?.map((img: any, key: number) => (
				<div
					key={key}
					className="flex bg-center bg-cover bg-no-repeat w-[12rem] h-[12rem] rounded-lg
               shadow-lg border-[0.2rem] border-black-40"
					style={{ backgroundImage: `url(/img/${img})` }}
				/>
			))}
		</div>
	);
};

export default RoomImages;
