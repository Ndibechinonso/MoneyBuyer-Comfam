import React, { useEffect, useState } from "react";
import Check from "../CustomIcons/Check";
import DisputeStatusTags from "../CustomTags/DisputeStatusTags";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import TrackerDivider from "../CustomIcons/TrackerDivider";

const DisputeTracker = () => {
  const { singleDispute } = useAppSelector((state) => state.disputes);

  return (
    <div className="tracker_container">
      <div className="tracker_grid">
        <div className="status_container">
          <div className="progress_circle flexRowCenter bg-check-green">
            <Check />
          </div>
          <div>Open</div>
        </div>
       <div className="tracker_divider"> <TrackerDivider /></div>
   
        <div className="status_container">
          <div className={`${["IN-PROGRESS", "RESOLVED"].includes(singleDispute?.status) ? "bg-check-green" : ""} progress_circle flexRowCenter`}>
            <Check />
          </div>
          <div>In Progress</div>
        </div>
        <div>
   <div className="tracker_divider"> <TrackerDivider /></div>
        </div>
        <div className="status_container">
          <div className={`${["RESOLVED"].includes(singleDispute?.status) ? "bg-check-green" : ""} progress_circle flexRowCenter`}>
            <Check />
          </div>
          <div>Resolved</div>
        </div>
      </div>
      <DisputeStatusTags value={singleDispute?.status} />
    </div>
  );
};

export default DisputeTracker;
