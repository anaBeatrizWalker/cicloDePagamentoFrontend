//Renderiza uma única aba
import React, { Component } from "react";

class TabHeader extends Component{
    render(){
        return (
            <li>
                <a href='javascript:;' 
                    data-toggle='tab' 
                    data-target={this.props.target}>
                    <i className={`fa fa-${this.props.icon}`}></i> {this.props.label}
                </a>
            </li>
        )
    }
}
export default TabHeader
/*
href: ignora a ref do link

target: recebe por parâmetro e compara com o id do content para que o conteúdo correto seja exibido ao selecionar a tab
*/