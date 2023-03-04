import React from 'react'
import "./CSS/header.css"
import SearchIcon from '@mui/icons-material/Search';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import { Avatar } from '@mui/material';
function Header({photoURL}) {
  return (
    <div className='header'>
    <div className="header__logo">
<img  src="https://upload.wikimedia.org/wikipedia/commons/d/da/Google_Drive_logo.png" alt="" />
<span>Drive</span>
    </div>
    <div className="header__search">
<SearchIcon/>
<input type="text" placeholder='Search in Drive' />
<FormatAlignCenterIcon/>
    </div>
    <div className="header__icons">
 <span>
<HelpOutlineIcon/>
<SettingsIcon/>
 </span>
 <span>
<AppsIcon/>
<Avatar src={photoURL}/>
 </span>
    </div>

    </div>
  )
}

export default Header