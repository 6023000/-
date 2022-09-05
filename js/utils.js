function addEvent(el, type, fn){
  if(el.addEventListener){
    el.addEventListener(type, fn, false);
  } else if(el.attachEvent){
    el.attachEvent('on' + type, function(){
      fn.call(el);
    })
  } else {
    el['on' + type] = fn;
  }
}

function getScrollOffset(){
  if(window.pageXOffset){
    return {
      top: window.pageYOffset,
      left: window.pageXOffset,
    }
  } else {
    return {
      top: document.body.scrollTop + document.documentElement.scrollTop,
      left: document.body.scrollLeft + document.documentElement.scrollLeft
    }
  }
}

function getViewPortSize(){
  if(window.innerHeight){
    return {
      height: window.innerHeight,
      width: window.innerWidth
    }
  } else {
    if(document.compatMode === 'BackCompat'){
      return {
        height: document.body.clientHeight,
        width: document.body.clientWidth
      }
    } else {
      return {
        height: document.documentElement.clientHeight,
        width: document.documentElement.clientWidth
      }
    }
  }
}

function getScrollSize(){
  if(document.body.scrollHeight){
    return {
      height: document.body.scrollHeight,
      width: document.body.scrollWidth
    }
  } else {
    return {
      height: document.documentElement.scrollHeight,
      width: document.documentElement.scrollWidth,
    }
  }
}