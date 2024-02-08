let inputCampo1 = document.querySelector('#campo1')
let inputCampo2 = document.querySelector('#campo2')
let myDesconto = document.querySelector('#DesEmReais')
let total = document.querySelector('#res')
let myForm = document.querySelector('form')


myForm.addEventListener('change',function(){

    console.log('event ok')

    let campo1 = Number(inputCampo1.value)
    let campo2 = Number(inputCampo2.value)
    console.log(total)

    let theDeconto = `${campo1 * campo2/100}`
    myDesconto.innerHTML = `Desconto em reais: ${theDeconto}` 

    let thePrecoFinal = `${campo1 - theDeconto}`
    total.innerHTML =`R$ ${thePrecoFinal}`

})

