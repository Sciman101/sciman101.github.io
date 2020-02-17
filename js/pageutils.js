$(document).ready(function() {

	//Update age
	var a = moment(new Date(2000,8,14));
	var b = moment();

	$('#age').text(b.diff(a,'years'));

});