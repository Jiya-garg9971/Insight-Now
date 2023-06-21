
import Grid from '@mui/material/Grid';
import '../style.css';
export const Articles=(props)=>{
    const {title,author,description,url,timestamp,link,publisher}=props.data;
    return(
        <div className='Grid1' > 
        <Grid lg={5} sm={12} xs={12}>
            <img src={url} alt="image" className='news-img' ></img>
        </Grid>
         <Grid lg={5} sm={12} xs={12}>
          <h4>{title}</h4>
          <p><b>short </b>by {author} / {timestamp}</p>
          <p>{description}</p>
          <p> <a href={link} style={{textDecoration:'None',color:'black',textAlign:'left'}}>Read more at {publisher} </a></p>
          </Grid>
        </div>
    )
}