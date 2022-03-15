$(document).ready(() => {
  
    $('#infoDetails').hide();
    $('#expDetails').hide();
    $('#eduDetails').hide();
    $('#honorsDetails').hide(); 
  
  $('#info').mouseenter(function(){
    $('#infoDetails').show();
    $('#expDetails').hide();
    $('#eduDetails').hide();
    $('#honorsDetails').hide(); 
    #info{
    color: #64ffda;
    }
  });
  
  $('#exp').mouseenter(function(){
    $('#infoDetails').hide();
    $('#expDetails').show();
    $('#eduDetails').hide();
    $('#honorsDetails').hide(); 
    #exp{
    color: #64ffda;
    }
  }); 
  
    $('#edu').mouseenter(function(){
    $('#infoDetails').hide();
    $('#expDetails').hide();
    $('#eduDetails').show();
    $('#honorsDetails').hide(); 
    #edu{
    color: #64ffda;
    }
  });
  
    $('#honors').mouseenter(function(){
    $('#infoDetails').hide();
    $('#expDetails').hide();
    $('#eduDetails').hide();
    $('#honorsDetails').show(); 
    #honors{
    color: #64ffda;
    }
  });
  
});
