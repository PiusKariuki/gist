import React, { useEffect, useRef } from "react";
import PhoneInput from "react-phone-number-input";
import "shared/styles/phoneInput.css";
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
	// useEffect(() => {
	// 	getShopsByUserId();
	// }, [updateShop]);

	return (
		<div className="flex flex-col rounded-2xl px-[1rem] py-[3rem]  relative">
			<form
				autoComplete="off"
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
						autoComplete="off"
						onChange={handleChange}
						value={shopName}
						required
						type="text"
						id="shopName"
						className=" h-[2.25rem] outline-none 
                     text-blue-20 rounded-[0.25rem] font-[600] text-[1.3rem] tracking-wide px-[1rem] 
                     form-ring"
					/>
					{/* location */}
					<label
						htmlFor="location"
						className="font-bold leading-[1rem] tracking-[0.02rem] text-[1.2rem] mb-[0.5rem]
                pt-[2rem] ">
						Location
					</label>
					<input
						autoComplete="off"
						onChange={handleChange}
						required
						value={location}
						type="text"
						id="location"
						className=" h-[2.25rem] outline-none 
                  text-blue-20 rounded-[0.25rem] font-[600] text-[1.3rem] tracking-wide px-[1rem] 
                 form-ring"
					/>
					{/* shop email */}
					<label
						htmlFor="email"
						className="font-bold leading-[1rem] tracking-[0.02rem] text-[1.2rem] mb-[0.5rem]
                   pt-[2rem] ">
						Shop email
					</label>
					<input
						autoComplete="off"
						onChange={handleChange}
						value={email}
						required
						type="text"
						id="email"
						className=" h-[2.25rem] outline-none
                     text-blue-20 rounded-[0.25rem] font-[600] text-[1.3rem] tracking-wide px-[1rem] 
                     form-ring"
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
						autoComplete="off"
						country={"us"}
						value={phone}
						required={true}
						onChange={handlePhoneChange}
						className="h-[2.25rem] outline-none text-blue-20 border-0 text-[1.3rem]
                  tracking-wider rounded-[0.25rem]  font-[900] px-[1rem] form-ring"
					/>
					{/* text area */}
					<label
						htmlFor="desc"
						className="font-bold leading-[1rem] tracking-[0.02rem] text-[1.2rem] mb-[0.5rem]
                   pt-[2rem] ">
						Description
					</label>
					<textarea
						autoComplete="off"
						onChange={handleChange}
						value={desc}
						required
						rows={5}
						cols={50}
						id="desc"
						className=" outline-none text-blue-20
                     rounded-[0.25rem] font-[600] text-[1.3rem] tracking-wide px-[1rem] 
                     form-ring"
					/>
				</div>

				{/* second col */}
				<div className="flex flex-col-reverse w-full md:w-[45%] gap-y-[2rem] ">
					{/* button */}
					<div
						className="flex w-full flex-row gap-x-[1rem] lg:gap-x-40 order-1 
               ">
						<button
							type="submit"
							disabled={load}
							className="bg-blue-20  px-[2rem] py-[0.5rem]  rounded-lg self-center text-white
                     text-[1rem] font-[700] disabled:bg-gray-400">
							Update
						</button>
						{renderSpinner(load)}
					</div>

					{img.length > 0 ? (
						<div className="flex relative  order-3">
							<img
								src={img}
								className=" flex  max-h-[14rem] md:max-h-[25rem] lg:max-h-[25rem] w-full 
                        object-cover order-3 border-2 rounded-xl"
							/>
							<FontAwesomeIcon
								onClick={() => setImg("")}
								icon={faTrash}
								size="2x"
								className="absolute bottom-[0%] right-[0%] opacity-90 text-red-500
                        trans"
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
