$(document).ready(function() {
  var todoTemplate = $.trim($('#todo_template').html());
  function bindEvents() {
    $('.toolbox').on('click', '.add', addTodo);
    $('.todo').on('click', '.delete', removeTodo);
    $('.todo').on('click', '.complete', completeTodo);
    // Bind functions which add, remove, and complete todos to the appropriate
    // elements
  }

  //Create functions to add, remove and complete todos
  function addTodo() {
    var todoVal = $('input.todo').val();
    console.log(todoVal);
    $('.todo').find('ul').prepend('<li>' + '<span class="content">' + todoVal +'</span>'+ '<span><a href="#" class="delete">Delete</a></span><span><a href="#" class="complete">Complete</a></span></li>')
  };

  function removeTodo() {
    $(this).parent().parent().remove();
  };

  function completeTodo() {
    $(this).parent().parent().find('.done').remove();
    $(this).parent().parent().append('<span class="done">DONE!!!!</span>');
  };

  function buildTodo(todoName) {

    // WRUT IS DEES?
    // Creates an jQueryDOMElement from the todoTemplate.
    var $todo = $(todoTemplate);
    // Modifies its text to use the passed in todoName.
    $todo.find('h2').text(todoName);
    // Returns the jQueryDOMElement to be used elsewhere.
    return $todo;
  }

  bindEvents();
});
