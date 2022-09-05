import React from 'react'
import CustomButton from '../../../../common/components/customButtons'
import CustomForm from '../../../../common/components/customForms'
import { useAppDispatch } from '../../../../common/components/redux/hooks';

type Props = {}

function FeedBack({}: Props) {
  const dispatch = useAppDispatch();

  return (
    <div className ='feedback__container'>
{/* <CustomForm formType="Give Feedback" intro="Our product depends on customer feedback to improve the overall experience!"/> */}
<form onSubmit={(e) => e.preventDefault()}>
          <div className="">
            <h4>Give Feedback</h4>
            <p>Our product depends on customer feedback to improve the overall experience!</p>
                <div className="textarea_div">
                  <label>
                    How likely would you recommend us to a friend or colleague?
                  </label>
                  <div className="radio_container">
                    <div className="radio_div">
                      <div className="input_div">
                        <span className="first_input_gap"></span>
                        <input
                          type="radio"
                          id="none"
                          name="recommend_level"
                          value="0"
                        />
                        <span className="input_line"></span>
                      </div>
                      <label>Not at all</label>
                    </div>

                    <div className="radio_div">
                      <div className="input_div">
                        <span className="input_line"></span>
                        <input
                          type="radio"
                          id="litle"
                          name="recommend_level"
                          value="1"
                        />
                        <span className="input_line"></span>
                      </div>
                      <label>Very little</label>
                    </div>

                    <div className="radio_div">
                      <div className="input_div">
                        <span className="input_line"></span>
                        <input
                          type="radio"
                          id="moderate"
                          name="recommend_level"
                          value="2"
                        />
                        <span className="input_line"></span>
                      </div>
                      <label>Moderate</label>
                    </div>

                    <div className="radio_div">
                      <div className="input_div">
                        <span className="input_line"></span>
                        <input
                          type="radio"
                          id="likely"
                          name="recommend_level"
                          value="3"
                        />
                        <span className="input_line"></span>
                      </div>
                      <label>likely</label>
                    </div>

                    <div className="radio_div">
                      <div className="input_div">
                        <span className="input_line"></span>
                        <input
                          type="radio"
                          id="extremely_likely"
                          name="recommend_level"
                          value="4"
                        />
                        <span className="first_input_gap"></span>
                      </div>
                      <label>Extremely likely</label>
                    </div>
                  </div>
                </div>
                <div className="textarea_div">
                  <label>What do you like about our service?</label>
                  <textarea placeholder="Let us know" />
                </div>

                <div className="textarea_div">
                  <label>What can we change?</label>
                  <textarea placeholder="Let us know" />
                </div>

                <div className="textarea_div">
                  <label>What feature would you like to add?</label>
                  <textarea placeholder="Let us know" />
                </div>

                <CustomButton
                  className="profile__cta"
                  action={() => console.log("Send Feedback")}
                  actionText="Send Feedback"
                />
          </div>
      </form>
</div>
    )
}

export default FeedBack