$(function() {
  $('#btn-send').click(sendForm);  
});

function sendForm(e) {
    e.preventDefault();
    $.ajax ({
        url:"https://formspree.io/ira.demkovych@gmail.com", 
        method:"POST",
        data: {
            name:$('#name').val(),
            email:$('#email').val(),
            message:$('#msg').val()
        },
        dataType:"json",
        success:function(){
            $('#thanks').html('Thank you!');
        }
    });
};