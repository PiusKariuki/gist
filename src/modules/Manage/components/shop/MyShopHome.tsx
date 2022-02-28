import { faEdit} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {  useEffect } from "react";
import ViewMyShops from "./ViewMyShops";
import useShop from "../../Hooks/shop/useShop";
import { useNavigate } from "react-router-dom";
import useSpinner from "shared/components/spinner/useSpinner";

const MyShopHome = () => {
	const { myShops, load, getShopsByUserId } = useShop();
	let navigate = useNavigate();
	const { renderSpinner } = useSpinner();
	useEffect(() => {
		getShopsByUserId();
	}, []);

	return (
		<div className="flex flex-col md:px-[1.5rem] py-[3rem] w-full md:w-screen space-y-10">
			<button
				onClick={() => navigate(`/myAccount/shops/create`)}
				className="flex px-[1rem] py-[0.5rem] bg-blue-20 rounded-md text-white text-center
            text-[1.4rem] self-start">
				<FontAwesomeIcon
					icon={faEdit}
					size="1x"
					className="self-center mr-[1rem]"
				/>
				Create Shop
			</button>
			{renderSpinner(load)}
			<div
				className="flex flex-col md:flex-row md:justify-self-center gap-8 flex-wrap">
				{myShops?.length > 0}

				{myShops.map((shop: any, key: number) => (
					<div className="relative" key={key}>
						<ViewMyShops
							key={key}
							img={shop.image}
							name={shop.name}
							userName={shop.userId.userName}
							id={shop._id}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default MyShopHome;
