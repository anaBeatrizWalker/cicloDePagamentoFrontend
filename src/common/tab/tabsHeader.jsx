//Agrupa todos os cabeçalhos das abas
import React from "react";

export default props => (
    <ul className="nav nav-tabs">
        {props.children}
    </ul>
)