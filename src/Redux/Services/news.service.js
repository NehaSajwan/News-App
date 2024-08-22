export const getNewsByApi=async(q='all')=>{
    let response = await fetch(`https://newsapi.org/v2/everything?q=${q}&apiKey=ae1be7dd566f4ffb8ce085318da8b06d`)
    let data = await  response.json();
    console.log(data);

    return data.articles
}