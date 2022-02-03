import React from "react";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
	name: string;
	price: string;
	img: string;
	userName: string;
}

const ViewProduct: React.FC<Props> = ({ name, price, img, userName }) => {
	return (
		<div
			className="flex flex-col p-[1rem] bg-white hover:border-[0.2rem] hover:border-gray-200
         border-[0.2rem] rounded-2xl border-white hover:shadow-2xl">	
				<p className="text-blue-20 font-[900] text-[1.4rem] mb-[1rem]">
					{name}
					<br />
					<FontAwesomeIcon icon={faUserCircle} size="1x" color="blue" />
					&nbsp;&nbsp;&nbsp;<span className="">{userName}</span>
				</p>
			<div
				className="flex relative w-[25rem] h-[40vh] bg-no-repeat bg-center bg-cover rounded-xl
            border-[0.1rem]"
				style={{ backgroundImage: `url(/img/${img})` }}>
				<p className="absolute bottom-[4%] right-[10%] text-white font-[600] text-[1.2rem]
            bg-black-80 px-[1rem]">
					$ {price}
				</p>
			</div>
		</div>
	);
};

export default ViewProduct;
