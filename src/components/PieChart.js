import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CardHeader from 'react-bootstrap/esm/CardHeader';

ChartJS.register(ArcElement, Tooltip, Legend);


  function PieChart ({coins}) {

    const Token = coins.map(token => token.name);
    const MarketCap = coins.map(token => token.market_cap);

    const TotalMarketCap = MarketCap

    console.log(TotalMarketCap)

    const data =  {
      labels: Token,
      datasets: [{
        label: 'My First Dataset',
        data: MarketCap,
        backgroundColor: ['rgb(255, 99, 132)','rgb(54, 162, 235)','hsl(194, 76%, 55%)', 'hsl(44, 76%, 55%)',' hsl(344, 76%, 55%)','hsl(14, 46%, 55%)','hsl(254, 76%, 55%)','hsl(14, 16%, 55%)','Pink','Grey'],
      }]
    };

        return(
          <Card className="m-5">
            <CardHeader className="text-center">Top 10 Crypto Market Share</CardHeader>
            <div>
                <Pie data={data} />
            </div>

          </Card>
           
        )

  }

export default PieChart;