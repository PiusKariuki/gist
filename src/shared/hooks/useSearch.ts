import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { searchInput } from "../store/Search";
import { useNavigate } from "react-router-dom";


const useSearch = () => {
	const [input, setInput] = useState<string>("");
   const setSearchInput = useSetRecoilState(searchInput);
   let navigate = useNavigate();
   
	const handleChange = (e: any) => {
		setInput(e.target.value);
      setSearchInput(e.target.value);
      // if(e.target.value ==="")
      //    navigate("/")
	};

	return { handleChange, input,setInput };
};

export default useSearch;
