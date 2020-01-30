import './app2.css'
import $ from 'jquery'


$('#app2 .tab').on("click",function(){
    $(this).addClass('active')
        .siblings().removeClass('active')
    const contentId = 'content' + $(this).attr('id').substring(3)
    $('#'+contentId).addClass("active")
        .siblings().removeClass("active")
})

$('#tab1').trigger("click")