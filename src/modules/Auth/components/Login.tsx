import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faKey, faUserLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
		<div
			className="flex flex-col bg-transparent md:bg-expectrum bg-center bg-cover
         py-[6rem] md:py-[3rem] px-[1rem] min-h-screen">
			{/*......................................
            *
            *PADLOCK DIV
            *
            ......................................*/}
			<div className="flex flex-col self-center w-[8rem] h-[8rem] rounded-full bg-white mb-[3rem]">
				<FontAwesomeIcon
					icon={faUserLock}
					size="3x"
					color="blue"
					className="self-center pt-[2rem]"
				/>
			</div>
			{/*......................................
            *
            *FORM AND BG DIV 
            *
            ......................................*/}
			<div
				className="flex flex-row justify-center bg-white md:rounded-3xl
                md:w-[80%] self-center md:shadow-2xl">
				<div
					className="hidden md:flex md:bg-mannequinn bg-cover  md:w-full
            bg-no-repeat"
				/>
				<form
					onSubmit={login}
					autoComplete="off"
					className="flex flex-col items-center space-y-[1.5rem] md:self-end md:bg-gray-100
                w-full md:py-[4rem] md:rounded-r-3xl">
                   <p className="text-[1.2rem] font-[900]"> Login to your GIST-SHOP account</p>

                   <hr />
					{/*......................................
                     *
                     ......................................*/}
					<input
						autoFocus
						required
						onChange={handleChange}
						type="text"
						id="email"
						name="email"
						value={email}
						placeholder="Email"
						className=" h-[2.25rem] outline-none rounded-[0.25rem] w-[80vw] md:w-[20vw]
                        font-bold px-[1rem] ring-2 ring-blue-500"
					/>
					<p className="text-red-600 font-bold text-[1rem] text-center">
						{mailErrors || errors?.emailErr}
					</p>
					{/*......................................
                  *
                  ......................................*/}
					<input
						required
						onChange={handleChange}
						type="password"
						id="pass"
						name="pass"
						placeholder="password"
						value={password}
						className="w-full0 h-[2.25rem] outline-none rounded-[0.25rem] w-[80vw]
                        font-bold px-[1rem] ring-2 ring-blue-500 md:w-[20vw]"
					/>
					<p className="text-red-600 font-bold text-[1rem] text-center">
						{passErrors || errors?.passErr}
					</p>

					{/*......................................
                  *
                  ......................................*/}
					{renderSpinner(load)}
					<div className="flex flex-col w-[80vw] md:w-[20vw] space-y-4">
						<button
							disabled={passErrors.length > 1 || mailErrors.length > 1}
							type="submit"
							className="btn bg-blue-20  hover:bg-blue-500 text-[1.2rem]
                     text-white ">
							Sign in
						</button>
						<p
							className="text-[1.2rem] font-[500] tracking-[0.02rem]
                     mt-[2rem] md:mt-[0rem]">
							Need an account?
							<span className="text-blue-600 px-[1rem]">
								<Link to="/register">Signup</Link>
							</span>
						</p>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
