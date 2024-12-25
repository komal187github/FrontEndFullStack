import React,{useEffect} from "react";
import { Card, CardBody, CardTitle, CardSubtitle,
      CardText, Button, Container }
 from 'reactstrap';
 import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";


const Course=({ Course, update })=>{
    useEffect(()=>{ document.title="Courses || Learn code with KD"
    },[]);

        const deleteCourse=(id)=>{
            axios.delete(`${base_url}/api/${id}`).then(
                (response)=>{
                    toast.success("course deleted")
                    update(id);
                },
                (error)=>{
                    toast.error("course not deleted ! server problem");
                }
                
            )
        }

     return(
        <Card className="text-center">
            <CardBody>
                <CardSubtitle className="font-weight-bold ">{Course.title}</CardSubtitle>

                <CardText>{Course.description}</CardText>
                <Container >
                    <Button color="danger mr-3" onClick={()=>{
                        deleteCourse(Course.id);
                    }}>Delete</Button>
                    <Button color="warning ml-3">Update</Button>
                </Container>
            </CardBody>
        </Card>
     );
};
export default Course;