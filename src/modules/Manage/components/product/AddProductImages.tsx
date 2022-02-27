import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import useSpinner from "shared/components/spinner/useSpinner";
import useAddShop from "../../Hooks/product/useAddProduct";

const AddProductImages = () => {
	const { handleChange, load, images, removeImg, addProductImages } =
		useAddShop();
	const hiddenInput = useRef<any>(null);
	const { renderSpinner } = useSpinner();
	const { productId } = useParams<string>();
	return (
		<div className="flex flex-col-reverse">
			<div className="flex flex-row space-x-10">
				<input
					onChange={handleChange}
					type="file"
					accept="image/*"
					id="images"
					className="hidden"
					ref={hiddenInput}
				/>
				<button
					type="button"
					onClick={() => hiddenInput.current.click()}
					className="blue-btn px-[1rem] py-[0.4rem]">
					Upload
				</button>
				{renderSpinner(load)}
				<button
					disabled={images?.length < 1}
					type="button"
					onClick={()=>addProductImages(productId)}
					className=" blue-btn bg-red-20 px-[1rem] py-[0.4rem] hover:bg-red-500
                  rounded-md h-12">
					Submit
				</button>
			</div>

			{/* images */}
			<div
				className="flex flex-row flex-wrap gap-[2rem] max-h-[60vh] md:max-h-[38vh] md:h-[40vh]
                lg:max-h-[59vh]  overflow-y-scroll">
				{images?.map((img: any, key: number) => (
					<div className="relative flex flex-col" key={key}>
						<img
							src={img}
							alt=""
							key={key}
							className="h-[6rem] w-[4rem] lg:w-[8rem] mx-[1.4rem] object-contain cursor-pointer"
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
	);
};

export default AddProductImages;
