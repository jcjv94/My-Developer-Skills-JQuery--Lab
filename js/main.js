var mySkills = [];

let input = $('#skill-input');

// $('#addSkills')
//     .removeClass('btn-danger')
//     .addClass('btn-success');


function addItems() {
  let item = $(`<div class="items"><button type="button" onClick="removeItem" class="btn btn-danger">X</button>${input.val()}</div>`);
  $('.container').append(item);
  input.val('');
}

function removeItem(evt) {
  $(this).closest('.items').remove();
}

$('.container').on(
  'click',
  'button',
  removeItem);
$('#addSkillsBtn').on(
  'click',
  addItems);