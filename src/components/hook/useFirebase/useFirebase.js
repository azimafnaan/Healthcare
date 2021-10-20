import { useEffect, useState } from "react"

import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from "../../Login/Firebase/firebase.init";
initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();
    const signInUsingGoogle = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)

    }
    const logout = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        })
    }, [])

    return {
        user,
        logout,
        isLoading,
        signInUsingGoogle,
        setIsLoading


    }
}

export default useFirebase;