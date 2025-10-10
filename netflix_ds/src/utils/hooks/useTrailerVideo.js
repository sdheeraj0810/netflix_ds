import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../movieSlice";
import { movieVideoURL, tmdbOptions } from "../constants";

const useTrailerVideo=(movieID)=>{
    const dispatch = useDispatch();
     const getMovieVideo= async ()=>{
        const data =await fetch(movieVideoURL+movieID+"/videos",tmdbOptions);
        const videoData=await data.json();        
        const trailers=videoData?.results?.filter((item)=>item.type=="Trailer");
        const trailer=trailers?.length==0 ? videoData?.results[0] : trailers[0];
        console.log(trailer);        
        dispatch(addTrailerVideo(trailer));
    }

    useEffect(()=>{
        getMovieVideo();
    },[]);
};

export default useTrailerVideo;