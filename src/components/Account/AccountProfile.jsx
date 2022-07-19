import { Descriptions } from "antd";
import { useContext } from "react";
import AuthContext from "../../contexts/Auth/AuthContext";

const AccountProfile = () => {
	const { user } = useContext(AuthContext);
	return (
		<div>
			<Descriptions title="Informasi User">
				<Descriptions.Item label="Nama">{user.full_name}</Descriptions.Item>
				<Descriptions.Item label="Email">{user.email}</Descriptions.Item>
			</Descriptions>
		</div>
	);
};

export default AccountProfile;
