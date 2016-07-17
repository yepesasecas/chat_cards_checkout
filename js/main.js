$(document).on("ready", function(){
  window.sr = ScrollReveal();
  sr.reveal('#step0', {container: ".chat-container"});
  sr.reveal('#btn-step1', {delay: 500, container: ".chat-container"});
  // sr.reveal('#step1', {delay: 1000, container: ".chat-container"});
  // sr.reveal('#step2', {delay: 2000, container: ".chat-container"});
  // sr.reveal('#step3', {delay: 3000, container: ".chat-container"});
  // sr.reveal('#step4', {delay: 4000, container: ".chat-container"});
});

$(document).on("click", "#btn-step1", function(e){
  e.preventDefault()
  $("#btn-step1").remove();
  sr.reveal('#step1', {container: ".chat-container"});
  sr.reveal('#btn-step2', {delay: 500, container: ".chat-container"});
});

$(document).on("click", "#btn-step2", function(e){
  e.preventDefault()
  $("#btn-step2").remove();
  sr.reveal('#step2', {container: ".chat-container"});
  sr.reveal('#btn-step3', {delay: 500, container: ".chat-container"});
});

$(document).on("click", "#btn-step3", function(e){
  e.preventDefault()
  $("#btn-step3").remove();
  sr.reveal('#step3', {container: ".chat-container"});
  sr.reveal('#btn-step4', {delay: 500, container: ".chat-container"});
});

$(document).on("click", "#btn-step4", function(e){
  e.preventDefault()
  $("#btn-step4").remove();
  sr.reveal('#step4', {container: ".chat-container"});
  sr.reveal('#btn-step5', {delay: 500, container: ".chat-container"});
});
