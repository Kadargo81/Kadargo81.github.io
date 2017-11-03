var inputText;

//Mark todos complete
$("ul").on("click","li", function(){
  $(this).toggleClass("done");
});

//Remove clicked todos
$("ul").on("click","span", function(event){
  //remove only the parent li of the span we are in.
  $(this).parent().fadeOut(1000,function(){
    $(this).remove();
  });
  event.stopPropagation();
});

//sets variable inputText == to input form when user presses enter
$("input[type='text']").keypress(function(event){
  if(event.which == 13){
    inputText = $(this).val();
    addElement();
    reset();
  }
});

//insert new <li><span>X</span>"empty"</li> element and inputText
function addElement(){
  $("ul").append("<li><span><i class='fa fa-trash'></i></span> "+ escapeHtml(inputText) +"</li>");
}

//Slides input field out of view
$(".fa-pencil-square-o").click(function(){
  $("#input").slideToggle(400, "linear");
});

//Reset input field when user adds todo
function reset(){
$("input[type='text']").val("")
}

function escapeHtml(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;

}
