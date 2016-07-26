var correctAnswers = 0;
var questionsAnswered = 0;
var totalScore = 0;
var usedHint1;
var usedHint2;
var usedHint3;
var usedHint4;
var usedHint5;

function createCookie (name,value) {
    document.cookie = name+"="+value+";";
}

function readCookie (name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

//Store user answers in cookies
function storeValues (name, answers, index) {
    createCookie(name, answers[index].value);
    alert(document.cookie);
    return true;
}

//Initial state for quiz
function readyForQuiz () {
    $(".questions").hide();
    $("#results-section").hide();
} 

function startQuiz () {
    event.preventDefault();
    $("#ready-state").hide();
    $(".questions").hide();
    $("#results-section").hide();
    $("#hint-1-text").hide();
    $("#next-question-2").hide();
    $("#question-1").show();
}

//Question 1 functionality
function showHint1 () {
    event.preventDefault();
    if (window.confirm("If I show you the hint, you'll only receive half credit for your answer if correct.  Is that okay?")) {
        $("#show-hint-1").hide();
        $("#hint-1-text").show();
        usedHint1 = true;
        createCookie("usedHint1", true);
        alert(document.cookie);
    }
    else {
        usedHint1 = false;
        createCookie("usedHint1", false);
        alert("Good luck!");
    }
}

function evaluateQuestion1 () {
    event.preventDefault();
    var answers1 = document.getElementsByName('answers1');
    for(i = 0; i < answers1.length; i++) {
        if(answers1[i].checked) {
            storeValues("answer1", answers1, i);
            $("#submit-answer-1").hide();
            $("#next-question-2").show();
            questionsAnswered++; 
        }    
        else if (answers1[0].checked == false && answers1[1].checked == false && answers1[2].checked == false) {
            alert("You must choose an answer!");
            break;
        }
    }
    $("#questions-answered-value").text(questionsAnswered + " ");
}

function moveToQuestion2 () {
    event.preventDefault();    
    $(".questions").hide();
    $("#hint-2-text").hide();
    $("#next-question-3").hide();
    $("#question-2").show();
} 

//Question 2 functionality
function showHint2 () {
    event.preventDefault();
    if (window.confirm("If I show you the hint, you'll only receive half credit for your answer if correct.  Is that okay?")) {
        $("#show-hint-2").hide();
        $("#hint-2-text").show();
        usedHint2 = true;
        createCookie("usedHint2", true);
    }
    else {
        usedHint2 = false;
        createCookie("usedHint2", false);
        alert("Good luck!");
    }
} 

function evaluateQuestion2 () {
    event.preventDefault();
    var answers2 = document.getElementsByName('answers2');
    for(i = 0; i < answers2.length; i++) {
        if(answers2[i].checked) {
            storeValues("answer2", answers2, i);
            $("#submit-answer-2").hide();
            $("#next-question-3").show();
            questionsAnswered++; 
        }    
        else if (answers2[0].checked == false && answers2[1].checked == false && answers2[2].checked == false) {
            alert("You must choose an answer!");
            break;
        }
    }
    $("#questions-answered-value").text(questionsAnswered + " ");
}

function moveToQuestion3 () {
    event.preventDefault();    
    $(".questions").hide();
    $("#hint-3-text").hide();
    $("#next-question-4").hide();
    $("#question-3").show();
} 

//Question 3 functionality
function showHint3 () {
    event.preventDefault();
    if (window.confirm("If I show you the hint, you'll only receive half credit for your answer if correct.  Is that okay?")) {
        $("#show-hint-3").hide();
        $("#hint-3-text").show();
        usedHint3 = true;
        createCookie("usedHint3", true);
    }
    else {
        usedHint3 = false;
        createCookie("usedHint3", false);
        alert("Good luck!");
    }
} 

function evaluateQuestion3 () {
    event.preventDefault();
    var answers3 = document.getElementsByName('answers3');
    for(i = 0; i < answers3.length; i++) {
        if(answers3[i].checked) {
            storeValues("answer3", answers3, i);
            $("#submit-answer-3").hide();
            $("#next-question-4").show();
            questionsAnswered++; 
        }    
        else if (answers3[0].checked == false && answers3[1].checked == false && answers3[2].checked == false) {
            alert("You must choose an answer!");
            break;
        }
    }
    $("#questions-answered-value").text(questionsAnswered + " ");
}

function moveToQuestion4 () {
    event.preventDefault();    
    $(".questions").hide();
    $("#hint-4-text").hide();
    $("#next-question-5").hide();
    $("#question-4").show();
} 

//Question 4 functionality
function showHint4 () {
    event.preventDefault();
    if (window.confirm("If I show you the hint, you'll only receive half credit for your answer if correct.  Is that okay?")) {
        $("#show-hint-4").hide();
        $("#hint-4-text").show();
        usedHint4 = true;
        createCookie("usedHint4", true);
    }
    else {
        usedHint4 = false;
        createCookie("usedHint4", false);
        alert("Good luck!");
    }
} 

function evaluateQuestion4 () {
    event.preventDefault();
    var answers4 = document.getElementsByName('answers4');
    for(i = 0; i < answers4.length; i++) {
        if(answers4[i].checked) {
            storeValues("answer4", answers4, i);
            $("#submit-answer-4").hide();
            $("#next-question-5").show();
            questionsAnswered++; 
        }    
        else if (answers4[0].checked == false && answers4[1].checked == false && answers4[2].checked == false) {
            alert("You must choose an answer!");
            break;
        }
    }
    $("#questions-answered-value").text(questionsAnswered + " ");
}

function moveToQuestion5 () {
    event.preventDefault();    
    $(".questions").hide();
    $("#hint-5-text").hide();
    $("#get-results").hide();
    $("#question-5").show();
} 

//Question 5 functionality
function showHint5 () {
    event.preventDefault();
    if (window.confirm("If I show you the hint, you'll only receive half credit for your answer if correct.  Is that okay?")) {
        $("#show-hint-5").hide();
        $("#hint-5-text").show();
        usedHint5 = true;
        createCookie("usedHint5", false);
    }
    else {
        usedHint5 = false;
        createCookie("usedHint5", false);
        alert("Good luck!");
    }
} 

function evaluateQuestion5 () {
    event.preventDefault();
    var answers5 = document.getElementsByName('answers5');
    for(i = 0; i < answers5.length; i++) {
        if(answers5[i].checked) {
            storeValues("answer5", answers5, i);
            $("#submit-answer-5").hide();
            $("#get-results").show();
            questionsAnswered++; 
        }    
        else if (answers5[0].checked == false && answers5[1].checked == false && answers5[2].checked == false) {
            alert("You must choose an answer!");
            break;
        }
    }
    $("#questions-answered-value").text(questionsAnswered + " ");
}

function goToResults () {
    event.preventDefault();
    $(".questions").hide();
    $("#results-section").show();
    //code to tally final score
    var cookieAnswer1 = readCookie("answer1");
    var cookieAnswer2 = readCookie("answer2");
    var cookieAnswer3 = readCookie("answer3");
    var cookieAnswer4 = readCookie("answer4");
    var cookieAnswer5 = readCookie("answer5");
    var cookieUsedHint1 = readCookie("usedHint1");
    var cookieUsedHint2 = readCookie("usedHint2");
    var cookieUsedHint3 = readCookie("usedHint3");
    var cookieUsedHint4 = readCookie("usedHint4");
    var cookieUsedHint5 = readCookie("usedHint5");
    
    if (cookieAnswer1 === "1") {
        totalScore++;
        if (cookieUsedHint1 === "true") {
            totalScore = totalScore - 0.5;
        }
    }
    if (cookieAnswer2 === "3") {
        totalScore++;
        if (cookieUsedHint2 === "true") {
            totalScore = totalScore - 0.5;
        }
    }
    if (cookieAnswer3 === "2") {
        totalScore++;
        if (cookieUsedHint3 === "true") {
            totalScore = totalScore - 0.5;
        }
    }
    if (cookieAnswer4 === "3") {
        totalScore++;
        if (cookieUsedHint4 === "true") {
            totalScore = totalScore - 0.5;
        }
    }
    if (cookieAnswer5 === "1") {
        totalScore++;
        if (cookieUsedHint5 === "true") {
            totalScore = totalScore - 0.5;
        }
    }
    $("#final-score-value").text(totalScore + " ");
    
    //code to determine rank of user
    if (totalScore <= 2.5) {
        $("#ranking").text("You need to brush up on your songwriting techniques.")
    }
    else if (totalScore === 3 || totalScore === 3.5) {
        $("#ranking").text("Not bad!  Keep woodshedding and you'll get there.")
    }
    else if (totalScore === 4 || totalScore === 4.5) {
        $("#ranking").text("Impressive! Just gotta fill in a couple of gaps in your songwriting knowledge.")
    }
    else if (totalScore === 5) {
        $("#ranking").text("Flawless victory!  You're a rockstar!")
    }
}

$(document).ready(function(){
    readyForQuiz();
});