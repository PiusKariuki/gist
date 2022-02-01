const useSpinner = () => {
	const renderSpinner = (load: boolean) => {
		return (
			<div
				className={`${load? "flex justify-center items-center": "hidden"}`}>
				<div className="animate-spin rounded-full h-[4rem] w-[4rem] border-b-[0.2rem] 
                border-green-40"></div>
			</div>
		);
	};

	return { renderSpinner };
};

export default useSpinner;
