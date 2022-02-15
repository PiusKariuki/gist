import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import useSpinner from "shared/components/spinner/useSpinner";
import useEditShop from "../../Hooks/shop/useEditShop";
import useAddProduct from "../../Hooks/product/useAddProduct";
import AddProduct from "../product/AddProduct";

interface Props {
	open: boolean;
	shopId: string;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditShopModal: React.FC<Props> = ({ open, shopId, setOpen }) => {
	const {
		shopName,
		email,
		location,
		desc,
		img,
		phone,
		handleChange,
		handlePhoneChange,
		phoneErr,
		mailError,
		load,
		updateShop,
		getShopById,
	} = useEditShop();

	const { openProduct, setOpenProduct } = useAddProduct();

	const { renderSpinner } = useSpinner();
	const hiddenInput = useRef<any>(null);

	const handleClick = () => {
		hiddenInput.current.click();
	};

	useEffect(() => {
		getShopById(shopId);
	}, [open]);
	return (
		<div
			className={`${
				open
					? "flex flex-col rounded-2xl py-[6rem] w-[100vw] relative"
					: "hidden"
			}`}>
			<div className="px-[2rem]">{renderSpinner(load)}</div>
			<button
				onClick={() => setOpenProduct((prev: boolean) => !prev)}
				className="bg-blue-20 text-white px-[1rem] py-[0.5rem] w-[10rem] self-center rounded-md
            my-[4rem] fixed top-0 right-6">
				{openProduct ? "Edit shop" : "Add Product"}
			</button>
			{!openProduct ? (
				<form
					onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
						updateShop(e, shopId);
						// setOpen(false);
					}}
					className="flex flex-col lg:flex-row px-[2rem] gap-y-[0.5rem]  items-center
            md:px-[12rem] md:justify-around lg:px-[4rem] ">
					<div className=" flex flex-col w-full lg:max-w-[25%]">
						{/* shop Name */}
						<label
							htmlFor="shopName"
							className="font-bold leading-[1rem] tracking-[0.02rem] text-[1.2rem] mb-[0.5rem]
                mt-[2rem] ">
							Shop Name
						</label>
						<input
							onChange={handleChange}
							value={shopName}
							required
							type="text"
							id="shopName"
							className="border-[0.0625rem] border-black-70 h-[2.25rem] outline-none 
                  text-blue-20 rounded-[0.25rem] font-[600] text-[1.3rem] tracking-wide px-[1rem] 
                  focus:ring-2 focus:ring-blue-500"
						/>
						{/* location */}
						<label
							htmlFor="location"
							className="font-bold leading-[1rem] tracking-[0.02rem] text-[1.2rem] mb-[0.5rem]
                pt-[2rem] ">
							Location
						</label>
						<input
							onChange={handleChange}
							required
							value={location}
							type="text"
							id="location"
							className="border-[0.0625rem] border-black-70 h-[2.25rem] outline-none 
                  text-blue-20 rounded-[0.25rem] font-[600] text-[1.3rem] tracking-wide px-[1rem] 
                  focus:ring-2 focus:ring-blue-500"
						/>
						{/* shop email */}
						<label
							htmlFor="email"
							className="font-bold leading-[1rem] tracking-[0.02rem] text-[1.2rem] mb-[0.5rem]
                   pt-[2rem] ">
							Shop email
						</label>
						<input
							onChange={handleChange}
							value={email}
							required
							type="text"
							id="email"
							className="border-[0.0625rem] border-black-70 h-[2.25rem] outline-none
                  text-blue-20 rounded-[0.25rem] font-[600] text-[1.3rem] tracking-wide px-[1rem] 
                  focus:ring-2 focus:ring-blue-500"
						/>
						<p className="text-red-20">{mailError}</p>
						{/* Phone Number */}
						<label
							htmlFor="phone"
							className="font-bold leading-[1rem] tracking-[0.02rem] text-[1.2rem] mb-[0.5rem]
                  pt-[2rem] ">
							Shop Telephone
						</label>
						<PhoneInput
							country={"us"}
							value={phone}
							onChange={handlePhoneChange}
							inputProps={{
								required: true,
							}}
							inputStyle={{ width: "14rem" }}
						/>
						<p className="text-red-20">{phoneErr}</p>
						{/* text area */}
						<label
							htmlFor="desc"
							className="font-bold leading-[1rem] tracking-[0.02rem] text-[1.2rem] mb-[0.5rem]
                   pt-[2rem] ">
							Description
						</label>
						<textarea
							onChange={handleChange}
							value={desc}
							required
							rows={5}
							cols={50}
							id="desc"
							className="border-[0.0625rem] border-black-70 outline-none text-blue-20
                  rounded-[0.25rem] font-[600] text-[1.3rem] tracking-wide px-[1rem] 
                  focus:ring-2 focus:ring-blue-500 "
						/>


                  
					</div>

					{/* second col */}
					<div className="flex flex-col">
						<img src={img} alt="" className="hidden md:flex w-[16rem]" />
						{/* img */}

						<input
							onChange={(e) => {
								handleChange(e);
							}}
							ref={hiddenInput}
							type="file"
							id="img"
							accept="image/png"
							className="hidden"
						/>
						<button
							type="button"
							className="blue-btn px-[1rem] py-[0.4rem] my-[3rem]"
							onClick={handleClick}>
							Upload Image
						</button>
						<div className="flex flex-row justify-between gap-x-[3rem]">
							<button
								type="submit"
								disabled={
									mailError.length > 0 ||
									load ||
									phoneErr.length > 0 ||
									phone.length < 3
								}
								className="bg-blue-20 px-[1rem] py-[0.5rem] w-[6rem] rounded-lg
                     self-center text-white text-[1rem] font-[700] mt-[4rem] disabled:bg-gray-400">
								Submit
							</button>

							<button
								type="button"
								onClick={() => setOpen(false)}
								className="bg-red-20 px-[1rem] py-[0.5rem] w-[6rem] rounded-lg
                     self-center text-white text-[1rem] font-[700] mt-[4rem] disabled:bg-gray-400">
								Close
							</button>
						</div>
					</div>
				</form>
			) : (
				<AddProduct
					openProduct={openProduct}
					setOpenProduct={setOpenProduct}
					shopId={shopId}
				/>
			)}
		</div>
	);
};

export default EditShopModal;