import DasboardCalendar from "../CustomIcons/DasboardCalendar"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import fetchDashboardGraph from "../redux/dashboardGraph/dashboardGraphAsyncThunk";
import { useEffect, useState } from "react";
import { getMonth } from "../../utils";

const filterArray = [
    {
        label: "1m",
        value: "one-month"
    },
    {
        label: "6m",
        value: "six-month"
    },{
    label: "1y",
    value: "one-year"
}]

const BarchartFilters = () =>{

    const dispatch = useAppDispatch();
    const [filter, setFilter] = useState("one-year")
    const {startDate, endDate} = useAppSelector((state) => state.dashboardGraph)

    const changeFilter = (filter: string) => setFilter(filter)

    useEffect(() =>{
        dispatch(fetchDashboardGraph(filter))
    }, [filter])
    return(
        <div className="filter_container">
    <span className="date_container">
          <DasboardCalendar />
          <span>{getMonth(startDate)} - {getMonth(endDate)}</span>
        </span> 
        <div className="date_filter_container">
            {filterArray.map((item) =>{
                return <div key={item.label} onClick={() => changeFilter(item.value)} className={`${item.value === filter ? "selected_date" : ""} dates`}>{item.label}</div>

            })}
          {/* <div className="dates">1m</div>
          <div className="selected_date dates">6m</div>
          <div className="dates">1y</div> */}
        </div>
      </div>
    )
}

export default BarchartFilters