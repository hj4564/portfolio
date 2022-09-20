$(function(){
    $('#fullpage').fullpage({
        anchors:['home', 'about','port','cont'],
	    navigationTooltips: ['home', 'about','port','cont'],
        menu:'#right_nav',
        //options here
	    // navigation: true,
        autoScrolling:true,
        scrollHorizontally: true,
        // afterLoad: function(anchorLink,index){
        //     if(index == 1){
        //         $('#right_nav').hide();
        //     }
        // }
    });
    $('.s_list:gt(0)').hide();
    $('.tab li').click(function(){
        let num = $(this).index();
        $('.s_list').hide();
        $('.s_list').eq(num).show();
    })
    // $('.slide_j').slick();
})