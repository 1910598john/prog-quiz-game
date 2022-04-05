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
            $("#minute").css("overflow-y", "scroll");
            min++
            sec = 0;
            document.getElementById(`min${min}`).scrollIntoView();
            $("#minute").css("overflow-y", "hidden");
        }
        else {
            $("#second").css("overflow-y", "scroll");
            sec++
            document.getElementById(`sec${sec}`).scrollIntoView();
            $("#second").css("overflow-y", "hidden");
        }

    }, 1000);
}

//start game
$("#start-game").click(function(){
    start_quiz_duration();
    $.ajax({
        type: 'GET',
        url: 'files/questions.json',
        success: function(res) {
            let quiz = res;
            start_quiz(quiz);
        }
    })

    //insert html elements
    document.getElementById("main-content").insertAdjacentHTML("afterbegin", `
    <div class="container" id="container">
        <div class="number-of-questions" id="number-of-questions">
            <div id="current-number" class="list-of-numbers">
                <div id="num-1">01</div>
                <div id="num-2">02</div>
                <div id="num-3">03</div>
                <div id="num-4">04</div>
                <div id="num-5">05</div>
                <div id="num-6">06</div>
                <div id="num-7">07</div>
                <div id="num-8">08</div>
                <div id="num-9">09</div>
                <div id="num-10">10</div>
            </div>
            <div><span>of 10</span></div>
        </div>
        <div class="time duration" id="duration">
            <div id="minute" class="minute">
                <div id="min0">00</div>
                <div id="min1">01</div>
                <div id="min2">02</div>
                <div id="min3">03</div>
                <div id="min4">04</div>
                <div id="min5">05</div>
                <div id="min6">06</div>
                <div id="min7">07</div>
                <div id="min8">08</div>
                <div id="min9">09</div>
                <div id="min10">10</div>
                <div id="min11">11</div>
                <div id="min12">12</div>
                <div id="min13">13</div>
                <div id="min14">14</div>
                <div id="min15">15</div>
                <div id="min16">16</div>
                <div id="min17">17</div>
                <div id="min18">18</div>
                <div id="min19">19</div>
                <div id="min20">20</div>
                <div id="min21">21</div>
                <div id="min22">22</div>
                <div id="min23">23</div>
                <div id="min24">24</div>
                <div id="min25">25</div>
                <div id="min26">26</div>
                <div id="min27">27</div>
                <div id="min28">28</div>
                <div id="min29">29</div>
                <div id="min30">30</div>
            </div>
            <span style="color:#fff;font-weight:bold;">:</span>
            <div id="second" class="second">
                <div id="sec0">00</div>
                <div id="sec1">01</div>
                <div id="sec2">02</div>
                <div id="sec3">03</div>
                <div id="sec4">04</div>
                <div id="sec5">05</div>
                <div id="sec6">06</div>
                <div id="sec7">07</div>
                <div id="sec8">08</div>
                <div id="sec9">09</div>
                <div id="sec10">10</div>
                <div id="sec11">11</div>
                <div id="sec12">12</div>
                <div id="sec13">13</div>
                <div id="sec14">14</div>
                <div id="sec15">15</div>
                <div id="sec16">16</div>
                <div id="sec17">17</div>
                <div id="sec18">18</div>
                <div id="sec19">19</div>
                <div id="sec20">20</div>
                <div id="sec21">21</div>
                <div id="sec22">22</div>
                <div id="sec23">23</div>
                <div id="sec24">24</div>
                <div id="sec25">25</div>
                <div id="sec26">26</div>
                <div id="sec27">27</div>
                <div id="sec28">28</div>
                <div id="sec29">29</div>
                <div id="sec30">30</div>
                <div id="sec31">31</div>
                <div id="sec32">32</div>
                <div id="sec33">33</div>
                <div id="sec34">34</div>
                <div id="sec35">35</div>
                <div id="sec36">36</div>
                <div id="sec37">37</div>
                <div id="sec38">38</div>
                <div id="sec39">39</div>
                <div id="sec40">40</div>
                <div id="sec41">41</div>
                <div id="sec42">42</div>
                <div id="sec43">43</div>
                <div id="sec44">44</div>
                <div id="sec45">45</div>
                <div id="sec46">46</div>
                <div id="sec47">47</div>
                <div id="sec48">48</div>
                <div id="sec49">49</div>
                <div id="sec50">50</div>
                <div id="sec51">51</div>
                <div id="sec52">52</div>
                <div id="sec53">53</div>
                <div id="sec54">54</div>
                <div id="sec55">55</div>
                <div id="sec56">56</div>
                <div id="sec57">57</div>
                <div id="sec58">58</div>
                <div id="sec59">59</div>
                <div id="sec60">60</div>
            </div>
        </div>
    </div>
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
                    url: 'files/questions.json',
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
            url: 'files/questions.json',
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







