import { useAuthContext } from "../../hooks/useAuthContext"

export default function Admin() {
    const { token } = useAuthContext();

    return (
        <h1>Your admin token is: {token}</h1>
    )
}