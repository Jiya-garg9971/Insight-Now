import getNews from '../api.js'
import Grid from '@mui/material/Grid';
import { useEffect,useState } from 'react';
import { Articles } from './articles.jsx';
let styles={ 
    alignItems:'center', 
     width:'60%',
 margin:'20px auto 0 auto'
        ,textAlign:'center'
    
}
const Article=()=>{
    useEffect(()=>{
        dailyNews()
    },[]);
    const [News,setNews]=useState([]);
    const dailyNews=async()=>{
        let response=await getNews();
        setNews(response.data);
        // console.log(news);
    }
    return(
        <div
        style={styles}>
          {  News.map((data)=>{
                return(<Articles data={data} style={styles}/>)
            })}
        </div>
    )
}
export default Article;