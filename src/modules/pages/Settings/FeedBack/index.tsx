import React from 'react'
import CustomForm from '../../../../common/components/customForms'

type Props = {}

function FeedBack({}: Props) {
  return (
    <div className ='feedback__container'>
<CustomForm formType="Give Feedback" intro="Our product depends on customer feedback to improve the overall experience!"/>
</div>
    )
}

export default FeedBack