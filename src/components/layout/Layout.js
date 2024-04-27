import React from 'react'
import Header from './Header'
import Footer from './footer/Footer'

const Layout = ({ children, deepGreen }) => {
    return (
        <>
            <Header deepGreen={deepGreen} />
            <main>{children}</main>
            <Footer />

        </>
    )
}

export default Layout
