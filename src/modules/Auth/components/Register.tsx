import React from "react";

const Register: React.FC = (): JSX.Element => {
	return (
		<div className="flex flex-row gap-x-[2.5rem]">
			<div className="hidden lg:flex lg:min-w-[25%] bg-green-60 lg:min-h-screen" />

			<form className="flex flex-col gap-y-[0.1rem] w-full pb-[7rem]">
				<p className="text-[1.8rem] font-medium">Create your account</p>
				{/* email */}
				<label
					htmlFor="email"
					className="font-bold leading-[1rem] tracking-[0.02rem] text-[0.9rem] mt-[3rem] 
               mb-[0.5rem]">
					Email Address
				</label>
				<input
					type="text"
					id="email"
					name="email"
					className="w-[50%] border-[0.0625rem] border-black-70 h-[2.25rem] outline-none
               rounded-[0.25rem]  font-bold px-[1rem] focus:ring-2 focus:ring-blue-500"
				/>
				{/* fname */}
				<label
					htmlFor="fname"
					className="font-bold leading-[1rem] tracking-[0.02rem] text-[0.9rem] mt-[3rem] mb-[0.5rem]">
					First Name
				</label>
				<input
					type="text"
					id="fname"
					name="fname"
					className="w-[50%] border-[0.0625rem] border-black-70 h-[2.25rem] outline-none
               rounded-[0.25rem] font-bold px-[1rem] focus:ring-2 focus:ring-blue-500"
				/>
				{/* lname */}
				<label
					htmlFor="lname"
					className="font-bold leading-[1rem] tracking-[0.02rem] text-[0.9rem] mt-[3rem] mb-[0.5rem]">
					Last Name
				</label>
				<input
					type="text"
					id="lname"
					name="lname"
					className="w-[50%] border-[0.0625rem] border-black-70 h-[2.25rem] outline-none
               rounded-[0.25rem] font-bold px-[1rem] focus:ring-2 focus:ring-blue-500"
				/>
				{/* title */}
				<label
					htmlFor="lname"
					className="font-bold leading-[1rem] tracking-[0.02rem] text-[0.9rem] mt-[3rem] mb-[0.5rem]">
					Job Title
				</label>
				<input
					type="text"
					id="title"
					name="title"
					className="w-[50%] border-[0.0625rem] border-black-70 h-[2.25rem] outline-none
               rounded-[0.25rem] font-bold px-[1rem] focus:ring-2 focus:ring-blue-500"
				/>
				{/* dept */}
				<label
					htmlFor="dept"
					className="font-bold leading-[1rem] tracking-[0.02rem] text-[0.9rem] mt-[3rem] mb-[0.5rem]">
					Department
				</label>
				<select
					name="dept"
					id="dept"
					className="w-[50%] border-[0.0625rem] border-black-70 h-[2.25rem] outline-none
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
					type="password"
					id="pass"
					name="pass"
					className="w-[50%] border-[0.0625rem] border-black-70 h-[2.25rem] outline-none
               rounded-[0.25rem] font-bold px-[1rem] focus:ring-2 focus:ring-blue-500"
				/>
				<label
					htmlFor="pic"
					className="font-bold leading-[1rem] tracking-[0.02rem] text-[0.9rem] mt-[3rem] mb-[0.5rem]">
					Profile photo
				</label>
				<input
					type="file"
					id="pic"
					name="pic"
					className="w-[50%]  h-[2.25rem] outline-none
               rounded-[0.25rem] font-bold "
				/>

				<button
					className="btn py-[0.5rem] mt-[3rem] max-w-[7rem] text-white text-[1.2rem]
            font-bold">
					Submit
				</button>
			</form>
		</div>
	);
};

export default Register;
