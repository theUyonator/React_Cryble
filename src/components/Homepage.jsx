import React, { useContext } from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic, Space, Button } from 'antd';
import { Link } from 'react-router-dom';
import UserContext from '../auth/UserContext';

import { useGetCryptosQuery } from '../services/cryptoApi';
import { Cryptocurrencies, News } from '../components';
import Loader from './Loader';

const { Title, Paragraph } = Typography;

const Homepage = () => {
    const { currentUser } = useContext(UserContext);
    const { data, isFetching } = useGetCryptosQuery(10);
    const globalStats = data?.data?.stats;

    // console.log(data);
    // console.log(process.env);

    if(!currentUser) return (
        <Row style={{marginTop: 290, marginBottom: 290}}>
            <Col span={20} offset={2}>
                <Title level={5} style={{ color: 'black', textAlign: 'center'}}>
                    Welcome to Cryble the Crypto Bible, a complete library for all crypto cryptocurrencies.<br />
                    Sign up to learn more about all cryptocurrencies today! 
                <div style={{marginTop: 20}}>
                    <Space>
                        <Button type="primary">
                            <Link className="btn btn-primary font-weight-bold mr-3"
                                to="/login">
                                Log in
                            </Link>
                        </Button>
                        <Button type="primary">
                            <Link className="btn btn-primary font-weight-bold"
                                to="/signup">
                                Sign up
                            </Link>
                        </Button>
                    </Space>

                </div>
        
                </Title>
            </Col>
        </Row>
        )
   

    if (isFetching) return <Loader />;
    return (
        <>
            <Title level={2} className="heading">Global Crypto Stats</Title>
            <Row>
                <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total} /></Col>
                <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} /></Col>
                <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)} /></Col>
                <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)} /></Col>
                <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} /></Col>
            </Row>
            <div className="home-heading-container">
                <Title level={2} className="home-title">Top 10 Cryptocurrencies in the world (Prices in USD)</Title>
                <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show More</Link></Title>
            </div>
            <Cryptocurrencies  simplified />
            <div className="home-heading-container">
                <Title level={2} className="home-title">Latest Crypto News</Title>
                <Title level={3} className="show-more"><Link to="/news">Show More</Link></Title>
            </div>
            <News simplified />
        </>
    )
}

export default Homepage;
