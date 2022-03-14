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
  });
  
  $('#exp').mouseenter(function(){
    $('#infoDetails').hide();
    $('#expDetails').show();
    $('#eduDetails').hide();
    $('#honorsDetails').hide(); 
  }); 
  
    $('#edu').mouseenter(function(){
    $('#infoDetails').hide();
    $('#expDetails').hide();
    $('#eduDetails').show();
    $('#honorsDetails').hide(); 
  });
  
    $('#honors').mouseenter(function(){
    $('#infoDetails').hide();
    $('#expDetails').hide();
    $('#eduDetails').hide();
    $('#honorsDetails').show(); 
  });
  
});
