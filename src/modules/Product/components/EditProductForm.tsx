import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import useEdit from "../hooks/useEdit";
import { productOpen } from "../store/store";
import { useRecoilValue, useSetRecoilState } from "recoil";

interface Props {
	productId: string;
}

const EditProductForm: React.FC<Props> = ({ productId }) => {
	const {
		getProductById,
		editProductById,
		removeImg,
		clearAttributes,
		name,
		quantity,
		price,
		images,
		load,
		handleChange,
	} = useEdit();
	const setOpen = useSetRecoilState(productOpen);
   const open = useRecoilValue(productOpen);
	return (
		<form
			className="flex flex-col md:flex-row md:justify-around gap-x-[8rem] bg-gray-300 w-screen 
         px-[2rem] py-[4rem] z-50"
			onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
				editProductById(e, productId);
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
			</div>
			{/* 2nd col */}
			<div className="flex flex-col w-[80vw] md:w-[30vw]">
				{/* images */}
				<div className="hidden md:flex md:flex-row">
					{images?.map((img: any, key: number) => (
						<div className="relative" key={key}>
							<img src={img} alt="" key={key} className="h-[5rem] rounded-md" />
							<FontAwesomeIcon
								icon={faTrash}
								size="2x"
								color="black"
								onClick={() => {
									removeImg(key);
								}}
								className="absolute bottom-0 right-0"
							/>
						</div>
					))}
				</div>
				<label
					htmlFor="images"
					className="font-bold leading-[1rem] tracking-[0.02rem] text-[1.2rem] mb-[0.5rem]
                  pt-[2rem] ">
					Add Images
				</label>
				<input
					onChange={handleChange}
					required
					type="file"
					id="images"
					className="border-[0.0625rem] border-black-70 h-[2.25rem] outline-none 
                  text-blue-20 rounded-[0.25rem] font-[600] text-[1.3rem] tracking-wide px-[1rem] 
                  focus:ring-2 focus:ring-blue-500"
				/>
				<div className="flex flex-row justify-around my-[4rem] text-white">
					<button type="submit" className="p-[1rem] bg-blue-20 rounded-md">
						Submit
					</button>
					<button
						type="button"
						onClick={() => {
                     console.log(open);
                     
                     setOpen((prev: boolean) => !prev);
                  }}
						className="p-[1rem] bg-red-20 rounded-md">
						Close
					</button>
				</div>
			</div>
		</form>
	);
};

export default EditProductForm;
