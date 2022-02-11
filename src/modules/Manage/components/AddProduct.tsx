import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useRef } from "react";
import useAddShop from "../Hooks/useAddProduct";

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
	const [displayImgs, setDisplayImags] = useState<any>([]);
	const hiddenInput = useRef<any>(null);
	return (
		<div
			className={`${
				openProduct ? "flex flex-col items-center mb-[4rem]" : "hidden"
			}`}>
			<form
				className="flex flex-col md:flex-row md:justify-around gap-x-[8rem]"
				onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
					addProduct(e, shopId);
               // setOpenProduct(false);
				}}>
				<div className="flex flex-col  w-[80vw] md:w-[30vw]">
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
						className="border-[0.0625rem] border-black-70 h-[2.25rem] outline-none 
                  text-blue-20 rounded-[0.25rem] font-[600] text-[1.3rem] tracking-wide px-[1rem] 
                  focus:ring-2 focus:ring-blue-500"
					/>
					{/* price */}
					<label
						htmlFor="price"
						className="font-bold leading-[1rem] tracking-[0.02rem] text-[1.2rem] mb-[0.5rem]
                pt-[2rem] ">
						Price
					</label>
					<input
						onChange={handleChange}
						required
						value={price}
						type="number"
						id="price"
						className="border-[0.0625rem] border-black-70 h-[2.25rem] outline-none 
                  text-blue-20 rounded-[0.25rem] font-[600] text-[1.3rem] tracking-wide px-[1rem] 
                  focus:ring-2 focus:ring-blue-500"
					/>
					{/* quantity */}
					<label
						htmlFor="quantity"
						className="font-bold leading-[1rem] tracking-[0.02rem] text-[1.2rem] mb-[0.5rem]
                pt-[2rem] ">
						Quantity
					</label>
					<input
						onChange={handleChange}
						required
						value={quantity}
						type="number"
						id="quantity"
						className="border-[0.0625rem] border-black-70 h-[2.25rem] outline-none 
                  text-blue-20 rounded-[0.25rem] font-[600] text-[1.3rem] tracking-wide px-[1rem] 
                  focus:ring-2 focus:ring-blue-500"
					/>
					<label
						htmlFor="images"
						className="font-bold leading-[1rem] tracking-[0.02rem] text-[1.2rem] mb-[0.5rem]
                  pt-[2rem] ">
						Add Images
					</label>
					<input
						onChange={handleChange}
						// required
						type="file"
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
				</div>

				{/* 2nd col */}
				<div className="flex flex-col w-[80vw] md:w-[30vw]">
					{/* images */}
					<div className="hidden md:flex md:flex-row">
						{images?.map((img: any, key: number) => (
							<div className="relative flex flex-col" key={key}>
								<img
									src={img}
									alt=""
									key={key}
									className="h-[5rem] mx-[1.4rem]"
								/>
								<FontAwesomeIcon
									icon={faTrash}
									size="2x"
									color="#F74356"
									onClick={() => {
										removeImg(key);
									}}
									className="absolute bottom-[-40%] right-[40%]"
								/>
							</div>
						))}
					</div>

					<div className="flex flex-row justify-around mt-auto text-white">
						<button
							disabled={images?.length < 1 || load}
							type="submit"
							className="blue-btn px-[1rem] py-[0.4rem] bg-blue-20 rounded-md">
							Submit
						</button>
						<button
							type="button"
							onClick={() => setOpenProduct(false)}
							className="px-[1rem] py-[0.4rem] bg-red-20 rounded-md">
							Close
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default AddProduct;
