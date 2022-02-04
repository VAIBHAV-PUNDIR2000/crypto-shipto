import React, { useEffect, useState } from "react";
import moment from "moment";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsAPI";
import { useGetCryptosQuery } from "../services/cryptoAPI";
import Loader from "./Loader";

const News = ({ simplified }) => {
  const { data } = useGetCryptosQuery(100);
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const { Text, Title } = Typography;
  const { Option } = Select;
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory: newsCategory,
    count: simplified ? 8 : 16,
  });

  const demo = `http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg`;
  if (!cryptoNews?.value) return <Loader />;
  return (
    <div>
      <Row gutter={[24, 24]}>
        {!simplified && (
          <Col span={24}>
            <Select
              showSearch
              className="select-news"
              placeholder="Select a Crypto"
              optionFilterProp="children"
              onChange={(e) => setNewsCategory(e)}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="Cryptocurrency">Cryptocurrency</Option>
              {data?.data?.coins.map((currency) => (
                <Option value={currency.name}>{currency.name}</Option>
              ))}
            </Select>
          </Col>
        )}
        {cryptoNews.value.map((news, i) => (
          <Col xs={24} sm={24} md={12} lg={12} key={i}>
            <a href={news.url} target="_blank" rel="norefferer">
              <Card hoverable className="news-card">
                <div className="news-image-container">
                  <Title className="news-title" level={4}>
                    {news.name}
                  </Title>
                  <img
                    src={news?.image?.thumbnail?.contentUrl || demo}
                    style={{ maxWidth: "100px" }}
                  ></img>
                </div>
                <p>
                  {news.description.length > 200
                    ? `${news.description.substring(0, 200)}....more`
                    : news.description}
                </p>
                <div className="provider-container">
                  <div>
                    <Avatar
                      src={news.provider[0]?.image?.thumbnail?.contentUrl}
                    />
                    <Text className="provider-name">
                      {news.provider[0]?.name}
                    </Text>
                  </div>
                  <Text>
                    {moment(news.dataPublished).startOf("ss").fromNow()}
                  </Text>
                </div>
              </Card>
            </a>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default News;
