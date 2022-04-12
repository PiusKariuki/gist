import React, { useEffect, useRef, useState } from "react";
import PhoneInput from "react-phone-number-input";
import "shared/styles/phoneInput.css";
import useSpinner from "shared/components/spinner/useSpinner";
import useEditShop from "../../Hooks/shop/useEditShop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faTrash } from "@fortawesome/free-solid-svg-icons";
import useShop from "../../Hooks/shop/useShop";
import DeleteShop from "./DeleteShop";
import { useNavigate, useParams } from "react-router-dom";

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
		setDisplayImg,
		displayImg,
	} = useEditShop();

	const { getShopsByUserId } = useShop();
	let { shopId } = useParams<string>();
	const [openDelete, setOpenDelete] = useState(false);
	let navigate = useNavigate();

	const { renderSpinner } = useSpinner();
	const hiddenInput = useRef<any>(null);

	const handleClick = () => {
		hiddenInput.current.click();
	};
	useEffect(() => {
		getShopById();
		getShopsByUserId();
	}, []);

	return (
		<div className="flex flex-col rounded-2xl px-[1rem] py-[3rem]  relative">
			{openDelete ? (
				<div
					className="w-screen h-screen flex fixed z-50 bg-white top-0 left-0 items-center 
                  justify-center opacity-95">
					<DeleteShop
						name={shopName}
						shopId={shopId}
						setOpenDelete={setOpenDelete}
					/>
				</div>
			) : null}

			<FontAwesomeIcon
				icon={faCircleArrowLeft}
				onClick={() => navigate(`/myAccount/shops`)}
				className="back"
			/>

			<form
				autoComplete="off"
				onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
					updateShop(e);
				}}
				className="flex flex-col md:flex-row gap-y-[0.5rem] md:space-x-10">
				<div className=" flex flex-col w-full md:w-[45%]">
					{/* shop Name */}
					<label htmlFor="shopName" className="labels">
						Shop Name
					</label>
					<input
						autoComplete="off"
						onChange={handleChange}
						value={shopName}
						required
						type="text"
						id="shopName"
						className="inputs"
					/>
					{/* location */}
					<label htmlFor="location" className="labels">
						Location
					</label>
					<input
						autoComplete="off"
						onChange={handleChange}
						required
						value={location}
						type="text"
						id="location"
						className="inputs"
					/>
					{/* shop email */}
					<label htmlFor="email" className="labels">
						Shop email
					</label>
					<input
						autoComplete="off"
						onChange={handleChange}
						value={email}
						required
						type="text"
						id="email"
						className="inputs"
					/>
					<p className="text-red-20">{mailError}</p>
					{/* Phone Number */}
					<label htmlFor="phone" className="labels">
						Shop Telephone
					</label>
					<PhoneInput
						autoComplete="off"
						country={"us"}
						value={phone}
						required={true}
						onChange={handlePhoneChange}
						className="inputs"
					/>
					{/* text area */}
					<label htmlFor="desc" className="labels">
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
						className="textarea"
					/>
				</div>
				{renderSpinner(load)}

				{/* second col */}
				<div className="flex flex-col-reverse w-full md:w-[45%] gap-y-[2rem] ">
					{/* button */}
					<div
						className="flex w-full flex-row justify-between lg:gap-x-40 order-1 
               ">
						<button
							type="submit"
							disabled={load}
							className="blue-btn">
							Update
						</button>
						<button
							type="button"
							onClick={() => setOpenDelete(true)}
							disabled={load}
							className="red-outline-btn">
							Close shop
						</button>
					</div>

					{displayImg.length > 0 ? (
						<div className="flex relative  order-3">
							<img
								src={displayImg}
								className=" flex  max-h-[14rem] md:max-h-[25rem] lg:max-h-[25rem] w-full 
                        object-cover order-3 border-2 rounded-xl"
							/>
							<FontAwesomeIcon
								onClick={() => {
									setImg("");
									setDisplayImg("");
								}}
								icon={faTrash}
								size="2x"
								className="absolute bottom-[0%] right-[0%] opacity-90 text-red-500
                        trans"
							/>
						</div>
					) : (
						<button
							type="button"
							className="bg-blue-40 self-center w-full px-[1rem] py-[0.4rem]
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
