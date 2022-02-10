import React from "react";
import useSpinner from "shared/components/spinner/useSpinner";
import useEditProfile from "../Hooks/useEditProfile";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";

const EditProfile = () => {
	const {
		mailError,
		passError,
		email,
		password,
		fname,
		lname,
		bio,
		userName,
		handleChange,
		load,
		errors,
		phone,
		phoneErr,
		handlePhoneChange,
		handleSubmit,
	} = useEditProfile();
	const { renderSpinner } = useSpinner();
	return (
		<form
			className="flex flex-col md:flex-row gap-y-[0.1rem] w-full py-[3rem] px-[3rem] 
          justify-around" onSubmit={handleSubmit}>
			<div className="flex flex-col md:w-[40%]">
				{/* fname */}
				<label
					htmlFor="fname"
					className="font-bold leading-[1rem] tracking-[0.02rem] text-[0.9rem] mt-[3rem] 
               mb-[0.5rem]">
					First Name
				</label>
				<input
					onChange={handleChange}
					value={fname}
					required
					type="text"
					id="fname"
					name="fname"
					className="border-[0.0625rem] border-black-70 h-[2.25rem] outline-none text-blue-20
               rounded-[0.25rem] font-bold px-[1rem] focus:ring-2 focus:ring-blue-500"
				/>
				{/* lname */}
				<label
					htmlFor="lname"
					className="font-bold leading-[1rem] tracking-[0.02rem] text-[0.9rem] mt-[3rem] 
               mb-[0.5rem]">
					Last Name
				</label>
				<input
					onChange={handleChange}
					value={lname}
					required
					type="text"
					id="lname"
					name="lname"
					className="border-[0.0625rem] border-black-70 h-[2.25rem] outline-none text-blue-20
               rounded-[0.25rem] font-bold px-[1rem] focus:ring-2 focus:ring-blue-500"
				/>
				{/* userName */}
				<label
					htmlFor="userName"
					className="font-bold leading-[1rem] tracking-[0.02rem] text-[0.9rem] mt-[3rem] 
               mb-[0.5rem]">
					userName
				</label>
				<input
					onChange={handleChange}
					value={userName}
					required
					type="text"
					id="userName"
					className="border-[0.0625rem] border-black-70 h-[2.25rem] outline-none text-blue-20
               rounded-[0.25rem] font-bold px-[1rem] focus:ring-2 focus:ring-blue-500"
				/>
				{/* bio */}
				<label
					htmlFor="bio"
					className="font-bold leading-[1rem] tracking-[0.02rem] text-[0.9rem] mt-[3rem] 
               mb-[0.5rem]">
					Bio
				</label>
				<input
					onChange={handleChange}
					value={bio}
					required
					id="bio"
					className="border-[0.0625rem] border-black-70 h-[2.25rem] outline-none text-blue-20
               rounded-[0.25rem] font-bold px-[1rem] focus:ring-2 focus:ring-blue-500"
				/>
			</div>

			{/* second col */}
			<div className="flex flex-col md:w-[40%]">
				{/* email */}
				<label
					htmlFor="email"
					className="font-bold leading-[1rem] tracking-[0.02rem] text-[0.9rem] mt-[3rem] 
               mb-[0.5rem]">
					Email Address
				</label>
				<input
					onChange={handleChange}
					value={email}
					required
					type="text"
					id="email"
					name="email"
					className="border-[0.0625rem] border-black-70 h-[2.25rem] outline-none text-blue-20
               rounded-[0.25rem]  font-bold px-[1rem] focus:ring-2 focus:ring-blue-500"
				/>
				{/* Phone */}
				<label
					htmlFor="phone"
					className="font-bold leading-[1rem] tracking-[0.02rem] text-[0.9rem] mt-[3rem] 
               mb-[0.5rem]">
					Phone Number
				</label>
				<PhoneInput
					country={"ke"}
					value={phone}
					onChange={handlePhoneChange}
					inputProps={{
						required: true,
					}}
               inputStyle={{width: "16rem"}}
				/>
				{/* password */}
				<label
					htmlFor="pass"
					className="font-bold leading-[1rem] tracking-[0.02rem] text-[0.9rem] mt-[3rem] 
               mb-[0.5rem]">
					Password
				</label>
				<input
					onChange={handleChange}
					value={password}
					type="password"
					id="pass"
					name="pass"
					className="border-[0.0625rem] border-black-70 h-[2.25rem] outline-none text-blue-20
               rounded-[0.25rem] font-bold px-[1rem] focus:ring-2 focus:ring-blue-500"
				/>
				<p className="text-red-600 font-bold text-[1rem] text-center">
					{passError || errors?.password?.message}
				</p>

				<div className="mt-[1rem]">{renderSpinner(load)}</div>
				<button
				disabled={
					passError.length > 1 ||
					mailError.length > 1 ||
					load ||
					phoneErr.length > 0 ||
					phone?.length < 4
				}
				type="submit"
				className="bg-red-20 py-[0.5rem] mt-[3rem]  text-white text-[1.4rem] rounded-lg
               font-bold w-[12rem] hover:bg-red-600 self-center disabled:bg-gray-400">
				Submit
			</button>
			</div>
		</form>
	);
};

export default EditProfile;
