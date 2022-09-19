import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [time, setTime] = useState(new Date())

  useEffect(() => {
      // tänne koodia joka näkyy kun sivu avataan/ajastin käynnistetään
      const id = setInterval(() => { // anonyymi funktio, ei nimeä + aaltosulkeet
        setTime(new Date())
      },1000) // päivitetään tuhannen millisekunnin välein
  
    return () => {
      // tänne koodia joka näkyy kun sivu/ajastin suljetaan
      // useEffectissä returnia ei usein tarvita
      clearInterval(id)
    }
  }, [])
  
  return (
    <div style={{margin: '30px'}}>

      {time.toLocaleTimeString()}

    </div>
  );
}

export default App;
