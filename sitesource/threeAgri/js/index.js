var photos= new Array();
photos[0]="http://wx1.sinaimg.cn/large/b682c9d9gy1fdk75b82idj20nm0exdks.jpg";
photos[1]="http://wx4.sinaimg.cn/mw690/b682c9d9gy1fdk75bq7e1j20dw0kuwic.jpg";
photos[2]="http://wx4.sinaimg.cn/mw690/b682c9d9gy1fdk75cjm08j20dw0kutb6.jpg";
photos[3]="http://wx4.sinaimg.cn/mw690/b682c9d9gy1fdk75df81fj20dw0jmdj7.jpg";
photos[4]="http://wx1.sinaimg.cn/mw690/b682c9d9gy1fdk74ts1jhj20lo0c676q.jpg";
photos[5]="http://wx3.sinaimg.cn/mw690/b682c9d9gy1fdk74ud0imj20lo0czdhz.jpg";
photos[6]="http://wx3.sinaimg.cn/mw690/b682c9d9gy1fdk74v10vrj20lo0ceq4t.jpg";
photos[7]="http://wx1.sinaimg.cn/mw690/b682c9d9gy1fdk74vrlg1j20nm0fqdih.jpg";
photos[8]="http://wx2.sinaimg.cn/mw690/b682c9d9gy1fdk74ws0edj20nm0fqdiv.jpg";
photos[9]="http://wx4.sinaimg.cn/mw690/b682c9d9gy1fdk74x1bd7j20nm0ej413.jpg";
photos[10]="http://wx1.sinaimg.cn/mw690/b682c9d9gy1fdk74xrxuvj20nm0fq777.jpg";
photos[11]="http://wx2.sinaimg.cn/mw690/b682c9d9gy1fdk74ymqmqj20nm0fqdl5.jpg";
photos[12]="http://wx3.sinaimg.cn/mw690/b682c9d9gy1fdk74yzt34j20dw0ku41z.jpg";

$(function(){
    pictures.init();
});
var pictures={
    init: function(){
        var context="";
        for(var i=0; i < photos.length; i++){
            context+="<li><div class='img-container'><a href='"+photos[i]+"' data-fancybox='group'><img src='"+photos[i]+"'></a></div></li>"
        }
        $("ul").append(context);
    }

};
