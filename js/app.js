var correctAnswers = 0;
var questionsAnswered = 0;

// Original JavaScript code by Chirp Internet: www.chirp.com.au
  // Please acknowledge use of this code by including this header.

var today = new Date();
var expiry = new Date(today.getTime() + 30 * 24 * 3600 * 1000); // plus 30 days

function setCookie(name, value)
{
document.cookie=name + "=" + escape(value) + "; path=/; expires=" + expiry.toGMTString();
}

function storeValuesQ1 (form) {
    setCookie("field1", form.field1.value);
    setCookie("field2", form.field2.value);
    setCookie("field3", form.field3.value);
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
    var answers1 = document.getElementsByName('answers-1');
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
        
        $("#total-score-value").text(correctAnswers + " ");
        questionsAnswered++;
        $("#questions-answered-value").text(questionsAnswered + " ");
        //storeValuesQ1(answers1);   
    } 
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
    
    if(field1 = getCookie("field1")) document.answers1.field1.value = field1;
    if(field2 = getCookie("field2")) document.answers1.field2.value = field2;
    if(field3 = getCookie("field3")) document.answers1.field3.value = field3;
    
});

//code to move users from question to question
//code to evaluate answers
//code to tally and display the user score