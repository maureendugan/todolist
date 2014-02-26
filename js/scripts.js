var List = {
  lists: []
  tasks: []
}

$(document).ready(function() {
  $("form#new-list").submit(function(event) {
    event.preventDefault();

    var addedList = $('input#new-list').val();

    $('#show-lists').show();
    $('ul#list-of-lists').append('<li class="addedList">' + addedList + '</li>');

  // listOfLists.userListArray.push($('input#new-list').val());

  // console.log(listOfLists.userListArray);

  // var userListArray.forEach = Object.create(listOfLists);
  // newList.firstList = userListOne;
    this.reset();
  });

  $('ul#list-of-lists').click(function() {
      $('.show-tasks').show();
      $('form#new-task').submit(function(event) {
        var newTask = $('input#new-task').val();
        List.tasks.push(newTask);
        $('ul#list-of-tasks').append('<li>' + newTask + '</li>');
        console.log(List.tasks);
        event.preventDefault();
        this.reset();
      });
    });
});
