$(function () {

  //スクロールした場合の処理
    $(window).scroll(function () {
      const windowHeight = $(window).height();
      const scroll = $(window).scrollTop();
  
      $('.scroll1').each(function () {
        const targetPosition = $(this).offset().top;
        if (scroll > targetPosition - windowHeight + 50) {
          $(this).addClass("fade-in1");
        }
      });
      $('.scroll2').each(function () {
        const targetPosition = $(this).offset().top;
        if (scroll > targetPosition - windowHeight + 50) {
          $(this).addClass("fade-in2");
        }
      });
      $('.scroll3').each(function () {
        const targetPosition = $(this).offset().top;
        if (scroll > targetPosition - windowHeight + 50) {
          $(this).addClass("fade-in3");
        }
      });
      $('.scroll4').each(function () {
        const targetPosition = $(this).offset().top;
        if (scroll > targetPosition - windowHeight + 50) {
          $(this).addClass("fade-in4");
        }
      });
    });


    $(function () {

    //資料請求ボタンを押すとモーダル表示
    $('.document-request-open').on('click',function(){	
        $('.document-request').addClass('active');
        return false;
    });

    //資料請求を送信
    $('.send-document').on('click',function(){	
        const query = {
            text: "INSERT INTO member VALUES ($1, $2)",
            values: [1, "テスト"],
        };
    });
    
    //資料請求画面を閉じる
    $('.document-request-close').on('click',function(){	
        $('.document-request').removeClass('active');
    });


    //お問い合わせボタンを押すとモーダル表示
    $('.inquiry-open').on('click',function(){	
        $('.inquiry').addClass('active');
        return false;
    });

    //お問い合わせを送信
    $('.send-inquiry').on('click',function(){	
        const query = {
            text: "INSERT INTO member VALUES ($1, $2, $3, $4, $5)",
            values: [1, "email",2,"title","text"],
        };
    });
    
    //お問い合わせ画面を閉じる
    $('.inquiry-close').on('click',function(){	
        $('.inquiry').removeClass('active');
    });

  //資料請求ボタンを押すとモーダル表示
  $('.document-request-open').on('click',function(){	
      $('.document-request').addClass('active');
      return false;
  });

  //資料請求を送信
  $('.send-document').on('click',function(){	
      const query = {
          text: "INSERT INTO member VALUES ($1, $2)",
          values: [1, "テスト"],
      };
  });
  
  //資料請求画面を閉じる
  $('.document-request-close').on('click',function(){	
      $('.document-request').removeClass('active');
  });


  //お問い合わせボタンを押すとモーダル表示
  $('.inquiry-open').on('click',function(){	
      $('.inquiry').addClass('active');
      return false;
  });

  //お問い合わせを送信
  $('.send-inquiry').on('click',function(){	
      const query = {
          text: "INSERT INTO member VALUES ($1, $2, $3, $4, $5)",
          values: [1, "email",2,"title","text"],
      };
  });
  
  //お問い合わせ画面を閉じる
  $('.inquiry-close').on('click',function(){	
      $('.inquiry').removeClass('active');
  });

});


});



  
  