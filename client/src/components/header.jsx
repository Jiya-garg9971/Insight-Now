import {AppBar,Toolbar} from '@mui/material';
import {Menu} from '@mui/icons-material';


const Header=()=>{
    const logolink="https://th.bing.com/th/id/OIP.596YXlrGEsgS3RrTh205kQHaCo?pid=ImgDet&rs=1";
    /*by default appbar is fixed*/
    return(
        <AppBar style={{background:'#fff'}} position='static'>  
            <Toolbar>
                <Menu style={{color:'#000'}}/>
                <img src={logolink} alt="logo" style={{ height:50,padding:2,margin:"auto"}}></img>
            </Toolbar>
        </AppBar>
    )
}
export default Header;