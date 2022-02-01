import React from "react";

const MobileSidebar: React.FC<{ open: boolean }> = ({ open }) => {
	return (
		<>
      {open?
			<div className="flex flex-col max-w-[50%]">
				<div className=""></div>
			</div>
         : 
         <img src="" alt="ham-btn" />
      }
		</>
	);
};

export default MobileSidebar;
