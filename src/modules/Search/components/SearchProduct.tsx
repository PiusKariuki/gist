import React from "react";
import { useNavigate } from "react-router-dom";

interface Props {
	img: string;
	name: string;
	price: number;
	userName: string;
   id: string;
}

const SearchProduct: React.FC<Props> = ({ name, img, price, userName,id }) => {
   let navigate = useNavigate();
	return (
		<div className="flex flex-col rounded-3xl shadow-lg  border-[0.2rem] px-[1rem] 
      lg:px-[1rem] py-[4rem] lg:max-w-3xl gap-[1.2rem]"
         onClick={()=>navigate(`/product/${id}`,{replace: true})}>
			<img src="/img/lebron2.png" alt="" className=" w-[100vw] lg:max-h-[15.625rem] lg:w-auto
          object-contain"/>
			<p className="text-gray-10 font-[900] text-[1rem] ">
				{name}
			</p>
			<p className="text-gray-10 font-[300] text-[1rem] ">
				by:&nbsp;&nbsp;&nbsp;<span className="font-[900]">{userName|| "Pius"}</span>
			</p>
			<p className="text-gray-10 font-[900] text-[1rem] ">
				$:&nbsp;&nbsp;&nbsp;{price}
			</p>
         <button className="blue-btn mt-[2rem]">View</button>
		</div>
	);
};

export default SearchProduct;
