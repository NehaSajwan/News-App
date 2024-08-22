import { GET_NEWS_CATEGORY_ERROR, GET_NEWS_CATEGORY_START, GET_NEWS_CATEGORY_SUCCESS, GET_NEWS_ERROR, GET_NEWS_START, GET_NEWS_SUCCESS } from "../Constant/news.constant"

export const getnewsstart = () => ({
    type: GET_NEWS_START,

})

export const getnewssuccess = (news) => ({
    type: GET_NEWS_SUCCESS,
    payload: news
})

export const getnewserror = (error) => ({
    type: GET_NEWS_ERROR,
    payload: error
})

export const getnewscategorystart = (name) => ({
    type: GET_NEWS_CATEGORY_START,
    payload: name
})

export const getnewscategorysuccess = (news) => ({
    type: GET_NEWS_CATEGORY_SUCCESS,
    payload: news
})

export const getnewscategoryerror = (error) => ({
    type: GET_NEWS_CATEGORY_ERROR,
    payload: error
})