import getNews from '../../api.js'
import { useEffect,useState } from 'react';
import { Articles } from './articles.jsx';
import '../style.css';

const Article=()=>{
    useEffect(()=>{
        dailyNews()
    },[]);
    const [News,setNews]=useState([]);
    const dailyNews=async()=>{
        let response=await getNews();
        setNews(response.data);
    }
    return(
        <div className="article-box">
          {  News.map((data)=>{
                return(<Articles data={data} />)
            })}
        </div>
    )
}
export default Article;