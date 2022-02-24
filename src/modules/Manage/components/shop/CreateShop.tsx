import React, { useRef } from "react";
import useManage from "../../Hooks/useManage";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import useSpinner from "shared/components/spinner/useSpinner";
import { useNavigate } from "react-router-dom";


const CreateShop: React.FC= () => {
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
   let navigate = useNavigate();

	const handleClick = () => {
		hiddenInput.current.click();
	};

	return (
		<div className="flex flex-col bg-white w-full">
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
						className="h-[2.25rem] outline-none 
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
						className="h-[2.25rem] outline-none
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
						onChange={handlePhoneChange}
						inputProps={{
							required: true,
						}}
						inputStyle={{
							width: "100%",
							border: "2.5px solid rgb(59 130 246)",
						}}
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
						className="outline-none text-blue-20
                  rounded-[0.25rem] font-[600] text-[1.3rem] tracking-wide px-[1rem] 
                  ring-2 ring-blue-500 "
					/>
				</div>

				{/* second col */}
				<div className="flex flex-col-reverse w-full lg:py-[rem] space-y-[2rem] ">
					{/* display div */}
					<img src={img} alt="" className="lg:flex w-full  max-h-[40vh] 2xl:max-h-[30vh] object-contain 
               order-3" />
					{/* img */}
					<button
						type="button"
						className="blue-btn px-[1rem] py-[0.3rem] lg:w-[40%] lg:self-center order-2"
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
					<div className="flex flex-row gap-x-[3rem] lg:gap-x-60 order-1 lg:self-center">
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
                     text-[1rem] font-[700] disabled:bg-gray-400">
							Submit
						</button>
						<button
							onClick={() => {
								navigate(`/myAccount/shops/`);
								clearAttributes();
							}}
							type="button"
							className="bg-red-20 px-[2rem] py-[0.5rem] rounded-lg
                      text-white text-[1rem] font-[700]  disabled:bg-gray-400">
							Back
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default CreateShop;
