import react from "react";
import { Card, CardBody } from "reactstrap";


function Header({ name, title })
{
    return(
        <div >
            <Card className="my-3 bg-warning">
                <CardBody>
            <h1  className="text-center my-3">Welcome to Courses Application</h1>
                 </CardBody>
            </Card>
        </div>
    );
}
export default Header;

/*
function Header({ name, title })
{
    return(
        <div  style={ {background:'lightblue', padding :20, width: 400 }}>
        <h1>{ title }</h1>
        <h1>{ name }</h1>
        <p>
        The message indicates that the create-react-app process was
        aborted due to errors during installation, and the cleanup 
        process has deleted the partially created files and directories. 
        </p>
        </div>
    );
}*/