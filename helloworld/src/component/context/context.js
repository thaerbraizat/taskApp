import React, { useState, useEffect } from 'react';
import superagent from 'superagent';
import axios from 'axios';


export const LoginContext = React.createContext();



export default function LoginProvider(props) {

    // const [loggedIn, setLoggedIn] = useState(false);

    const [moviesData, setMoviesData] = useState([]);
    const [popular, setPopular] = useState([]);
    const [topRated, setTopRated] = useState([]);
    const [pickedMovie1, setPickedMovie1] = useState([]);




    const getMovies = async () => {

     
        let response = await axios
            .get(`https://api.themoviedb.org/3/movie/upcoming?api_key=f1b8d194dba80bd94de376afc7c19763`)
      
        let dataArr = await response.data
  
        setMoviesData(dataArr);

        



    }

    const getPopular = async () => {

        let response = await axios
        .get(`https://api.themoviedb.org/3/movie/popular?api_key=f1b8d194dba80bd94de376afc7c19763`)
  
 
    let dataArr = await response.data

    setPopular(dataArr);

    
    }
    const getTopRated = async (id) => {

      
        let response = await axios
        .get(`https://api.themoviedb.org/3/movie/top_rated?api_key=f1b8d194dba80bd94de376afc7c19763`)
  

    let dataArr = await response.data

    setTopRated(dataArr);
    }



    const state = {
        moviesData: moviesData,
        getMovies: getMovies,
        getTopRated:getTopRated,
        getPopular:getPopular,
        popular:popular,
        topRated:topRated,
        pickedMovie1:pickedMovie1,
        setPickedMovie1:setPickedMovie1

    }


    return (
        <LoginContext.Provider value={state}>
            {props.children}
        </LoginContext.Provider>
    )
}
