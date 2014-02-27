$(document).ready(function() {
	$( "#tabs" ).tabs();

	$( "#slider" ).slider({
	step: 5	
	});	
	$( "#slider" ).on( "slidestop", function( event, ui ) {
	var url = "http://patterns.remonstrator.org";    
	$(location).attr('href',url);} );


	$("#flip").click(function(){
		$("#panel").slideToggle("slow");
	});

	$("#more").click(function(){
		$("#pq1").show("slow");
		$("#more").remove();
		$("#more1").show("fast");
	});


	$("#more1").click(function(){
		$("#pq2").show("slow");
		$("#more1").remove();
		$("#more2").show("fast");
	});


	$("#more2").click(function(){
		$("#pq3").show("slow");
		$("#more2").remove();
	});

	$("#b1").click(function(){
		$("#ans1").toggle("slow");	
	});

	$("#b2").click(function(){
		$("#ans2").toggle("slow");	
	});

	$("#b3").click(function(){
		$("#ans3").toggle("slow");	
	});
});
