import './app3.css'
import $ from 'jquery'

$('#app3 .square').on('click',function(){
    $(this).toggleClass('active')
})