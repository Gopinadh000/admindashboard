import React from 'react';
import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import NotificationImportantOutlinedIcon from '@mui/icons-material/NotificationImportantOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyAltOutlinedIcon from '@mui/icons-material/PsychologyAltOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

import {Link} from 'react-router-dom'

const sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='top'>
            <Link to="/" style={{textDecoration:"none"}}>
            <span className='logo'>Gv admin</span>
            </Link>
        </div>
        <hr/>
        <div className='center'>
            <ul>
                <p className='title'>MAIN</p>
                <Link to="/" style={{textDecoration:"none"}}>

                <li>
                <DashboardIcon className='icon'/>
                <span>Dashboard</span>
                </li>
                </Link>
            </ul>
            <ul>
            <p className='title'>LISTS</p>
            <Link to="/users" style={{textDecoration:"none"}}>
                <li>
                    <PeopleAltOutlinedIcon  className='icon'/>
                    <span>Users</span>
                </li>
                </Link>
            </ul>
            <ul>
            <Link to="/products" style={{textDecoration:"none"}}>
            
                <li>
                    <Inventory2OutlinedIcon className='icon'/>
                    <span>Products</span>
                </li>
                </Link>
            </ul>
            <ul>
                <li>
                    <CreditCardOutlinedIcon className='icon'/>
                    <span>Orders</span>
                </li>
            </ul>
            <ul>
            <p className='title'>USEFUL</p>
                <li>
                    <LocalShippingOutlinedIcon className='icon'/>
                    <span>Delivery</span></li>
            </ul>
            <ul>
                <li> 
                    <BarChartOutlinedIcon  className='icon'/>
                    <span>Stats</span></li>
            </ul>
            <ul>
                <li>
                    <NotificationImportantOutlinedIcon className='icon'/>
                    <span>Notifications</span></li>
            </ul>
            <ul>
            <p className='title'>SERVICE</p>
                <li>
                    <SettingsSystemDaydreamOutlinedIcon className='icon'/>
                    <span>System Health</span></li>
            </ul>
            <ul>
                <li>
                    <PsychologyAltOutlinedIcon className='icon'/>
                    <span>Logs</span></li>
            </ul>
            <ul>
                <li>
                    <SettingsOutlinedIcon className='icon'/>
                    <span>Settings</span></li>
            </ul>
            <ul>
            <p className='title'>USER</p>
                <li>
                    <AccountCircleOutlinedIcon className='icon'/>
                    <span>Profile</span></li>
            </ul>
            <ul>
                <li>
                    <LogoutOutlinedIcon className='icon'/>
                    <span>Logout</span></li>
            </ul>
        </div>
        <hr/>
        <div className='bottom'>
            <div className='colorOptions'></div>
            <div className='colorOptions'></div>
            <div className='colorOptions'></div>
            <div className='colorOptions'></div>
        </div>

    </div>
  )
}

export default sidebar
