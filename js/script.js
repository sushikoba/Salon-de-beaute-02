$(function(){
    //ロード 
    $(window).on('load', function() {
          $("#loader-bg").show(); 
            setTimeout(function(){
          $('#loader-bg').fadeOut();
        },3000);
        $('.load-dots').fadeOut(1000); 
        $('.load-dots').fadeOut( function() {
          $('#load-img').fadeIn(1500)
        });
    });

    //fvスクロール後Headerの設定変更
    var mainPos = $(".fv").height();
    $(window).scroll(function () {
      if ($(window).scrollTop() > mainPos) {
        $('.header-hide').fadeIn(300);
      }else{
        $('.header-hide').fadeOut(300);
      }
    });

    // スクロール
   var headerHeight = $('header').outerHeight()+$('.sp-sticky-btn').outerHeight();
    $('.scroll-btn').click(function(){
             var speed = 1000;
             var href = $(this).attr('href');
              var target = $(href === "#" || href === "" ? 'html' : href);
              var position = target.offset().top-headerHeight;
              $('html,body').animate({
                'scrollTop': position
               }, 500, "swing");
               return false;
     });

  // BURGER	
  $('.header-sp-burger').click(function() {
              $('#nav-open').fadeToggle(300);
              $(this).toggleClass('cross');
              $('body').toggleClass('no-scroll')
   });

  $('.scroll-btn').click(function(){
              $('#nav-open').fadeOut(300);
              $('.header-sp-burger').removeClass('cross');
              $('body').removeClass('no-scroll')
   });
 
  //  スリックスライダー
  $('.style-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    arrows: true,
    prevArrow:'<div class="slide-arrow prev-arrow"><i class="fas fa-caret-left"></i></div>',
    nextArrow:'<div class="slide-arrow next-arrow"><i class="fas fa-caret-right"></i></div>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

// スタイルモダル
  $('.modal-open').each(function(){
          $(this).on('click',function(){
              var target = $(this).data('target');
              var modal = document.getElementById(target);
              $(modal).fadeIn();
              $('body').addClass('no-scroll');
              return false;
          });
      });
      $('.style-modal-close').on('click',function(){
          $('.style-modal').fadeOut();
          $('body').removeClass('no-scroll');
          return false;
      }); 
       $('.style-modal').click( function(){
          $(this).fadeOut();
          $('body').removeClass('no-scroll');
        } );
        $( '.style-modal-img' ).on( 'click', function( e ){
          e.stopPropagation();
        } );

      // スクロールトップ
      $('#top').click(function(){
          $('html').scrollTop(0);
      });
      // スティッキーボタン
      $(window).scroll(function(){
          var fvHeight = $('.fv').outerHeight();
            if($(this).scrollTop()> fvHeight){
              $('.sticky-btn').fadeIn();
          }else{
            $('.sticky-btn').fadeOut();
          } 
        });
  });

  