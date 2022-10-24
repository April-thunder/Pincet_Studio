$(document).ready(function(){

	//Модальные окна

	//Функция, отключающая скролла
	function disableScroll()
	{
		$('html, body').css("overflow","hidden")
		$('html, body').css("width","100%")
			return false;
	}
	
	//Функция, включающая скролл
	function enableScroll()
	{
		$('html, body').css("overflow","initial")
			return false;
	}

	//Вызов всплывающего окна, при этом отключается скролл

	$('.sign-up, .card-btn__text').click(function(){
		$('.popup-container').fadeIn(600, disableScroll);
	});

	//Отключается модальное окно при клике вне этого окна, включается скролл
	$('.popup-container').click(function(event){
		if(event.target == this){
			$(this).fadeOut(600, enableScroll);
	};
	});

	// Закрытие модального окна по крестику, включается скролл
	$('.close-icon').click(function() { 
		$('.popup-container').fadeOut(600, enableScroll);
		$('form')[0].reset(); // Очистка полей формы при ее закрытии
	
	});

	
    // Маска для телефона
    $('input[type="tel"]').inputmask({"mask": "+7 (999) 999-9999"});

    // Валидация

    //$('select').styler();

			$('form').each(function () {
				$(this).validate({
					errorPlacement(error, element) {
						return true;
					},
					focusInvalid: false,
					rules: {
						Телефон: {
							required: true,
						},
						Имя: {
							required: true,
							
						}
					},
					messages: {
						Телефон: {
							required: 'Нужно что-то ввести'
						},
						Имя: {
							required: 'Нужно что-то ввести',
							maxlength: 'Нужно ввести максимум 5 букв'
						},
						Выбор: {
							required: 'Нужно что-то ввести',
							maxlength: 'Нужно ввести максимум 5 букв'
						}
					},
					submitHandler(form) {
					let th = $(form);

					$.ajax({
					type: 'POST',
					url: 'mail.php',
					data: th.serialize(),
					// eslint-disable-next-line func-names
				}).done(function() {
					swal("Спасибо!", "Ваше сообщение отправлено", "success");//alert("Спасибо за Ваше обращение!");
					setTimeout(function() {

					console.log('Отправлено')

					th.trigger('reset');
				});

				return false;
				})
			}
			});    
 });

 });


    