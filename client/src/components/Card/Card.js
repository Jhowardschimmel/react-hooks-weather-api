import React, { useState, useEffect } from 'react';
import API from "../../API/API.js";


function Card(props) {
    const [weatherObject, setWeatherObject] = useState({})
    
    useEffect(() => {
        API.getWeather().then((res) => {

            // const weather = {
            //     localWeather: res.weather[0].main,
            //     city: res.city
            // };
            setWeatherObject(res.weatherObject)
        });
    }, [])

    return (
        <div>
                <div className="card">
                    <img src="https://i.picsum.photos/id/1000/200/200" alt="random" >
                    </img>
                    <div className="container">
                        <h4><b>{weatherObject.map(item => (
                            <li key={item.objectID}>
                                <p>{item.name}</p>
                            </li>
                        ))}</b></h4>
                        <p>weather</p>
    

                    </div>
                </div>
            </div>
    );
}


export default Card;