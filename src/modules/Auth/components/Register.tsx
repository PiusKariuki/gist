import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import useRegister from "../hooks/useRegister";
import useSpinner from "shared/components/spinner/useSpinner";
import PhoneInput from "react-phone-number-input";
import "shared/styles/phoneInput.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseUser, faTrash } from "@fortawesome/free-solid-svg-icons";

const Register = (): JSX.Element => {
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
		phone,
		phoneErr,
		handlePhoneChange,
		confirmPassword,
		img,
		setImg,
	} = useRegister();
	const { renderSpinner } = useSpinner();
	const hiddenInput = useRef<any>(null);
	let navigate = useNavigate();
	const handleClick = () => {
		hiddenInput.current.click();
	};

	return (
		<div
			className="flex flex-col md:flex-row gap-x-[2.5rem] relative w-screen overflow-x-clip
         px-[2rem] py-[4rem] lg:px-[5rem]">
			{/*......................................
               *HOME
            ......................................*/}
			<div
				onClick={() => navigate(`/`)}
				className=" absolute -top-10 right-0 bg-white
            flex  flex-row w-[8rem] md:w-[15rem] px-[1.2rem] md:px-[2rem] 
            py-[0.5rem] 
            shadow-2xl self-center md:self-start rounded-xl text-blue-30 space-x-3 mt-[3rem] 
            items-center cursor-pointer">
				<FontAwesomeIcon icon={faHouseUser} size="2x" />
				<p className="text-blue-30 text-[0.9rem] md:text-[1.1rem] font-[700]">
					Home.
				</p>
			</div>
			<div
				className="invisible md:visible absolute w-[40rem] h-[40rem] top-0 left-0 
            bg-gray-200 -z-10 rounded-br-full"
			/>
			<div
				className="invisible md:visible absolute w-[40rem] h-[60rem] bottom-0 right-0 
            bg-gray-200 -z-10 rounded-tl-full"
			/>
			<form
				autoComplete="off"
				className="flex flex-col w-full py-[2rem] "
				onSubmit={register}>
				<div className="flex flex-col">
					<p
						className="text-[1.2rem] lg:text-[2.2rem] text-blue-20 font-[900] mb-[1rem] 
               justify-center">
						Sign up to GIST-SHOP
					</p>
					{/*......................................
               *
               *names div
               *
               ......................................*/}
					<div className="flex flex-col md:flex-row md:space-x-10">
						<div className="flex flex-col w-[90%] md:w-[40%]">
							{/* fname */}
							<label
								htmlFor="fname"
								className="font-bold leading-[1rem] tracking-[0.02rem] text-[1.2rem] 
                     mt-[3rem]  mb-[0.5rem]">
								First Name
							</label>
							<input
								onChange={handleChange}
								value={fname}
								required
								type="text"
								id="fname"
								className="py-[0.1rem] md:py-[0.3rem] outline-none 
                        text-blue-20 rounded-[0.25rem] font-bold px-[1rem] form-ring"
							/>
						</div>

						<div className="flex flex-col w-[90%] md:w-[40%]">
							{/* lname */}
							<label
								htmlFor="lname"
								className="font-bold leading-[1rem] tracking-[0.02rem] text-[1.2rem] 
                        mt-[3rem] mb-[0.5rem]">
								Last Name
							</label>
							<input
								onChange={handleChange}
								value={lname}
								required
								type="text"
								id="lname"
								className="py-[0.1rem] md:py-[0.3rem] outline-none 
                        text-blue-20 rounded-[0.25rem] font-bold px-[1rem] form-ring "
							/>
						</div>
					</div>

					{/*......................................
                  *
                  *EMAIL AND PHONE NUMBER
                  *
                  ......................................*/}
					<div className="flex flex-col md:flex-row  md:space-x-10 ">
						<div className="flex flex-col w-[90%] md:w-[40%]">
							{/* email */}
							<label
								htmlFor="email"
								className="font-bold leading-[1rem] tracking-[0.02rem] text-[1.2rem] 
                     mt-[3rem]   mb-[0.5rem]">
								Email Address
							</label>
							<input
								onChange={handleChange}
								value={email}
								required
								type="text"
								id="email"
								className="py-[0.1rem] md:py-[0.3rem] outline-none 
                        text-blue-20 rounded-[0.25rem] font-bold px-[1rem] form-ring"
							/>
							<p className="text-red-600 font-bold text-[1rem] text-center">
								{mailError ||
									errors?.email?.message ||
									(errors?.length > 1 && errors)}
							</p>
						</div>

						<div className="flex flex-col w-[90%] md:w-[40%]">
							{/* Phone */}
							<label
								htmlFor="phone"
								className="font-bold leading-[1rem] tracking-[0.02rem] text-[1.2rem] 
                     mt-[3rem]  mb-[0.5rem]">
								Phone Number
							</label>
							<PhoneInput
								required={true}
								country={"ke"}
								value={phone}
								onChange={handlePhoneChange}
								className="py-[0.1rem] md:py-[0.3rem] outline-none 
                        text-blue-20 rounded-[0.25rem] font-bold px-[1rem] form-ring"
							/>
						</div>
					</div>

					{/*......................................
               *
               *BIO and profile picture
               *
               ......................................*/}
					<div className="flex flex-col md:flex-row space-y-10 md:space-x-10 ">
						<div className="flex flex-col w-[90%] md:w-[40%]">
							<label
								htmlFor="bio"
								className="font-bold leading-[1rem] tracking-[0.02rem] text-[1.2rem] 
                        mt-[3rem] mb-[0.5rem]">
								Bio
							</label>
							<textarea
								onChange={handleChange}
								value={bio}
								required
								id="bio"
								rows={3}
								cols={6}
								className="py-[0.1rem] md:py-[0.3rem] outline-none 
                        text-blue-20 rounded-[0.25rem] font-bold px-[1rem] form-ring"
							/>
						</div>

						<div
							className="flex flex-col md:flex-row w-[90%] md:w-[40%] space-x-10
                     space-y-10">
							{img?.length > 1 ? (
								<div className="flex relative">
									<img
										src={img}
										className="flex max-h-[20rem] object-scale-down self-center 
                              top-[-300%] right-[0%] w-[80vw] md:w-[4xl0vw] lg:w-[40%] border-2"
									/>
									<FontAwesomeIcon
										onClick={() => setImg("")}
										icon={faTrash}
										size="3x"
										className="absolute top-[50%] left-[50%] opacity-90 text-red-500
                              bg-gray-50 trans"
									/>
								</div>
							) : (
								<>
									<button
										type="button"
										className="bg-blue-500 self-center w-full px-[1rem] py-[0.4rem]
                             mt-auto rounded-md font-[600] text-white"
										onClick={handleClick}>
										Upload Profile Photo
									</button>
									<p className="text-red-600 font-bold text-[1rem] text-center">
										Please upload a photo
									</p>
								</>
							)}

							<input
								onChange={handleChange}
								ref={hiddenInput}
								type="file"
								id="img"
								accept="image/png"
								className="hidden"
							/>
						</div>
					</div>

					{/*......................................
                  *
                  *USERNAME
                  *
               ......................................*/}
					<div className="flex flex-col w-[90%] md:w-[40%]">
						<label
							htmlFor="userName"
							className="font-bold leading-[1.2rem] tracking-[0.02rem] text-[1.2rem] mt-[3rem] 
                      mb-[0.5rem]">
							Username
						</label>
						<input
							onChange={handleChange}
							value={userName}
							required
							type="text"
							id="userName"
							className="py-[0.1rem] md:py-[0.3rem] outline-none 
                     text-blue-20 rounded-[0.25rem] font-bold px-[1rem] form-ring"
						/>
					</div>

					{/*......................................
                  *
                  *PASSWORD and confirm password
                  *
                  ......................................*/}
					<div className="flex flex-col md:flex-row  md:space-x-10">
						<div className="flex flex-col w-[90%] md:w-[40%]">
							<label
								htmlFor="pass"
								className="font-bold leading-[1rem] tracking-[0.02rem] text-[1.2rem] 
                        mt-[3rem] mb-[0.5rem]">
								Password
							</label>
							<input
								onChange={handleChange}
								value={password}
								type="password"
								id="pass"
								className="py-[0.1rem] md:py-[0.3rem] outline-none 
                        text-blue-20 rounded-[0.25rem] font-bold px-[1rem] form-ring"
							/>
							<p className="text-red-600 font-bold text-[1rem] text-center">
								{passError || errors?.password?.message}
							</p>
						</div>

						<div className="flex flex-col w-[90%] md:w-[40%]">
							<label
								htmlFor="pass"
								className="font-bold leading-[1rem] tracking-[0.02rem] text-[1.2rem] mt-[3rem] 
                     mb-[0.5rem]">
								Confirm Password
							</label>
							<input
								onChange={handleChange}
								value={confirmPassword}
								type="password"
								id="confirm"
								className="py-[0.1rem] md:py-[0.3rem] outline-none 
                        text-blue-20 rounded-[0.25rem] font-bold px-[1rem] form-ring"
							/>
							<p className="text-red-600 font-bold text-[1rem] text-center">
								{passError || errors?.password?.message}
							</p>
						</div>
						{/* password */}
					</div>
				</div>
				<div className="mt-[1rem]">{renderSpinner(load)}</div>
				<button
					disabled={
						passError?.length > 1 ||
						mailError?.length > 1 ||
						load ||
						phone?.length < 4 ||
						confirmPassword !== password ||
						img?.length < 1
					}
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
						<Link to="/login">Login</Link>
					</span>
				</p>
			</form>
		</div>
	);
};

export default Register;
