import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { searchInput } from "../store/Search";

const useSearch = () => {
	const [input, setInput] = useState<string>("");
   const setSearchInput = useSetRecoilState(searchInput);
   
	const handleChange = (e: any) => {
		setInput(e.target.value);
      setSearchInput(e.target.value);
	};

	return { handleChange, input,setInput };
};

export default useSearch;
