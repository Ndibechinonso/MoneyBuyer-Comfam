import React from 'react'
import CustomForm from '../../../../common/components/customForms'

type Props = {}

function BankDetail({}: Props) {
  return (
    <div className ='profile__container bank_container'>
    <CustomForm formType="bank" />
    </div>
  )
}

export default BankDetail