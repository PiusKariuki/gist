import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { searchInput } from "../Store/Search";
import { useNavigate } from "react-router-dom";

const useSearch = () => {
	const [input, setInput] = useState<string>("");
	const setSearchInput = useSetRecoilState(searchInput);
	let navigate = useNavigate();

	const handleChange = (e: any) => {
		setInput(e.target.value);
		setSearchInput(e.target.value);
		if (e.target.value.length > 0) navigate("/searching");
		else if (e.target.value.length === 0) navigate("/");
	};

	return { handleChange, input, setInput };
};

export default useSearch;
