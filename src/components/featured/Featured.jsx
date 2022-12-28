import React from 'react'
import './featured.scss'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

const Featured = () => {
  return (
    <div className='featured'>
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertOutlinedIcon fontSize='small'/>
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5}/>
        </div>
         <p className="title">Total Sales Made Today</p>
         <p className="amount">$420</p>
         <p className="dec">Previous Transcations processing.Last Payments may not be included</p>
         <div className="summary">
          <div className="item">
            <div className="itemtitle">Target</div>
            <div className="itemResult positive">
            <KeyboardArrowUpOutlinedIcon fontSize='small'/>
              <div className="resultAmount">
                $25.4k
              </div>
            </div>
          </div>
          <div className="item">
            <div className="itemtitle">Last Week</div>
            <div className="itemResult positive">
            <KeyboardArrowUpOutlinedIcon fontSize='small'/>
              <div className="resultAmount">
                $4.4k
              </div>
            </div>
          </div>
          <div className="item">
            <div className="itemtitle">Last Month</div>
            <div className="itemResult negative">
            <KeyboardArrowDownOutlinedIcon fontSize='small'/>
              <div className="resultAmount">
                $20.4k
              </div>
            </div>
          </div>

         </div>
      </div>
    </div>
  )
}

export default Featured
