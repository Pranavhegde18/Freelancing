import React, {useState} from "react"
import "./login.css"
import axios from "axios"
import { useHistory } from "react-router-dom"
import Homepage from '../../components/pages/homepage';

const Login = ({setLoginUser}) => {

    const history = useHistory()

    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const handleChange1 = e => {
        const { email, value } = e.target
        if (value=="@" && value ==".") {
            setUser({
                [email]: value
            })
        }else {
            alert("Invalid Input");
        }
    }

    const login = () => {
        axios.post("http://localhost:3001/login", user)
        .then(res => {
            alert(res.data.message)
            setLoginUser(res.data.user)
            history.push("/homepage")
        })
    }

    return (
        <div className="login">
            <h1 class='fab fa-typo3'>FR33LANCER</h1><br/><br/>
            <h1><b><i>Login</i></b></h1> <br/>
            <input type="e-mail" name="email" value={user.email} onChange={handleChange1} placeholder="Enter your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
            <br/><br/>
            <div className="button" onClick={login}><b>Login</b></div>
            <div><p><b>Or</b></p></div>
            <div className="button" onClick={() => history.push("/register")}><b>Register</b></div>
        </div>
    )
}

export default Login