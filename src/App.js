import {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import Table from './components/Table'

function App() {

    const [coins, setCoins] = useState([])

    const getData = async () => {
      const res = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false%27")
    console.log(res.data)
    setCoins(res.data)
    }

    useEffect(() => { 
      getData() 
    }, [])

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <h1>Top 10 Crypto Market Share</h1>
      <Table coins={coins}/>

    </div>
  );
}

export default App;
