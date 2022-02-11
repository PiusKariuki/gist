import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import useDeleteShop from "../Hooks/useDeleteShop";

const DeleteShop: React.FC<{
	name: string;
	shopId: string;
	setOpenDelete: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ name, shopId, setOpenDelete }) => {
	const { load, deleteShop } = useDeleteShop();
	const [value, setValue] = useState();
	const handleChange = (e: any) => {
		setValue(e.target.value);
	};
	return (
		<div
			className="flex flex-col py-[3rem] px-[6rem] relative bg-white justify-around 
         rounded-md gap-y-[3rem] shadow-lg">
			<FontAwesomeIcon
				icon={faXmark}
				size="2x"
				color="red"
				className="absolute right-[5%] top-[4%]"
				onClick={() => setOpenDelete(false)}
			/>

			<p className="text-[1rem] md:text-[1.4rem] text-black-40 font-[300]">
				Please type <span className="font-[700]"> {name} </span>
				to confirm
			</p>
			<form
				className="flex flex-col justify-around gap-y-[4rem]"
				onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
					deleteShop(e, shopId)
				}>
				<input
					type="text"
					required
					className="border-[0.0625rem] border-black-70 h-[2.25rem] outline-none
                  text-blue-20 rounded-[0.25rem] font-[600] text-[1.3rem] tracking-wide px-[1rem] 
                  focus:ring-2 focus:ring-blue-500"
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
				/>
				<button
					type="submit"
					disabled={value !== name}
					className=" border-[0.2rem] border-red-20 px-[1rem] py-[0.4rem]
               text-red-20 text-[700] disabled:bg-gray-200 disabled:border-red-300
               disabled:text-red-200">
					I understand the consequences, delete this shop.
				</button>
			</form>
		</div>
	);
};

export default DeleteShop;
