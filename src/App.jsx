import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home'
import TheProblem from './Pages/ProblemSection/TheProblem'
import { LanguageProvider } from './contexts/LanguageContext'
import SolutionSection from './Pages/SolutionSectio/SolutionSectio'
import SecureSalesSection from './Pages/SecureSalesSection/SecureSalesSection'
import ExpansionStages from './Pages/ExpansionStages/ExpansionStages'

function App() {
  return (
    <LanguageProvider>
      <div>
        <Navbar />
        <Home/>
        <TheProblem/>
        <SolutionSection/>
        <SecureSalesSection/>
        <ExpansionStages/>
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App
