import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useRef } from "react";
import useSpinner from "shared/components/spinner/useSpinner";
import useAddShop from "../../Hooks/product/useAddProduct";

interface Props {
	openProduct: boolean;
	setOpenProduct: React.Dispatch<React.SetStateAction<boolean>>;
	shopId: string;
}
const AddProduct: React.FC<Props> = ({
	openProduct,
	setOpenProduct,
	shopId,
}) => {
	const {
		name,
		price,
		quantity,
		handleChange,
		clearAttributes,
		addProduct,
		load,
		images,
		setImages,
		removeImg,
	} = useAddShop();
	const { renderSpinner } = useSpinner();
	const hiddenInput = useRef<any>(null);
	return (
		<div
			className={`${
				openProduct ? "flex flex-col items-center mb-[4rem]" : "hidden"
			}`}>
			<form
				name="addProduct"
				className="flex flex-col lg:flex-row  gap-x-[8rem] lg:px-[3rem]"
				onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
					addProduct(e, shopId);
				}}>
				<div className="flex flex-col  w-[80vw] lg:w-full">
					{/* name */}
					<label
						htmlFor="name"
						className="font-bold leading-[1rem] tracking-[0.02rem] text-[1.2rem] mb-[0.5rem]
                pt-[2rem] ">
						Product name
					</label>
					<input
						onChange={handleChange}
						required
						value={name}
						type="text"
						id="name"
						className=" h-[2.25rem] outline-none 
                  text-blue-20 rounded-[0.25rem] font-[600] text-[1.3rem] tracking-wide px-[1rem] 
                  ring-2 ring-blue-500"
					/>
					{/* price */}
					<label
						htmlFor="price"
						className="font-bold leading-[1rem] tracking-[0.02rem] text-[1.2rem] mb-[0.5rem]
                pt-[2rem] ">
						Price
					</label>
					<input
						min="0"
						onChange={handleChange}
						required
						value={price}
						type="number"
						id="price"
						className=" h-[2.25rem] outline-none 
                  text-blue-20 rounded-[0.25rem] font-[600] text-[1.3rem] tracking-wide px-[1rem] 
                  ring-2 ring-blue-500"
					/>
					{/* quantity */}
					<label
						htmlFor="quantity"
						className="font-bold leading-[1rem] tracking-[0.02rem] text-[1.2rem] mb-[0.5rem]
                pt-[2rem] ">
						Quantity
					</label>
					<input
						min="0"
						onChange={handleChange}
						required
						value={quantity}
						type="number"
						id="quantity"
						className=" h-[2.25rem] outline-none 
                  text-blue-20 rounded-[0.25rem] font-[600] text-[1.3rem] tracking-wide px-[1rem] 
                  ring-2 ring-blue-500"
					/>
					<label
						htmlFor="images"
						className="font-bold leading-[1rem] tracking-[0.02rem] text-[1.2rem] mb-[0.5rem]
                  pt-[2rem] ">
						Add Images
					</label>
					<input
						onChange={handleChange}
						type="file"
						accept="image/png"
						id="images"
						className="hidden"
						ref={hiddenInput}
					/>
					<button
						type="button"
						onClick={() => hiddenInput.current.click()}
						className="blue-btn px-[1rem] py-[0.4rem] my-[2rem]">
						Upload
					</button>

					{/*......................................
                  *ACTION BTNS
               ......................................*/}
					<div className="flex flex-row justify-between mt-[2rem] text-white text-[1.2rem]">
						<button
							disabled={images?.length < 1 || load}
							type="submit"
							className="blue-btn px-[1rem] py-[0.4rem] bg-blue-20 rounded-md">
							Submit
						</button>
						<button
							type="button"
							onClick={() => setOpenProduct(false)}
							className=" blue-btn bg-red-20 px-[1.7rem] py-[0.4rem] hover:bg-red-500
                      rounded-md ">
							Close
						</button>
					</div>
				</div>

				{/* 2nd col */}
				<div className="hidden lg:flex flex-col w-[80vw] lg:w-full md:py-[4rem] ">
					{/* images */}
					<div className="hidden lg:flex lg:flex-row flex-wrap gap-[2rem] lg:max-h-[59vh]
                overflow-y-scroll">
						{images?.map((img: any, key: number) => (
							<img
								src={img}
								alt=""
								key={key}
								className="h-[6rem] mx-[1.4rem]"
							/>
						))}
					</div>

					<div className="fixed">{renderSpinner(load)}</div>
				</div>
			</form>
		</div>
	);
};

export default AddProduct;
