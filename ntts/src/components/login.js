import React, { useState } from 'react'
import { Col, Row, Container, Button } from 'react-bootstrap'
import '../components/login.css'
// import background from '../images/images.jpg'

function Login() {
    const [email, setEmail] = useState()
    const [password, setpassword] = useState("")
    const [error, setError] = useState("")
    const submitForm = (e) => {
        alert('Already LogIn')
    }
    function changeColor(e){
        e.target.style.background='darkorange'
    }

    const handleKey=(e)=>{
        var regx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        e.preventDefault();
        if(!regx.test(email)){
            alert("Enter Valid Email")
        }
    }
    return (
        <div>
            {/* <div className="background img " style={{ backgroundImage: `url(${background})` }}> */}
            <Container>
                <Row>
                    <label><b>Username</b></label>
                    <Col><input type="text" name="username" className='input' placeholder='Enter Valid EmailId' value={email}
                        onChange={e => setEmail(e.target.value)} 
                        onKeyPress={(e)=>handleKey(e)}/></Col>
                        {error}
                </Row><br/>
                <Row>
                    <label><b>Password</b></label>
                    <Col><input type="password" name="password" className='input-password' placeholder='Enter Your Password'
                        onChange={e => setpassword(e.target.value)} /></Col>
                </Row><br/>
                <Row>
                    <Col><Button className='sign_in' onClick={submitForm} onMouseEnter={changeColor}>Sign In</Button></Col>
                </Row>
            </Container>
            {/* </div> */}
        </div>
    )
}

export default Login
