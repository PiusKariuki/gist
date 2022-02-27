import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef } from "react";
import useEdit from "../../Hooks/product/useEdit";
import { productOpen } from "../../store/store";
import { useRecoilValue, useSetRecoilState } from "recoil";
import useSpinner from "shared/components/spinner/useSpinner";
import { imgUrl } from "shared/http/Http";

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
      description,
	} = useEdit();

	const { renderSpinner } = useSpinner();
	const hiddenInput = useRef<any>(null);
	const handleClick = () => {
		hiddenInput.current.click();
	};

	useEffect(() => {
		getProductById(productId);
	}, []);

	const setOpen = useSetRecoilState(productOpen);
	const open = useRecoilValue(productOpen);
	return (
		<div className="flex flex-col py-[3rem] px-[2rem] md:px-[4rem]">
			<form
         autoComplete="off"
				onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
					editProductById(e, productId);
				}}
				className="flex flex-col lg:flex-row w-[80vw] md:w-[70vw] space-[2rem] ">
				{renderSpinner(load)}
				<div className="flex w-full flex-col">
					{/*......................................
               *PRODUCT NAME &  PRODUCT PRICE
            ......................................*/}

					<div className="flex flex-col w-full  md:pr-[1.5rem]">
						<label
							htmlFor="name"
							className="font-bold leading-[1rem] tracking-[0.02rem] text-[1.2rem] 
                     mb-[0.5rem]  pt-[2rem] ">
							Product name
						</label>
						<input
							onChange={handleChange}
							required
							value={name}
							type="text"
							id="name"
							className=" h-[2.25rem] outline-none 
                     text-blue-20 rounded-[0.25rem] font-[600] text-[1.3rem] tracking-wide
                     px-[1rem] ring-2 ring-blue-500"
						/>
					</div>
					<div className="flex flex-col w-full  md:pr-[1.5rem]">
						<label
							htmlFor="price"
							className="font-bold leading-[1rem] tracking-[0.02rem] text-[1.2rem] 
                     mb-[0.5rem] pt-[2rem] ">
							Price
						</label>
						<input
							onChange={handleChange}
							required
							value={price}
							type="number"
							id="price"
							className=" h-[2.25rem] outline-none
                     text-blue-20 rounded-[0.25rem] font-[600] text-[1.3rem] tracking-wide
                     px-[1rem] ring-2 ring-blue-500"
						/>
					</div>
					{/*......................................
               *PRODUCT Quantity
            ......................................*/}

					<div className="flex flex-col w-full  md:pr-[1.5rem]">
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
							className=" h-[2.25rem] outline-none 
                  text-blue-20 rounded-[0.25rem] font-[600] text-[1.3rem] tracking-wide px-[1rem] 
                  ring-2 ring-blue-500"
						/>
					</div>
					{/*......................................
               *PRODUCT DESCRIPTION
            ......................................*/}

					<div className="flex flex-col w-full  md:pr-[1.5rem]">
						<label
							htmlFor="desc"
							className="font-bold leading-[1rem] tracking-[0.02rem] text-[1.2rem] mb-[0.5rem]
                  pt-[2rem] ">
							Description
						</label>
						<textarea
							onChange={handleChange}
							required
							value={description}
							id="desc"
							rows={3}
							className=" outline-none 
                  text-blue-20 rounded-[0.25rem] font-[600] text-[1.3rem] tracking-wide px-[1rem] 
                  ring-2 ring-blue-500"
						/>
					</div>
					{/*......................................
               *PRODUCT IMAGES AND  INPUT BTN
            ......................................*/}
					<div
						className="flex flex-col md:flex-row flex-nowrap w-full md:space-x-[3rem]
               my-[2rem]">
						<div className="flex flex-col w-full">
							<input
								ref={hiddenInput}
								onChange={handleChange}
								// required
								type="file"
								id="images"
								className="hidden"
								accept="image/*"
							/>
							{/* <button
								type="button"
								onClick={handleClick}
								className="bg-blue-20 px-[2rem] py-[0.5rem] rounded-lg text-white
                     text-[1.2rem] font-bold">
								Change images
							</button> */}
						</div>

						<div className="flex flex-row flex-nowrap w-full">
							{images?.map((img: any, key: number) => (
								<img
									src={img}
									alt=""
									key={key}
									className="w-[5rem] rounded-md"
								/>
							))}
						</div>
					</div>
					{/*......................................
               *ACTION BTNS
            ......................................*/}
					<div
						className="flex flex-row flex-nowrap w-full md:space-x-[3rem]
               my-[2rem]">
						<div className="flex  w-full">
							<button
								type="submit"
								className="px-[3rem] py-[0.6rem] bg-blue-20 rounded-md  text-white font-bold">
								Submit
							</button>
						</div>
						<div className="flex w-full">
							<button
								type="button"
								onClick={() => {
									clearAttributes();
									setOpen((prev: boolean) => !prev);
								}}
								className="px-[3rem] py-[0.6rem] bg-red-20 rounded-md text-white font-bold">
								Close
							</button>
						</div>
					</div>
				</div>
				{/*......................................
               *IMAGES
            ......................................*/}
				<div className="flex flex-col w-full lg:py-[4rem]">
					<div
						className="hidden lg:flex lg:flex-row flex-wrap gap-[2rem] lg:max-h-[59vh]
                overflow-y-scroll">
						{images?.map((img: any, key: number) => (
							<div className="relative flex flex-col" key={key}>
								<img
									src={`${imgUrl}/${img}`}
									alt={img}
									key={key}
									className="h-[6rem] w-[8rem] mx-[1.4rem] object-contain"
								/>
								<FontAwesomeIcon
									icon={faTrash}
									size="1x"
									color="#F74356"
									onClick={() => {
										removeImg(key);
									}}
									className="absolute top-[10%] right-[40%]"
								/>
							</div>
						))}
					</div>
				</div>
			</form>
		</div>
	);
};

export default EditProductForm;
