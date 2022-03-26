import React from "react";
import { Card, CardGroup, ListGroup, ListGroupItem } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CardHeader from "react-bootstrap/esm/CardHeader";


const Table = ({coins}) => {


  return (
    <CardGroup className="m-5">
        <Card>
        <CardHeader className="text-center">Token</CardHeader>
        {coins.map(token => (
        <ListGroupItem key={token.name}>{token.name}</ListGroupItem> 
 ))}
        </Card>

          <Card>
          <CardHeader className="text-center">Market Cap</CardHeader>
{coins.map(token => (
<ListGroup.Item key={token.market_cap}>{token.market_cap.toLocaleString()} $US</ListGroup.Item>
))}
          </Card>
    </CardGroup>
    
    )
};

export default Table;