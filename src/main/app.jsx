import '../common/template/dependencies'
import React from 'react'

import Header from '../common/template/header'
import SideBar from '../common/template/sideBar'
import Footer from '../common/template/footer'
import Messages from '../common/msg/messages'

export default props => (
    <div className='wrapper'>
        <Header firstAbbr="M" secondAbbr="M" firstName="My" secondName="Money"/>

        <SideBar/>

        <div className='content-wrapper'>
            {props.children}
        </div>

        <Footer/>

        <Messages/>
    </div>
)