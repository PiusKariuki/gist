import moment from "moment";
import React, { useEffect, useState } from "react";

const Dates: React.FC<{ date: any }> = ({ date }) => {
  const [formatted, setFormmated] = useState<any>("");
  const [formattedtime, setFormmatedTime] = useState<any>("");

  useEffect(() => {
    //  console.log(moment(date).calendar());
    setFormmated(moment(date).calendar().split(" at")[0]+" at");
    setFormmatedTime(moment(date).calendar().split(" at")[1]);

   //  console.log(moment(date).calendar().split(" at")[0]);
   //  console.log(moment(date).calendar().split(" at")[1]);
	 ;
  }, [date]);

  return (
    <div className="absolute  w-full top-5 left-2 z-20">
      <p className="text-base font-black text-blue-20">
			  {date > 0 && formatted}
			  <br/>
        {date > 0 && formattedtime}
      </p>
    </div>
  );
};

export default Dates;
