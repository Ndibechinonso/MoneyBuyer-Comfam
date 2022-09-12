import React from 'react'
import { useNavigate } from 'react-router-dom'
import CustomButton from '../CustomButtons'
import WarningIcon from '../CustomIcons/WarningIcon'


function Notice() {
  const navigate = useNavigate()
  return (
    <div className='notice'>
        <WarningIcon />
        <div className="notice__container">
            <h6 className="notice__container--headline">Notice</h6>
            <p className="notice__container--sub">It is Mandatory that you complete your profile and add your bank account details before you can transact on this platform</p>
            <CustomButton className='btn__tiny' action={() => navigate("/setting/verification")} actionText="Complete profile"  />
        </div>
    </div>
  )
}

export default Notice