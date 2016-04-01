/**
 * Created by Administrator on 2016/3/29 0029.
 */
/*
* 通过不断的比较宽度值，然后逐个缩短字符宽度，当最后宽度合适的时候，停止循环，就实现了文字溢出显示
*
* */

(function($) {
    $.fn.ellipsis = function(enableUpdating){
        var s = document.documentElement.style;
        if (!('textOverflow' in s || 'OTextOverflow' in s)) {
                       return this.each(function(){
                              var el = $(this);
                              if(el.css("overflow") == "hidden"){
                                      var originalText = el.html();
                                    var w = el.width();

                                       var t = $(this.cloneNode(true)).hide().css({
                                               'position': 'absolute',
                                          'width': 'auto',
                                                'overflow': 'visible',
                                                'max-width': 'inherit'
                                      });
                                       el.after(t);

                                     var text = originalText;
                                      while(text.length > 0 && t.width() > el.width()){
                                             text = text.substr(0, text.length - 1);
                                              t.html(text + "...");
                                           }
                                       el.html(t.html());

                                       t.remove();

                                       if(enableUpdating == true){
                                               var oldW = el.width();
                                                setInterval(function(){
                                                   if(el.width() != oldW){
                                                             oldW = el.width();
                                                                el.html(originalText);
                                                               el.ellipsis();
                                                           }
                                                   }, 200);
                                            }
                                  }
                             });
                    } else return this;
          };
     })(jQuery);