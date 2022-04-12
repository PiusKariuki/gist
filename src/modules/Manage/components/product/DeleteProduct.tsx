import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import useDeleteProduct from "modules/Manage/Hooks/product/useDeleteProduct";
import useSpinner from "shared/components/spinner/useSpinner";
import { useNavigate } from "react-router-dom";

const DeleteProduct: React.FC<{
	name: string;
	productId: string;
	shopId: any;
	setOpenDelete: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ name, productId, shopId, setOpenDelete }) => {

   // input value
	const [value, setValue] = useState();
	const handleChange = (e: any) => {
		setValue(e.target.value);
	};
	let navigate = useNavigate();
	const { load, deleteProduct } = useDeleteProduct();
	const { renderSpinner } = useSpinner();

	return (
		<div className="dialog-wrapper">
			<div className="dialog">
				<FontAwesomeIcon
					icon={faXmark}
					size="2x"
					color="red"
					className="absolute right-[5%] top-[4%]"
					onClick={() => setOpenDelete(false)}
				/>
				{renderSpinner(load)}
				<p className="text-[1rem] md:text-[1.4rem] text-black-40 font-[300]">
					Please type <span className="font-[700]"> {name} </span>
					to confirm
				</p>
				<form
					className="flex flex-col justify-around gap-y-[4rem]"
					onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
						deleteProduct(e, productId);
						setOpenDelete(false);
						navigate(`/myAccount/shops/products/${shopId}`);
					}}>
					<input
						type="text"
						required
						className="border-[0.0625rem] border-black-70 h-[2.25rem] outline-none
               text-blue-20 rounded-[0.25rem] font-[600] text-[1.3rem] tracking-wide px-[1rem] 
               form-ring"
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							handleChange(e)
						}
					/>
					<button
						type="submit"
						disabled={value !== name}
						className=" border-[0.2rem] border-red-20 px-[1rem] py-[0.4rem]
                  text-red-20 text-[700] disabled:bg-gray-200 disabled:border-red-300
                  disabled:text-red-200">
						I understand the consequences, delete this product.
					</button>
				</form>
			</div>
		</div>
	);
};

export default DeleteProduct;
