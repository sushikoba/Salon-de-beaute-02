$(function(){
    //ロード 
    $(window).on('load', function() {
           //ロードじに表示
          $("#loader-bg").show(); 
           //全体３sでフェードアウト
            setTimeout(function(){
          $('#loader-bg').fadeOut();
        },3000);
           //ドットは１sでフェードアウト
        $('.load-dots').fadeOut(1000); 
        　//ドットフェードアウトしたらIMGをフェードインさせる
        $('.load-dots').fadeOut( function() {
          $('#load-img').fadeIn(1500)
        });
    });

    //fvスクロール後Headerの設定変更
    var mainPos = $(".fv").outerHeight();
    $(window).scroll(function () {

      //fvより下の時
      if ($(window).scrollTop() > mainPos) {
        if(window.matchMedia("(max-width: 580px)").matches){
          //ウィンドウサイズが 580px以下の場合
          //スマホサイズでは非表示
          $('.header-hide').hide();
        }else{ 
          //ウィンドウサイズが 580px以上の場合
          //PCサイズ・タブレットサイズでフェードイン 
          $('.header-hide').fadeIn();
        }
      //fより上ではフェードアウト
      }else{
        $('.header-hide').fadeOut();
      }

    });

    // メニューのスクロールボタンクリックした時
    //ヘッダーの高さ分下げて本文表示
    //PCサイズ
    if(window.matchMedia("(min-width: 910px)").matches){    
            var headerHeight = $('nav').outerHeight();
              $('.scroll-btn').click(function(){
                  var speed = 1000;
                  var href = $(this).attr('href');
                  var target = $(href === "#" || href === "" ? 'html' : href);
                  var position = target.offset().top-headerHeight;
                  $('html, body').animate({'scrollTop': position}, 500, "swing");
                  return false;
              });
    }

    // メニューのスクロールボタンクリックした時
    //ヘッダーの高さ分下げて本文表示
    //タブレットサイズでヘッダーの高さが高い時
    if(window.matchMedia("(max-width: 910px) and (min-width: 580px)").matches){
           $('.scroll-btn').click(function(){
                var speed = 1000;
                var href = $(this).attr('href');
                var target = $(href === "#" || href === "" ? 'html' : href);
                var position = target.offset().top-129; //129(.header-scrollの高さ)
                $('html, body').animate({'scrollTop': position}, 500, "swing");
                return false;
           });
    }

    //SPサイズでは不要


    // BURGER

    //バーガーをクリックした時
    //1.メニューを開く/閉じる
    //2.バーガクロスになる/バーガーに戻る(.crossを追加/消す)
    //3.本文をスクロールさせない/させる
    $('.header-sp-burger').click(function() {
                $('#nav-open').fadeToggle(300);
                $(this).toggleClass('cross');
                $('body').toggleClass('no-scroll')
                $('.burger-text').fadeOut();
    });

    //バーガーメニュー内のナビクリック時
    //1.メニューを閉じる
    //2.クロスを消す
    //3.ノースクロールを消す
    $('.scroll-btn').click(function(){
                $('#nav-open').fadeOut(300);
                $('.header-sp-burger').removeClass('cross');
                $('body').removeClass('no-scroll')
    });


    //バーガーメニューが開いている時に
    //本文背景のをクリックしたらバーガーメニュー閉じる
     $('.header-sp-open-left').click(function(){
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
  //クリック時モダルを開く＆本文ノースクロール
  $('.modal-open').each(function(){
          $(this).on('click',function(){
              var target = $(this).data('target');
              var modal = document.getElementById(target);
              $(modal).fadeIn();
              $('body').addClass('no-scroll');
              return false;
          });
      });

   //閉じるボタンでモダルを閉じる＆ノースクロールを消す（本文に戻る）
    $('.style-modal-close').on('click',function(){
          $('.style-modal').fadeOut();
          $('body').removeClass('no-scroll');
          return false;
    }); 

    //モダル内の背景をクリックした時もモダルを閉じる＆ノースクロールを消す（本文に戻る）
    $('.style-modal').click( function(){
          $(this).fadeOut();
          $('body').removeClass('no-scroll');
    });

    //モダル内の写真をクリックした時はモダルを閉じたりさせない
    $( '.style-modal-img' ).on( 'click', function( e ){
          e.stopPropagation();
    });

    // スクロールトップ
    $('#top').click(function(){
          $('html').scrollTop(0);
    });


  });　// 最後のとじfunction

  