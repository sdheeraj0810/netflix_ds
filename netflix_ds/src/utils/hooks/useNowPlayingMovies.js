import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../movieSlice";
import { nowplayingURL, tmdbOptions } from "../constants";


const useNowPlayingMovies=()=>{
    const dispatch = useDispatch();
    const getNowPlayingMovies=async ()=>{
        const data=await fetch(nowplayingURL,tmdbOptions);
        const datajson=await data.json();      

        dispatch(addNowPlayingMovies(datajson.results));
    }

    useEffect(()=>{
        getNowPlayingMovies();
    },[]);
};

export default useNowPlayingMovies;