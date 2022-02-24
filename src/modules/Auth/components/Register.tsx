import React, { useRef } from "react";
import { Link } from "react-router-dom";
import useRegister from "../hooks/useRegister";
import useSpinner from "shared/components/spinner/useSpinner";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

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
	} = useRegister();
	const { renderSpinner } = useSpinner();
	const hiddenInput = useRef<any>(null);

	const handleClick = () => {
		hiddenInput.current.click();
	};

	return (
		<div className="flex flex-col lg:flex-row gap-x-[2.5rem] relative">
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
				className="flex flex-col w-full py-[2rem] px-[2rem] lg:px-[4rem]
            justify-around"
				onSubmit={register}>
				<p className="text-[2.2rem] text-blue-20 font-[900] mb-[1rem] justify-center">
					SIGN UP TO GIST SHOP
				</p>
				<div className="flex flex-col w-screen ">
					{/*......................................
               *
               *names div
               *
               ......................................*/}
					<div className="flex flex-col lg:flex-row  gap-[0rem] md:gap-[2rem] items-start">
						<div className="flex flex-col w-[80vw] md:w-[60%] lg:w-[40%]">
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
								className="border-[0.0625rem] border-black-70 h-[2.25rem] outline-none 
                     text-blue-20 rounded-[0.25rem] font-bold px-[1rem] focus:ring-2 
                     focus:ring-blue-500"
							/>
						</div>

						<div className="flex flex-col w-[80vw] md:w-[60%] lg:w-[40%]">
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
								className="border-[0.0625rem] border-black-70 h-[2.25rem] outline-none 
                     text-blue-20 rounded-[0.25rem] font-bold px-[1rem] focus:ring-2 
                        focus:ring-blue-500"
							/>
						</div>
					</div>

					{/*......................................
            *
            *USERNAME
            *
             ......................................*/}
					<div className="flex flex-col w-[80vw] md:w-[60%] lg:w-[40%]">
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
							className="border-[0.0625rem] border-black-70 h-[2.25rem] outline-none
                   text-blue-20 rounded-[0.25rem] font-bold px-[1rem] focus:ring-2 
                   focus:ring-blue-500"
						/>
					</div>
					{/*......................................
               *
               *BIO and profile picture
               *
               ......................................*/}
					<div className="flex flex-col lg:flex-row gap-[2rem] md:gap-[2rem] items-start">
						<div className="flex flex-col w-[80vw] md:w-[60%] lg:w-[40%]">
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
								className="border-[0.0625rem] border-black-70  outline-none text-blue-20
                        rounded-[0.25rem] font-bold px-[1rem] focus:ring-2 focus:ring-blue-500"
							/>
						</div>

						<div
							className="flex flex-col md:flex-row w-[80vw] md:w-[60%] lg:w-[40%]
                     items-start md:mt-auto relative space-x-10 space-y-10">
							<img
								src={img}
								className="xl:flex h-[10rem]  rounded-2xl object-contain
                          self-center top-[-300%] right-[0%]
                         w-[80vw] md:w-[60%] lg:w-[40%]
                         "
							/>

							{/* img */}
							<button
								type="button"
								className={`${
									img?.length > 1
										? "bg-white text-green-40 font-[700]"
										: "bg-blue-20 text-white"
								}
                        self-center px-[6rem] py-[0.4rem] border-[0.2rem] border-black-70 mt-auto
                         rounded-md`}
								onClick={handleClick}>
								{img?.length < 1 ? (
									"Upload Image"
								) : (
									<FontAwesomeIcon icon={faCheck} size="2x" color="green" />
								)}
							</button>
							<p className="text-red-600 font-bold text-[1rem] text-center ml-[2rem]">
								{img?.length < 1 ? "Please Upload a profile Image" : null}
							</p>

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
            *EMAIL AND PHONE NUMBER
            *
            ......................................*/}
					<div className="flex flex-col lg:flex-row gap-[0rem] md:gap-[2rem] items-start">
						<div className="flex flex-col w-[80vw] md:w-[60%] lg:w-[40%]">
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
								className="border-[0.0625rem] border-black-70 h-[2.25rem] outline-none 
                     text-blue-20
                     rounded-[0.25rem]  font-bold px-[1rem] focus:ring-2 focus:ring-blue-500"
							/>
							<p className="text-red-600 font-bold text-[1rem] text-center">
								{mailError ||
									errors?.email?.message ||
									(errors.length > 1 && errors)}
							</p>
						</div>

						<div className="flex flex-col w-[80vw] md:w-[60%] lg:w-[40%]">
							{/* Phone */}
							{/* <label
								htmlFor="phone"
								className="font-bold leading-[1rem] tracking-[0.02rem] text-[1.2rem] 
                     mt-[3rem]  mb-[0.5rem]">
								Phone Number
							</label>
							<PhoneInput
								country={"ke"}
								value={phone}
								onChange={handlePhoneChange}
								inputProps={{
									required: true,
								}}
								inputStyle={{
									width: "100%",
									border: "1px solid black",
									color: "#8B5CF6",
									fontWeight: "bold",
									fontSize: "1.2rem",
								}}
							/> */}
						</div>
					</div>

					{/*......................................
                  *
                  *PASSWORD and confirm password
                  *
                  ......................................*/}
					<div className="flex flex-col lg:flex-row gap-[0rem] md:gap-[2rem]">
						<div className="flex flex-col w-[80vw] md:w-[60%] lg:w-[40%]">
							<label
								htmlFor="pass"
								className="font-bold leading-[1rem] tracking-[0.02rem] text-[1.2rem] mt-[3rem] 
                     mb-[0.5rem]">
								Password
							</label>
							<input
								onChange={handleChange}
								value={password}
								type="password"
								id="pass"
								className="border-[0.0625rem] border-black-70 h-[2.25rem] outline-none
                      text-blue-20  rounded-[0.25rem] font-bold px-[1rem] focus:ring-2
                       focus:ring-blue-500"
							/>
							<p className="text-red-600 font-bold text-[1rem] text-center">
								{passError || errors?.password?.message}
							</p>
						</div>

						<div className="flex flex-col w-[80vw] md:w-[60%] lg:w-[40%]">
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
								className="border-[0.0625rem] border-black-70 h-[2.25rem] outline-none
                      text-blue-20  rounded-[0.25rem] font-bold px-[1rem] focus:ring-2
                       focus:ring-blue-500"
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
						passError.length > 1 ||
						mailError.length > 1 ||
						load ||
						phoneErr.length > 0 ||
						phone.length < 4 ||
						confirmPassword !== password
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
