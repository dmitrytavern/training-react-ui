import { createContext, useContext } from "react";

function noop() {}
export const AuthContext = createContext({
	onLogin: noop,
	onRegister: noop,
})

export default function useAuthContext() {
	return useContext(AuthContext)
}