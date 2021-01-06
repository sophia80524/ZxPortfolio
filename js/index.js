//平面作品尺寸調整區
    $(window).resize(function(){
           if ($(window).outerWidth() <1300){
                //視窗小於1300
               console.log("131313");
               $("#graphic ul li").addClass("gw48-2");
               $("#graphic ul li.gral").addClass("gw98");
                if ($(window).outerWidth() <769){
                //視窗小於769
                   console.log("777");
                   $("#graphic ul li").addClass("gw98-2");
               }else{
                //視窗大於769
                   $("#graphic ul li").removeClass("gw98-2");
               }
           }else{
               //視窗大於1300
               $("#graphic ul li").removeClass("gw48-2");
               $("#graphic ul li.gral").removeClass("gw98");
           }
         });//平面作品尺寸調整end

//平面作品點擊縮放區
function ShowMe_TheFriend_comment() {
    
        $(".coverarea").click(function(){
            $(this).next(".graimg").addClass("graimgshow");            
        });
    
        $(".btnx").click(function(){
//            $(this).closest(".graimg").removeClass("graimgshow");
        });
//        $(".graimg>div").click(function(){
//            console.log("yyy");
//            $(this).closest(".graimg").removeClass("graimgshow");
//        });
        $(".graimg").click(function(){
            $(this).removeClass("graimgshow");
        });
    
    
    
}