var $pic = $("#pic"); 


   //Your code goes here
   $('html').click(function(){
      $pic.css("top", $pic.offset().top +10);
   });
    $pic.css("left",$pic.offset().left - 80);
   $(document).keydown(function(){
    $pic.css("top",0);
   });
   
   
   
   
   
   
   
   
   
//   var weight = 30;
//   var g = 9.8;
//   var d = -($pic.position().top - $('#ground').position().top)  ;
//   console.log("nick sucks",d);
   
   
   
   var gravity = setInterval(function() {
       var pictureY = $pic.position().top + $pic.height();
       var groundY = $('#ground').position().top;
       console.log(groundY);
       console.log(pictureY);
       $pic.css("top", $pic.offset().top + 10);
        if(pictureY > groundY){
            clearInterval(gravity);
            console.log("touched");
        }
    
    }, 100);
    
    console.log("Luis sucks",$pic.position().top);
    
    
    
    
    
    
    
    
    
    
    
    
