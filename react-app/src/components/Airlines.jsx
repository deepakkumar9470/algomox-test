import React, { useState ,useEffect} from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate';
import Pagination from './Pagination';
import TableData from './TableData';
const Airlines = () => {
  const [files, setFiles] = useState("");
  const [users, setUsers] = useState([]);
  const [sortValue,setSortValue] = useState("")
  const [pageCount,setPageCount] = useState(0)
  

  const sortOptions =["Airport"]

  

  const handleSort = async (e) =>{
    let value = e.target.value
    setSortValue(value)
    return await axios.get(`http://localhost:5000/api/air?_sort=${value}&_order=asc`)
    .then((res) =>   
     {
      setUsers(res.data)
      setSortValue("")
     })
  

  }
  const handleChange = e => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = e => {
      console.log("e.target.result", e.target.result);
      setFiles(e.target.result);
      // localStorage.setItem('myfile', JSON.stringify(e.target.result) )
    };
  };

useEffect(() => {
 const fetchData = async () =>{
  try {
      const res = await axios.get(`http://localhost:5000/api/air`)
      console.log(res.data)
      setUsers(res.data)
  } catch (error) {
    console.log(error)
  }
 }
 fetchData()
}, []);



  return (
    <div className='main_container container p-2'>
       <h3> Airlines Data </h3>
        <input
          className="custom-file-input"
          type="file"
          onChange={handleChange}
          accept=".csv,.xlsx,.xls,.json"
        />
  
    <TableData  
         items={users} 
         handleSort={handleSort} 
         sortValue={sortValue}
         sortOptions={sortOptions}
         setUsers={setUsers}
         pageCount={pageCount}
         setPageCount={setPageCount}
      />    
   
</div>
  )
}

export default Airlines