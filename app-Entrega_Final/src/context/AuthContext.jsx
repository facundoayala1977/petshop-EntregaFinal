import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import { db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";

export const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [usuario, setUsuario] = useState(null);
    const [esAdmin, setEsAdmin] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, async (user) => {

            setUsuario(user);

            if (user) {

                try {

                    const usuarioRef = doc(db, "usuarios", user.uid);

                    const usuarioSnap = await getDoc(usuarioRef);

                    if (usuarioSnap.exists()) {

                        setEsAdmin(usuarioSnap.data().admin);

                    } else {

                        setEsAdmin(false);

                    }

                } catch (error) {

                    console.error(error);

                    setEsAdmin(false);

                }

            } else {

                setEsAdmin(false);

            }

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
                esAdmin,
                cerrarSesion
            }}
        >
            {!loading && children}
        </AuthContext.Provider>
    );
}