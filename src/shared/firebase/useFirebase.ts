import { getDownloadURL, ref, uploadBytesResumable } from "@firebase/storage";
import { updateDoc,doc } from "firebase/firestore";
import { storage } from "shared/firebase";
import Swal from "sweetalert2";

const useFirebase = () => {
	const uploadToFireBase = async (img: any, folder: string, callback: any) => {
		//create a storage ref
		const storageRef = ref(storage, `/${folder}/${img.name}`);
		const uploadTask = uploadBytesResumable(storageRef, img);

		try {
			 await uploadTask.on(
				"state_changed",
				(snapshot) => {
					Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
				},
				(err) =>
					Swal.fire({
						icon: "error",
						text: "error uploading profile photo",
					}),
				async () => {
					try {
						let url = await getDownloadURL(uploadTask.snapshot.ref);
						callback(url);
					} catch (error) {}
				}
			);
		} catch (error) {
			Swal.fire({
				icon: "error",
				text: "error uploading profile photo",
			});
		}
	};

   const changeImage = (img: string, folder:string,callback:any) => {
      const storageRef = ref(storage,folder);
   }

	return { uploadToFireBase };
};

export default useFirebase;
