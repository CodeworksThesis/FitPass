import React from "react"
import ReserveButton from "./ReserveButton"
import { useNavigate } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react"

export default function ReserveBar() {
    const navigate = useNavigate()
    const { isAuthenticated, loginWithRedirect, getAccessTokenSilently } =
        useAuth0()

    const handleReserve = async () => {
        if (!isAuthenticated) navigate("/login")
        const access_token = await getAccessTokenSilently()

        // To call post User Api service and pass JWT and post data
    }

    return (
        <footer className="flex justify-around py-3 border-t-[1px] shadow-[0_8px_10px_-7px_rgba(0,0,0,0.4)_inset]">
            <ReserveButton
                buttonText="BACK"
                backgroundColor="#fff"
                textColor="#000"
                hoverBackgroundColor="#269FAE"
                hoverTextColor="#fff"
                nav={() => navigate("/")}
            />
            <ReserveButton
                buttonText={isAuthenticated ? "RESERVE" : "LOGIN TO RESERVE"}
                backgroundColor="#6F87F5"
                textColor="#FFF"
                hoverBackgroundColor="#269FAE"
                hoverTextColor="#fff"
                nav={handleReserve}
            />
        </footer>
    )
}
