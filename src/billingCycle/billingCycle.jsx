import React, { Component } from "react";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from "../common/tab/tabs";
import TabsHeader from "../common/tab/tabsHeader";
import TabsContent from "../common/tab/tabsContent";
import TabHeader from "../common/tab/tabHeader";
import TabContent from "../common/tab/tabContent";
import { selectTab, showTabs } from '../common/tab/tabActions'
import List from "./billingCycleList";

class BillingCycle extends Component{

    componentWillMount(){
        //Renderiza por padrão a tab selecionada
        this.props.selectTab('tabList')
        this.props.showTabs('tabList', 'tabCreate')
    }

    render(){
        return (
            <div>
                <ContentHeader title="Ciclos de Pagamentos" small="Cadastro"/>

                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader target='tabList' icon='bars' label='Listar'/>

                            <TabHeader target='tabCreate' icon='plus' label='Incluir'/>

                            <TabHeader target='tabUpdate' icon='pencil' label='Alterar'/>

                            <TabHeader target='tabDelete' icon='trash-o' label='Exlcuir'/>
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tabList'>
                                <List></List>
                            </TabContent>

                            <TabContent id='tabCreate'>
                                <h1>Incluir</h1>
                            </TabContent>

                            <TabContent id='tabUpdate'>
                                <h1>Alterar</h1>
                            </TabContent>

                            <TabContent id='tabDelete'>
                                <h1>Excluir</h1>
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => bindActionCreators({selectTab, showTabs}, dispatch)

export default connect(null, mapDispatchToProps)(BillingCycle)