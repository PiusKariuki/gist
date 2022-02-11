import React, { useRef } from "react";
import useManage from "../Hooks/useManage";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import useSpinner from "shared/components/spinner/useSpinner";

interface Props {
	openCreate: boolean;
	setOpenCreate: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateShop: React.FC<Props> = ({ openCreate, setOpenCreate }) => {
	const {
		shopName,
		email,
		location,
		desc,
		img,
		phone,
		createShop,
		handleChange,
		handlePhoneChange,
		phoneErr,
		mailError,
		load,
		clearAttributes,
	} = useManage();
	const { renderSpinner } = useSpinner();
	const hiddenInput = useRef<any>(null);

	const handleClick = () => {
		hiddenInput.current.click();
	};

	return (
		<div className={`${openCreate ? "flex flex-col w-[95vw]" : "hidden"}`}>
			{renderSpinner(load)}
			<p className="text-[1.6rem] text-black-80 text-center">
				Create Your Shop
			</p>
			<form
				autoComplete="off"
				onSubmit={(e) => {
					createShop(e);
					clearAttributes();
				}}
				className="py-[2rem] flex flex-col lg:flex-row px-[2rem] gap-y-[2rem]
             items-center md:px-[12rem] md:justify-around lg:px-0">
				<div className=" flex flex-col w-full lg:max-w-[30%] ">
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
						// inputStyle={{
						// 	width: "18rem",
						// }}
                  inputClass="w-24 border-2"
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
						rows={3}
						cols={50}
						id="desc"
						className="border-[0.0625rem] border-black-70 outline-none text-blue-20
                  rounded-[0.25rem] font-[600] text-[1.3rem] tracking-wide px-[1rem] 
                  focus:ring-2 focus:ring-blue-500 "
					/>
				</div>

				{/* second col */}
				<div className="flex flex-col">
					{/* display div */}
					<img src={img} alt="" className="hidden md:flex w-[16rem]" />
					{/* img */}
					<button
						type="button"
						className="blue-btn px-[1rem] py-[0.3rem]"
						onClick={handleClick}>
						Upload Image
					</button>
					<input
						onChange={handleChange}
						required
						ref={hiddenInput}
						type="file"
						id="img"
						accept="image/png"
						className="hidden"
					/>

					{/* button */}
					<div className="flex flex-row justify-between gap-x-[3rem]">
						<button
							type="submit"
							disabled={
								mailError.length > 0 ||
								load ||
								phoneErr.length > 0 ||
								phone.length < 3 ||
								img.length < 1
							}
							className="bg-blue-20  px-[2rem] py-[0.5rem]  rounded-lg self-center text-white
                     text-[1rem] font-[700] mt-[4rem] disabled:bg-gray-400">
							Submit
						</button>
						<button
							onClick={() => {
								setOpenCreate(false);
								clearAttributes();
							}}
							type="button"
							className="bg-red-20 px-[2rem] py-[0.5rem] rounded-lg
                     self-center text-white text-[1rem] font-[700] mt-[4rem] disabled:bg-gray-400">
							Close
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default CreateShop;
