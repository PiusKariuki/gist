const useSpinner = () => {
	const renderSpinner = (load: boolean) => {
		return (
			<div
				className={`${load? "flex justify-center items-center": "hidden"}`}>
				<div className="animate-spin rounded-full h-[2.5rem] w-[2.5rem] border-b-[0.2rem] 
                border-green-40"></div>
			</div>
		);
	};

	return { renderSpinner };
};

export default useSpinner;
