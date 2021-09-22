import React from "react";
import { Link } from "react-router-dom";
import { Typography, Space } from "antd";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <Typography.Title level={5} style={{ color: "white" }}>
          Crypto <br />
          All Rights Reserver
        </Typography.Title>
        <Space>
          <Link to="/CryptoApp/">HomePage</Link>
          <Link to="/CryptoApp/exchanges">Exchanges</Link>
          <Link to="/CryptoApp/news">News</Link>
        </Space>
      </div>
    </>
  );
};

export default Footer;
