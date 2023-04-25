import React, {useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Signimg from './SignImg';
import {NavLink} from 'react-router-dom'

const Home = () => {


    const [inpval, setInpval] = useState({

        name: "",
        email: "",
        date: "",
        password: "",
        checkbox: ""
    })

    const [data,setData] = useState([]);

    console.log(inpval);


    const getData = (e) =>{
        // console.log(e.target.value);
        // const value = e.target.valule;
        const {value,name} = e.target;
        // console.log(value,name);

        setInpval(()=>{
            return {
                ...inpval,
                [name]: value
            }
        })
    }


    const addData = (e) =>{
        e.preventDefault();

        const {name,email,date,password,checkbox} = inpval;

        if(name === ''){
            alert("name field is required")
        }else if(email === ''){
            alert("email field is required")
        }else if(!email.includes("@")){
            alert("please enter a valid email")
        } else if(date === ''){
            alert("please enter a valid date")
        }else if(password === ''){
            alert("password field is required")
        }else if(password.length < 5){
            alert("password must be at least 5 characters")
        }
        else if(checkbox === 'checkbox'){
            alert("checkbox field is required")
        }else{
            console.log("Data add successfully");
            
            localStorage.setItem("userData",JSON.stringigy([...data,inpval]));
        }
    }

    return (
        <>
            <div className='container mt-5'>
                <section className='d-flex justify-content-between'>
                    <div className='left_data mt-3 pd-3' style={{width:"100%"}}>
                        <h3 className='text-center col-lg-6'>Sign Up</h3>
                        <Form>
                            <Form.Group className="mb-3 mt-3 col-lg-6" controlId="formBasicName">
                                <Form.Control onChange={getData} type="text" name='name' placeholder="Enter Your Name" />    
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Control onChange={getData} type="email" name='email' placeholder="Enter Email" />    
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicDate">
                                <Form.Control onChange={getData} type="date" name='date' />    
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                                <Form.Control onChange={getData} type="password" name='password' placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicCheckbox">
                                <Form.Check onChange={getData} type="checkbox" name='checkbox' label="Check me out" />
                            </Form.Group>
                            <Button className='col-lg-6' onClick={addData} style={{background:"rgba(67, 185, 127)"}} variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                        <p className='mt-3'>Already Have an Account <span><NavLink to="/login"> SignIn </NavLink></span> </p>
                    </div>

                 <Signimg/>
                </section>
            </div>

        </>
    )
}

export default Home