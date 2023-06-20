
import Grid from '@mui/material/Grid';

export const Articles=(props)=>{
    const {title,author,description,url,timestamp,link,publisher}=props.data;
    return(
        <Grid container style={{border:'2px solid black',borderRadius:"5px",boxShadow:"8px 8px 8px grey",margin:8}}> 
        <Grid lg={5} sm={12} xs={12}>
            <img src={url} alt="image" style={{height:200,maxWidth:300,padding:10,objectFit:'cover'}}></img>
        </Grid>
         <Grid lg={5} sm={12} xs={12}>
          <h4>{title}</h4>
          <p><b>short </b>by {author} / {timestamp}</p>
          <p>{description}</p>
          <p> <a href={link} style={{textDecoration:'None',color:'black',textAlign:'left'}}>Read more at {publisher} </a></p>
          </Grid>
        </Grid>
    )
}