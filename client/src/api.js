import axios from 'axios'; //use to fetch data
const getNews=async()=>{
    const url="https://insightnow.onrender.com";
    try{
        return await axios.get(`${url}/news`);
    }
    catch(e){
        console.log("error",e);
    }
}
export default getNews;