import axios from 'axios'; //use to fetch data
const getNews=async()=>{
    const url="http://localhost:4800";
    try{
        return await axios.get(`${url}/news`);
    }
    catch(e){
        console.log("e");
    }
}
export default getNews;