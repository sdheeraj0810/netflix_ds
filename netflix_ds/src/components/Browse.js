import { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../utils/hooks/useNowPlayingMovies";
import MainContainer from "./Maincontainer";
import CardsContainer from "./CardsContainer";


const Browse=()=>{
    useNowPlayingMovies();
    return(
        <div>     
            <Header />       
            <MainContainer />
            <CardsContainer />
        </div>
    );
}

export default Browse;