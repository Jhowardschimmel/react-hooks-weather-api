import React, { useState, useEffect } from 'react';
import API from "../../API/API.js";


function Card(props) {
    
    return (
        <div>
                <div className="card">
                    <img src="https://i.picsum.photos/id/1000/200/200" alt="random" >
                    </img>
                    <div className="container">
                        <h4><b>John Doe</b></h4>
                        <p>Architect & Engineer</p>
    

                    </div>
                </div>
            </div>
    );
}


export default Card;