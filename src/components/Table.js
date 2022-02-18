import React from "react";

const Table = ({coins}) => {



  return (
    <table>
        <tbody>
      
            <tr>
                <th>Token</th>
                {coins.map(token => (
            <td key={token.name}>{token.name}</td>
             ))}
            </tr>
       

         <tr>
                <th>Market Cap</th>
            {coins.map(token => (
            <td key={token.market_cap}>{token.market_cap}</td>
            ))}
         </tr>

        <tr>
            <th>Percentage</th>
            {coins.map(token => (
                <td key={token.id}>{token.market_cap_rank + token.atl}%</td>
            ))}

        </tr>
        </tbody>
        
      </table>
       
       
  
        
    )
};

export default Table;