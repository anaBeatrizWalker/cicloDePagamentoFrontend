import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { reduxForm, Field, formValueSelector } from 'redux-form'; //método responsavel por pegar um valor dentro do form

import { init } from "./billingCycleActions";
import labelAndInput from "../common/form/labelAndInput";
import ItemList from "./itemList";
import Summary from "./summary";

class BillingCycleForm extends Component{

    calculateSummary(){
        //acumulador e valor atual
        const sum = (t, v) => t + v 
        return {
            //recupera todos os valores de créditos convertendo a númérico, senão é 0, e retorna um único valor pra soma de créditos
            sumOfCredits: this.props.credits.map(c => +c.value || 0).reduce(sum), 
            sumOfDebits: this.props.debts.map(d => +d.value || 0).reduce(sum)
        }
    }

    render(){
        //Processa o form da forma correta
        const { handleSubmit, readOnly, credits, debts } = this.props

        const { sumOfCredits,  sumOfDebits} = this.calculateSummary()

        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name='name' 
                        component={labelAndInput}
                        readOnly={readOnly}
                        label='Nome' 
                        cols='12 4' 
                        placeholder='Informe um nome'>
                    </Field>

                    <Field name='month' 
                        component={labelAndInput}
                        readOnly={readOnly}
                        label='Mês' 
                        cols='12 4' 
                        placeholder='Informe o mês'>
                    </Field>

                    <Field name='year' 
                        component={labelAndInput}
                        readOnly={readOnly}
                        label='Ano' 
                        cols='12 4' 
                        placeholder='Informe o ano'>
                    </Field>

                    <Summary credit={sumOfCredits} debt={sumOfDebits}/>

                    <ItemList cols='12 6' 
                        list={credits} 
                        readOnly={readOnly}
                        field='credits'
                        legend='Créditos'/>

                    <ItemList cols='12 6' 
                        list={debts} 
                        readOnly={readOnly}
                        field='debts'
                        legend='Débitos'
                        showStatus={true}/>
                </div>
                <div className="box-footer">
                    <button type="submit" className={`btn btn-${this.props.submitClass}`}>
                        {this.props.submitLabel}
                    </button>
                    <button type="button" className="btn btn-default"
                    onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}
//Liga o formulário ao redux, passando o id do form
BillingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm)

const selector = formValueSelector('billingCycleForm')

const mapStateToProps = state => ({
    credits: selector(state, 'credits'),
    debts: selector(state, 'debts')
})

const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)