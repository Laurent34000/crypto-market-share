import {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import Table from './components/Table'
import PieChart from './components/PieChart';

function App() {

    const [coins, setCoins] = useState([])

    const getData = async () => {
      const res = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false%27")
    setCoins(res.data)
    }

    useEffect(() => { 
      getData() 
    }, [])

  return (
    <div className="container">
      <header />
      <form>
          <div className='row form-group justify-content-center'> 
          <div className="col-lg-6 d-none d-lg-block">
          <Table coins={coins}/>
          </div>
          <div className="col-lg-5">
          <PieChart coins={coins}/>
          </div>
          </div>
      </form>
    </div>
  );
}

export default App;
