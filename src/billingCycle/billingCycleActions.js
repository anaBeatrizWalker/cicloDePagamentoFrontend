import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form' //action creator do redux-form que pode mexer no estado 
import { showTabs, selectTab } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3003/api'

export function getList(){
    const request = axios.get(`${BASE_URL}/billingCycles`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export function create(values){

    return dispatch => {
        axios.post(`${BASE_URL}/billingCycles`, values)
        .then(resp => {
            
            toastr.success('Sucesso!', 'Operação realizada com sucesso!')

            dispatch([ //redux-multi que lê esse array
                resetForm('billingCycleForm'), //reseta o formulário
                getList(), //busca da lista
                selectTab('tabList'), //mostra a lista
                showTabs('tabList', 'tabCreate') //mostra as abas
            ])

        }).catch(e => {
            e.response.data.errors.forEach(error => toastr.error('Erro!', error))
        })  
    }
}

export function showUpdate(billingCycle){
    //redux-multi permite criar um array de action creators
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'), 
        initialize('billingCycleForm', billingCycle) //inicializa o form (pelo id) passando o ciclo de pagamento como parâmetro para o form
    ]
}