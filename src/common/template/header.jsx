import React from 'react'

export default props => (
    <header className='main-header'>
        <a href="/#/" className='logo'>
            {/*versão do logo pequena com abreviação */}
            <span className='logo-mini'><b>{props.firstAbbr}</b>{props.secondAbbr}</span>
            {/*versão do logo extendida com ícone */}
            <span className='logo-lg'>
                <i className='fa fa-money'></i>
                <b> {props.firstName}</b> {props.secondName}   
            </span>
        </a>
        <nav className='navbar navbar-static-top'>
            <a href className='sidebar-toggle' data-toggle='offcanvas'></a>
        </nav>
    </header>
)