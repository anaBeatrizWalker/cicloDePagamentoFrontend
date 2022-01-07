import React, { Component } from "react";
import { reduxForm, Field } from 'redux-form'; //decorator e tag para os campos do form
import labelAndInput from "../common/form/labelAndInput";

class BillingCycleForm extends Component{
    render(){
        //Processa o form da forma correta
        const { handleSubmit } = this.props
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className="box-body">
                        <Field name='name' 
                            component={labelAndInput}
                            label='Nome' 
                            cols='12 4' 
                            placeholder='Informe um nome'>
                        </Field>

                        <Field name='month' 
                            component={labelAndInput}
                            label='Mês' 
                            cols='12 4' 
                            placeholder='Informe o mês'>
                        </Field>

                        <Field name='year' 
                            component={labelAndInput}
                            label='Ano' 
                            cols='12 4' 
                            placeholder='Informe o ano'>
                        </Field>
                </div>
                <div className="box-footer">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        )
    }
}
//Liga o formulário ao redux, passando o id do form
export default reduxForm({form: 'billingCycleForm'})(BillingCycleForm)