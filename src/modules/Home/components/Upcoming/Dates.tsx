import moment from "moment";
import React, { useEffect, useState } from "react";

const Dates: React.FC<{ date: any }> = ({ date }) => {
	const [formatted, setFormmated] = useState<any>("");

	useEffect(() => {
		console.log(moment(date).calendar());
      setFormmated(moment(date).endOf('day').fromNow());	
	}, [date]);

	return (
		<div className="absolute  w-full top-5 left-2 z-20">
			<p className="text-base font-black text-blue-20">{date > 0 && formatted}</p>
		</div>
	);
};

export default Dates;
