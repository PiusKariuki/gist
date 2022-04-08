import { useState } from "react";

interface Props {
	data: [{}];
	actions: string[];
	handler: (action: string,target:string) => void;
}

const useTable = () => {
	/*..........target variable to store selected item ...........*/
	const [target, setTarget] = useState<any>("");

	const populate = (
		data: Props["data"],
		actions: Props["actions"],
		handler: Props["handler"]
	) =>
		data.map((obj: any) =>
			Object.assign(obj, {
				actions: actions.map(
					(action: any, key: number): JSX.Element => (
						<button
							key={key}
							id={obj.name}
							value={obj._id}
							onClick={(e) => {
								setTarget(obj._id);
								handler(action,obj._id);
							}}
							className="blue-btn mx-4 my-4 flex-shrink-0">
							{action}
						</button>
					)
				),
			})
		);

	return { populate, target};
};

export default useTable;
