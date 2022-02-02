import React from "react";
import { Link } from "react-router-dom";
import useRegister from "../hooks/useRegister";
import useSpinner from "shared/components/spinner/useSpinner";

const Register: React.FC = (): JSX.Element => {
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
		register,
		load,
		errors,
      phone
	} = useRegister();
	const { renderSpinner } = useSpinner();

	return (
		<div className="flex flex-col md:flex-row gap-x-[2.5rem]">
			<div className="hidden lg:flex lg:min-w-[25%] bg-green-60 lg:min-h-screen" />
			<form
				className="flex flex-col gap-y-[0.1rem] w-full lg:w-[50%] py-[3rem] px-[1rem]"
				onSubmit={register}>
				<p className="text-[2.2rem] text-blue-20 font-semibold mb-[1.5rem] justify-center">
					GIST SHOP
				</p>
				<p className="text-[1rem] font-medium">Create your account</p>
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
				<p className="text-red-600 font-bold text-[1rem] text-center">
					{mailError || errors?.email?.message || (errors.length > 1 && errors)}
				</p>

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
				{/* Phone */}
				<label
					htmlFor="phone"
					className="font-bold leading-[1rem] tracking-[0.02rem] text-[0.9rem] mt-[3rem] 
               mb-[0.5rem]">
					Phone Number
				</label>
				<input
					onChange={handleChange}
					value={phone}
					required
					id="phone"
					className="border-[0.0625rem] border-black-70 h-[2.25rem] outline-none text-blue-20
               rounded-[0.25rem] font-bold px-[1rem] focus:ring-2 focus:ring-blue-500"
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
					required
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
					disabled={passError.length > 1 || mailError.length > 1 || load}
					type="submit"
					className="btn py-[0.5rem] mt-[3rem] md:max-w-[7rem] text-white text-[1.2rem]
               font-bold ">
					Submit
				</button>
				<p
					className="text-[1rem] text-center md:text-left  font-semibold mt-[2rem]
               tracking-[0.02rem]">
					Already have an account?
					<span className="text-blue-600 px-[1rem]">
						<Link to="/">Login</Link>
					</span>
				</p>
			</form>
		</div>
	);
};

export default Register;
