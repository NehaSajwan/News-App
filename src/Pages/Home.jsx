import React, { useEffect } from "react";
import NewsItem from "../Components/NewsItem";
import { useDispatch, useSelector } from "react-redux";
import { getnewsstart } from "../Redux/Action/news.action";
export default function Home() {
    const dispatch=useDispatch();
    const news= useSelector(state => state.news)

    useEffect(()=>{
        dispatch(getnewsstart())
    },[news.length])
    return (
        <div className="container">
            <div className="row">
             {
                news.length > 0 && news.map ((n, i)=>(
                    <NewsItem item={n} key={i}/>

                ))
             }
             
                </div>
            </div>
     
    )
}