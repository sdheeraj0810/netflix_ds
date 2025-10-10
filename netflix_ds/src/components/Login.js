import { useRef, useState } from "react";
import Header from "./Header";
import { validateData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import {bgURL, picURL} from "../utils/constants"

const Login=()=>{
    const [isLogin,setIsLogin]=useState(true);
    const [errorMessage,seterrorMessage]=useState('');
    const email=useRef(null);
    const password=useRef(null);
    const fullname=useRef(null);

    const handleSubmit=(e)=>{
        e.preventDefault();
        const validDataMSG=validateData(email.current.value, password.current.value);
        seterrorMessage(validDataMSG);
        if(validDataMSG!="") return;
        if(isLogin) {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;                
                seterrorMessage('Signed in successfully.');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                seterrorMessage(errorCode + " - " + errorMessage);
            });
        }
        else {
            //sign up
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                
                updateProfile(user, {
                displayName: fullname.current.value, photoURL: picURL
                    }).then(() => {
                        seterrorMessage('Signed up successfully.');
                    }).catch((error) => {
                    // An error occurred
                    alert('error');
                });                
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                seterrorMessage(errorCode + " - " + errorMessage);
            });
        }
        
    };

    return(
        <div>
            <Header />
            <div className="absolute">
                <img src={bgURL} />            
            </div>    
            <div className="flex justify-center pt-20 flex-col items-center">
                <div className="p-12 bg-black/70 relative w-4/12">
                    <form className="flex flex-col">
                        <h1 className="text-2xl font-bold text-white mb-8">{isLogin ? "Sign in" : "Sign up"}</h1>
                        {!isLogin && (
                        <input type="text" ref={fullname} placeholder="Full name" className="p-2 mb-4 bg-gray-200 "  ></input>
                        )}
                        <input type="text" ref={email} placeholder="Email address" className="p-2 mb-4 bg-gray-200 "  ></input>
                        <input type="password" ref={password} placeholder="Password" className="p-2 mb-4 bg-gray-200" ></input>
                        <p className="text-red-400 text-l">{errorMessage}</p>
                        <button className="my-4 px-6 py-2 bg-red-800 text-white cursor-pointer" onClick={handleSubmit}>{isLogin ? "Sign in" : "Sign up"}</button>
                    </form>
                
                    <div className="flex flex-row z-1">
                    <p className="text-white">{isLogin ? "New to Netflix ?" : "Alread a user?"}</p> <a className="ml-4   underline text-white cursor-pointer" onClick={()=>{
                        setIsLogin(!isLogin);
                    }}>{isLogin ? "Sign up now" : "Sign in"}</a>
                    </div>
                </div>
            </div>    
        </div>
    );
}

export default Login;