
//For orange bar at top of page
$(document).on('scroll', function(){

    var pixelsfromtop = $(document).scrollTop()
    
    if( pixelsfromtop > 180){
        $('header').addClass('hide-header')
    }
    
    else{
        $('header').removeClass('hide-header')
    }
    
    var documentheight = $(document).height()
    var windowheight = $(window).height()
    
    var difference = documentheight - windowheight
    var percentage = pixelsfromtop * 100/ difference
    
    $('.top-bar').css('width', percentage + '%')
    })
    
    
    
    //To open basket
    
    $('.basket-image').on('click',function(){
    
        $('.shopping-cart').toggleClass('shopping-cart-return')
    })
    
    // To close basket
    
    $('.shopping-cart a').on('click',function(){
        
        $('.shopping-cart').toggleClass('shopping-cart-return')
    })
    
    
    
    //to bring in login bar
    $('.menu-icon-img').on('click',function(){
    
        $('.login').toggleClass('add-login-bar')
    })
    
    
    //to hide login bar
    $('.login-top a').on('click',function(){
    
        $('.login').toggleClass('add-login-bar')
    })
    
    //For links in headers
    
    $('.link-hovers').on('click',function(){
    
        $('.uno a').removeClass('link-1')
    
    //     $('.uno a, .trois a').addClass('.link-hover')
    
    //     var isClicked = $
    
        // if('header nav a' === isClicked){
            
        //     $('.uno .deux a').addClass('link-1')
        // }
    
        // var addhover = $('.deux .uno').addClass('.link-1')
    
        // $('header nav a').addClass(addhover)
    
        
    })
    
    $('.single-meal, .meal-deal').hover(function(){
    
        $('.overlay p').show()
        // $('.overlay p').fadetoggle(5000)
        return false
    })
    
    
    $('.single-meal, .meal-deal').mouseleave(function(){
    
        $('.overlay p').hide()
    
        return false
    })
    
    