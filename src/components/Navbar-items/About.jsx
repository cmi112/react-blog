import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col,Container} from "react-bootstrap"




export default function About() {


    return (
        <>
       
         <div className="about-info">
            <h1 style={{margin:"80px",color:"greenyellow"}}>I am Abdilkani, Developer</h1>
            <img width="200px" src="https://media-exp1.licdn.com/dms/image/C4D03AQFmeXLUndJcMA/profile-displayphoto-shrink_200_200/0/1596385901135?e=1619654400&v=beta&t=bon1Rj_KmiSmJvklCvaky2_rHmWqTclUvfuITdwxjT0" alt=""/>
            </div>
        <Container>
        <Row text-center> 
        
        
            </Row>
  <Row>
    <Col sm> 
    <section>
                <h1>Lorem ipsum, dolor sit amet consectetur adipisicing.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque velit saepe aperiam tempora facere odio magni. Necessitatibus, in. Impedit quia nemo iusto. Quaerat eligendi sit temporibus expedita rerum unde aspernatur.</p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus illum officia consequatur dolor dolorem debitis. Nihil, culpa praesentium! Dignissimos quas temporibus iusto molestias delectus, rem suscipit deserunt veniam ipsa. Officia?
                <a href="https://google.com"><button>Read More....</button></a>
            </section>
             </Col>
    <Col sm> 
    <section>
                <h1>Section Title</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque velit saepe aperiam tempora facere odio magni. Necessitatibus, in. Impedit quia nemo iusto. Quaerat eligendi sit temporibus expedita rerum unde aspernatur.</p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus illum officia consequatur dolor dolorem debitis. Nihil, culpa praesentium! Dignissimos quas temporibus iusto molestias delectus, rem suscipit deserunt veniam ipsa. Officia?
                <a href="https://google.com"><button>Read More....</button></a>
            </section>

    
     </Col>
    <Col sm>
    <section>
                <h1>Section Title</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque velit saepe aperiam tempora facere odio magni. Necessitatibus, in. Impedit quia nemo iusto. Quaerat eligendi sit temporibus expedita rerum unde aspernatur.</p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus illum officia consequatur dolor dolorem debitis. Nihil, culpa praesentium! Dignissimos quas temporibus iusto molestias delectus, rem suscipit deserunt veniam ipsa. Officia?
                <a href="https://google.com"><button>Read More....</button></a>
            </section>
        
          </Col>
  </Row>
</Container>

        </>
    )
}
