import './app4.css'
import $ from 'jquery'

$('#app4 .circle').on("mouseenter",function(){
    $(this).addClass('active')
})

$('#app4 .circle').on("mouseleave",function(){
    $(this).removeClass('active')
})