import React from 'react'
import ReactPaginate from 'react-paginate';

const TableData = ({ items ,sortValue,handleSort,sortOptions,setUsers,pageCount,setPageCount}) => {
   
 

      const fetchAirlineData = async (currentPage) =>{
        try {
           const res = await fetch(`http://localhost:5000/api/air?_page=${currentPage}&_limit=10`)
           const data = res.json()
           return data
             
        } catch (error) {
          console.log(error)
        }
      }
      const handleClick = async (data) =>{
        console.log('clicked..', data.selected)
        let currentPage = data.selected + 1
      
        const postFromServer = await fetchAirlineData(currentPage)
        setUsers(postFromServer)
      }

    return (
        <div>


            <div className="row mt-3 d-flex">
                <div className="col-md-20">
                    <select className="form-select" onChange={handleSort} value={sortValue}>
                        <option selected>Sort by value</option>
                        {
                            sortOptions.map((item, i) => (
                                <option value={item} key={i}>{item}</option>
                            ))
                        }


                    </select>
                </div>
            </div>
            <table className="table table-striped p-5 m-5">
                <thead>
                    <tr>
                        <th scope="col">Total Flights</th>
                        <th scope="col">Total Minutes Delayed</th>
                        <th scope="col">Time Label</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items?.map(item => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.Statistics.Flights.Total}</td>
                                    <td>{item.Statistics.Flights.Delayed}</td>
                                    <td>{item.Time.Label}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>

            </table>





            <ReactPaginate
              className='pagination'
              breakLabel={"..."}
              nextLabel={"next"}
              onPageChange={handleClick}
              marginPagesDisplayed = {4}
              pageCount={pageCount}
              pageRangeDisplayed={5} 
              previousLabel={"previous"}
              containerClassName={"pagination"}
              pageClassName={"page-item"}
              pageLinkClassName={"page-link"}
              previousClassName={"page-item"}
              previousLinkClassName={"page-link"}
              nextClassName={"page-item"}
              nextLinkClassName={"page-link"}
              breakClassName={"page-item"}
              breakLinkClassName={"page-link"}
              activeClassName={"active"}
            />
        </div>
    )
}

export default TableData