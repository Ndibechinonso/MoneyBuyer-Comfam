import React from 'react'
import CaretLeft from '../customIcons/CaretLeft'
import CaretRight from '../customIcons/CaretRight'
import MoreIcon from '../customIcons/MoreIcon'
import SearchIcon from '../customIcons/SearchIcon'
import SortIcon from '../customIcons/SortIcon'

const Table = () => {
  return (
    <div className='table__container'>
      <div className='table__container_header'>
        <div>
          <h4 className='table__container_header_text'> Showing All </h4>
        </div>
        <div className='table__container_header_inputs'>
          <div className='table__container_header_inputs_transaction_search'>
            <SearchIcon/>
            <input type='text' placeholder='Search Transaction' />
          </div>
          <div className='table__container_header_inputs_date_select'>
            <input type='date' placeholder='Select Date'  />
          </div>
        </div>
        <div className='table__container_header_sort'>
        <SortIcon/>
          <h3 className='table__container_header_text'> Sort by:
            <span className='table__container_header_text_span'> Recent </span>
          </h3>
        </div>
      </div>
      <table className = 'table__main'>    
        <thead className='table__main_header'>
          <tr className='table__main_header_title'>
            <th>Transaction ID</th>
            <th> Seller</th>
            <th> Amount </th>
            <th> Date</th>
            <th> Status </th>
            <th>  </th>
          </tr>
        </thead>
        <tbody className='table__main_body'>
          <tr>
            <td>85613390HL36</td>
            <td> Bryan Daniels</td>
            <td> ₦45,000</td>
            <td> 3 Mar, 2022 </td>
            <td>
              <div className={`table_tag_delivered`}>
                Delivered
              </div>
            </td>
            <td> <MoreIcon/></td>
          </tr>
          <tr>
            <td>85613390HL36</td>
            <td> Bryan Daniels</td>
            <td> ₦45,000</td>
            <td> 3 Mar, 2022 </td>
            <td>
              <div className={`table_tag_pending`}>
                Delivered
              </div>
            </td>
            <td> <MoreIcon/> </td>
          </tr>
        </tbody>
      </table>
      <div className='table__container_footer'>
        <button> <CaretLeft/> Prev </button>
        <button className='active'>
          Next <CaretRight/>
        </button>
      </div>
    </div>
  )
}

export default Table
