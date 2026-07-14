import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/config";

export const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [usuario, setUsuario] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (user) => {

            setUsuario(user);
            setLoading(false);

        });

        return () => unsubscribe();

    }, []);

    const cerrarSesion = async () => {

        try {

            await signOut(auth);

        } catch (error) {

            console.error(error);

        }

    };

    return (
        <AuthContext.Provider
            value={{
                usuario,
                cerrarSesion
            }}
        >
            {!loading && children}
        </AuthContext.Provider>
    );
}