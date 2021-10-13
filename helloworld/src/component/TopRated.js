import React, { useEffect, useContext } from "react";


import { Card, Row, Col } from 'react-bootstrap'
import { LoginContext } from './context/context';



function TopRated(props) {
    const loginContext = useContext(LoginContext);



   

   useEffect(() => {
    loginContext.getTopRated();

      }, []);
      
    return (
      <>
          
                   

                        <div >
                      
                            <h1 style={{paddingTop:"140px" ,fontFamily:"monospace"}}> Top Rated movies</h1>
                            <Row xs={1} md={2} className="g-4"   >
    
                                {loginContext.topRated.results &&
                                   loginContext.topRated.results.map((movie, idx) =>
                                    (<>
                                        <Card>
                                        <Col>
                                        <h3 style={{textAlign:"center",fontSize:"20px"}}> title : {movie.original_title}</h3>
                                            <div id="container">
                                                <div class="product-details">
                                                    <h1> release_date:{movie.release_date}</h1>
                                                    <p class="information">vote_average :{movie.vote_average}</p>
                                                </div>
    
                                                <div class="product-image">
                                                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
                                                    <div class="info">
                                                        <h2>  {movie.original_title}</h2>
                                                        <ul>
                                                            <li>genre_ids : {movie.genre_ids[0]}</li>
                                                        
                                                              
                                                        
                                    
                                        
    
                                                        </ul>
                                                    </div>
                                                </div>
    
                                            </div>
    
                                        </Col>
                                        </Card>
                                    </>
                                    ))
                                }
                            </Row>
                   
    
                    </div>
                 
                    
                
       
     
        </>
    );
}


export default TopRated
