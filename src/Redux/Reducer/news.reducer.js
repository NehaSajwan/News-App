import { GET_NEWS_CATEGORY_SUCCESS, GET_NEWS_SUCCESS } from "../Constant/news.constant";

const initialState = {
    news: [],
    categoryNews: [],
    categories: [
        "war",
        "goverment",
        "politics",
        "education",
        "health",
        "enviroment",
        "economy",
        "bussiness",
        "fashion",
        "entertainment",
        "sport"
    ]
}

export const NewsReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case GET_NEWS_SUCCESS:
            return {
                ...state,
                news: [...action.payload]
            }
        case GET_NEWS_CATEGORY_SUCCESS:
            return {
                ...state,
                categoryNews: [...action.payload]
            }
        default:
            return state;
    }

}