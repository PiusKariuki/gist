import React, { useState } from "react";
import useRequest from "shared/http/useRequest";
import Swal from "sweetalert2";

const useRoom = () => {
	const { Axios } = useRequest();
	const [rooms, setRooms] = useState<any>([""]);
	const [room, setRoom] = useState<any>("");
	const [load, setLoad] = useState<boolean>(false);

	const getAllRooms = async () => {
		setLoad(true);
		try {
			let { data } = await Axios.get("/rooms");
			setRooms(data);
			setLoad(false);
		} catch (error) {
			setLoad(false);
			// Swal.fire({
			// 	icon: "error",
			// 	text: "something went wrong",
			// 	timer: 1500,
			// });
		}
	};

	const getRoomById = async (roomId: any) => {
		setLoad(true);
		try {
			let { data } = await Axios.get(`/rooms/rooms/${roomId}`);
			setRoom(data);
			setLoad(false);
		} catch (error) {
			setLoad(false);
			// Swal.fire({
			// 	icon: "error",
			// 	text: "something went wrong",
			// 	timer: 1500,
			// });
		}
	};
	return { room, load, getRoomById,rooms,getAllRooms };
};

export default useRoom;
