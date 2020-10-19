// Display Options

function removeHtml(setting, div){
	if (setting == "no" || setting == "") {
		$(div).remove();
	}
}

if (settings.options.backgroundType == "video") {
	$('#image').remove();
}else {
	$('#video').remove();
}

removeHtml(settings.social.displaySocial, "#social");

// Individual Social Networks
removeHtml(settings.social.twitch, "#tt");
removeHtml(settings.social.twitter, "#tw");
removeHtml(settings.social.facebook, "#fb");
removeHtml(settings.social.instagram, "#in");
removeHtml(settings.social.youtube, "#yt");

$('.primaryFont').css("color", settings.colors.primaryTextColor);
$('.secondaryFont').css("color", settings.colors.subTextColor);
$('.borderTop').css("background", settings.colors.accentColor);
$('.borderRight').css("background", settings.colors.accentColor);
$('.borderLeft').css("background", settings.colors.accentColor);
$('.network').css("background", settings.colors.contentBackgrounds);
$('.icon').css("color", settings.colors.accentColor);

// Set Fonts

$('.primaryFont').css("font-family", settings.fonts.primaryFont);
$('.secondaryFont').css("font-family", settings.fonts.subFont);

// Set Font Sizes

function setFontSize(target, settingVar){
	$(target).css("font-size", settingVar + "px");

}

function setVerticalOffset(target, settingVar){
	$(target).css("transform", "translateY(" + settingVar + "px)");
}

setFontSize("#title", settings.fonts.titleSize);
setVerticalOffset("#title", settings.fonts.titleVerticalOffset);

setFontSize("#subtitle", settings.fonts.subtitleSize);
setVerticalOffset("#subtitle", settings.fonts.subtitleVerticalOffset);

setFontSize("#list .name", settings.fonts.labelNameSize);
setVerticalOffset("#list .name", settings.fonts.labelNameVerticalOffset);
$('#list .name').css("line-height", settings.fonts.labelNameSize + "px");

setFontSize("#list .type", settings.fonts.labelHeaderSize);
setVerticalOffset("#list .type", settings.fonts.labelHeaderVerticalOffset);
$('#list .type').css("line-height", settings.fonts.labelHeaderSize + "px");

setFontSize("#time", settings.fonts.countdownTimeSize);
setVerticalOffset("#time", settings.fonts.countdownTimeVerticalOffset);

setFontSize("#message", settings.fonts.countdownMessageSize);
setVerticalOffset("#message", settings.fonts.countdownMessageVerticalOffset);

setFontSize("#endMessage", settings.fonts.countdownEndMessageSize);
setVerticalOffset("#endMessage", settings.fonts.countdownEndMessageVerticalOffset);

// //  Labels
// $('#followLine').html(settings.labels.labelOneHeading);
// $('#tipLine').html(settings.labels.labelTwoHeading);
// $('#bigTipLine').html(settings.labels.labelThreeHeading);
// $('#subLine').html(settings.labels.labelFourHeading);

// Countdown
var minutes = settings.countdown.countdownTime;
$('#message').html(settings.countdown.countdownMessage);

// Scaling
$('#social').css("transform", "scale(" + Number(settings.scaling.socialMediaScale) + ")");
$('#list').css("transform", "scale(" + Number(settings.scaling.labelsScale) + ")");
$('#schedule').css("transform", "scale(" + Number(settings.scaling.scheduleScale) + ")");
$('#countdown').css("transform", "scale(" + Number(settings.scaling.countdownScale) + ")");


function getNames(){
	$.get("../TextFiles/" + settings.labels.labelOnePath + ".txt", function(data) {
	    var myvar = data;
	  $('#qtdFollow').text(data);
	});
	$.get("../TextFiles/" + settings.labels.labelTwoPath + ".txt", function(data) {
	    var myvar = data;
	  $('#qtdSub').text(data);
	});
}

getNames(); // load ASAP
window.setInterval(getNames, 100);

// Social
$("#displaySocial").html(settings.social.displaySocial);
$("#goalFollowName").html(settings.social.goalFollowName);
$("#goalSubName").html(settings.social.goalSubName);
$("#goalFollow").html("/" + settings.social.goalFollow);
$("#goalSub").html("/" + settings.social.goalSub);


// Add Animations

$( document ).ready(function() {
    // Add Animations

    tl = new TimelineMax({repeat: -1});

    $( ".item" ).each(function( index ) {
				// tl.to(this, 0, {onComplete:addAnimated, onCompleteParams:[this], delay: 2});
				tl.to(this, 0, {onComplete:addAnimated, onCompleteParams:[this]});
        tl.to(this, 6, {onComplete:rmvAnimated, onCompleteParams:[this]});
    });

    function addAnimated(identifier){
        $(identifier).addClass("animated");
    }
    function rmvAnimated(identifier){
        $(identifier).removeClass("animated");
    }
});
