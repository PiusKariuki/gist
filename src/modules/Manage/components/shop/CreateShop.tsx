import React, { useRef } from "react";
import useManage from "../../Hooks/shop/useCreateShop";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import useSpinner from "shared/components/spinner/useSpinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const CreateShop: React.FC = () => {
	const {
		shopName,
		email,
		location,
		desc,
		displayImg,
		setDisplayImg,
		phone,
		createShop,
		handleChange,
		handlePhoneChange,
		mailError,
		load,
		setImg,
	} = useManage();
	const { renderSpinner } = useSpinner();
	const hiddenInput = useRef<any>(null);

	const handleClick = () => {
		hiddenInput.current.click();
	};

	return (
		<div className="flex flex-col bg-white w-full">
			<p className="text-[1.6rem] text-black-80 text-center">
				Create Your Shop
			</p>
			<form
				autoComplete="off"
				onSubmit={createShop}
				className="py-[2rem] flex flex-col md:flex-row  gap-y-[2rem] md:px-[2rem]  md:space-x-10
            lg:space-x-44 w-full flex-nowrap">
				<div className=" flex flex-col w-full md:w-[43%]">
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
						className="h-[2.25rem] outline-none 
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
						onChange={handleChange}
						required
						value={location}
						type="text"
						id="location"
						className="h-[2.25rem] outline-none 
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
						className="h-[2.25rem] outline-none
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
						required={true}
						country={"us"}
						value={phone}
						onChange={handlePhoneChange}
						className="h-[2.25rem] outline-none 
                  text-blue-20 border-0 text-[1.3rem] tracking-wider
                  rounded-[0.25rem]  font-[900] px-[1rem] form-ring"
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
						rows={3}
						cols={50}
						id="desc"
						className="outline-none text-blue-20
                  rounded-[0.25rem] font-[600] text-[1.3rem] tracking-wide px-[1rem] 
                  form-ring "
					/>
				</div>

				{/* second col */}
				<div className="flex flex-col-reverse w-full md:gap-y-[2rem] ">
					{/* button */}
					<div
						className="flex flex-row  lg:gap-x-60 order-1 mt-10 
                  ">
						<button
							type="submit"
							disabled={mailError?.length > 0 || load || displayImg?.length < 1}
							className="bg-blue-20  px-[1rem] py-[0.5rem]  rounded-lg  h-10
                     self-center text-white text-[1rem] font-[700] disabled:bg-gray-400 w-24">
							Submit
						</button>
						<div className="flex">{renderSpinner(load)}</div>
					</div>

					{displayImg.length > 0 ? (
						<div className="flex relative  order-3">
							<img
								src={displayImg}
								className=" flex  max-h-[14rem] md:max-h-[25rem] lg:max-h-[25rem] w-full 
                        object-contain 
                        order-3"
							/>
							<FontAwesomeIcon
								onClick={() => {
									setImg("");
									setDisplayImg("");
								}}
								icon={faTrash}
								size="3x"
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

export default CreateShop;
