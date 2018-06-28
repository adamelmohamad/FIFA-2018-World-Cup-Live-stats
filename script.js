$(document).ready(function(){


api = 'https://worldcup.sfg.io/teams/group_results';

$.getJSON(api,function(data){

    //Group A
	var GroupA = data[0].ordered_teams[0].country;
	var GroupA_code = data[0].ordered_teams[0].fifa_code;
	var goals = data[0].ordered_teams[0].goals_for;
	var wins = data[0].ordered_teams[0].wins;
	var played = data[0].ordered_teams[0].games_played;
	$('.Team1').html('1. ' + GroupA);
	$('.popup').html('FIFA Code: ' + GroupA_code);
    $('.scored').html('Goals Scored: ' + goals);
    $('.played').html('Matches played: ' + played);
    $('.matches').html('Matches Won: ' + wins);


	var GroupA = data[0].ordered_teams[1].country;
	$('.Team2').html('2. ' + GroupA);
	var goals = data[0].ordered_teams[1].goals_for;
	var wins = data[0].ordered_teams[1].wins;
	var played = data[0].ordered_teams[1].games_played;
    $('.scored1').html('Goals Scored: ' + goals);
    $('.played1').html('Matches played: ' + played);
    $('.matches1').html('Matches Won: ' + wins);
	


	var GroupA = data[0].ordered_teams[2].country;
	$('.Team3').html('3. ' +GroupA);
	var goals = data[0].ordered_teams[2].goals_for;
	var wins = data[0].ordered_teams[2].wins;
	var played = data[0].ordered_teams[2].games_played;
    $('.scored2').html('Goals Scored: ' + goals);
    $('.played2').html('Matches played: ' + played);
    $('.matches2').html('Matches Won: ' + wins);
	


	var GroupA = data[0].ordered_teams[3].country;
	$('.Team4').html('4. ' +GroupA);

	var goals = data[0].ordered_teams[3].goals_for;
	var wins = data[0].ordered_teams[3].wins;
	var played = data[0].ordered_teams[3].games_played;
    $('.scored3').html('Goals Scored: ' + goals);
    $('.played3').html('Matches played: ' + played);
    $('.matches3').html('Matches Won: ' + wins);
	


    //Group B
	var GroupB = data[1].ordered_teams[0].country;
	$('.Team5').html('1. ' +GroupB);
	var goals = data[1].ordered_teams[0].goals_for;
	var wins = data[1].ordered_teams[0].wins;
	var played = data[1].ordered_teams[0].games_played;
    $('.scored4').html('Goals Scored: ' + goals);
    $('.played4').html('Matches played: ' + played);
    $('.matches4').html('Matches Won: ' + wins);
	


	var GroupB = data[1].ordered_teams[1].country;
	$('.Team6').html('2. ' +GroupB);
	var goals = data[1].ordered_teams[1].goals_for;
	var wins = data[1].ordered_teams[1].wins;
	var played = data[1].ordered_teams[1].games_played;
    $('.scored5').html('Goals Scored: ' + goals);
    $('.played5').html('Matches played: ' + played);
    $('.matches5').html('Matches Won: ' + wins);
	


	var GroupB = data[1].ordered_teams[2].country;
	$('.Team7').html('3. ' +GroupB);
	var goals = data[1].ordered_teams[2].goals_for;
	var wins = data[1].ordered_teams[2].wins;
	var played = data[1].ordered_teams[2].games_played;
    $('.scored6').html('Goals Scored: ' + goals);
    $('.played6').html('Matches played: ' + played);
    $('.matches6').html('Matches Won: ' + wins);
	


	var GroupB = data[1].ordered_teams[3].country;
	$('.Team8').html('4. ' +GroupB);
	var goals = data[1].ordered_teams[3].goals_for;
	var wins = data[1].ordered_teams[3].wins;
	var played = data[1].ordered_teams[3].games_played;
    $('.scored7').html('Goals Scored: ' + goals);
    $('.played7').html('Matches played: ' + played);
    $('.matches7').html('Matches Won: ' + wins);



	//Group C
	var GroupC = data[2].ordered_teams[0].country;
	$('.Team9').html('1. ' +GroupC);
	var goals = data[2].ordered_teams[0].goals_for;
	var wins = data[2].ordered_teams[0].wins;
	var played = data[2].ordered_teams[0].games_played;
    $('.scored8').html('Goals Scored: ' + goals);
    $('.played8').html('Matches played: ' + played);
    $('.matches8').html('Matches Won: ' + wins);
	


	var GroupC = data[2].ordered_teams[1].country;
	$('.Team10').html('2. ' +GroupC);
	var goals = data[2].ordered_teams[1].goals_for;
	var wins = data[2].ordered_teams[1].wins;
	var played = data[2].ordered_teams[1].games_played;
    $('.scored9').html('Goals Scored: ' + goals);
    $('.played9').html('Matches played: ' + played);
    $('.matches9').html('Matches Won: ' + wins);
	


	var GroupC = data[2].ordered_teams[2].country;
	$('.Team11').html('3. ' +GroupC);
	var goals = data[2].ordered_teams[2].goals_for;
	var wins = data[2].ordered_teams[2].wins;
	var played = data[2].ordered_teams[2].games_played;
    $('.scored10').html('Goals Scored: ' + goals);
    $('.played10').html('Matches played: ' + played);
    $('.matches10').html('Matches Won: ' + wins);
	


	var GroupC = data[2].ordered_teams[3].country;
	$('.Team12').html('4. ' +GroupC);
	var goals = data[2].ordered_teams[3].goals_for;
	var wins = data[2].ordered_teams[3].wins;
	var played = data[2].ordered_teams[3].games_played;
    $('.scored11').html('Goals Scored: ' + goals);
    $('.played11').html('Matches played: ' + played);
    $('.matches11').html('Matches Won: ' + wins);
	


	//Group D
	var GroupD = data[3].ordered_teams[0].country;
	$('.Team13').html('1. ' +GroupD);
	var goals = data[3].ordered_teams[0].goals_for;
	var wins = data[3].ordered_teams[0].wins;
	var played = data[3].ordered_teams[0].games_played;
    $('.scored12').html('Goals Scored: ' + goals);
    $('.played12').html('Matches played: ' + played);
    $('.matches12').html('Matches Won: ' + wins);
	


	var GroupD = data[3].ordered_teams[1].country;
	$('.Team14').html('2. ' +GroupD);
	var goals = data[3].ordered_teams[1].goals_for;
	var wins = data[3].ordered_teams[1].wins;
	var played = data[3].ordered_teams[1].games_played;
    $('.scored13').html('Goals Scored: ' + goals);
    $('.played13').html('Matches played: ' + played);
    $('.matches13').html('Matches Won: ' + wins);
	


	var GroupD = data[3].ordered_teams[2].country;
	$('.Team15').html('3. ' +GroupD);
	var goals = data[3].ordered_teams[2].goals_for;
	var wins = data[3].ordered_teams[2].wins;
	var played = data[3].ordered_teams[2].games_played;
    $('.scored14').html('Goals Scored: ' + goals);
    $('.played14').html('Matches played: ' + played);
    $('.matches14').html('Matches Won: ' + wins);
	


	var GroupD = data[3].ordered_teams[3].country;
	$('.Team16').html('4. ' +GroupD);
	var goals = data[3].ordered_teams[3].goals_for;
	var wins = data[3].ordered_teams[3].wins;
	var played = data[3].ordered_teams[3].games_played;
    $('.scored15').html('Goals Scored: ' + goals);
    $('.played15').html('Matches played: ' + played);
    $('.matches15').html('Matches Won: ' + wins);
	


	//Group E
	var GroupE = data[4].ordered_teams[0].country;
	$('.Team17').html('1. ' +GroupE);
	var goals = data[4].ordered_teams[0].goals_for;
	var wins = data[4].ordered_teams[0].wins;
	var played = data[4].ordered_teams[0].games_played;
    $('.scored16').html('Goals Scored: ' + goals);
    $('.played16').html('Matches played: ' + played);
    $('.matches16').html('Matches Won: ' + wins);
	
	


	var GroupE = data[4].ordered_teams[1].country;
	$('.Team18').html('2. ' +GroupE);
	var goals = data[4].ordered_teams[1].goals_for;
	var wins = data[4].ordered_teams[1].wins;
	var played = data[4].ordered_teams[1].games_played;
    $('.scored17').html('Goals Scored: ' + goals);
    $('.played17').html('Matches played: ' + played);
    $('.matches17').html('Matches Won: ' + wins);
	


	var GroupE = data[4].ordered_teams[2].country;
	$('.Team19').html('3. ' +GroupE);
	var goals = data[4].ordered_teams[2].goals_for;
	var wins = data[4].ordered_teams[2].wins;
	var played = data[4].ordered_teams[2].games_played;
    $('.scored18').html('Goals Scored: ' + goals);
    $('.played18').html('Matches played: ' + played);
    $('.matches18').html('Matches Won: ' + wins);
	


	var GroupE = data[4].ordered_teams[3].country;
	$('.Team20').html('4. ' +GroupE);
	var goals = data[4].ordered_teams[3].goals_for;
	var wins = data[4].ordered_teams[3].wins;
	var played = data[4].ordered_teams[3].games_played;
    $('.scored19').html('Goals Scored: ' + goals);
    $('.played19').html('Matches played: ' + played);
    $('.matches19').html('Matches Won: ' + wins);


	

	//Group F
	var GroupF = data[5].ordered_teams[0].country;
	$('.Team21').html('1. ' +GroupF);
	var goals = data[5].ordered_teams[0].goals_for;
	var wins = data[5].ordered_teams[0].wins;
	var played = data[5].ordered_teams[0].games_played;
    $('.scored20').html('Goals Scored: ' + goals);
    $('.played20').html('Matches played: ' + played);
    $('.matches20').html('Matches Won: ' + wins);

	


	var GroupF = data[5].ordered_teams[1].country;
	$('.Team22').html('2. ' +GroupF);
	var goals = data[5].ordered_teams[1].goals_for;
	var wins = data[5].ordered_teams[1].wins;
	var played = data[5].ordered_teams[1].games_played;
    $('.scored21').html('Goals Scored: ' + goals);
    $('.played21').html('Matches played: ' + played);
    $('.matches21').html('Matches Won: ' + wins);


	var GroupF = data[5].ordered_teams[2].country;
	$('.Team23').html('3. ' +GroupF);
	var goals = data[5].ordered_teams[2].goals_for;
	var wins = data[5].ordered_teams[2].wins;
	var played = data[5].ordered_teams[2].games_played;
    $('.scored22').html('Goals Scored: ' + goals);
    $('.played22').html('Matches played: ' + played);
    $('.matches22').html('Matches Won: ' + wins);
	


	var GroupF = data[5].ordered_teams[3].country;
	$('.Team24').html('4. ' +GroupF);
	var goals = data[5].ordered_teams[3].goals_for;
	var wins = data[5].ordered_teams[3].wins;
	var played = data[5].ordered_teams[3].games_played;
    $('.scored23').html('Goals Scored: ' + goals);
    $('.played23').html('Matches played: ' + played);
    $('.matches23').html('Matches Won: ' + wins);


	
	//Group G
	var GroupG = data[6].ordered_teams[0].country;
	$('.Team25').html('1. ' +GroupG);
	var goals = data[6].ordered_teams[0].goals_for;
	var wins = data[6].ordered_teams[0].wins;
	var played = data[6].ordered_teams[0].games_played;
    $('.scored24').html('Goals Scored: ' + goals);
    $('.played24').html('Matches played: ' + played);
    $('.matches24').html('Matches Won: ' + wins);
	


	var GroupG = data[6].ordered_teams[1].country;
	$('.Team26').html('2. ' +GroupG);
	var goals = data[6].ordered_teams[1].goals_for;
	var wins = data[6].ordered_teams[1].wins;
	var played = data[6].ordered_teams[1].games_played;
    $('.scored25').html('Goals Scored: ' + goals);
    $('.played25').html('Matches played: ' + played);
    $('.matches25').html('Matches Won: ' + wins);
	
	


	var GroupG = data[6].ordered_teams[2].country;
	$('.Team27').html('3. ' +GroupG);
	var goals = data[6].ordered_teams[2].goals_for;
	var wins = data[6].ordered_teams[2].wins;
	var played = data[6].ordered_teams[2].games_played;
    $('.scored26').html('Goals Scored: ' + goals);
    $('.played26').html('Matches played: ' + played);
    $('.matches26').html('Matches Won: ' + wins);
	


	var GroupG = data[6].ordered_teams[3].country;
	$('.Team28').html('4. ' +GroupG);
	var goals = data[6].ordered_teams[3].goals_for;
	var wins = data[6].ordered_teams[3].wins;
	var played = data[6].ordered_teams[3].games_played;
    $('.scored27').html('Goals Scored: ' + goals);
    $('.played27').html('Matches played: ' + played);
    $('.matches27').html('Matches Won: ' + wins);
	
	



});





});

