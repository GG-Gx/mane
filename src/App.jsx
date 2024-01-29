import { useState } from 'react'
import Banner from './components/banner.jsx'
import Footer from './components/footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Banner />
    <Footer />
    </>
  )
}

export default App
