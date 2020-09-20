//after page load, call jQuery function
//create function to store text box value inside listItem const
$(function(){
    $('#js-shopping-list-form').submit(function(event) {
      event.preventDefault();
      const listItem = $('#shopping-list-entry').val();
  //empty text box
      $('#shopping-list-entry').val('');
  
  //add new item to bottom of list
      $('.shopping-list').append(
  //this is template for new list item buttons etc.
        `<li>
          <span class="shopping-item">${listItem}</span>
          <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
              <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
              <span class="button-label">delete</span>
            </button>
          </div>
        </li>`);
    });
  //this enables click functionality for delete button and removes the item
    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
      $(this).closest('li').remove();
    });
  //this enables click functionality for the check button and removes the item
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
      $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });
  
  });