import React from "react";
import { Link } from "react-router-dom";
import useSpinner from "shared/components/spinner/useSpinner";
import useLogin from "../hooks/useLogin";

const Login: React.FC = (): JSX.Element => {
	const {
		errors,
		email,
		password,
		handleChange,
		login,
		load,
		mailErrors,
		passErrors,
	} = useLogin();
	const { renderSpinner } = useSpinner();

	return (
		<div className="flex flex-col bg-transparent w-full items-center">
			<p className="text-[1.6rem] text-green-80 font-semibold mb-[6rem]">
				GIST SHOP
			</p>
			<form
				className="flex flex-col gap-y-[0.5rem] pt-[3rem] w-[75vw] md:w-[50vw] lg:w-[30vw]"
				onSubmit={login}>
				<input
					onChange={handleChange}
					type="text"
					id="email"
					name="email"
					value={email}
					placeholder="Email"
					className="w-full border-[0.0625rem]  
                        border-black-70 h-[3.25rem] outline-none rounded-[0.25rem]
                        font-bold px-[1rem] focus:ring-2 focus:ring-blue-500"
				/>
				<p className="text-red-600 font-bold text-[1rem] text-center">
					{mailErrors || errors?.emailErr}
				</p>
				<input
					onChange={handleChange}
					type="password"
					id="pass"
					name="pass"
					placeholder="password"
					value={password}
					className="w-full border-[0.0625rem]  
                        border-black-70 h-[3.25rem] outline-none rounded-[0.25rem]
                        font-bold px-[1rem] focus:ring-2 focus:ring-blue-500"
				/>
				<p className="text-red-600 font-bold text-[1rem] text-center">
					{passErrors || errors?.passErr}
				</p>
				{renderSpinner(load)}
				<div className="flex flex-col  mt-[4rem] md:gap-y-[2rem] ">
					<button
						disabled={passErrors.length > 1 || mailErrors.length > 1}
						type="submit"
						className="w-full btn bg-red-20  hover:bg-red-20 text-[1.2rem]
                  text-white h-[2.8125rem] ">
						Sign in
					</button>
					<p
						className="text-[1.2rem] text-center self-center font-semibold tracking-[0.02rem]
                     mt-[2rem] md:mt-[0rem]">
						Need an account?
						<span className="text-blue-600 px-[1rem]">
							<Link to="/register">Signup</Link>
						</span>
					</p>
				</div>
			</form>
		</div>
	);
};

export default Login;
