import React from "react";
import {  useParams } from "react-router-dom";
import useSpinner from "shared/components/spinner/useSpinner";
import useAddProduct from "../../Hooks/product/useAddProduct";

const AddProduct: React.FC = () => {
	const {
		name,
		price,
		quantity,
		handleChange,
		addProduct,
		load,
		desc,
	} = useAddProduct();
	let { shopId } = useParams<string>();
	const { renderSpinner } = useSpinner();
	return (
		<form
			autoComplete="off"
			name="addProduct"
			className="flex flex-col gap-x-[8rem] lg:px-[3rem] lg:w-full"
			onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
				addProduct(e, shopId);
			}}>
			<p className="text-[1.4rem] md:text-[1.8rem] text-gray-20 font-[700]">
				New Product
			</p>
			{/*......................................
               *NAME AND PRICE
            ......................................*/}
			<div className="flex flex-col md:flex-row md:space-x-10">
				<div className="flex flex-col w-full">
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
						className=" h-[2.25rem] outline-none w-full
                  text-blue-20 rounded-[0.25rem] font-[600] text-[1.3rem] tracking-wide px-[1rem] 
                  ring-2 ring-blue-500"
					/>
				</div>
				<div className="flex flex-col w-full">
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
				</div>
			</div>
			{/*......................................
               * QUANTITY AND DESCRIPTION
            ......................................*/}
			<div className="flex flex-col md:flex-row md:space-x-10">
				<div className="flex flex-col w-full">
					{/* description */}
					<label
						htmlFor="quantity"
						className="font-bold leading-[1rem] tracking-[0.02rem] text-[1.2rem] mb-[0.5rem]
                pt-[2rem] ">
						Description
					</label>
					<textarea
						onChange={handleChange}
						required
						rows={3}
						value={desc}
						id="desc"
						className="  outline-none 
                  text-blue-20 rounded-[0.25rem] font-[600] text-[1.3rem] tracking-wide px-[1rem] 
                  ring-2 ring-blue-500"
					/>
				</div>
				<div className="flex flex-col w-full">
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
				</div>
			</div>

			{/*......................................
                  *ACTION BTNS
               ......................................*/}
			<div className="flex flex-row space-x-6  mt-[2rem] text-white text-[1.2rem]">
				<button
					disabled={load}
					type="submit"
					className="blue-btn px-[1rem] py-[0.4rem] bg-blue-20 rounded-md h-12">
					Continue
				</button>
				{renderSpinner(load)}
			</div>
		</form>
	);
};

export default AddProduct;
