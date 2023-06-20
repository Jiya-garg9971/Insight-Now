import { margin, padding } from "@mui/system";
let styleofinfo={
    backgroundColor:"red",
    color:"#fff",
    display:'flex',
    alignItems:'center', 
    padding :2,
    width:'60%',
 margin:'20px auto 0 auto',
 borderRadius:10
        ,textAlign:'center'
}
const infoheader=()=>{
    const applestore="https://digitopoly.files.wordpress.com/2016/06/app-store-logo.png"
    const googlestore="https://cdn.afterdawn.fi/v3/news/original/get-it-on-google-play.png"
    return(
        <div style={styleofinfo}>
            <p style={{margin:'0 auto'}}>For the best experience use <b>inshorts</b> app on your smartphone</p>
            <div style={{marginLeft:'auto' }}><img src={applestore} alt="applestore" style={{height:40}}></img>
             <img src={googlestore} alt="googlestore" style={{height:50}}></img></div>
             
        </div>

    )
}
export default infoheader;