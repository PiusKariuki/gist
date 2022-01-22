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
		dept,
		title,
		handleChange,
		register,
		load,
		errors,
	} = useRegister();
	const { renderSpinner } = useSpinner();

	return (
		<div className="flex flex-col md:flex-row gap-x-[2.5rem]">
			<div className="hidden lg:flex lg:min-w-[25%] bg-green-60 lg:min-h-screen" />

			<form
				className="flex flex-col gap-y-[0.1rem] w-full lg:w-[50%] py-[3rem] px-[1rem]"
				onSubmit={register}>
				<p className="text-[1.8rem] font-medium">Create your account</p>
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
					className="border-[0.0625rem] border-black-70 h-[2.25rem] outline-none
               rounded-[0.25rem]  font-bold px-[1rem] focus:ring-2 focus:ring-blue-500"
				/>
				<p className="text-red-600 font-bold text-[1rem] text-center">
					{mailError || errors?.email?.message || (errors.length > 1 && errors)}
				</p>

				{/* fname */}
				<label
					htmlFor="fname"
					className="font-bold leading-[1rem] tracking-[0.02rem] text-[0.9rem] mt-[3rem] mb-[0.5rem]">
					First Name
				</label>
				<input
					onChange={handleChange}
					value={fname}
					required
					type="text"
					id="fname"
					name="fname"
					className="border-[0.0625rem] border-black-70 h-[2.25rem] outline-none
               rounded-[0.25rem] font-bold px-[1rem] focus:ring-2 focus:ring-blue-500"
				/>
				{/* lname */}
				<label
					htmlFor="lname"
					className="font-bold leading-[1rem] tracking-[0.02rem] text-[0.9rem] mt-[3rem] mb-[0.5rem]">
					Last Name
				</label>
				<input
					onChange={handleChange}
					value={lname}
					required
					type="text"
					id="lname"
					name="lname"
					className="border-[0.0625rem] border-black-70 h-[2.25rem] outline-none
               rounded-[0.25rem] font-bold px-[1rem] focus:ring-2 focus:ring-blue-500"
				/>
				{/* title */}
				<label
					htmlFor="lname"
					className="font-bold leading-[1rem] tracking-[0.02rem] text-[0.9rem] mt-[3rem] mb-[0.5rem]">
					Job Title
				</label>
				<input
					onChange={handleChange}
					value={title}
					required
					type="text"
					id="title"
					name="title"
					className="border-[0.0625rem] border-black-70 h-[2.25rem] outline-none
               rounded-[0.25rem] font-bold px-[1rem] focus:ring-2 focus:ring-blue-500"
				/>
				{/* dept */}
				<label
					htmlFor="dept"
					className="font-bold leading-[1rem] tracking-[0.02rem] text-[0.9rem] mt-[3rem] mb-[0.5rem]">
					Department
				</label>
				<select
					onChange={handleChange}
					value={dept}
					required
					name="dept"
					id="dept"
					className="border-[0.0625rem] border-black-70 h-[2.25rem] outline-none
               rounded-[0.25rem] text-[1rem] font-bold text-green-50  px-[1rem]">
					<option value="dairies" className="font-bold">
						Dairies
					</option>
					<option value="beefs" className="font-bold">
						Beef
					</option>
					<option value="pigs" className="font-bold">
						Pigs
					</option>
					<option value="layers" className="font-bold">
						Layers
					</option>
				</select>
				{/* password */}
				<label
					htmlFor="pass"
					className="font-bold leading-[1rem] tracking-[0.02rem] text-[0.9rem] mt-[3rem] mb-[0.5rem]">
					Password
				</label>
				<input
					onChange={handleChange}
					value={password}
					required
					type="password"
					id="pass"
					name="pass"
					className="border-[0.0625rem] border-black-70 h-[2.25rem] outline-none
               rounded-[0.25rem] font-bold px-[1rem] focus:ring-2 focus:ring-blue-500"
				/>
				<p className="text-red-600 font-bold text-[1rem] text-center">
					{passError || errors?.password?.message}
				</p>
				{/* profilePic */}
				<label
					htmlFor="pic"
					className="font-bold leading-[1rem] tracking-[0.02rem] text-[0.9rem] mt-[3rem] mb-[0.5rem]">
					Profile photo
				</label>
				<input
					onChange={handleChange}
					required
					type="file"
					accept="image/*"
					id="pic"
					name="pic"
					className=" h-[2.25rem] outline-none
               rounded-[0.25rem] font-bold "
				/>
				<div className="mt-[1rem]">{renderSpinner(load)}</div>
				<button
					disabled={passError.length > 1 || mailError.length > 1 || load}
					type="submit"
					className="btn py-[0.5rem] mt-[3rem] md:max-w-[7rem] text-white text-[1.2rem]
               font-bold">
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
