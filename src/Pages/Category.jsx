import React, { useEffect } from "react";
import NewsItem from "../Components/NewsItem";
import { useDispatch, useSelector } from "react-redux";
import { getnewscategorystart } from "../Redux/Action/news.action";
import { useParams } from "react-router-dom";

export default function Category() {
    let { categoryName } = useParams();
    const dispatch = useDispatch();
    const categoryNews = useSelector(state => state.categoryNews)

    useEffect(() => {
        dispatch(getnewscategorystart(categoryName))
        console.log(categoryName);
    }, [categoryNews.length, categoryName])
    return (

        <div className="container mt-4">
            <div className="row">
                {
                    categoryNews.length > 0 && categoryNews.map((n, i) => (
                        <NewsItem item={n} key={i} />

                    ))
                }
            </div>
        </div>

    )
}