import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel} from "react-bootstrap"
export default function Projects() {
    return (
        <>
            <h1 style={{margin:"80px",color:"greenyellow"}}>Some Of Our Projects</h1>
            <h3>some projects</h3>


            {/* this will be under */}
            <Carousel fade>
  <Carousel.Item>
  <iframe title="somalische.de" style={{width:"100%", height:"500px"}} src="https://somalische.de"></iframe>
    <Carousel.Caption style={{color:"black"}}>
      <h3>Organiztion Website</h3>
      <p>It was Built with Wordpress</p>
    </Carousel.Caption>
  </Carousel.Item>

   {/* Item 2 */}
   <Carousel.Item>
  <iframe title="Halave" style={{width:"100%", height:"500px"}} src="https://halavewelfare.org"></iframe>
    <Carousel.Caption style={{color:"black"}}>
      <h3>NGO Website</h3>
      <p>We offer this website to charity Organization</p>
    </Carousel.Caption>
  </Carousel.Item>
  {/* Item 3 */}
  <Carousel.Item>
  <iframe title="syl" style={{width:"100%", height:"500px"}} src="https://sylsomalishop.com"></iframe>
    <Carousel.Caption style={{color:"black"}}>
      <h3>Local Shop in Gießen</h3>
      <p>We Helped to during carona Pandimic their Online Presense</p>
    </Carousel.Caption>
  </Carousel.Item>
  {/* Item 4 */}
  <Carousel.Item>
  <iframe title="portofolio" style={{width:"100%", height:"500px"}} src="https://abdilkaniportofolio.netlify.app"></iframe>
    <Carousel.Caption style={{color:"black"}}>
      <h3>My Portofolio</h3>
      <p>This is My Portofolio for the Orientation Course at DCI </p>
    </Carousel.Caption>
  </Carousel.Item>
  {/* Item 5 */}
  <Carousel.Item>
  <iframe title="Online marketing project" style={{width:"100%", height:"500px"}} src="https://cmivlogs.wordpress.com"></iframe>
    <Carousel.Caption style={{color:"black"}}>
      <h3>Online Marketing Project</h3>
      <p>This is My Project  Online Marketing for the Orientation Course at DCI </p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

            

        </>
    )
}
