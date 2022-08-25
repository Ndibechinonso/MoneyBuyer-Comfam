import { useState, useId } from "react";

const Milestone = ({taskNumber}: any) => {
  
  const id = useId();
  return (
   
      <div>
            <div className="form_row">
              <div className="form_group">
                <label htmlFor={`${id}-task_!`}> Task {taskNumber}</label>
                <input
                  className="milestone_form_input"
                  id={`${id}-task_!`}
                  type="text"
                  placeholder="UI Design"
                />
              </div>

              <div className="form_group">
                <label htmlFor={`${id}-attached_price`}> Attached Price</label>
                <input
                  className="milestone_form_input"
                  id={`${id}-attached_price`}
                  type="text"
                  placeholder="e.g 1000"
                />
              </div>
            </div>
            <div className="form_row">
              <div className="form_group">
                <label htmlFor={`${id}-inspection_period`}>
                  Inspection Period
                </label>
                <input
                  className="milestone_form_input"
                  id={`${id}-inspection_period`}
                  type="text"
                  placeholder="10 days"
                />
              </div>

              <div className="form_group">
                <label htmlFor={`${id}-due_date`}> Due Date</label>
                <input
                  className="milestone_form_input"
                  id={`${id}-due_date`}
                  type="text"
                  placeholder="30/03/2022"
                />
              </div>
            </div>
            <div className="form_row">
              <div className="form_group">
                <label htmlFor={`${id}-inspection_period`}>
                  Task Description
                </label>
                <input
                style={{width: "100%"}}
                  className="new_transaction_form_input"
                  id={`${id}-inspection_period`}
                  type="text"
                  placeholder="10 days"
                />
              </div>
            </div>
          </div>
 
  );
};

export default Milestone;
