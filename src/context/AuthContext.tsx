"use client";

import { AuthLogin } from "@/api";
import type { Login, User } from "@/api/interfaces/auth.interfaces";
import { createContext, useContext, useState, type ReactNode } from "react";

interface AuthContextType {
    user: User | null;
    login: (data: Login) => Promise<boolean>;
    logout: () => void;
    loading: boolean;
    error: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(() => {
        try {
            const storedUser = localStorage.getItem("user");
            return storedUser ? JSON.parse(storedUser) : null;
        } catch {
            return null;
        }
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const login = async (data: Login): Promise<boolean> => {
        setLoading(true);
        setError("");
        try {
            const response = await AuthLogin(data);

            if (response?.data.tokens?.access) {
                localStorage.setItem("accessToken", response.data.tokens.access);
                localStorage.setItem("refreshToken", response.data.tokens.refresh);
                localStorage.setItem("user", JSON.stringify(response.data.user));

                setUser(response.data.user);
                return true;
            } else {
                setError("Credenciais inválidas");
                return false;
            }
        } catch (err: any) {
            const message =
                err?.data?.detail ||
                err?.response?.data?.detail ||
                "Erro ao autenticar";
            setError(message);
            return false;
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("user");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading, error }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) throw new Error;
    return context;
};
