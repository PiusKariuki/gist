import React from "react";

const Register: React.FC = (): JSX.Element => {
	return (
		<form className="flex flex-col gap-y-[0.5rem] ">
			<p className="text-[1.2rem] font-medium">Create your account</p>
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
		</form>
	);
};

export default Register;
