$(function () {

	function poll () {
		$.get('/tweets/refresh', function (html) {
			$('.feed').replaceWith(html);
		});
	};

	$('.compose').on('submit', function () {
		if ($('.textbox').val().length > 140) {
			$('.submitTwit').append('<center>Sorry, Twits must be less than 140 characters. Please try again.</center>');
			return false;
		} else {
			$.post('/tweets', $('.compose').serialize());
			$('.textbox').val('');
			poll();
			return false;
		}
	});

	setInterval(poll, 2000);
});