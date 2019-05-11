$(document).ready(function(){
	$('.submitbtn').click(function(event){
		event.preventDefault()
		console.log('Clicked')
		var name = $(".form-name").val()
		var email = $(".form-email").val()
		var phone = $(".form-phone").val()
		var message = $(".form-message").val()
	})
})