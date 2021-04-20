function populetUfs(){

    const ufSelect= document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then((res)=> res.json())
    .then(states=>{

        for(const state of states){
            ufSelect.innerHTML +=`<option value="${state.id}">${state.nome}</option>`


        }



    })
}
populetUfs()

function getCities(event){
    const citySelect= document.querySelector("[name=city]")
    const stateInput= document.querySelector("[name=state]")


    const ufValue=event.target.value

    const indexOfselectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfselectedState].text

    const url=`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML="<option value>Selecione a cidade</option>"
    citySelect.disabled=true

    fetch(url)
    .then((res)=>res.json())
    .then(cities=>{

        for(const city of cities){
            citySelect.innerHTML +=`<option value="${city.nome}">${city.nome}</option>`


        }

        citySelect.disabled=false

    })



}


document
.querySelector("select[name=uf]")
.addEventListener("change", getCities)

//itens de coleta 
const itemsToCollect=document.querySelectorAll(".items-gride li")

for(const item of itemsToCollect){
    item.addEventListener("click", handleSelectedItem)
}

function handleSelectedItem(event){
    const itemId=event.target.dataset.id
    console.log()

}