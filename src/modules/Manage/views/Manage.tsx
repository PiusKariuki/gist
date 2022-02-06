import React from "react";
import Navbar from "../components/Navbar";
import useManage from "../Hooks/useManage";

const CreateShop: React.FC = (): JSX.Element => {
	const {
		shopName,
		email,
		location,
		desc,
		img,
		phone,
		createShop,
		handleChange,
		phoneErr,
		mailError,
	} = useManage();
	return (
		<div className="flex flex-col ">
			<Navbar />
			<form
				action=""
				onSubmit={createShop}
				className="py-[2rem] flex flex-col px-[2rem] gap-y-[0.5rem]">
				<p className="text-[1.6rem] text-black-80 text-center">
					Create Your Shop
				</p>
				{/* shop Name */}
				<label
					htmlFor="shopName"
					className="font-bold leading-[1rem] tracking-[0.02rem] text-[0.9rem] mt-[2rem] ">
					Shop Name
				</label>
				<input
					onChange={handleChange}
					value={shopName}
					required
					type="text"
					id="shopName"
					className="border-[0.0625rem] border-black-70 h-[2.25rem] outline-none text-blue-20
               rounded-[0.25rem] font-[600] text-[1.3rem] tracking-wide px-[1rem] 
               focus:ring-2 focus:ring-blue-500"
				/>
				{/* location */}
				<label
					htmlFor="location"
					className="font-bold leading-[1rem] tracking-[0.02rem] text-[0.9rem] pt-[2rem] ">
					Location
				</label>
				<input
					onChange={handleChange}
					required
					type="text"
					id="location"
					className="border-[0.0625rem] border-black-70 h-[2.25rem] outline-none text-blue-20
               rounded-[0.25rem] font-[600] text-[1.3rem] tracking-wide px-[1rem] 
               focus:ring-2 focus:ring-blue-500"
				/>
				{/* shop email */}
				<label
					htmlFor="email"
					className="font-bold leading-[1rem] tracking-[0.02rem] text-[0.9rem] pt-[2rem] ">
					Shop email
				</label>
				<input
					onChange={handleChange}
					value={email}
					required
					type="text"
					id="email"
					className="border-[0.0625rem] border-black-70 h-[2.25rem] outline-none text-blue-20
               rounded-[0.25rem] font-[600] text-[1.3rem] tracking-wide px-[1rem] 
               focus:ring-2 focus:ring-blue-500"
				/>
				<p className="text-red-20">{mailError}</p>
				{/* Phone Number */}
				<label
					htmlFor="phone"
					className="font-bold leading-[1rem] tracking-[0.02rem] text-[0.9rem] pt-[2rem] ">
					Shop Telephone
				</label>
				<input
					onChange={handleChange}
					value={phone}
					required
					type="tel"
					id="phone"
					className="border-[0.0625rem] border-black-70 h-[2.25rem] outline-none text-blue-20
               rounded-[0.25rem] font-[600] text-[1.3rem] tracking-wide px-[1rem] 
               focus:ring-2 focus:ring-blue-500"
				/>
				<p className="text-red-20">{phoneErr}</p>
				<div className="flex flex-col md:flex-row">
					{/* img */}
					<div className="flex flex-col">
						<label
							htmlFor="img"
							className="font-bold leading-[1rem] tracking-[0.02rem] text-[0.9rem] pt-[2rem]">
							Profile Photo
						</label>
						<input
							onChange={handleChange}
							value={img}
							required
							type="file"
							id="img"
							className="border-[0.0625rem] border-black-70 h-[2.25rem] outline-none 
                     text-blue-20 rounded-[0.25rem] font-[600] text-[1.3rem] tracking-wide px-[1rem] 
                     focus:ring-2 
                     focus:ring-blue-500"
						/>
						{/* display div */}
						<div style={{ backgroundImage: `url(/img/${img})` }} />
					</div>

					{/* text area */}
					<label
						htmlFor="desc"
						className="font-bold leading-[1rem] tracking-[0.02rem] text-[0.9rem] pt-[2rem] ">
						First Name
					</label>
					<input
						onChange={handleChange}
						value={desc}
						required
						type="text"
						id="desc"
						className="border-[0.0625rem] border-black-70 h-[2.25rem] outline-none text-blue-20
               rounded-[0.25rem] font-[600] text-[1.3rem] tracking-wide px-[1rem] 
               focus:ring-2 focus:ring-blue-500"
					/>
				</div>
				{/* button */}
				<button
					className="bg-red-20 px-[2rem] py-[1.5rem] w-[12rem] rounded-lg
            self-center text-white text-[1.4rem] font-[700]">
					Submit
				</button>
			</form>
		</div>
	);
};

export default CreateShop;
