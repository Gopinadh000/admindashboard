import React ,{useState} from 'react'
import { DataGrid } from '@mui/x-data-grid';
import './datatable.scss'
import {userRows, userColumns} from '../../datatablesource'
import { Link } from 'react-router-dom';



const DataTable = () => {
  const [data, setData]=useState(userRows)

  const handleDelete=(id)=>{
    setData(data.filter(item=>item.id !==id))
  }

  const actionColumn=[{
    field:"action",
     headerName:"Action",
     width:200 ,
     renderCell:(params)=>{
     return( <div className='cellAction'>
      <Link to="/users/12" style={{textDecoration:"none"}}>
        <div className='viewButton'>View</div>
       </Link>
       
          <div className='deleteButton' onClick={()=> handleDelete(params.row.id)} >Delete</div>
  
     </div>)
   }}]
 
 
  return (
    <div className='datatable' >
      <div className="dataTableTitle">
        Add New User 
        <Link to="/users/test" style={{textDecoration:"none"}} className="link">Add new</Link>
      </div>
       <DataGrid className='datagrid'
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />

    </div>
  )
}
export default DataTable