import React, { lazy, Suspense, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider,createBrowserRouter,Outlet } from "react-router-dom";

const AppLayout= () => {    
    return (    
    <div className='app m-4'>    
    <h1 className='font-bold text-3xl text-green-800'>Hello Netflix</h1>
    </div>
    )
}


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />); 
