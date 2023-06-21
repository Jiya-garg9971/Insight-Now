import {AppBar,Toolbar} from '@mui/material';
import {Menu} from '@mui/icons-material';
import  './style.css';
import { useEffect, useState } from 'react';

const Header=()=>{
    const [theme,setTheme]=useState("light-theme");
    const ToggleTheme=()=>{
        console.log("clicked");
        if(theme==="light-theme")setTheme("dark-theme");
        else setTheme("light-theme");
    }
    useEffect(()=>{
        console.log(theme);
        document.body.className=theme;
    },[theme])
    const logolink="https://cdn1.iconfinder.com/data/icons/color-bold-style/21/06_1-512.png";
    /*by default appbar is fixed*/
    return(
        <AppBar style={{background:'#fff'}} position='static'>  
            <Toolbar>
                <Menu style={{color:'#000'}}/>
                <div className='Logo'><img src={logolink} alt="logo" style={{ height:40,padding:2,margin:"auto"}}/><span>InsightNow</span></div>
                
            <button style={{color:"black"}} onClick={ToggleTheme}>Button</button>
            </Toolbar>

        </AppBar>
    )
}
export default Header;