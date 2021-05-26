import React, { useEffect, useState } from 'react';
import axios from "axios";

const NYT_Best = () => {
    const [nytInfo, setNytInfo] = useState([])
    const NYT_API_KEY = process.env.REACT_APP_NYT_API_KEY;
    // console.log(`API ; ${process.env.REACT_APP_NYT_API_KEY}`)

    // useEffect(() => {
    //     axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${NYT_API_KEY}`)
    //         .then(response => {
    //             console.log(response.data);
    //             // console.log(response.data.ITEMS[0].synopsis);
    //             // setFlixInfo(response.data.ITEMS)
    //         }).catch(error => {
    //             console.log("in the errors")
    //             console.error(error);
    //         });

    // }, [])
    useEffect(() => {
        console.log(process.env.NYT_API_KEY)
        axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${NYT_API_KEY}`)
            .then(res => {
                console.log('*************')
                console.log(res)
                console.log('*************')
                setNytInfo(res.data.results.books)
            })
            .catch(err => console.log(err))

    }, []);

    return (
        <div className="container">
        <br/>
        <br/>
            <h1 style={{color: 'white'}}>New York Times Bestsellers</h1>
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
                    nytInfo.map((book, idx) => {
                        return <tr key={idx}>
                            <th scope="row"><img src={book.book_image} alt="book cover" style={{maxHeight: 200}} /></th>
                            <td><h3 style={{color: 'white'}}>{book.title}</h3></td>
                            <td style={{color: 'white'}}>{book.description}</td>
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


export default NYT_Best;