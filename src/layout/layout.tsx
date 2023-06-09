import React from 'react';
import { Outlet, Link } from "react-router-dom";
import Home from '../pages/home';

import Header from './header';
import Footer from './footer';

type LayoutProps = {
    children: React.ReactNode;
}

const Layout = () => {
  return (
    <>
        <Header />
        <Outlet/>
        <Footer />
    </>
  );
};

export default Layout;