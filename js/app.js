var correctAnswers = 0;
var questionsAnswered = 0;
var answers1;

//http://www.quirksmode.org/js/cookies.html
function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function storeValuesQ1 (form, index) {
    createCookie("answers1", form.answers1[index].value);
    return true;
}

function startQuiz () {
    $("#ready-state").hide();
    $("#question-2").hide();
    $("#question-3").hide();
    $("#question-4").hide();
    $("#question-5").hide();
    $("#results-section").hide();
    $("#question-1").show();

    $("#hint-1-text").hide();
    $("#hide-hint-1").hide();
    $("#correct-1").hide();
    $("#incorrect-1b").hide();
    $("#incorrect-1c").hide();
    $("#next-question-1").hide();
}

function showHint1 () {
    event.preventDefault();
    $("#hint-1").hide();
    $("#hint-1-text").show();
    $("#hide-hint-1").show();
}

function hideHint1 () {
    event.preventDefault();
    $("#hint-1-text").hide();
    $("#hide-hint-1").hide();
    $("#hint-1").show();
}

function evaluateQuestion1 () {
    event.preventDefault();
    answers1 = document.getElementsByName('answers1');
    for(i = 0; i < answers1.length; i++) {
        if(answers1[i].checked) {
            if(answers1[i].value === "right") {
                $("#correct-1").show();
                correctAnswers++;
            }
            else if(answers1[i].value === "wrongB") {
                $("#incorrect-1b").show();
            }
            else if(answers1[i].value === "wrongC") {
                $("#incorrect-1c").show();
            } 
            $("#submit-answer-1").hide();
            $("#next-question-1").show();
            
        }
        if (answers1[0].checked == false && answers1[1].checked == false && answers1[2].checked == false) {
            alert("You must choose an answer!");
            break;
        }
        storeValuesQ1(answers1form, i);
    }
    questionsAnswered++;
    $("#questions-answered-value").text(questionsAnswered + " ");
    $("#total-score-value").text(correctAnswers + " ");
}

function moveToQuestion2 () {
    event.preventDefault();
    $("#ready-state").hide();
    $("#question-1").hide();
    $("#question-3").hide();
    $("#question-4").hide();
    $("#question-5").hide();
    $("#results-section").hide();
    $("#question-2").show();

    $("#hint-2-text").hide();
    $("#correct-2").hide();
    $("#incorrect-2a").hide();
    $("#incorrect-2b").hide();
} 

function showHint2 () {
    $("#hint-2-text").show();
} 

//code to start a new quiz
$(document).ready(function() {
    $("#question-1").hide();
    $("#question-2").hide();
    $("#question-3").hide();
    $("#question-4").hide();
    $("#question-5").hide();
    $("#results-section").hide();
    $("#ready-state").show();
});

//code to move users from question to question
//code to evaluate answers
//code to tally and display the user score