import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form' //action creator do redux-form que pode mexer no estado 
import { showTabs, selectTab } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3003/api'
const INITIAL_VALUES = {} //valores iniciais do form

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

            dispatch(init())

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

//Estado inicial do Ciclo de Pagamento
export function init(){
    return [
        showTabs('tabList', 'tabCreate'), //abas ativas
        selectTab('tabList'), //aba selecionada
        getList(), //consulta atual
        initialize('billingCycleForm', INITIAL_VALUES) //inicializa form vazio
    ]
}