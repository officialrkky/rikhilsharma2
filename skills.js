$(document).ready(() => {
  
  $("#htmlCert").hide()
  $("#cssCert").hide()
  $("#jsCert").hide()
  $("#pyCert").hide()
  
  $('#openHtmlCert').on('click', () => {
    $("#htmlCert").toggle()
    $("#cssCert").hide()
    $("#jsCert").hide()
    $("#pyCert").hide()
  });
  
  $("#openCssCert").on('click', () =>{
    $("#htmlCert").hide()
    $("#cssCert").toggle()
    $("#jsCert").hide()
    $("#pyCert").hide()
  });
  
  $("#openJsCert").on('click', () =>{
    $("#htmlCert").hide()
    $("#cssCert").hide()
    $("#jsCert").toggle()
    $("#pyCert").hide()
  });
  
  $("#openPyCert").on('click', () =>{
    $("#htmlCert").hide()
    $("#cssCert").hide()
    $("#jsCert").hide()
    $("#pyCert").toggle()
  });


});
