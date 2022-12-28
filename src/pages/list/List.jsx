import React from 'react'
import DataTable from '../../components/datatable/DataTable'
import NavBar from '../../components/navbar/NavBar'
import Sidebar from '../../components/sidebar/Sidebar'
import './list.scss'

const List = () => {
  return (
    <div className='list'>
        <Sidebar/>
        <div className='listContainer'>
          <NavBar/>
          <div className="dataTable">
            <DataTable/>
          </div>
        </div>
    </div>
  )
}

export default List
