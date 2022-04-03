import {
	faChevronCircleLeft,
	faChevronCircleRight,
   faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useCart from "modules/Cart/hooks/useCart";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface Props {
	product: any;
}

const ActionBtns: React.FC<Props> = ({ product }) => {
	const [orders, setOrders] = useState<number>(1);
	const [variation, setVariation] = useState<any>(null);
	const { addToCart } = useCart();
   
	return (
		<div
			className="flex flex-col gap-x-[1rem] my-[2rem] gap-[1.5rem] mt-auto
         items-center self-start">
			{/* increase order */}
			<div
				className="inline-flex rounded-md shadow-sm border-[0.1rem]
            border-blue-20">
				<button
					onClick={() => setOrders((prev) => (prev === 0 ? 0 : prev - 1))}
					disabled={product.quantity === 0}
					type="button"
					className="px-[1.3rem] py-[0.5rem] font-[600] rounded-l-lg text-black-40">
					<FontAwesomeIcon
						icon={faChevronCircleLeft}
						size="2x"
						color="#33546D"
					/>
				</button>
				<button
					disabled={product.quantity === 0}
					type="button"
					className="px-[2rem] py-[0.5rem] font-[600] text-black-40 border-blue-20
                           border-x-[0.1rem]">
					{orders}
				</button>
				<button
					onClick={() =>
						setOrders((prev) => (prev === product?.quantity ? prev : prev + 1))
					}
					disabled={product.quantity === 0}
					type="button"
					className="px-[1.3rem] py-[0.5rem] font-[600] text-black-40 rounded-r-lg">
					<FontAwesomeIcon
						icon={faChevronCircleRight}
						size="2x"
						color="#33546D"
					/>
				</button>
			</div>
			<div className="flex flex-row space-x-4 self-start">
				<p className="font-[600] self-center">Variations:</p>
				{/* variants */}
				{product &&
					product?.variations?.map((variant: string, index: number) => (
						<button
							key={index}
							onClick={() =>
								setVariation(index)
							}
							type="button"
							className="text-blue-30 border-blue-30 border-2 px-4 py-1 rounded-3xl 
                     hover:bg-blue-30 hover:text-white font-[700]">
							{index === variation ? (
                        <FontAwesomeIcon
                        icon={faCircleCheck}
                        size="1x"
                        />
                     ): variant}
						</button>
					))}
			</div>

			<button
				disabled={orders === 0 || product?.quantity === 0 || variation ===null}
				onClick={() => {
					setOrders(1);
					addToCart(
						orders,
						product?.price,
						product?.images[0],
						product?.name,
						product?.shopId,
						product?._id,
						product?.ownerId,
                  product?.variations?.[variation],
						uuidv4()
					);
				}}
				className="blue-btn self-start px-[3rem] w-full">
				{product?.quantity === 0 ? "Out of stock" : "Add To Cart"}
			</button>
		</div>
	);
};

export default ActionBtns;
