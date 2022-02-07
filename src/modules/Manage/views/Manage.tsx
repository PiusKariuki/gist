import React from "react";
import Navbar from "../components/Navbar";
import useManage from "../Hooks/useManage";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import useSpinner from "shared/components/spinner/useSpinner";

const CreateShop: React.FC = (): JSX.Element => {
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
      load
	} = useManage();
   const {renderSpinner} = useSpinner();
	return (
		<div className="flex flex-col ">
			<Navbar />
			{renderSpinner(load)}
			<p className="text-[1.6rem] text-black-80 text-center">
				Create Your Shop
			</p>
			<form
				action=""
				onSubmit={createShop}
				className="py-[2rem] flex flex-col lg:flex-row px-[2rem] gap-y-[0.5rem] w-full 
             items-center md:px-[12rem] md:justify-around lg:px-0">
				<div className=" flex flex-col w-full lg:max-w-[20%] ">
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
							name: "phone",
							required: true,
							id: "phone",
						}}
                  
					/>
					<p className="text-red-20">{phoneErr}</p>
				</div>

				{/* second col */}
				<div className="flex flex-col w-full lg:max-w-[20%]">
					{/* display div */}
					<img src={img} alt="" className="hidden md:flex w-[16rem]" />
					{/* img */}
					<label
						htmlFor="img"
						className="font-bold leading-[1rem] tracking-[0.02rem] text-[1.2rem] mb-[0.5rem]
                      pt-[2rem]">
						Profile Photo
					</label>
					<input
						onChange={handleChange}
						// value={img}
						required
						type="file"
						id="img"
						accept="image/png"
						className="border-[0.0625rem] border-black-70 h-[2.25rem] outline-none 
                     text-blue-20 rounded-[0.25rem] font-[600] text-[1.3rem] tracking-wide px-[1rem] 
                     focus:ring-2 focus:ring-blue-500"
					/>
				</div>

				{/* third col */}
				<div className="flex flex-col w-full lg:max-w-[40%]">
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
					{/* button */}
					<button
						disabled={mailError.length > 0 || load || phoneErr.length>0 || phone.length<3}
						className="bg-red-20 px-[2rem] py-[1rem] w-[12rem] rounded-lg
                  self-center text-white text-[1.4rem] font-[700] mt-[4rem] disabled:bg-gray-400">
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default CreateShop;
