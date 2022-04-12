import React, { useRef } from "react";
import useSpinner from "shared/components/spinner/useSpinner";
import useEditProfile from "../../Hooks/profile/useEditProfile";
import "shared/styles/phoneInput.css";
import PhoneInput from "react-phone-number-input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

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
		phone,
		handlePhoneChange,
		handleSubmit,
		confirmPassword,
		img,
		setImg,
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
				Edit profile
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
						<label htmlFor="fname" className="labels">
							First Name
						</label>
						<input
							autoComplete="off"
							onChange={handleChange}
							value={fname}
							required
							type="text"
							id="fname"
							name="fname"
							className="inputs"
						/>
					</div>

					<div className="flex flex-col w-[80vw] md:w-[80%] lg:w-[40%]">
						{/* lname */}
						<label htmlFor="lname" className="labels">
							Last Name
						</label>
						<input
							autoComplete="off"
							onChange={handleChange}
							value={lname}
							required
							type="text"
							id="lname"
							name="lname"
							className="inputs"
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
						<label htmlFor="bio" className="labels">
							Bio
						</label>
						<textarea
							autoComplete="off"
							onChange={handleChange}
							value={bio}
							required
							id="bio"
							rows={3}
							cols={6}
							className="textarea"
						/>
					</div>
					<div className="flex flex-col w-[80vw] md:w-[80%] lg:w-[40%]">
						<label htmlFor="userName" className="labels">
							Username
						</label>
						<input
							autoComplete="off"
							onChange={handleChange}
							value={userName}
							required
							type="text"
							id="userName"
							className="inputs"
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
						<label htmlFor="email" className="labels">
							Email Address
						</label>
						<input
							autoComplete="off"
							onChange={handleChange}
							value={email}
							required
							type="text"
							id="email"
							name="email"
							className="inputs"
						/>
					</div>

					<div className="flex flex-col w-[80vw] md:w-[80%] lg:w-[40%]">
						{/* Phone */}
						<label htmlFor="phone" className="labels">
							Phone Number
						</label>
						<PhoneInput
							autoComplete="off"
							country={"ke"}
							value={phone}
							onChange={handlePhoneChange}
							className="inputs"
						/>
					</div>
				</div>

				{/*......................................
               *BTN AND IMAGE
            ......................................*/}
				<div className="flex flex-col my-[2rem] space-y-10">
					{img?.length > 0 ? (
						<div className="flex relative">
							<img
								src={img}
								className=" flex  w-[14rem] h-[14rem] md:w-[14rem] md:h-[14rem]
                        rounded-full object-scale-down border-2"
								onError={({ currentTarget }) => {
									currentTarget.onerror = null;
									currentTarget.src = "/img/picture.png";
								}}
							/>
							<FontAwesomeIcon
								onClick={() => setImg("")}
								icon={faTrash}
								size="1x"
								className="absolute bottom-[0%] left-[70%] md:left-[30%] lg:left-[20%]
                         opacity-90 text-red-500 translate-x-[-50%] translate-y-[-50%]
                          transform-gpu z-20"
							/>
						</div>
					) : (
						<button
							type="button"
							className="bg-blue-40 w-[14rem] px-[1rem] py-[0.1rem]
                     mt-auto rounded-md font-[600] text-white"
							onClick={handleClick}>
							Upload profile photo
						</button>
					)}

					<input
						onChange={handleChange}
						ref={hiddenInput}
						type="file"
						id="img"
						accept="image/*"
						className="hidden"
					/>
					{/* img */}
				</div>
			</div>

			<div className="mt-[1rem]">{renderSpinner(load)}</div>
			<button
				disabled={
					passError.length > 1 ||
					mailError.length > 1 ||
					load ||
					phone?.length < 4 ||
					confirmPassword !== password ||
					img?.length < 1
				}
				type="submit"
				className="bg-blue-20 py-[0.2rem] mt-[3rem]  text-white text-[1.4rem] rounded-lg
            font-bold w-[14rem] hover:bg-blue-600 self-start disabled:bg-gray-400">
				Update
			</button>
		</form>
	);
};

export default EditProfile;
