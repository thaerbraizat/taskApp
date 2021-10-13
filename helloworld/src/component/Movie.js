import React, { useEffect, useState,useContext } from "react";


import { Card, Row, Col } from 'react-bootstrap'
import { LoginContext } from './context/context';



function TopRated(props) {
    // const loginContext = useContext(LoginContext);

    
    const [details, setDetails] = useState([]);
    const [detailsShow, setDetailsShow] = useState(false);


    useEffect(() => {
     
        setDetails(JSON.parse(localStorage.getItem('data')));
       
        setDetailsShow(true)
    }, []);

      console.log("testpicked", details);
    return (
      <>
          
                   

                        <div >
                      
                            <h1 style={{paddingTop:"140px" ,fontFamily:"monospace"}}> Details</h1>
                            <Row xs={1} md={2} className="g-4"   >
    
                                {  details&&  detailsShow&&
                                  
                                    <>
                                        <Card>
                                        <Col>
                                        <h3 style={{textAlign:"center",fontSize:"20px"}}> title : {details.original_title}</h3>
                                            
                                               
    
                                                <div class="product-image">
                                                    <img src={`https://image.tmdb.org/t/p/w500${details.poster_path}`} alt="" />
                                                    <div class="info">
                                                       
                                                        <ul>
                                                            <li>overview: {details.overview}</li>
                                                        
                                                              
                                                        
                                    
                                        
    
                                                        </ul>
                                                    </div>
                                                </div>
    
                                            
    
                                        </Col>
                                        </Card>
                                    </>
                                    
                                }
                            </Row>
                   
    
                    </div>
                 
                    
                
       
     
        </>
    );
}


export default TopRated
