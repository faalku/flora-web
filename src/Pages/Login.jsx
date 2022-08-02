
import React , { useState } from 'react';
import '../App.css';
import axios from 'axios';
import Layout from '../Layout';
import LoginForm from '../Components/LoginForm';

function Login() {
    
    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [user,setUser] = useState (undefined);

    async function Req() {
        try {
         await axios({
            method: "post",
            url: "https://dev-api.pass-tickets.com/v1/en/auth/login",
            data: {
              email: email,
              password: password,
              userType: "user",
            },
          }).then((user) => setUser(user.data.payload.user.name))
        } catch (error) {
          console.log("error");
          console.log(error.response.data)
          setError(error.response.data.message);
        }
    }
  return (
    <Layout>
    <LoginForm/>
      </Layout>
  );
  }
    
export default Login;
