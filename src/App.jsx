import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './components/data'

import './App.css'

function App() {

  const cardData = data.map(function(info){
    return <Card 
      key = {info.id}
      {...info}
    />
  })

  

  return (
    <div className="App">
      <Navbar />
      <Hero />
   
      <section className="cards-list">
        {cardData}
      </section>
      
    </div>
  )
}

export default App
