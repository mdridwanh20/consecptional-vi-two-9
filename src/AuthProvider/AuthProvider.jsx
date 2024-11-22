import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'
import { auth } from '../Firebase/Firebase.config'
import { GoogleAuthProvider } from 'firebase/auth'
export const authContext = createContext()

export default function AuthProvider({ children }) {
    const provider = new GoogleAuthProvider();

    // use statute 
    const [user, setUser] = useState(null)
    console.log(user);

    const [loading, setLoading] = useState(true)
    
    // Create a password-based account;
    const handlerSignUp = (email, password) =>{
       return createUserWithEmailAndPassword(auth, email, password);
    }
    // Sign in a user with an email address and password
    const handlerLogin = (email, password) =>{
       return signInWithEmailAndPassword(auth, email, password);
    }
    // sign out;
    const handlerSignOut =() =>{
       return signOut(auth);
    }

    // update profile;
    const manageProfile = (name, image) =>{
       return updateProfile(auth.currentUser, {
            displayName: name, photoURL: image
        })
    }

    // google provider;
    const handlerGoogleLogin = () =>{
        signInWithPopup(auth,provider)

        // .then((result) => {
        //     console.log("User signed in:", result.user);
        //     setUser(result.user); // Save the signed-in user
        // })
        // .catch((error) => {
        //     console.error("Error during Google login:", error.message);
        // });
    }

    const authInfo ={
        handlerGoogleLogin,
        handlerSignUp,
        handlerLogin,
        handlerSignOut,
        manageProfile,
        user,
        setUser,
        loading
    };


    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser)

            if (currentUser) {
                setUser(currentUser)
            } else{
                setUser(null)
                
            } setLoading(false)

            return () =>{
                unsubscribe()
            } 
        })
    } ,[])


    return (
        <div>
            <authContext.Provider value={authInfo}>
                {children}
            </authContext.Provider>
        </div>
    )
}

