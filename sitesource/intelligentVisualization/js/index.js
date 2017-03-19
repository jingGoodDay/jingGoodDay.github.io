var photos= new Array();
photos[0]="../../../../img/visual1.png";
photos[1]="../../../../img/visual2.png";
photos[2]="../../../../img/visual3.png";
photos[3]="../../../../img/visual4.png";

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
