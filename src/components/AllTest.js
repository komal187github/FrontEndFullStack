import React, { useEffect, useState } from "react";
import Course from "./Course";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";

const Allcourse=()=>{
    useEffect(()=>{ document.title="All Course || Learn code with KD";
    },[]);

    //function to call server
    const getAllCoursesFromServer=()=>{
        axios.get(`${base_url}/api/courses`).then(
            (response)=>{
                //success
               // console.log(response);
                console.log(response.data);
                toast.success("courses has been loaded", {position:"bottom-center", });
                setCourses(response.data);
            },
            (error)=>{
                //for error
                console.log(error);
                toast.error("something went wrong ", {position:"bottom-center", })
            }
            );
    };

    // calling loading course function

    useEffect(()=>{
        getAllCoursesFromServer();
    }, []);



    const [Courses, setCourses]=useState([ ])

        const updateCourses=(id)=>{
            setCourses(Courses.filter((c)=>c.id!=id));
        };

       /* {tital: "Java Course", description:"This is Demo Course"},
        {tital: "Reactjs Course", description:"This is Demo Course"},
        {tital: "Django Course", description:"This is Demo Course"},
        {tital: "Angular Course", description:"This is Demo Course"}*/
   
    return(
        <div>
            <h1>All Courses</h1>
            <p>List of Courses are as follows</p>

            {
                Courses.length > 0 
                ? Courses.map(( item ) => <Course key ={item.id} 
                Course={ item } update={updateCourses} />)
                : "No courses"
                
            }  
        </div>

    );
};
export default Allcourse;