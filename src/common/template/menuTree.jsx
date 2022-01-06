import React from "react";

export default props => (
    /*item que tem subitens internamente*/
    <li className="treeview"> 
        <a href>
            <i className={`fa fa-${props.icon}`}></i> {props.label}
            {/*se tá fechado o menu vai pra direita*/}
            <i className='fa fa-angle-left pull-right'></i>
        </a>
        <ul className="treeview-menu">
            {props.children}
        </ul>
    </li>
)