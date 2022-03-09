import React, { useEffect, useRef } from "react";
import useEdit from "../../Hooks/product/useEdit";
import useSpinner from "shared/components/spinner/useSpinner";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { imgUrl } from "shared/http/Http";

const EditProduct: React.FC = () => {
	const {
		getProductById,
		editProductById,
		name,
		quantity,
		price,
		load,
		handleChange,
		description,
		images,
		removeImg,
	} = useEdit();

	let { productId } = useParams();
	const { renderSpinner } = useSpinner();
	const hiddenInput = useRef<any>(null);
	const handleClick = () => {
		hiddenInput.current.click();
	};

	useEffect(() => {
		getProductById(productId);
	}, []);

	return (
		<form
			autoComplete="off"
			onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
				editProductById(e, productId);
			}}
			className="flex flex-col w-full px-[0.5rem]  py-[2rem] md:px-[2rem] space-y-5 relative">
			{/*......................................
            *NAME AND PRICE
         ......................................*/}
			<div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-10">
				<div className="flex flex-col w-full">
					<label
						htmlFor="name"
						className="font-bold leading-[1rem] tracking-[0.02rem] text-[1.2rem] 
                     mb-[0.5rem]  ">
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
                     px-[1rem] form-ring"
					/>
				</div>
				<div className="flex flex-col w-full">
					<label
						htmlFor="price"
						className="font-bold leading-[1rem] tracking-[0.02rem] text-[1.2rem] 
                     mb-[0.5rem]  ">
						Price(GC.)
					</label>
					<input
						onChange={handleChange}
						required
						value={price}
						type="number"
						id="price"
						className=" h-[2.25rem] outline-none
                     text-blue-20 rounded-[0.25rem] font-[600] text-[1.3rem] tracking-wide
                     px-[1rem] form-ring"
					/>
				</div>
			</div>
			{/*......................................
            *DESC AND QUANTITY
         ......................................*/}
			<div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-10">
				<div className="flex flex-col w-full">
					<label
						htmlFor="desc"
						className="font-bold leading-[1rem] tracking-[0.02rem] text-[1.2rem] mb-[0.5rem]
                   ">
						Description
					</label>
					<textarea
						onChange={handleChange}
						value={description}
						id="desc"
						rows={3}
						className=" outline-none 
                  text-blue-20 rounded-[0.25rem] font-[600] text-[1.3rem] tracking-wide px-[1rem] 
                  form-ring"
					/>
				</div>
				<div className="flex flex-col w-full">
					<label
						htmlFor="quantity"
						className="font-bold leading-[1rem] tracking-[0.02rem] text-[1.2rem] mb-[0.5rem]
                  ">
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
                  form-ring"
					/>
				</div>
			</div>

			{/*......................................
            *IMAGES
         ......................................*/}
			<div className="flex flex-col md:flex-row  md:space-x-10">
				{/* upload btn  and hidden input*/}
				<div className="flex flex-col w-full">
					<input
						ref={hiddenInput}
						onChange={handleChange}
						type="file"
						id="images"
						className="hidden"
						accept="image/*"
					/>
					<button
						type="button"
						onClick={handleClick}
						className="bg-blue-20 px-[1rem] py-[0.2rem] rounded-lg text-white w-full md:w-[40%]
                     text-[1.2rem] font-bold">
						Add Images
					</button>
				</div>
				{/* IMAGES */}
				<div className="flex flex-row flex-wrap w-full">
					{images?.map((img: any, key: number) => (
						<div className="relative flex flex-col" key={key}>
							{img.length > 60 ? (
								<img
									src={img}
									alt=""
									key={key}
									className="h-[6rem] w-[4rem] lg:w-[8rem] mx-[1.4rem] object-contain
                            cursor-pointer"
								/>
							) : (
								<img
									src={`${imgUrl}/${img}`}
									alt={img}
									key={key}
									className="h-[6rem] w-[4rem] lg:w-[8rem] mx-[1.4rem] object-contain
                            cursor-pointer"
								/>
							)}

							<FontAwesomeIcon
								icon={faTrash}
								size="1x"
								color="#F74356"
								onClick={() => {
									removeImg(key);
								}}
								className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50]
                        z-20"
							/>
						</div>
					))}
				</div>
			</div>

			<div className="flex flex-col w-full md:w-[50%]">
				{renderSpinner(load)}
				<button
					type="submit"
					className="px-[3rem] py-[0.6rem] bg-blue-20 rounded-md  text-white font-bold">
					Update
				</button>
			</div>
		</form>
	);
};

export default EditProduct;
