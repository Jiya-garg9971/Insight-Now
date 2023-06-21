import {AppBar,Toolbar} from '@mui/material';
import {Menu} from '@mui/icons-material';
import  './style.css';

const Header=()=>{
    const logolink="https://cdn1.iconfinder.com/data/icons/color-bold-style/21/06_1-512.png";
    /*by default appbar is fixed*/
    return(
        <AppBar style={{background:'#fff'}} position='static'>  
            <Toolbar>
                <Menu style={{color:'#000'}}/>
                <div className='Logo'><img src={logolink} alt="logo" style={{ height:40,padding:2,margin:"auto"}}/><span>InsightNow</span></div>
            </Toolbar>
        </AppBar>
    )
}
export default Header;