import React from 'react'
import CustomForm from '../../../../common/components/customForms'
type Props = {}

function Verification({}: Props) {
  return (
    <div className ='profile__container'>
    <CustomForm formType="verification"  />
    </div>
  )
}

export default Verification