import React from "react";
import ReduxToastr from 'react-redux-toastr'
import 'modules/react-redux-toastr/lib/css/react-redux-toastr.css' //ref do css de redux-toastr

export default props => (
    //Configurações da forma que será exibido no sistema
    <ReduxToastr 
        timeOut={4000} 
        newestOnTop={false} //mais novo em cima
        preventDuplicates={true} //previne msgs duplicadas
        position='top-right' //posição da msg
        transitionIn='fadeIn'
        transitionOut='fadeOut'
        progressBar /> //quanto tempo falta para ser escondido
)