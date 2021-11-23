const questions = [
  {
    question: "ما هي نتيجة 5 * 5 ؟",
    answers: [
      { text: "25", correct: true },
      { text: "30", correct: false },
      { text: "90", correct: false },
      { text: "100", correct: false },
    ],
  },
  {
    question: "ماهي مدة معسكر طويق البرمجي",
    answers: [
      { text: "3 شهور", correct: false },
      { text: "10 شهور", correct: false },
      { text: "4 شهور", correct: true },
      { text: "12 شهر", correct: false },
    ],
  },
  {
    question: "كم عدد الكواكب في النظام الشمسي ؟",
    answers: [
      { text: "9", correct: false },
      { text: "8", correct: true },
      { text: "2", correct: false },
      { text: "3", correct: false },
    ],
  },
  {
    question: "متى تأسس الانترنت",
    answers: [
      { text: "2020", correct: false },
      { text: "1983", correct: true },
      { text: "1900", correct: false },
      { text: "2000", correct: false },
    ],
  },
];
questions.forEach((elem,i)=>{
    document.getElementById(`question${i+1}`).innerHTML = `<p id="question${i+1}-text">${elem.question}</p>
    <div class="question${i+1}-answers">
        <div id="question${i+1}-answer0" onclick="checkAnswer('${elem.question}',${0})"> ${elem.answers[0].text} </div>
        <div id="question${i+1}-answer1" onclick="checkAnswer('${elem.question}',${1})"> ${elem.answers[1].text} </div>
        <div id="question${i+1}-answer2" onclick="checkAnswer('${elem.question}',${2})"> ${elem.answers[2].text} </div>
        <div id="question${i+1}-answer3" onclick="checkAnswer('${elem.question}',${3})"> ${elem.answers[3].text} </div>
    </div>`
})



const checkAnswer = (question, answerId)=>{
    const askedQuestion = questions.find(element => {
        return element.question === question
    });

    if(askedQuestion.answers[answerId].correct == true){
        // document.getElementById(`question${questions.indexOf(askedQuestion)+1}-answer${answerId}`).style.backgroundColor = "green"
        document.getElementsByTagName("body")[0].style.backgroundColor = "33FF69"

    } else{
        //document.getElementById(`question${questions.indexOf(askedQuestion)+1}-answer${answerId}`).style.backgroundColor = "red"
        document.getElementsByTagName("body")[0].style.backgroundColor = "red"

    }
}


