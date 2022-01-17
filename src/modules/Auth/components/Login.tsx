import React from "react";
import { Link } from "react-router-dom";

const Login: React.FC = (): JSX.Element => {
	return (
		<div className="w-screen flex flex-col md:flex-row bg-transparent md:gap-x-[3rem]">
			<div
				className="flex flex-col gap-y-[3rem] md:min-w-[39%] lg:min-w-[30%] py-[4rem] 
                px-[1.5rem]">
				<div className="flex flex-row justify-between items-center">
					<img
						src="/img/sheep.svg"
						alt="sheep-icon"
						className="w-[3rem] inline mx-0"
					/>
					<p className="text-[1.6rem] text-green-80 font-semibold">
						Kilimo Farm Buddy
					</p>
				</div>
				<form className="flex flex-col gap-y-[0.5rem] pt-[7rem]">
					<p className="text-[1.2rem] font-medium">Log in to your account</p>
					<hr />
					<label
						htmlFor="email"
						className="font-bold leading-[1rem] tracking-[0.02rem] text-[0.9rem] mt-[3rem]">
						Email Address
					</label>
					<input
						type="text"
						id="email"
						name="email"
						className="w-[full] border-[0.0625rem]  
                        border-black-70 h-[3.25rem] outline-none rounded-[0.25rem]"
					/>
					<div className="flex flex-col md:flex-row mt-[6rem] md:gap-x-[1.5rem]">
						<button
							type="submit"
							className=" w-full md:w-[5.625rem] btn bg-green-60 text-white
                        h-[2.8125rem]">
							Next
						</button>
						<p
							className="text-[1rem] text-center self-center font-semibold
                            tracking-[0.02rem] ">
							Do not have an account?
							<span className="text-blue-600 px-[1rem]">
								<Link to="/auth/register">Signup</Link>
							</span>
						</p>
					</div>
				</form>
			</div>
			<div
				className="hidden md:flex bg-cow md:w-full h-screen bg-center bg-cover bg-no-repeat
                "></div>
		</div>
	);
};

export default Login;
