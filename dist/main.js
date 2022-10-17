$(document).ready(function() {
	$("#bt-profile, #bt-back").click(function() {
		$("#main-container").toggleClass('detail-open');
	});

	$("#bt-color, #bt-mini-exit").click(function() {
		$(".mini-pane-stage").toggleClass('mps-open');
	});
});