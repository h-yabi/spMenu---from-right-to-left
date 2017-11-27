(function(){
  var spNav = function(){
    var $winWidth = $(window).width();
    var $winHeight = $(window).height();
    var $navBk = $('#js-menuBk');
    var $nav = $('#js-spNav');
    var $openBtn = $('#js-openBtn');
    var $closeBtn = $('#js-closeBtn');

    $openBtn.on('click', function(){
      $navBk.css({
        width: $winWidth,
        height: $winHeight
      }).fadeIn();
      $nav.css({
        height: $winHeight
      }).addClass('isOpen');
    });
    var CloseTrigger = function(el){
      el.on('click', function(){
        $nav.removeClass('isOpen');
        $navBk.fadeOut();
      });
    };
    var closeTriggerBtn = new CloseTrigger($closeBtn);
    var closeTriggerBk = new CloseTrigger($navBk);

    $(window).on('resize', function(){
      var $winWidth = $(window).width();
      var $docHeight = $(document).height();
      if($winWidth > 768){
        setTimeout(function(){
          $nav.css({
            height: 'auto'
          }).removeClass('isOpen');
          $navBk.hide();
        },200);
      }else{
        setTimeout(function(){
          $nav.css({
            height: $docHeight
          });
        },200);
      }
    });

  }();

})();
