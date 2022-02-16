import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useRef, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const CreateShop: React.FC = (): JSX.Element => {
	const [open, setOpen] = useState(false);
	const box = useRef<any>();

	const clickAwayListener = (ref: any) => {
		useEffect(() => {
			const handleClick = (e: any) => {
				if (open && ref.current && ref.current.contains(e.target))
					setOpen((prev: boolean) => (prev ? !prev : prev));
			};
			document.addEventListener("mousedown", handleClick);

			return () => {
				// Cleanup the event listener
				document.removeEventListener("mousedown", handleClick);
			};
		}, [open]);
	};

	clickAwayListener(box);

	return (
		<div className="flex flex-col overflow-x-clip relative">
			<>
				{open ? (
					<div className="fixed right-0  min-h-screen z-50 bg-white">
						<Navbar open={open} setOpen={setOpen} />
					</div>
				) : (
					<FontAwesomeIcon
						icon={faBars}
						size="2x"
						color="blue"
						className="fixed right-8 top-6 z-50 bg-white"
						onClick={() => setOpen(true)}
					/>
				)}
			</>
			<div className="bg-white" ref={box}>
				<Outlet />
			</div>
		</div>
	);
};

export default CreateShop;
