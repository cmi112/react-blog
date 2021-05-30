import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import Animation from "./Animation"

function App() {
    return (
    <div style={{display:"flex",flexDirection:"column",alignContent:"space-between",height:"100vh"}}>
    <Animation/>
    <Header />
   
    <Footer />
    </div>
  );
}

export default App;