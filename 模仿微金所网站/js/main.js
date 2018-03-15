
var current=0;
setInterval(function() {
    current= $(document).width();//当前屏幕的宽度
    if (current > 641)  //pc
    {
        $("#banner .img2000_01").attr("src","images/slide_01_2000x410.jpg");
        $("#banner .img2000_02").attr("src","images/slide_02_2000x410.jpg");
        $("#banner .img2000_03").attr("src","images/slide_03_2000x410.jpg");
    }
    else if(current < 640) // 手机
    {
        $("#banner .img2000_01").attr("src","images/slide_01_640x340.jpg");
        $("#banner .img2000_02").attr("src","images/slide_02_640x340.jpg");
        $("#banner .img2000_03").attr("src","images/slide_03_640x340.jpg");
    };
},500);


/*--------提示框--------*/
$("#wjs-ty .progress").on("mouseover",function(){
    $(this).tooltip('show');
});

/*换色*/
$("#wjs-ty .panel-default > .panel-heading:odd").css("background","#2681c5");
$("#wjs-ty .panel-default > .panel-heading .ps-dw:odd").css("color","#2681c5");



/*-----------------tab 宽度-------------------*/

var aLiWidth=0;

$("#wjs-tab .wapapp > .nav-tabs li").each(function(index,element){
    //console.log(element.clientWidth);
    aLiWidth += element.clientWidth;
    //console.log(aLiWidth)
});

$("#wjs-tab .wapapp > .nav-tabs").css("width",aLiWidth+"px");



$("#wjs-hh ")