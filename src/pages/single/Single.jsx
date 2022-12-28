import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/NavBar'
import Chart from '../../components/chart/Chart'
import List from '../../components/table/Table' 
import './single.scss'

const Single = () => {
  return (
    <div className='single'>
      <Sidebar/>
      <div className='singleContainer'>
        <Navbar/>
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
           <h1 className="title">Information </h1>
           <div className="item">
            <img src="https://scontent.fhyd11-3.fna.fbcdn.net/v/t1.18169-9/524627_177493222453343_321560386_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=de6eea&_nc_ohc=1D2OYTx8AMwAX-8mlpU&_nc_ht=scontent.fhyd11-3.fna&oh=00_AfDPNd8PCfR_CodVpdgLXzB8IpXX6h8JeQckpVoEuyWueg&oe=63CECA67" alt="img"
             className="itemImg" />
             <div className="details">
              <h1 className="itemTitle">Gopi nadh</h1>
              <div className="detailItem">
                <span className="itemKey">Email:</span>
                <span className="itemValue">gopinadh@gmail.com</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Phone:</span>
                <span className="itemValue">9640414197</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Address</span>
                <span className="itemValue">Vijaywada</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Country</span>
                <span className="itemValue">India</span>
              </div>
             </div>
           </div>
          </div>
          <div className="right">
            <Chart  aspect={3/1}  title="User Spending (last 6 Months)"/>
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transcactions</h1>
          <List/>
        </div>
      </div>
    </div>
  )
}

export default Single
