import React from 'react'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'

function Layout() {
    return (
        <div class="flex flex-col items-center bg-gray-700 min-h-screen ">
            <Header />
            <Body />
            <Footer />
        </div >
    )
}

export default Layout