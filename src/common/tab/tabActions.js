//Seleciona uma aba
export function selectTab(tabId){
    console.log(tabId)
    return {
        type: 'TAB_SELECTED',
        payload: tabId
    }
}

//Exibe abas 
export function showTabs(...tabIds){ //recebe um array com os ids passados
    const tabsToShow = {}
    //para cada id, adicione como atributo no objeto com valor true
    tabIds.forEach(e => tabsToShow[e] = true)
    return {
        type: 'TAB_SHOWED',
        payload: tabsToShow
    }
}