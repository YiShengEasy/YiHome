import React from 'react';
import Header from './Header';
import Nav from './Nav';

const Layout = ({ children }) => {
    return (
        <div>
            <Header></Header>
            <Nav></Nav>
            {children}
        </div>
    )
}
export default Layout;