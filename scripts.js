$('#name').focus();
$("#name:text:visible:first").focus();
$('#other-title').hide();
$("#title").change(function()
  {
    let jobRole = $(this).val();
    if (jobRole === 'other'){
    $('#other-title').show();
      }
    else{
      $('#other-title').hide();
    }
  });
