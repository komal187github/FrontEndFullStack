import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import {Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

const AddCourse=()=>{
    useEffect(()=>{ document.title="Add Course || Learn code with KD"
        }, []);

        const [course, setCourse]=useState({});

        //form handler function
        const handleForm=(e)=>{
            console.log(course);
            postDatatoServer(course);
            e.preventDefault();
        }

        // creating function to post data on server

        const postDatatoServer=(data)=>{
            axios.post(`${base_url}/api/add`, data).then(
                (response)=>{
                    console.log(response);
                    console.log("success");
                    toast.success("course added successfully..");
                    setCourse({id:"", title:"", description:""});

                },(error)=>{
                    console.log(error);
                    console.log("error");
                    toast.error("somthing went wrong...");
                }
            )
        }

    return(
        <div>
            <Fragment>
                <h1 className="text-center "> Fill Course Details</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                <Label for="userId"> Course Id</Label>
                <Input  type="text" placeholder="Enter  here" name="userId" id="userId" 
                value={course.id}
                onChange={(e)=>{
                    setCourse({...course, id: e.target.value });
                }}/>
                </FormGroup>

                <FormGroup>
                <Label for="title"> Course Tital</Label>
                <Input  type="text" placeholder="Enter title here"
                 name="title" id="title" 
                 value={course.title}
                 onChange={(e)=>{
                    setCourse({...course, title: e.target.value});
                 }}
                 />
                </FormGroup>

                <FormGroup>
                <Label for="description"> Course Description</Label>
                <Input  type="textarea" placeholder="Enter description here" 
                name="description" id="description" 
                value={course.description}
                style={{height:70}}
                onChange={(e)=>{
                    setCourse({...course, description: e.target.value});
                }}
                />
                </FormGroup>

                <Container className="text-center">
                <Button type="submit" color="success"> Add Course</Button>
                <Button  type ="reset"
                    onClick={()=>{
                        setCourse({id:"", title:"", description:""});
                    }}
                color="warning ml-5" > clear</Button>
                </Container>
            </Form>

            </Fragment>
        </div>
    )

}
export default AddCourse;