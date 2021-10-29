import React, { useState, useEffect, useContext } from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined, UserOutlined, LoginOutlined, LogoutOutlined, FormOutlined } from '@ant-design/icons';
import UserContext from '../auth/UserContext';
import icon from '../images/cryptocurrency.png';

const Navbar = ({ logout }) => {
    const[activeMenu, setActiveMenu] = useState(true);
    const[screenSize, setScreenSize] = useState(null);
    const { currentUser } = useContext(UserContext);
    console.debug("Navigation", "currentUser=", currentUser);

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);
        window.addEventListener(`resize`, handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if(screenSize < 768) {
            setActiveMenu(false);
        } else {
            setActiveMenu(true);
        }
    }, [screenSize]);


  function loggedInNav() {
    return (
         activeMenu && (
            <Menu theme="dark">
            <Menu.Item icon={<HomeOutlined />}>
                <Link to="/">
                    Home
                </Link>
            </Menu.Item>
            <Menu.Item icon={<FundOutlined />}>
                <Link to="/cryptocurrencies">
                    Cryptocurrencies
                </Link>
            </Menu.Item>
            <Menu.Item icon={<MoneyCollectOutlined />}>
                <Link to="/exchanges">
                    Exchanges
                </Link>
            </Menu.Item>
            <Menu.Item icon={<BulbOutlined />}>
                <Link to="/news">
                    News
                </Link>
            </Menu.Item>
            <Menu.Item icon={<UserOutlined />}>
                <Link to="/profile">
                    {currentUser.first_name || currentUser.username}
                </Link>
            </Menu.Item>
            <Menu.Item icon={<LogoutOutlined />}>
                <Link to="/" onClick={logout}>
                    Log out 
                </Link>
            </Menu.Item>
        </Menu>
        )

    );
  }

  function loggedOutNav() {
    return (
        activeMenu && (
            <Menu theme="dark">
                <Menu.Item icon={<LoginOutlined />}>
                    <Link to="/login">
                        Login
                    </Link>
                </Menu.Item>
                <Menu.Item icon={<FormOutlined />}>
                    <Link to="/signup">
                        Sign Up
                    </Link>
                </Menu.Item>
            </Menu>
        )
        );
  }
  
  return (

    <div className="nav-container">
        <div className="logo-container">
            <Avatar src={icon} size="large" />
            <Typography.Title level={2} className="logo">
                <Link to="/">Cryble</Link>
            </Typography.Title>
            <Button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}>
                <MenuOutlined />
            </Button>
        </div>
        { currentUser ? loggedInNav() : loggedOutNav() }
    </div>
  );


    // return (
    //     <div className="nav-container">
    //         <div className="logo-container">
    //             <Avatar src={icon} size="large" />
    //             <Typography.Title level={2} className="logo">
    //                 <Link to="/">Cryble</Link>
    //             </Typography.Title>
    //             <Button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}>
    //                 <MenuOutlined />
    //             </Button>
    //         </div>
    //         { activeMenu && (
    //                <Menu theme="dark">
    //                <Menu.Item icon={<HomeOutlined />}>
    //                    <Link to="/">
    //                        Home
    //                    </Link>
    //                </Menu.Item>
    //                <Menu.Item icon={<FundOutlined />}>
    //                    <Link to="/cryptocurrencies">
    //                        Cryptocurrencies
    //                    </Link>
    //                </Menu.Item>
    //                <Menu.Item icon={<MoneyCollectOutlined />}>
    //                    <Link to="/exchanges">
    //                        Exchanges
    //                    </Link>
    //                </Menu.Item>
    //                <Menu.Item icon={<BulbOutlined />}>
    //                    <Link to="/news">
    //                        News
    //                    </Link>
    //                </Menu.Item>
    //            </Menu>
    //         )}
    //     </div>
    // )
}

export default Navbar
