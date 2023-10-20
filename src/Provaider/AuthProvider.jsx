import {createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../Firebase/firebase.config";
import { GithubAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";


export const AuthContex = createContext(null)
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loader,setLoader]=useState(true)

    // google login
    const googleLogin =()=>{
       return signInWithPopup(auth, googleProvider)
    }
    // github login
    const githubLogin=()=>{
        return signInWithPopup(auth,githubProvider)
    }



// sing up
const register=(email, password)=>{
    setLoader(true)
    return createUserWithEmailAndPassword(auth,email,password)

}
// login
const login =(email,password)=>{
    setLoader(true)
    return signInWithEmailAndPassword(auth,email,password)
}
// logOut
const logout=()=>{
    setLoader(true)
    return signOut(auth)
}

useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
        // console.log('user in the state change', user);
        setUser(currentUser)
        setLoader(false)

    })
    return () => {
        unSubscribe()
    }
}, [])

    const authInfo={
        register,
        login,
        logout,
        user,
        loader,
        googleLogin,
        githubLogin
    }
    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes = {
    children: PropTypes.node
}