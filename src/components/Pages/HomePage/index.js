import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";

import { useGetCryptosQuery } from "../../../services/cryptoApi";
import { Link } from "react-router-dom";
import Cryptocurrencies from "../CryptoCurrencies";
import News from "../News";

const { Title } = Typography;

const Homepage = () => {
  const { data } = useGetCryptosQuery(10);

  const globalStats = data?.data?.stats;

  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic
            title="Total CryptoCurrencies"
            value={data !== undefined && millify(globalStats.total)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={data !== undefined && millify(globalStats.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market Cap"
            value={data !== undefined && millify(globalStats.totalMarketCap)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24h Volume"
            value={data !== undefined && millify(globalStats.total24hVolume)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Markets"
            value={data !== undefined && millify(globalStats.totalMarkets)}
          />
        </Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 CryptoCurrencies
        </Title>
        <Title level={3} className="show-more">
          <Link to="/CryptoApp/cryptocurrencies">Show More</Link>
        </Title>
      </div>
      <Cryptocurrencies simplified />
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest Crypto News
        </Title>
        <Title level={3} className="show-more">
          <Link to="/CryptoApp/news">Show More</Link>
        </Title>
      </div>
      <News simplified />
    </>
  );
};

export default Homepage;
