import moment from "moment";
import React, { useEffect, useState } from "react";

const Dates: React.FC<{ date: any }> = ({ date }) => {
	const [formatted, setFormmated] = useState<any>("");
	const [formattedtime, setFormmatedTime] = useState<any>("");

  useEffect(() => {
    console.log(moment(date).calendar().split(" at").length);

    setFormmated(
      moment(date).calendar().split(" at").length > 1
        ? moment(date).calendar().split(" at")[0] + " at"
        : moment(date).format("MMM Do, YYYY") + " at"
    );
    setFormmatedTime(moment(date).format("LT"));
  }, [date]);

	return (
    <div
      className="absolute  w-full top-0  z-20 left-0 bottom-0 z-20 bg-[rgba(0,0,0,.3)]
         w-full px-4 pt-2 rounded-b-md"
    >
      <p className=" font-black text-blue-20 ">
        <span className="text-lg text-white">{date > 0 && formatted}</span>
        <br />
        <span className="text-3xl text-white">
          &nbsp;{date > 0 && formattedtime}
        </span>
      </p>
    </div>
  );
};

export default Dates;
