import AOS from 'aos';
import 'aos/dist/aos.css';
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import { useEffect } from 'react';

function App() {

  // initializing AOS
  useEffect(() => {
    AOS.init();
  }, [])


  return (
    <>
      <FirstComponent />
      <SecondComponent />
    </>
  )
}

export default App
