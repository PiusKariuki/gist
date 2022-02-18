import React, { useRef } from "react";
import useSpinner from "shared/components/spinner/useSpinner";
import useEditProfile from "../../Hooks/profile/useEditProfile";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

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
		confirmPassword,
		img,
	} = useEditProfile();
	const { renderSpinner } = useSpinner();
	const hiddenInput = useRef<any>(null);

	const handleClick = () => {
		hiddenInput.current.click();
	};

	return (
		<form
			className="flex flex-col  gap-y-[0.1rem] w-full py-[5rem] px-[2rem] lg:px-[4rem]
          justify-around relative"
			autoComplete="off"
			onSubmit={handleSubmit}>
			<div
				className="invisible md:visible absolute w-[40rem] h-[40rem] top-0 left-0 
            bg-gray-100 -z-10 rounded-br-full"
			/>
			<p className="text-black-80 text-[1.4rem] md:text-[2rem] font-[700]">
				Edit your profile
			</p>
			<div className="flex flex-col w-screen ">
				{/*......................................
               *
               *names div
               *
               ......................................*/}
				<div className="flex flex-col lg:flex-row  gap-[0rem] md:gap-[2rem] items-start">
					<div className="flex flex-col w-[80vw] md:w-[80%] lg:w-[40%]">
						{/* fname */}
						<label
							htmlFor="fname"
							className="font-bold leading-[1rem] tracking-[0.02rem] text-[1.2rem] 
                     mt-[3rem]  mb-[0.5rem] text-black-80">
							First Name
						</label>
						<input
							onChange={handleChange}
							value={fname}
							required
							type="text"
							id="fname"
							name="fname"
							className="h-[2.25rem] outline-none 
                     text-blue-20 rounded-[0.25rem] font-bold px-[1rem] ring-2 
                     ring-blue-500"
						/>
					</div>

					<div className="flex flex-col w-[80vw] md:w-[80%] lg:w-[40%]">
						{/* lname */}
						<label
							htmlFor="lname"
							className="font-bold leading-[1rem] tracking-[0.02rem] text-[1.2rem] 
                     mt-[3rem] mb-[0.5rem] text-black-80">
							Last Name
						</label>
						<input
							onChange={handleChange}
							value={lname}
							required
							type="text"
							id="lname"
							name="lname"
							className="h-[2.25rem] outline-none 
                  text-blue-20 rounded-[0.25rem] font-bold px-[1rem] ring-2 
                  ring-blue-500"
						/>
					</div>
				</div>
				{/*......................................
               *
               *BIO and USERNAME
               *
               ......................................*/}
				<div className="flex flex-col lg:flex-row gap-[0rem] md:gap-[2rem] items-start">
					<div className="flex flex-col w-[80vw] md:w-[80%] lg:w-[40%]">
						<label
							htmlFor="bio"
							className="font-bold leading-[1rem] tracking-[0.02rem] text-[1.2rem] 
                        mt-[3rem] mb-[0.5rem] text-black-80">
							Bio
						</label>
						<textarea
							onChange={handleChange}
							value={bio}
							required
							id="bio"
							rows={3}
							cols={6}
							className=" outline-none text-blue-20
                        rounded-[0.25rem] font-bold px-[1rem] ring-2 ring-blue-500"
						/>
					</div>
					<div className="flex flex-col w-[80vw] md:w-[80%] lg:w-[40%]">
						<label
							htmlFor="userName"
							className="font-bold leading-[1rem] tracking-[0.02rem] text-[1.2rem] mt-[3rem] 
                  mb-[0.5rem] text-black-80">
							Username
						</label>
						<input
							onChange={handleChange}
							value={userName}
							required
							type="text"
							id="userName"
							className="h-[2.25rem] outline-none
                   text-blue-20 rounded-[0.25rem] font-bold px-[1rem] ring-2 
                   ring-blue-500"
						/>
					</div>
				</div>
				{/*......................................
            *
            *EMAIL AND PHONE NUMBER
            *
            ......................................*/}
				<div className="flex flex-col lg:flex-row gap-[0rem] md:gap-[2rem] items-start">
					<div className="flex flex-col w-[80vw] md:w-[80%] lg:w-[40%]">
						{/* email */}
						<label
							htmlFor="email"
							className="font-bold leading-[1rem] tracking-[0.02rem] text-[1.2rem] 
                     mt-[3rem]   mb-[0.5rem] text-black-80">
							Email Address
						</label>
						<input
							onChange={handleChange}
							value={email}
							required
							type="text"
							id="email"
							name="email"
							className="h-[2.25rem] outline-none 
                     text-blue-20
                     rounded-[0.25rem]  font-bold px-[1rem] ring-2 ring-blue-500"
						/>
					</div>

					<div className="flex flex-col w-[80vw] md:w-[80%] lg:w-[40%]">
						{/* Phone */}
						<label
							htmlFor="phone"
							className="font-bold leading-[1rem] tracking-[0.02rem] text-[1.2rem] 
                     mt-[3rem]  mb-[0.5rem] text-black-80">
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
								border: "2.5px solid rgb(59 130 246)",
								color: "#8B5CF6",
								fontWeight: "bold",
								fontSize: "1.2rem",
							}}
						/>
					</div>
				</div>

				{/*......................................
               *BTN AND IMAGE
            ......................................*/}
				<div className="flex flex-col lg:flex-row my-[2rem] md:gap-[2rem]">
					<div
						className="flex flex-row w-full  md:w-[80%] lg:w-[40%] md:mt-auto 
                  items-center relative">
						<img
							src={img}
							className={
								img.length < 1
									? "hidden"
									: " flex max-h-[14rem]  self-start top-[-300%] right-[0%]"
							}
						/>
					</div>

					<div
						className="flex flex-row w-[80vw]  md:w-[80%] lg:w-[40%] md:mt-auto 
                  items-center relative">
						{/* img */}
						<button
							type="button"
							className={`${
								img?.length > 1
									? "bg-white text-green-40 font-[700] "
									: "bg-blue-20 text-white text-[1.1rem] font-bold"
							}
                        w-full px-[4rem] md:px-[2rem] py-[0.4rem]
                         border-[0.2rem]  border-black-70 mt-[2rem] md:mt-0 rounded-md`}
							onClick={handleClick}>
							{img?.length < 1 ? (
								"Upload Image"
							) : (
								<FontAwesomeIcon icon={faCheck} size="2x" color="green" />
							)}
						</button>

						<input
							onChange={handleChange}
							// required
							ref={hiddenInput}
							// value={img}
							type="file"
							id="img"
							accept="image/png"
							className="hidden"
						/>
					</div>
				</div>
				{/*......................................
                  *
                  *PASSWORD and confirm password
                  *
                  ......................................*/}
				{/* <div className="flex flex-col lg:flex-row gap-[0rem] md:gap-[2rem]">
					<div className="flex flex-col w-[80vw] md:w-[80%] lg:w-[40%]">
						<label
							htmlFor="pass"
							className="font-bold leading-[1rem] tracking-[0.02rem] text-[1.2rem] mt-[3rem] 
                     mb-[0.5rem] text-black-80">
							Password
						</label>
						<input
							onChange={handleChange}
							value={password}
							type="password"
							id="pass"
							name="pass"
							className="h-[2.25rem] outline-none
                      text-blue-20  rounded-[0.25rem] font-bold px-[1rem] ring-2
                       ring-blue-500"
						/>
						<p className="text-red-600 font-bold text-[1rem] text-center">
							{passError || errors?.password?.message}
						</p>
					</div>

					<div className="flex flex-col w-[80vw] md:w-[80%] lg:w-[40%]">
						<label
							htmlFor="pass"
							className="font-bold leading-[1rem] tracking-[0.02rem] text-[1.2rem] mt-[3rem] 
                     mb-[0.5rem] text-black-80">
							Confirm Password
						</label>
						<input
							onChange={handleChange}
							value={confirmPassword}
							type="password"
							id="confirm"
							className="h-[2.25rem] outline-none
                      text-blue-20  rounded-[0.25rem] font-bold px-[1rem] ring-2
                       ring-blue-500"
						/>
						<p className="text-red-600 font-bold text-[1rem] text-center">
							{passError || errors?.password?.message}
						</p>
					</div>
				</div> */}
			</div>

			<div className="mt-[1rem]">{renderSpinner(load)}</div>
			<button
				disabled={
					passError.length > 1 ||
					mailError.length > 1 ||
					load ||
					phoneErr.length > 0 ||
					phone?.length < 4 ||
					confirmPassword !== password
				}
				type="submit"
				className="bg-blue-20 py-[0.5rem] mt-[3rem]  text-white text-[1.4rem] rounded-lg
               font-bold w-[12rem] hover:bg-blue-600 self-start disabled:bg-gray-400">
				Submit
			</button>
		</form>
	);
};

export default EditProfile;
