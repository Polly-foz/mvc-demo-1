import './app1.css'
import $ from 'jquery'

$('#app1 #number').html(localStorage.getItem("app1-number") || 100)

const calculate = function(number,id){
    switch (id) {
        case 'btnAdd1':
            return number + 1;
        case 'btnMinus1':
            return number - 1;
        case 'btnMultiply2':
            return number * 2;
        case 'btnDividedBy2':
            return number / 2;
    }
    return undefined;
}

$('#app1 .btnOperator').on('click',function(e){
    let number = parseFloat($('#app1 #number').html())
    const id = $(this).attr('id')
    number = calculate(number,id)
    localStorage.setItem('app1-number',number)
    $('#app1 #number').html(number)
})
