import React from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Signimg from './SignImg';

const Login = () => {

    const [inpval, setInpval] = useState({

        email: "",
        password: "",
    })

    // const [data, setData] = useState([]);

    console.log(inpval);


    const getData = (e) => {
        // console.log(e.target.value);
        // const value = e.target.valule;
        const { value, name } = e.target;
        // console.log(value,name);

        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })
    }


    const addData = (e) => {
        e.preventDefault();

        const getuserArr = localStorage.getItem('userData');
        console.log(getuserArr);

        const { email, password } = inpval;

         if (email === '') {
            alert("email field is required")
        } else if (!email.includes("@")) {
            alert("please enter a valid email")
        }  else if (password === '') {
            alert("password field is required")
        } else if (password.length < 5) {
            alert("password must be at least 5 characters")
        } else {
        
            if(getuserArr && getuserArr.length){
                const userData = JSON.parse(getuserArr);
                // console.log(userData);
                const userlogin = userData.filter((el,k)=>{
                    return el.email === email && el.password === password
                });

                console.log(userlogin);
            }
        }
    }    
        return (
            <>
                <div className='container mt-5'>
                    <section className='d-flex justify-content-between'>
                        <div className='left_data mt-3 pd-3' style={{ width: "100%" }}>
                            <h3 className='text-center col-lg-6'>Sign In</h3>
                            <Form>
                                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                    <Form.Control onChange={getData} type="email" name='email'
                                        placeholder="Enter Email" />
                                </Form.Group>
                                <Form.Group className="mb-3 col-lg-6" controlId=
                                    "formBasicPassword">
                                    <Form.Control onChange={getData} type="password" name='password'
                                        placeholder="Password" />
                                </Form.Group>

                                <Button className='col-lg-6' onClick={addData} style={{
                                    background: "rgba(67, 185, 127)"
                                }} variant="primary" type="submit">Submit
                                </Button>
                            </Form>
                            <p className='mt-3'>Already Have an Account <span>SignIn</span> </p>
                        </div>

                        <Signimg />
                    </section>
                </div>
            </>
        )
}

    export default Login