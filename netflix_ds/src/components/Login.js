import { useState } from "react";
import Header from "./Header";

const Login=()=>{
    const [isLogin,setIsLogin]=useState(true);

    return(
        <div>
            <Header />
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/bebd95d0-65f9-41a9-9d12-4794db63653e/web/IN-en-20250922-TRIFECTA-perspective_5e75cfb4-3797-4f17-866b-181ff91a51dd_large.jpg" />            
            </div>    
            <div className="flex justify-center pt-20 flex-col items-center">
                <div className="p-12 bg-black/70 relative w-4/12">
                    <form className="flex flex-col">
                        <h1 className="text-2xl font-bold text-white mb-8">{isLogin ? "Sign in" : "Sign up"}</h1>
                        {!isLogin && (
                        <input type="text" placeholder="Full name" className="p-2 mb-4 bg-gray-200 "  ></input>
                        )}
                        <input type="text" placeholder="Email address" className="p-2 mb-4 bg-gray-200 "  ></input>
                        <input type="password" placeholder="Password" className="p-2 mb-4 bg-gray-200" ></input>
                        <button className="my-4 px-6 py-2 bg-red-800 text-white cursor-pointer">{isLogin ? "Sign in" : "Sign up"}</button>
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