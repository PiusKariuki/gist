import moment from "moment";
import React, { useEffect, useState } from "react";

const Dates: React.FC<{ date: any }> = ({ date }) => {
	const [formatted, setFormmated] = useState<any>("");
	const [formattedtime, setFormmatedTime] = useState<any>("");

	useEffect(() => {
		console.log(moment(date).calendar().split(" at").length);
		console.log(moment(date).calendar().split(" at").length);

		setFormmated(
			moment(date).calendar().split(" at").length > 1
				? moment(date).calendar().split(" at")[0] + " at"
				: moment(date).format("MMM Do, YYYY")
		);
		setFormmatedTime(moment(date).calendar().split(" at")[1]);
	}, [date]);

	return (
		<div className="absolute  w-full top-5 left-2 z-20">
			<p className=" font-black text-blue-20 ">
				<span className="text-lg">{date > 0 && formatted}</span>
				<br />
				<span className="text-3xl">&nbsp;{date > 0 && formattedtime}</span>
			</p>
		</div>
	);
};

export default Dates;
