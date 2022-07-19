import React from "react";
import { Result } from "antd";
import { Link } from "react-router-dom";
const NotFound = () => {
	return (
		<Result
			status="404"
			title="404"
			subTitle="Sorry, the page you visited does not exist."
			extra={
				<Link to="/">
					<button className="bg-sky-600 text-white px-3 py-1 hover:bg-sky-500 rounded-md">
						Back Home
					</button>
				</Link>
			}
		/>
	);
};

export default NotFound;
