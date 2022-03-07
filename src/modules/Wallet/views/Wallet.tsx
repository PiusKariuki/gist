import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import useSpinner from "shared/components/spinner/useSpinner";
import { user } from "shared/recoil/user";
import useWallet from "../hooks/useWallet";

const Wallet = () => {
	const { wallet } = useRecoilValue<any>(user);
	const { getTransactionsByUserID, load, transactions } = useWallet();
	const { renderSpinner } = useSpinner();
	useEffect(() => {
		getTransactionsByUserID();
	}, []);
	return (
		<div className="flex flex-col px-[2rem] py-[3rem] space-y-10 ">
			<div
				className="flex flex-col bg-gray-20 text-white rounded-2xl space-y-3 items-center 
            w-full md:w-[30vw] py-[0.5rem] md:ml-8 ">
				<p className="text-[1.2rem] md:text-[1.4rem] font-[500]">
					Wallet balance
				</p>
				<p className="text-[1rem] md:text-[1.2rem] font-[700]">
					GC {wallet || 0}
				</p>
			</div>
			{renderSpinner(load)}
			<p className="text-red-20 text-[1.1rem] md:text-[1.3rem] ml-8 font-[700]">
				Your transactions
			</p>
			<div
				className="flex flex-col md:flex-row flex-wrap gap-y-10 gap-x-10 items-center 
           ">
				{transactions?.map((trans: any, key: number) => (
					<div
						key={key}
						className="flex flex-col shadow-lg px-[2rem] py-[1rem] h-[8rem] w-[80vw]
                  md:w-[40vw] lg:w-[25vw] md:h-[10rem] justify-center space-y-6 
                  rounded-xl">
						<p className="text-[1rem] md:text-[1.1rem]">
							{new Date(trans.createdAt).toLocaleString()}
						</p>
						<div className="flex flex-row justify-between space-x-10">
							<p className="text-[1rem] md:text-[1.1rem] font-[700]">
								{trans.reason}
							</p>
							<p className="text-[1rem] text-red-20 md:text-[1.1rem] font-[700]">
								GC {trans.amount}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Wallet;
