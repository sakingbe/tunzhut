$(document).ready(function () {
	"use strict"; // start of use strict

	/*==============================
	Menu
	==============================*/
	$('.header__btn').on('click', function() {
		$(this).toggleClass('header__btn--active');
		$('.sidebar').toggleClass('sidebar--active');
	});

	$('.header__search .close, .header__action--search button').on('click', function() {
		$('.header__search').toggleClass('header__search--active');
	});

	/*==============================
	Home slider
	==============================*/
	$('.hero').owlCarousel({
		mouseDrag: true,
		touchDrag: true,
		dots: true,
		loop: true,
		autoplay: false,
		smartSpeed: 600,
		autoHeight: true,
		items: 1,
		responsive: {
			0 : {
				margin: 20,
			},
			576 : {
				margin: 20,
			},
			768 : {
				margin: 30,
			},
			1200 : {
				margin: 30,
			},
		}
	});

	/*==============================
	Carousel
	==============================*/
	$('.main__carousel--events').owlCarousel({
		mouseDrag: true,
		touchDrag: true,
		dots: true,
		loop: true,
		autoplay: false,
		smartSpeed: 600,
		margin: 20,
		autoHeight: true,
		responsive: {
			0 : {
				items: 1,
			},
			576 : {
				items: 2,
			},
			768 : {
				items: 2,
				margin: 30,
			},
			992 : {
				items: 3,
				margin: 30,
			},
			1200 : {
				items: 3,
				margin: 30,
				mouseDrag: false,
			},
		}
	});

	$('.main__carousel--artists').owlCarousel({
		mouseDrag: true,
		touchDrag: true,
		dots: true,
		loop: true,
		autoplay: false,
		smartSpeed: 600,
		margin: 20,
		autoHeight: true,
		responsive: {
			0 : {
				items: 2,
			},
			576 : {
				items: 3,
			},
			768 : {
				items: 4,
				margin: 30,
			},
			992 : {
				items: 6,
				margin: 30,
			},
			1200 : {
				items: 6,
				margin: 30,
			},
		}
	});

	$('.main__carousel--store').owlCarousel({
		mouseDrag: true,
		touchDrag: true,
		dots: true,
		loop: true,
		autoplay: false,
		smartSpeed: 600,
		margin: 20,
		autoHeight: true,
		responsive: {
			0 : {
				items: 2,
			},
			576 : {
				items: 3,
			},
			768 : {
				items: 3,
				margin: 30,
			},
			992 : {
				items: 4,
				margin: 30,
			},
			1200 : {
				items: 5,
				margin: 30,
			},
		}
	});

	$('.main__carousel--podcasts').owlCarousel({
		mouseDrag: true,
		touchDrag: true,
		dots: true,
		loop: true,
		autoplay: false,
		smartSpeed: 600,
		margin: 20,
		autoHeight: true,
		responsive: {
			0 : {
				items: 1,
			},
			576 : {
				items: 2,
			},
			768 : {
				items: 2,
				margin: 30,
			},
			992 : {
				items: 3,
				margin: 30,
			},
			1200 : {
				items: 3,
				margin: 30,
				mouseDrag: false,
			},
		}
	});

	/*==============================
	Navigation
	==============================*/
	$('.main__nav--prev').on('click', function() {
		var carouselId = $(this).attr('data-nav');
		$(carouselId).trigger('prev.owl.carousel');
	});
	$('.main__nav--next').on('click', function() {
		var carouselId = $(this).attr('data-nav');
		$(carouselId).trigger('next.owl.carousel');
	});

	/*==============================
	Partners
	==============================*/
	$('.partners').owlCarousel({
		mouseDrag: false,
		touchDrag: false,
		dots: false,
		loop: true,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		smartSpeed: 600,
		margin: 20,
		responsive : {
			0 : {
				items: 2,
			},
			576 : {
				items: 3,
				margin: 20,
			},
			768 : {
				items: 4,
				margin: 30,
			},
			992 : {
				items: 4,
				margin: 30,
			},
			1200 : {
				items: 6,
				margin: 30,
			},
			1900 : {
				items: 8,
				margin: 30,
			},
		}
	});

	/*==============================
	Product
	==============================*/
	$('.store-item__carousel').owlCarousel({
		mouseDrag: true,
		touchDrag: true,
		dots: true,
		loop: true,
		autoplay: false,
		smartSpeed: 600,
		autoHeight: true,
		items: 1,
		margin: 20,
	});

	/*==============================
	Filter
	==============================*/
	$('.filter__item-menu li').each( function() {
		$(this).attr('data-value', $(this).text().toLowerCase());
	});

	$('.filter__item-menu li').on('click', function() {
		var text = $(this).text();
		var item = $(this);
		var id = item.closest('.filter').attr('id');
		$('#'+id).find('.filter__item-btn input').val(text);
	});

	/*==============================
	Modal
	==============================*/
	$('.open-video, .open-map').magnificPopup({
		disableOn: 0,
		fixedContentPos: true,
		type: 'iframe',
		preloader: false,
		removalDelay: 300,
		mainClass: 'mfp-fade',
	});

	$('.open-modal').magnificPopup({
		fixedContentPos: true,
		fixedBgPos: true,
		overflowY: 'auto',
		type: 'inline',
		preloader: false,
		focus: '#username',
		modal: false,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in',
	});

	$('.modal__close').on('click', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});

	/*==============================
	Select
	==============================*/
	$('.main__select').select2({
		minimumResultsForSearch: Infinity
	});

	/*==============================
	Scrollbar
	==============================*/
	var Scrollbar = window.Scrollbar;

	$('.sidebar__nav-link[data-toggle="collapse"]').on('click', function() {
		if ($('.sidebar__menu--scroll').length) {
			Scrollbar.init(document.querySelector('.sidebar__menu--scroll'), {
				damping: 0.1,
				renderByPixels: true,
				alwaysShowTracks: true,
				continuousScrolling: false,
			});
		}
	});

	if ($('.dashbox__table-scroll').length) {
		Scrollbar.init(document.querySelector('.dashbox__table-scroll'), {
			damping: 0.1,
			renderByPixels: true,
			alwaysShowTracks: true,
			continuousScrolling: true
		});
	}

	if ($('.cart__table-scroll').length) {
		Scrollbar.init(document.querySelector('.cart__table-scroll'), {
			damping: 0.1,
			renderByPixels: true,
			alwaysShowTracks: true,
			continuousScrolling: true
		});
	}

	if ($('.dashbox__scroll').length) {
		Scrollbar.init(document.querySelector('.dashbox__scroll'), {
			damping: 0.1,
			renderByPixels: true,
			alwaysShowTracks: true,
			continuousScrolling: true
		});
	}

	if ($('.release__list').length) {
		Scrollbar.init(document.querySelector('.release__list'), {
			damping: 0.1,
			renderByPixels: true,
			alwaysShowTracks: true,
			continuousScrolling: true
		});
	}

	/*==============================
	Bg
	==============================*/
	$('.hero__slide, .event').each( function() {
		if ($(this).attr("data-bg")){
			$(this).css({
				'background': 'url(' + $(this).data('bg') + ')',
				'background-position': 'center center',
				'background-repeat': 'no-repeat',
				'background-size': 'cover'
			});
		}
	});

	/*==============================
	Inputmask
	==============================*/
	$('.stats__form input').inputmask('99-99-99-99');

	/*==============================
	Player
	==============================*/
	$('.player__btn').on('click', function() {
		$(this).toggleClass('player__btn--active');
		$('.player').toggleClass('player--active');
	});

	const controls = `
	<div class="plyr__controls">
		<div class="plyr__actions">
			<button type="button" class="plyr__control plyr__control--prev">
			<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 306.81"><path d="M93,421.67c.61-2.38,1.17-4.77,1.84-7.13A51.19,51.19,0,0,1,108.21,392c33.92-33.88,67.73-67.87,101.84-101.57,24.73-24.43,64.08-19,81.26,10.8,10.67,18.53,8.48,43.27-6.38,58.71-21.22,22-43.11,43.4-64.73,65-1,1.06-2.26,1.95-3.65,3.14,1.3,1.38,2.17,2.38,3.11,3.31,20.5,20.47,40.94,41,61.54,61.36,11.45,11.32,17.07,24.71,16.59,40.9-.66,22.68-20.36,44.51-42.94,47.5-18.19,2.41-33.36-3.11-46.2-16q-49.36-49.41-98.89-98.69c-8.56-8.52-14.5-18.3-16.18-30.41,0-.33-.38-.62-.58-.93Zm86.29,6.83c2.09-1.63,3.28-2.37,4.24-3.33q39.93-39.8,79.81-79.64c8.78-8.78,11.09-20.08,6.29-30-7.91-16.45-28.82-19.43-42.38-5.93q-49.89,49.69-99.67,99.5a33.53,33.53,0,0,0-5.18,6.36C116,426.28,118,438.21,127.74,448q49.55,49.5,99.15,99a45.56,45.56,0,0,0,4.48,4c11.93,9.16,29.89,5.46,37.24-7.65,6.08-10.84,4.2-22.48-5.31-32q-39.87-39.86-79.81-79.63A42.06,42.06,0,0,0,179.29,428.5Z" transform="translate(-93 -274.98)"/><path d="M477,537.7c-2.44,6.44-4,13.38-7.46,19.24-16.3,27.77-54.45,33.24-78.21,11.45-6.53-6-12.65-12.43-18.92-18.69Q330.64,508,288.86,466.38c-11.44-11.35-17.41-24.72-16.58-40.9a49.74,49.74,0,0,1,12.66-30.85c1.14-1.32,2.37-2.56,3.61-3.8q49.83-49.75,99.67-99.53c11.08-11.1,24.28-16.8,40-16.23,23.64.87,44.25,19.11,48,42.32a20,20,0,0,0,.74,2.47v12.73a5.71,5.71,0,0,0-.59,1.35c-1.7,12.25-7.81,22.05-16.47,30.63Q429.36,394.84,399,425.34c-.95,1-1.87,2-2.95,3.09,1.06,1.11,2,2.11,2.92,3.06q30.72,30.66,61.47,61.3c6.86,6.8,12.07,14.54,14.7,23.88.7,2.5,1.24,5,1.86,7.55ZM359.17,428.36c3-2.82,5.56-5.16,8-7.62q37.67-37.55,75.28-75.14c12-12.06,11.56-29.39-1-39.26-10.35-8.13-24.86-6.9-35,3.16q-50,49.81-99.93,99.76a31.87,31.87,0,0,0-4.93,6.08c-6.53,11-4.51,22.88,5.48,32.86q49.42,49.35,98.89,98.68a51.28,51.28,0,0,0,4.18,3.75c11.84,9.46,30.15,5.91,37.57-7.27,6.17-10.94,4.23-22.61-5.45-32.29q-34.44-34.43-68.94-68.79C368.88,437.79,364.3,433.38,359.17,428.36Z" transform="translate(-93 -274.98)"/></svg>
			</button>

			<button type="button" class="plyr__control" data-plyr="play">
				<svg class="icon--pressed" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16,2a3,3,0,0,0-3,3V19a3,3,0,0,0,6,0V5A3,3,0,0,0,16,2Zm1,17a1,1,0,0,1-2,0V5a1,1,0,0,1,2,0ZM8,2A3,3,0,0,0,5,5V19a3,3,0,0,0,6,0V5A3,3,0,0,0,8,2ZM9,19a1,1,0,0,1-2,0V5A1,1,0,0,1,9,5Z"></path></svg>
				<svg class="icon--not-pressed" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z"></path></svg>
			</button>

			<button type="button" class="plyr__control plyr__control--next">
			<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 306.81"><path d="M477,435.1c-.61,2.37-1.17,4.76-1.84,7.12a51.19,51.19,0,0,1-13.37,22.59C427.87,498.69,394.06,532.69,360,566.38c-24.73,24.44-64.08,19-81.26-10.8-10.67-18.52-8.48-43.27,6.38-58.7,21.22-22,43.11-43.4,64.73-65,1.05-1,2.26-1.95,3.65-3.13-1.3-1.38-2.17-2.38-3.11-3.32-20.5-20.46-40.94-41-61.54-61.35-11.45-11.32-17.07-24.72-16.59-40.91.66-22.68,20.36-44.5,42.94-47.5,18.19-2.41,33.36,3.12,46.2,16q49.36,49.41,98.89,98.69c8.56,8.52,14.5,18.3,16.18,30.41.05.33.38.62.58.93Zm-86.29-6.83c-2.09,1.63-3.28,2.37-4.24,3.33q-39.93,39.79-79.81,79.64c-8.78,8.78-11.09,20.07-6.29,30,7.91,16.45,28.82,19.43,42.38,5.92q49.89-49.68,99.67-99.5a33.53,33.53,0,0,0,5.18-6.36c6.43-10.85,4.45-22.79-5.34-32.56q-49.54-49.5-99.15-99a48.31,48.31,0,0,0-4.48-4c-11.93-9.16-29.89-5.45-37.24,7.66-6.08,10.84-4.2,22.48,5.31,32q39.87,39.86,79.81,79.63A43.69,43.69,0,0,0,390.71,428.27Z" transform="translate(-93 -274.98)"/><path d="M93,319.07c2.44-6.44,4-13.38,7.46-19.24,16.3-27.77,54.45-33.24,78.21-11.45,6.53,6,12.65,12.42,18.92,18.68q41.78,41.67,83.55,83.33c11.44,11.34,17.41,24.72,16.58,40.9a49.71,49.71,0,0,1-12.66,30.84c-1.14,1.32-2.37,2.57-3.61,3.81q-49.83,49.76-99.67,99.52c-11.08,11.1-24.28,16.8-40,16.23-23.64-.86-44.25-19.1-48-42.32a19.82,19.82,0,0,0-.74-2.46V524.18a5.78,5.78,0,0,0,.59-1.36c1.7-12.24,7.81-22.05,16.47-30.62q30.58-30.29,60.94-60.78c.95-.95,1.87-1.95,2.95-3.08-1.06-1.12-2-2.11-2.92-3.06q-30.72-30.67-61.47-61.3c-6.86-6.81-12.07-14.54-14.7-23.88-.7-2.5-1.24-5-1.86-7.56ZM210.83,428.41c-3,2.82-5.56,5.16-8,7.61q-37.67,37.56-75.28,75.15c-12,12.06-11.56,29.39,1,39.26,10.35,8.13,24.86,6.9,35-3.16q50-49.83,99.93-99.76a31.87,31.87,0,0,0,4.93-6.08c6.53-11,4.51-22.88-5.48-32.86Q213.45,359.21,164,309.88a49.37,49.37,0,0,0-4.18-3.74c-11.84-9.47-30.15-5.91-37.57,7.27-6.17,10.94-4.23,22.6,5.45,32.29q34.44,34.43,68.94,68.78C201.12,419,205.7,423.39,210.83,428.41Z" transform="translate(-93 -274.98)"/></svg>
			</button>
		</div>

		<div class="plyr__wrap">
			<div class="plyr__progress">
				<input data-plyr="seek" type="range" min="0" max="100" step="0.01" value="0" aria-label="Seek">
				<progress class="plyr__progress__buffer" min="0" max="100" value="0">% buffered</progress>
				<span role="tooltip" class="plyr__tooltip">00:00</span>
			</div>

			<div class="plyr__time plyr__time--current" aria-label="Current time">00:00</div>
		</div>

		<div class="plyr__wrap">
			<button type="button" class="plyr__control" aria-label="Mute" data-plyr="mute">
				<svg class="icon--pressed" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.43,4.1a1,1,0,0,0-1,.12L6.65,8H3A1,1,0,0,0,2,9v6a1,1,0,0,0,1,1H6.65l4.73,3.78A1,1,0,0,0,12,20a.91.91,0,0,0,.43-.1A1,1,0,0,0,13,19V5A1,1,0,0,0,12.43,4.1ZM11,16.92l-3.38-2.7A1,1,0,0,0,7,14H4V10H7a1,1,0,0,0,.62-.22L11,7.08ZM19.91,12l1.8-1.79a1,1,0,0,0-1.42-1.42l-1.79,1.8-1.79-1.8a1,1,0,0,0-1.42,1.42L17.09,12l-1.8,1.79a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l1.79-1.8,1.79,1.8a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"/></svg>
				<svg class="icon--not-pressed" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.43,4.1a1,1,0,0,0-1,.12L6.65,8H3A1,1,0,0,0,2,9v6a1,1,0,0,0,1,1H6.65l4.73,3.78A1,1,0,0,0,12,20a.91.91,0,0,0,.43-.1A1,1,0,0,0,13,19V5A1,1,0,0,0,12.43,4.1ZM11,16.92l-3.38-2.7A1,1,0,0,0,7,14H4V10H7a1,1,0,0,0,.62-.22L11,7.08ZM19.66,6.34a1,1,0,0,0-1.42,1.42,6,6,0,0,1-.38,8.84,1,1,0,0,0,.64,1.76,1,1,0,0,0,.64-.23,8,8,0,0,0,.52-11.79ZM16.83,9.17a1,1,0,1,0-1.42,1.42A2,2,0,0,1,16,12a2,2,0,0,1-.71,1.53,1,1,0,0,0-.13,1.41,1,1,0,0,0,1.41.12A4,4,0,0,0,18,12,4.06,4.06,0,0,0,16.83,9.17Z"/></svg>
				<span class="label--pressed plyr__tooltip" role="tooltip">Unmute</span>
				<span class="label--not-pressed plyr__tooltip" role="tooltip">Mute</span>
			</button>

			<div class="plyr__volume">
				<input data-plyr="volume" type="range" min="0" max="1" step="0.08" value="1" autocomplete="off" aria-label="Volume">
			</div>

			<a href="release.html" class="plyr__control" aria-label="Playlist">
			<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 408.79 367.07"><path d="M480.6,231.7c-.86,1.88-1.64,3.81-2.58,5.66-4.84,9.48-12.71,14.33-23.24,15-1.06.07-2.13,0-3.19,0q-175.45,0-350.9,0c-11.63,0-20.7-4.25-26.17-14.85-7.88-15.26,2.31-34.85,19.28-37.1a65.47,65.47,0,0,1,8.74-.59q174.45,0,348.9,0c11.89,0,21.21,4.31,26.66,15.36,1,2,1.67,4.06,2.5,6.1Z" transform="translate(-71.81 -199.86)"/><path d="M480.6,546.28c-.82,1.75-1.61,3.52-2.47,5.26-4.94,10.07-13.28,14.8-24.25,15.37-.66,0-1.33,0-2,0H100.59c-10.54,0-19.4-3.46-24.92-12.89-10.27-17.56,1.27-38.43,21.78-39.61,1.06-.07,2.13,0,3.19,0q175.65,0,351.3,0c11.66,0,20.61,4.47,26.05,15,1.06,2.07,1.75,4.32,2.61,6.49Z" transform="translate(-71.81 -199.86)"  /><path d="M480.6,387.39c-1,2.57-1.83,5.21-3,7.68-4.88,10.06-13.52,14.33-24.17,14.57-13.55.31-27.11.18-40.66,0-11.13-.12-21.17-7.16-24.72-17-4-10.94-1.16-21.74,7.85-29.49,5-4.34,11.15-6.06,17.67-6.11,12.75-.12,25.51-.05,38.27,0,15,0,24.1,6.95,28.14,21.36a3.75,3.75,0,0,0,.65,1Z" transform="translate(-71.81 -199.86)" style="fill:#da620c"/><path d="M202.57,409.66q-51.27,0-102.54,0c-12.76,0-23-6.7-26.57-17.24-6.11-18,6.25-35.09,25.68-35.25,18.89-.16,37.77,0,56.66,0q74.8,0,149.62,0c12.92,0,22.91,6.44,26.67,17.05,6.43,18.14-6.25,35.41-26.18,35.45C271.47,409.72,237,409.66,202.57,409.66Z" transform="translate(-71.81 -199.86)" /></svg>
				<span class="plyr__tooltip" role="tooltip">Playlist</span>
			</a>
		</div>
	</div>
	`;
	var player = new Plyr('#audio', {
		controls,
		volume: 0.8,
	});

	var audio = $('#audio');

	player.on('play', event => {
		$('a[data-link].active, a[data-playlist].active').addClass('play');
		$('a[data-link].active, a[data-playlist].active').removeClass('pause');
	});

	player.on('pause', event => {
		$('a[data-link].active, a[data-playlist].active').removeClass('play');
		$('a[data-link].active, a[data-playlist].active').addClass('pause');
	});

	/* single */
	$('a[data-link]').on('click', function(e){
		e.preventDefault();
		let link = $(this);
		run(link, audio[0]);
	});

	function run(link, player){
		if ($(link).hasClass('play')) {
			$(link).removeClass('play');
			audio[0].pause();
			$(link).addClass('pause');
		}
		else if ($(link).hasClass('pause')) {
			$(link).removeClass('pause');
			audio[0].play();
			$(link).addClass('play');
		}
		else {
			$('a[data-link]').removeClass('active');
			$('a[data-link]').removeClass('pause');
			$('a[data-link]').removeClass('play');
			$(link).addClass('active');
			$(link).addClass('play');
			player.src = $(link).attr('href');

			let title = $(link).data('title');
			let artist = $(link).data('artist');
			let img = $(link).data('img');
			$('.player__title').text(title);
			$('.player__artist').text(artist);
			$('.player__cover img').attr('src', img);
			audio[0].load();
			audio[0].play();
		}
	}

	/* playlist */
	if ($('.main__list--playlist').length) {
		var current = 0;
		var playlist = $('.main__list--playlist');
		var tracks = playlist.find('li a[data-playlist]');
		var len = tracks.length;

		playlist.find('a[data-playlist]').on('click', function(e){
			e.preventDefault();
			let link = $(this);
			current = link.parent().index();
			run2(link, audio[0]);
		});

		player.on('ended', event => {
			let link = $('.single-item__cover.play');
			current++;
			if (current == len) {
				current = 0;
				link = playlist.find('a[data-playlist]')[0];
			} else {
				link = playlist.find('a[data-playlist]')[current];
			}
			run2($(link),audio[0]);
		});

		$('.plyr__control--prev').on('click', function(e){
			let link = $('.single-item__cover.play');
			current--;
			if (current == -1) {
				current = len - 1;
				link = playlist.find('a[data-playlist]')[current];
			} else {
				link = playlist.find('a[data-playlist]')[current];
			}
			run2($(link),audio[0]);
		});

		$('.plyr__control--next').on('click', function(e){
			let link = $('.single-item__cover.play');
			current++;
			if (current == len) {
				current = 0;
				link = playlist.find('a[data-playlist]')[0];
			} else {
				link = playlist.find('a[data-playlist]')[current];
			}
			run2($(link),audio[0]);
		});

		function run2(link, player){
			if ($(link).hasClass('play')) {
				$(link).removeClass('play');
				audio[0].pause();
				$(link).addClass('pause');
			}
			else if ($(link).hasClass('pause')) {
				$(link).removeClass('pause');
				audio[0].play();
				$(link).addClass('play');
			}
			else {
				$('a[data-playlist]').removeClass('active');
				$('a[data-playlist]').removeClass('pause');
				$('a[data-playlist]').removeClass('play');
				$(link).addClass('active');
				$(link).addClass('play');
				player.src = $(link).attr('href');

				let title = $(link).data('title');
				let artist = $(link).data('artist');
				let img = $(link).data('img');
				$('.player__title').text(title);
				$('.player__artist').text(artist);
				$('.player__cover img').attr('src', img);
				audio[0].load();
				audio[0].play();
				
			}
		}
	}
})

document.addEventListener("DOMContentLoaded", function() {
	var lazyloadImages = document.querySelectorAll("img.lazy");    
	var lazyloadThrottleTimeout;
	
	function lazyload () {
	  if(lazyloadThrottleTimeout) {
		clearTimeout(lazyloadThrottleTimeout);
	  }    
	  
	  lazyloadThrottleTimeout = setTimeout(function() {
		  var scrollTop = window.pageYOffset;
		  lazyloadImages.forEach(function(img) {
			  if(img.offsetTop < (window.innerHeight + scrollTop)) {
				img.src = img.dataset.src;
				img.classList.remove('lazy');
			  }
		  });
		  if(lazyloadImages.length == 0) { 
			document.removeEventListener("scroll", lazyload);
			window.removeEventListener("resize", lazyload);
			window.removeEventListener("orientationChange", lazyload);
		  }
	  }, 20);
	}
	
	document.addEventListener("scroll", lazyload);
	window.addEventListener("resize", lazyload);
	window.addEventListener("orientationChange", lazyload);
  });
