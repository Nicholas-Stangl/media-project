import React, { useEffect, useState } from 'react';
import axios from "axios";

const NewNet = () => {
    const [flixInfo, setFlixInfo] = useState([])
    const API_KEY = process.env.REACT_APP_NETFLIX_API_KEY;

    const options = {
        method: 'GET',
        url: 'https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi',
        params: { q: 'get:new7:US', p: '1', t: 'ns', st: 'adv' },
        headers: {
            'x-rapidapi-key': API_KEY,
            'x-rapidapi-host': 'unogs-unogs-v1.p.rapidapi.com'
        }
    };
    useEffect(() => {
        axios.request(options)
            .then(response => {
                console.log(response.data);
                console.log(response.data.ITEMS[0].synopsis);
                setFlixInfo(response.data.ITEMS)
            }).catch(error => {
                console.log("in the errors")
                console.error(error);
            });

    }, [])


    return (
        <div className="container">
                        <br/>
            <br/>
            <h1 style={{color: 'white'}}>Newest Titles on Netflix</h1>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col" style={{color: 'white'}}>Title</th>
                        <th scope="col" style={{color: 'white'}}>Synopsis</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        flixInfo.map((movie, idx) => {
                            return <tr key={idx}>
                                <th scope="row"><img src={movie.image} alt="" /></th>
                                <td><h3 style={{color: 'white'}}>{movie.title}</h3></td>
                                <td style={{color: 'white'}}>{movie.synopsis}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
            <br/>
            <br/>
            <br/>
            
        </div>
    );
};


export default NewNet;