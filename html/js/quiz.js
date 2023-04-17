$(function(){
    function arrayShuffle(array) {
        for(let i = (array.length - 1); 0 < i; i--){
          let r = Math.floor(Math.random() * (i + 1));
          let tmp = array[i];
          array[i] = array[r];
          array[r] = tmp;
        }
        return array;
    };
    const mondai = {
        id:"01",
        question:"hogehogehogehogehogehogehoge",
        selections:["wrong answer1","wrong answer2","wrong answer3","right answer"],
        answer:"right answer",
    };
    let quiz = $(".quiz");
    let quiz_judge = $(".quiz-judge");
    let quiz_question = quiz.find('.quiz-question');
    quiz_question.text(mondai.question);

    let selections = arrayShuffle(mondai.selections);

    
    let quiz_button1 = $(".quiz-selection1");
    let quiz_button2 = $(".quiz-selection2");
    let quiz_button3 = $(".quiz-selection3");
    let quiz_button4 = $(".quiz-selection4");

    quiz_button1.text(selections[0]);
    quiz_button2.text(selections[1]);
    quiz_button3.text(selections[2]);
    quiz_button4.text(selections[3]);

    $("button").on("click",function(){
        if($(this).text() == mondai.answer){
            quiz_judge.html("<h1>Collect!</h1>");
        }else{
            quiz_judge.text("Uncollect!");   
        }
    });

})