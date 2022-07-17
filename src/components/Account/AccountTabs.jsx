import { Tabs } from "antd";
import AccountAddress from "./AccountAddress";
import AccountOrder from "./AccountOrder";
import AccountProfile from "./AccountProfile";
const { TabPane } = Tabs;

const AccountTabs = () => {
	return (
		<div className="card-container py-8 w-11/12 rounded-md">
			<Tabs type="card">
				<TabPane tab="Profil" key="1">
					<AccountProfile />
				</TabPane>
				<TabPane tab="Pemesanan" key="2">
					<AccountOrder />
				</TabPane>
				<TabPane tab="Alamat" key="3">
					<AccountAddress />
				</TabPane>
				<TabPane tab="Logout" key="4">
					<h1>Klik untuk Logout</h1>
					<button className="rounded-md bg-orange-400 hover:bg-amber-400 text-white px-6 py-2 border-orange-500 hover:border-orange-200 border">
						Logout
					</button>
				</TabPane>
			</Tabs>
		</div>
	);
};

export default AccountTabs;
