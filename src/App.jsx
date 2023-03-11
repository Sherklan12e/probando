import Who from "./components/Who"
import Contact from "./components/Contact"
import styled from 'styled-components'
import Hero from "./components/Hero"
import Works from "./components/Works"

const Container = styled.div`
 
  height:100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: initial;
  color: white;
  background: url("./img/bg.jpg");  

`


function App() {

  return (
    <Container>
      <Hero/>
      <Contact/>
      <Works/>
      <Who/>
    </Container>
  )
}

export default App
