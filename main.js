//current number
var current_number = 0;

//answers
var answers = [];
var answers2 = [];

//start quiz
function start_quiz(q){
    //question and choices elements
    var question = document.getElementById("question");
    var choiceA = document.getElementById("A");
    var choiceB = document.getElementById("B");
    var choiceC = document.getElementById("C");
    var choiceD = document.getElementById("D");
    
    question.innerHTML = q[current_number].question;
    choiceA.innerHTML = q[current_number].choices.A;
    choiceB.innerHTML = q[current_number].choices.B;
    choiceC.innerHTML = q[current_number].choices.C;
    choiceD.innerHTML = q[current_number].choices.D;
}
//start time duration
function start_quiz_duration(){
    let min = 0;
    let sec = 0;
    setInterval(function(){
        if (sec == 59) {
            min++
            sec = 0;
            document.getElementById(`min${min}`).scrollIntoView();
        }
        else {
            sec++
            document.getElementById(`sec${sec}`).scrollIntoView();
        }

    }, 1000);
}

//start game
$("#start-game").click(function(){
    start_quiz_duration();
    $.ajax({
        type: 'GET',
        url: 'questions.json',
        success: function(res) {
            let quiz = res;
            start_quiz(quiz);
        }
    })

    //insert html elements
    document.getElementById("container").insertAdjacentHTML("afterend", `
    <div class="question" id="question-content">
        <div id="question"></div>
        <div class="answer-choices list-of-choices answer-options">
            <div class="A">
                <span>A. </span><span id="A"></span>
            </div>
            <div class="B">
                <span>B. </span><span id="B"></span>
            </div>
            <div class="C">
                <span>C. </span><span id="C"></span>
            </div>
            <div class="D">
                <span>D. </span><span id="D"></span>
            </div>
        </div>
    </div>
    <button id="next-question">Next</button>`);
    
    $(this).animate({
        opacity: '0',
        height: '0',
        width: '0',
        fontSize: '0',
    })
    $(".question, .container").animate({
        opacity: '1',
    })

    let x = 0;
    let chosen_answer;
    let chosen_answer2;
    
    $(".answer-options div").click(function(){
        x = 1;
        if (x > 0) {
            $(".answer-options div").css({
                "box-shadow" : "none",
                "border" : "1px solid #fff"
            })
            $(this).css({
                "box-shadow" : "0 0 10px #fff",
                "border" : "1px solid transparent"
            })
            
        }
        else {
            $(this).css({
                "box-shadow" : "0 0 10px #fff",
                "border" : "1px solid transparent"
            })
        }

        chosen_answer = $(this).attr("class");
        chosen_answer2 = $(this).children("span:nth-child(2)").html();

        if (current_number == 9) {
            $("#next-question").html("Submit");
            $("#next-question").css("visibility", "visible");
            $("#next-question").attr("id", "submit");

            //submit answers
            $("#submit").click(function(){
                let correct_answers = [];
                $.ajax({
                    type: 'GET',
                    url: 'questions.json',
                    success: function(res){
                        let questions = res;
                        for (let i = 0; i < answers.length; i++) {
                            correct_answers.push(questions[i].correctAnswer.answer);
                        }
                        $(".main-content").remove();
                        document.getElementById("logo").insertAdjacentHTML("afterend", `
                        <div class="result quiz-result">
                            <div class="result-banner">Your Answer</div>
                            <div class="user-answers">
                                <div><i></i><span> 1.  <span id="answer-0"> </span></span></div>
                                <div><i></i><span> 2.  <span id="answer-1"> </span></span></div>
                                <div><i></i><span> 3. <span id="answer-2"> </span></span> </div>
                                <div><i></i><span> 4. <span id="answer-3"> </span> </span></div>
                                <div><i></i><span> 5. <span id="answer-4"> </span> </span></div>
                                <div><i></i><span> 6.  <span id="answer-5"> </span></span></div>
                                <div><i></i><span> 7.  <span id="answer-6"> </span></span></div>
                                <div><i></i><span> 8.  <span id="answer-7"> </span></span></div>
                                <div><i></i><span> 9.  <span id="answer-8"> </span></span></div>
                                <div><i></i><span> 10.  <span id="answer-9"> </span></span></div>
                            </div>
                        </div>`);
                        for (let i = 0; i < answers2.length; i++) {
                            $(`#answer-${i}`).html(`${answers2[i]}`);
                        }
                        let Is = document.getElementsByTagName("I");
                        for (let i = 0; i < answers.length; i++) {
                            if (correct_answers[i] == answers[i]) {
                                Is[i].classList.add("fa-solid")
                                Is[i].classList.add("fa-check")
                                Is[i].style.color = "#42f578";
                            }
                            else {
                                Is[i].classList.add("fa-solid")
                                Is[i].classList.add("fa-xmark")
                                Is[i].style.color = "#f55742";
                            }
                        }
                        
                        $(".result").animate({
                            opacity: '1'
                        })
                    }
                })
            })
        }
        else {
            $("#next-question").css("visibility", "visible");
        }
    })
    

    //navigate to next question
    $("#next-question").click(function(){    
        answers.push(chosen_answer);
        answers2.push(chosen_answer2);
        chosen_answer = null;
        chosen_answer2 = null;

        if (current_number < 9) {
            $(".list-of-numbers").css("overflow-y", "scroll");
            current_number++
            document.getElementById(`num-${current_number + 1}`).scrollIntoView();
            $(".list-of-numbers").css("overflow-y", "hidden");
        }
        
        $(this).css("visibility", "hidden");
        $.ajax({
            type: 'GET',
            url: 'questions.json',
            success: function(res) {
                let quiz = res;
                start_quiz(quiz);
            }
        })
        
        $(".answer-options div").css({
            "box-shadow" : "none",
            "border" : "1px solid #fff"
        })
    })

    
})







