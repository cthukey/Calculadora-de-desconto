let inputCampo1 = document.querySelector('#campo1')
let inputCampo2 = document.querySelector('#campo2')
let myDesconto = document.querySelector('#DesEmReais')
let total = document.querySelector('#res')
let myForm = document.querySelector('form')
let myRecarregarPagina = document.querySelector('#novoCalculo')


myForm.addEventListener('change',function(){

    console.log('event ok')

    let campo1 = Number(inputCampo1.value)
    let campo2 = Number(inputCampo2.value)

    let theDesconto = `${campo1 * campo2/100}`
    myDesconto.innerHTML = `Desconto em reais: ${theDesconto}` 


    let thePrecoFinal = `${campo1 - theDesconto}`
    total.innerHTML =`R$ ${thePrecoFinal}`

})

myRecarregarPagina.addEventListener('click',function(){
    window.location.reload()
})

