import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useSpinner from "shared/components/spinner/useSpinner";
import useAddProduct from "../../Hooks/product/useAddProduct";

const AddProduct: React.FC = () => {
	const { name, price, quantity, handleChange, addProduct, load, desc,variations } =
		useAddProduct();
	let { shopId } = useParams<string>();
	const { renderSpinner } = useSpinner();
   let navigate = useNavigate();
	return (
		<form
			autoComplete="off"
			name="addProduct"
			className="flex flex-col gap-x-[8rem] px-[1rem] py-[3rem] lg:w-full relative"
			onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
				addProduct(e, shopId);
			}}>
			<FontAwesomeIcon
				icon={faCircleArrowLeft}
				onClick={() => navigate(`/myAccount/shops`)}
				className="back"
			/>
			<p className="text-[1.4rem] md:text-[1.8rem] text-gray-20 font-[700]">
				New Product
			</p>
			{/*......................................
               *NAME AND PRICE
            ......................................*/}
			<div className="flex flex-col md:flex-row md:space-x-10">
				<div className="flex flex-col w-full">
					{/* name */}
					<label htmlFor="name" className="labels">
						Product name
					</label>
					<input
						onChange={handleChange}
						required
						autoFocus
						value={name}
						type="text"
						id="name"
						className=" inputs"
					/>
				</div>
				<div className="flex flex-col w-full">
					{/* price */}
					<label htmlFor="price" className="labels">
						Price(GC.)
					</label>
					<input
						min="0"
						onChange={handleChange}
						required
						value={price}
						type="number"
						id="price"
						className="inputs"
					/>
				</div>
			</div>
			{/*......................................
               * QUANTITY AND DESCRIPTION
            ......................................*/}
			<div className="flex flex-col md:flex-row md:space-x-10">
				<div className="flex flex-col w-full">
					{/* description */}
					<label htmlFor="quantity" className="labels">
						Description
					</label>
					<textarea
						onChange={handleChange}
						required
						rows={3}
						value={desc}
						id="desc"
						className="textarea"
					/>
				</div>
				<div className="flex flex-col w-full">
					{/* quantity */}
					<label htmlFor="quantity" className="labels">
						Quantity
					</label>
					<input
						min="0"
						onChange={handleChange}
						required
						value={quantity}
						type="number"
						id="quantity"
						className="inputs"
					/>
				</div>
			</div>
			{/*......................................
               * VARIATIONS
            ......................................*/}
			<div className="flex flex-col md:flex-row md:space-x-10">
				<div className="flex flex-col w-full">
					{/* description */}
					<label htmlFor="variations" className="labels">
						Variations
					</label>
					<input
						onChange={handleChange}
						required
						value={variations}
						id="variations"
						className="inputs"
					/>
				</div>
				<div className="flex flex-col w-full"></div>
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
