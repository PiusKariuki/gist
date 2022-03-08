export const getBase64 = (file: any) => {
	return new Promise((resolve, rejected) => {
		let baseURL: any = "";
		let i = new Image();

		i.onload = () => {
			if (i.width < 2000 && i.height < 2000){
            resolve(baseURL);
         } 
			else {
				rejected("Image size is too large");
			}
		};

		// Make new FileReader
		let reader = new FileReader();

		// Convert the file to base64 text
		reader.readAsDataURL(file);

		// on reader load somthing...
		reader.onload = () => {
			// Make a fileInfo Object
			baseURL = reader.result;
			i.src = baseURL;
		};
	});
};
