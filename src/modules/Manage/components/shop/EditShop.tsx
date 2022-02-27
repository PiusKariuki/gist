import React, { useEffect, useRef } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import useSpinner from "shared/components/spinner/useSpinner";
import useEditShop from "../../Hooks/shop/useEditShop";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import useShop from "../../Hooks/shop/useShop";

const EditShop: React.FC = () => {
	const {
		shopName,
		email,
		location,
		desc,
		img,
		phone,
		handleChange,
		handlePhoneChange,
		mailError,
		load,
		updateShop,
		getShopById,
		setImg,
	} = useEditShop();

	const { getShopsByUserId } = useShop();

	let navigate = useNavigate();
	const { renderSpinner } = useSpinner();
	const hiddenInput = useRef<any>(null);

	const handleClick = () => {
		hiddenInput.current.click();
	};
	let { shopId } = useParams<string>();

	useEffect(() => {
		getShopById(shopId);
		getShopsByUserId();
	}, []);
	{
		/*......................................
      *fetch shops after updates
   ......................................*/
	}
	useEffect(() => {
		getShopsByUserId();
	}, [updateShop]);

	return (
		<div className="flex flex-col rounded-2xl px-[1rem] py-[3rem]  relative">
			<div className="px-[2rem]">{renderSpinner(load)}</div>
			<form
				onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
					updateShop(e, shopId);
				}}
				className="flex flex-col md:flex-row gap-y-[0.5rem] md:space-x-10">
				<div className=" flex flex-col w-full md:w-[45%]">
					{/* shop Name */}
					<label
						htmlFor="shopName"
						className="font-bold leading-[1rem] tracking-[0.02rem] text-[1.2rem]
                     mb-[0.5rem] ">
						Shop Name
					</label>
					<input
						onChange={handleChange}
						value={shopName}
						required
						type="text"
						id="shopName"
						className=" h-[2.25rem] outline-none 
                     text-blue-20 rounded-[0.25rem] font-[600] text-[1.3rem] tracking-wide px-[1rem] 
                     ring-2 ring-blue-500"
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
						className=" h-[2.25rem] outline-none 
                  text-blue-20 rounded-[0.25rem] font-[600] text-[1.3rem] tracking-wide px-[1rem] 
                 ring-2 ring-blue-500"
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
						className=" h-[2.25rem] outline-none
                     text-blue-20 rounded-[0.25rem] font-[600] text-[1.3rem] tracking-wide px-[1rem] 
                     ring-2 ring-blue-500"
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
						required={true}
						onChange={handlePhoneChange}
						className="h-[2.25rem] outline-none 
                     text-blue-20 border-0 text-[1.3rem] tracking-wider
                     rounded-[0.25rem]  font-[900] px-[1rem] ring-2 ring-blue-500"
					/>
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
						className=" outline-none text-blue-20
                     rounded-[0.25rem] font-[600] text-[1.3rem] tracking-wide px-[1rem] 
                     ring-2 ring-blue-500"
					/>
				</div>

				{/* second col */}
				<div className="flex flex-col-reverse w-full md:w-[45%] gap-y-[2rem] ">
					{/* button */}
					<div
						className="flex w-full flex-row gap-x-[3rem] lg:gap-x-60 order-1 
                  md:justify-between">
						<button
							type="submit"
							disabled={mailError.length > 0 || load || img.length < 1}
							className="bg-blue-20  px-[2rem] py-[0.5rem]  rounded-lg self-center text-white
                     text-[1rem] font-[700] disabled:bg-gray-400">
							Submit
						</button>
						<button
							onClick={() => {
								navigate(`/myAccount/shops/`);
								getShopsByUserId();
							}}
							type="button"
							className="bg-red-20 px-[2rem] py-[0.5rem] rounded-lg
                      text-white text-[1rem] font-[700]  disabled:bg-gray-400">
							Back
						</button>
					</div>

					{img.length > 0 ? (
						<div className="flex relative  order-3">
							<img
								src={img}
								className=" flex  max-h-[14rem] md:max-h-[25rem] lg:max-h-[25rem] w-full 
                        object-contain order-3"
							/>
							<FontAwesomeIcon
								onClick={() => setImg("")}
								icon={faTrash}
								size="3x"
								className="absolute top-[50%] left-[50%] opacity-90 text-red-500
                        bg-gray-50 trans"
							/>
						</div>
					) : (
						<button
							type="button"
							className="bg-blue-500 self-center w-full px-[1rem] py-[0.4rem]
                     mt-auto rounded-md font-[600] text-white order-3"
							onClick={handleClick}>
							Upload profile photo
						</button>
					)}
					<input
						onChange={handleChange}
						required
						ref={hiddenInput}
						type="file"
						id="img"
						accept="image/*"
						className="hidden"
					/>
				</div>
			</form>
		</div>
	);
};

export default EditShop;
