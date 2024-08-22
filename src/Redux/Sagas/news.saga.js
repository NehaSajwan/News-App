import { getnewscategoryerror, getnewscategorysuccess, getnewserror, getnewssuccess } from "../Action/news.action";
import { GET_NEWS_CATEGORY_START, GET_NEWS_START } from "../Constant/news.constant";
import {getNewsByApi} from '../Services/news.service'
import {put,takeLatest} from "redux-saga/effects"


function* getNews(){
    try {
        let result =yield getNewsByApi()
        yield put(getnewssuccess(result))
    } catch (error) {
        yield put(getnewserror(error.message))
        
    }
}



function* getCategoryNews({payload}){
    try {
        let result =yield getNewsByApi(payload)
       yield put(getnewscategorysuccess(result))
    } catch (error) {
        yield put(getnewscategoryerror(error.message))
        
    }
}

 export function *news(){
    yield takeLatest(GET_NEWS_START,getNews)
    yield takeLatest(GET_NEWS_CATEGORY_START,getCategoryNews)
    
}
 
