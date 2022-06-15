import React from 'react'
import CustomForm from '../../../../common/components/customForms'
type Props = {}

function Notification({}: Props) {
  return (
    <div className ='feedback__container'>
    <CustomForm formType="Notification Settings" intro="Set Up How You Want To Be Notified."/>
    </div>
  )
}

export default Notification