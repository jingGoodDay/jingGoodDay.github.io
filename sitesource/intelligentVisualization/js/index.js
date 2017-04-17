var photos= new Array();
photos[0]="../../../../img/introduction/visual1.jpg";
photos[1]="../../../../img/introduction/visual2.jpg";
photos[2]="../../../../img/introduction/visual3.jpg";
photos[3]="../../../../img/introduction/visual4.jpg";

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
