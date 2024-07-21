const delay = t => new Promise(r => setTimeout(r, t));
var $cache_window, lock_transition=true;
const mapWindows = {
	"bt-profile": "subwindow1",
	"bt-achieve": "subwindow2"
};

$(document).ready(function() {
	$('.bt-back').click(function() {
		$("#main-container").removeClass('detail-open');
		// $('#' + mapWindows[$cache_window]).removeAttr('style');
		$cache_window.removeAttr('style');
	});

	$("#bt-profile, #bt-achieve").click(async function(e) {
		// $("#main-container").toggleClass('detail-open');
		$("#main-container").addClass('detail-open');
		if (!lock_transition) {
			return;
		}
		lock_transition = false;

		let $main_window = $('#' + mapWindows[$(this).attr('id')]);
		// let $addt_window;

		if ($cache_window) {
			// $cache_window = $('#' + mapWindows[$cache_window]);
			if ($main_window.attr('id') !== $cache_window.attr('id')) {
				$main_window.css('opacity', '0');
				// $cache_window.css('opacity', '0');
				await delay(300);
				$main_window.css('transform', 'translate(-50px, -50px)');
				$cache_window.css('transform', 'translate(50px, 50px)');
	
				await delay(500);
				$cache_window.css('opacity', '0');
				$cache_window.css('z-index', '1');
				$cache_window.css('transform', 'translate(0, 0)');
			}
		}
		
		$main_window.css('opacity', '1');
		$main_window.css('z-index', '2');
		$main_window.css('transform', 'translate(0, 0)');

		$cache_window = $main_window;
		lock_transition = true;
	});

	$("#bt-color, #bt-mini-exit").click(function() {
		$(".mini-pane-stage").toggleClass('mps-open');
	});
});