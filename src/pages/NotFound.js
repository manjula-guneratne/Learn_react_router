import { Navigate, useNavigate } from "react-router-dom"
import { useEffect } from "react"

export function NotFound() {
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate("/")
        }, 1000)
    }, [])

    return <h1>Not Found</h1>
}