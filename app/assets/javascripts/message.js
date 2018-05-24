$(function() {
  function buildHTML(message){
    var image_url = message.image_url == null ? `` : `<img src="${message.image_url}", alt="", class: 'lower-message__image'>`;
    var html = `<div class="message">
                  <div class="upper-message">
                    <div class="upper-message__user-name">
                      ${ message.user_name }
                    </div>
                    <div class="upper-message__date">
                      ${ message.created_at }
                    </div>
                  </div>
                  <div class="lower-message">
                      <p class="lower-message__content">
                        ${ message.content }<br />
                        ${ image_url }
                      </p>
                  </div>
                </div>`
    return html;
  }

  $('.js-form').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html).animate({scrollTop: $('.messages')[0].scrollHeight}, 500);
      $('.form__message').val('')
      $('.form__submit').prop("disabled", false)
    })
    .fail(function() {
      alert('error');
    })
  });
});


