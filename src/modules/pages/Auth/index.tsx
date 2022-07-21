import { Outlet } from "react-router-dom"
import logo from "../../../static/images/logo.svg"
import { Link } from "react-router-dom"
import { useAppSelector } from "../../../common/components/redux/hooks"

const Auth = () => {
    const {signupStage} = useAppSelector(state => state.signup)

    return(
        <div className="auth_container">
<div className="logo_div"><img src={logo} alt=""/></div>
<Outlet />

{signupStage === "biodata" && <p className="signup_link_div">Already have an account? <Link to="/signin"><span className="signup_link">Sign In</span></Link></p> }
        </div>
    )
}

export default Auth