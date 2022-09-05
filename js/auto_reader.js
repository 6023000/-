;(function(){
  var wHeight = getViewPortSize().height,
      sHeight = getScrollSize().height,
      t = null,
      palying = false;

  var AutoReader = function(opt){
    this.playBtn = opt.playBtn;
    this.sTopBtn = opt.sTopBtn;
    this.playImg = opt.playImg;
    this.pauseImg = opt.pauseImg;

    var _self = this;

    addEvent(this.sTopBtn, 'click', function(){
      window.scrollTo(0, 0);
      clearInterval(t);
      _self.playBtn.style.backgroundImage = "url("+ _self.playImg + ")";
      palying = false;
    })

    addEvent(window, 'scroll', function(){
      _self.sTopBtnShow();
    })

    addEvent(this.playBtn, 'click', function(){
      _self.setOuterPlay.call(_self);
    })
  }

  AutoReader.prototype = {
    sTopBtnShow: function(){
      var sTop = getScrollOffset().top,
          sTopBtn = this.sTopBtn;

      sTopBtn.style.display = sTop ? 'block' : 'none';
    },
    setOuterPlay: function(){
      var sTop = getScrollOffset().top,
          playBtn = this.playBtn,
          _self = this;

      if(sHeight === wHeight + sTop){
        return;
      }

      if(!palying){
        playBtn.style.backgroundImage = "url(" + _self.pauseImg + ")";
        palying = true;
        t = setInterval(function(){
          var sTop = getScrollOffset().top;

          if(sHeight <= wHeight + sTop){
            clearInterval(t);
            palying = false;
            playBtn.style.backgroundImage = "url(" + _self.playImg + ")";
          }else{
            window.scrollBy(0, 1);
          }
        }, 10);
      } else {
        playBtn.style.backgroundImage = "url(" + _self.playImg + ")";
        palying = false;
        clearInterval(t);
      }
    }
  }

  window.AutoReader = AutoReader;
}())