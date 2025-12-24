"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { Customer } from "@/lib/services/authService";
interface AuthContextType {
	customer: Customer | null;
	isAuthenticated: boolean;
	setCustomer: (user: Customer | null) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [customer, setCustomer] = useState<Customer | null>(null);

	useEffect(() => {
		const storedCustomer = localStorage.getItem("customer");
		if (storedCustomer) {
			setCustomer(JSON.parse(storedCustomer));
		}
	}, []);

	return (
		<AuthContext.Provider
			value={{
				customer,
				isAuthenticated: !!customer,
				setCustomer,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	const ctx = useContext(AuthContext);
	if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
	return ctx;
};
