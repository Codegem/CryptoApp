import React, { useEffect, useState } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";
import Loader from "../../Loader";
import { useGetCryptosQuery } from "../../../services/cryptoApi";

const Cryptocurrencies = ({ simplified }) => {
  const [cryptos, setCryptos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);

  useEffect(() => {
    const queryData = cryptosList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setCryptos(queryData);
  }, [cryptosList, searchQuery]);

  if (isFetching) return <Loader />;

  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search Crypto"
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
          />
        </div>
      )}
      <Row gutter={(32, 32)} className="crypto-card-container">
        {cryptos?.map((currency) => (
          <Col xs={24} sm={12} lg={8} className="crypto-card" key={currency.id}>
            <Link to={`/crypto/${currency.id}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                extra={
                  <img
                    className="crypto-image"
                    src={currency.iconUrl}
                    alt={currency.name}
                  />
                }
                hoverable
              >
                <p>Price: {millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Change : {millify(currency.change)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
