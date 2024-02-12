import {Navbar, Footer, Transactions, Services, Welcome } from './components/index'
import './index.css'

const App = () => {

  return (
    <>
      <div>
        <div className="gradient-bg-welcome">
          <Navbar/>
          <Welcome/>
        </div>
        <Services/>
        <Transactions/>
        <Footer/>
      </div>
    </>
  )
}

export default App
