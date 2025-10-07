import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import {logo} from "../utils/constants"

const Header=()=>{
    const navigate=useNavigate();
    const user=useSelector((store)=>store.user);  
    const dispatch= useDispatch();   

     useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const {uid,email, displayName,photoURL} = user;
            dispatch(addUser({uid:uid,email:email, displayName:displayName,photoURL:photoURL}));          
            navigate("/browse");  
            // ...
        } else {
            // User is signed out
            dispatch(removeUser());
            navigate("/"); 
        }
        });

        return ()=>unsubscribe();

    },[]);

    const handleSignOut=()=>{
        signOut(auth).then(() => {
            navigate("/");
        }).catch((error) => {
            // navigate("/error");
        });
    }

    return(
        <div className="z-1 absolute w-[100%] h-[80px] flex justify-between bg-gradient-to-b from-black p-10 items-center">
          <svg alt="logo" className="z-10 text-greeen-800 h-[35px] w-[150px] stroke-red-800 fill-red-800">{logo}</svg>
          { user!=null && 
          (<div className="flex gap-2">          
          <img alt="usericon" className="w-10 h-10" src={user.photoURL}></img>
          <button onClick={handleSignOut} className="text-white bg-red-800 py-1 px-2 cursor-pointer hover:bg-red-700">Sign out</button>
          </div>)          
          }
          </div>
    );
}

export default Header;