$(document).on('turbolinks:load', function() {

  function scroll () {
    $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 500);
  }

  $(function() {
    function buildHTML(message){
      var image_url = message.image_url == null ? `` : `<img src="${message.image_url}", alt="image", class: 'lower-message__image'>`;

      var html = `<div class="message" data-message-id="${ message.id }">
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
                        ${ message.content }
                      </p>
                      <div class="lower-message__image">
                        ${ image_url }
                      </div>
                    </div>
                  </div>`;
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
        $('.messages').append(html)
        $('.form__message').val('');
        $('form')[0].reset();
        $('.form__submit').prop("disabled", false);
        scroll()
      })
      .fail(function() {
        alert('error');
        $('.form__submit').prop("disabled", false);
      })
    });
  });

  function buildMESSAGE(new_message) {
    var image_url = new_message.image_url == null ? `` : `<img src="${new_message.image_url}", alt="image">`;

    var message_list = $('.messages');

    var html =`
               <div class="message" data-message-id="${ new_message.id }">
                 <div class="upper-message">
                   <div class="upper-message__user-name">
                     ${ new_message.name}
                   </div>
                   <div class="upper-message__date">
                     ${ new_message.created_at }
                   </div>
                 </div>
                 <div class="lower-message">
                   <p clsss="lower-message__content">
                     ${ new_message.content }
                   </p>
                   <div class="lower-message__image">
                     ${ image_url }
                   </div>
                 </div>
               </div>
              `;

    message_list.append(html);
  }

  $(function() {
    setInterval(update, 5000);
  });
  function update(){
    var message_id = $('.message').last().data('message-id');
    console.log(message_id);
    $.ajax({
      type: 'GET',
      url: location.href,
      data: { id: message_id },
      datatype: 'json'
    })
    .done(function(new_messages) {
      console.log(new_messages)
      if (new_messages.length !== 0) {
        new_messages.forEach(function(new_message) {
          buildMESSAGE(new_message);
        })
      scroll();
      }
    })
    .fail(function(new_message) {
      alert('自動更新に失敗しました');
    });
  }
});


