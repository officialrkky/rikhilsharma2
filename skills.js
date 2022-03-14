$(document).ready(() => {
  
  $("#htmlCert").hide()
  $("#cssCert").hide()
  $("#jsCert").hide()
  $("#pyCert").hide()
  
  $('#openHtmlCert').on('click', () => {
    $("#htmlCert").show()
    $("#cssCert").hide()
    $("#jsCert").hide()
    $("#pyCert").hide()
  });
  
  $("#openCssCert").on('click', () =>{
    $("#htmlCert").hide()
    $("#cssCert").show()
    $("#jsCert").hide()
    $("#pyCert").hide()
  });
  
  $("#openJsCert").on('click', () =>{
    $("#htmlCert").hide()
    $("#cssCert").hide()
    $("#jsCert").show()
    $("#pyCert").hide()
  });
  
  $("#openPyCert").on('click', () =>{
    $("#htmlCert").hide()
    $("#cssCert").hide()
    $("#jsCert").hide()
    $("#pyCert").show()
  });


});
