import React, { Component } from "react";

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from "../common/tab/tabs";
import TabsHeader from "../common/tab/tabsHeader";
import TabsContent from "../common/tab/tabsContent";
import TabHeader from "../common/tab/tabHeader";

class BillingCycle extends Component{
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

                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}
export default BillingCycle