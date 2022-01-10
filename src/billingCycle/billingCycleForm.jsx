import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { reduxForm, Field } from 'redux-form'; //decorator e tag para os campos do form

import { init } from "./billingCycleActions";
import labelAndInput from "../common/form/labelAndInput";

class BillingCycleForm extends Component{
    render(){
        //Processa o form da forma correta
        const { handleSubmit, readOnly } = this.props
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

const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)

export default connect(null, mapDispatchToProps)(BillingCycleForm)