import { createContext, useEffect, useState } from "react";
import config from "../../config";
import axios from "axios";

const AccountContext = createContext();

export const AccountProvider = ({ children }) => {
	return (
		<AccountContext.Provider
			value={{

			}}
		>
			{children}
		</AccountContext.Provider>
	);
};

export default AccountContext;
