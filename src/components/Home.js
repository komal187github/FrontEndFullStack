import React, {useEffect} from "react";
/*import { Jumbotron  } from "reactstrap";
import { Container, Card, CardBody, CardTitle, CardText } from 'reactstrap'; 
*/
import { Jumbotron, Container, Button  } from "reactstrap";
const Home=()=>{

    useEffect(()=>{ document.title="Home || Learn code with KD"
            })
    return (
        <div>
            <Jumbotron className="text-center bg-grey" >
            <h2 >Learn Code with Komal</h2>
            <p>
            To make the jumbotron full width, and without rounded corners,
            add the .jumbotron-fluid modifier class and add a .container or. 
            container-fluid within.
            </p>
            <Container>
            <Button color="primary" outline>start code</Button>
            </Container>
            </Jumbotron>
        </div>
    );
};
export default Home;