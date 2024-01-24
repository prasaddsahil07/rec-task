import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Card from './components/Card'
import SectionCard from './components/SectionCard'

function App() {
  return (
    <>
      <div className="bg-slate-950">
        <Navbar />
        <Card />
        <SectionCard />
        <Footer />
      </div>
    </>
  )
}

export default App
