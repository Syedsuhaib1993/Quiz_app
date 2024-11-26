var quesArray = [

    {
      num: '1',
      question: 'Source code is always written in',
      options: {
        a: 'low level language',
        b: 'Assembly language',
        c: 'High level language',
        d: 'scripted language'
      },
      answer: 'High level language'
    
    },
    {
      num: '2',
      question: 'Pre-defined increment in A can be written as',
      options: {
        a: 'A++',
        b: '++A',
        c: 'A=+',
        d: '+=A'
      },
      answer:'A++'
    
    }
    ,{
      num: '3',
      question: 'Which of the following is true about variable naming conventions in JavaScript?',
      options: {
        a: 'You should not use any reserved key',
        b: 'variable should not start with numeral(0-9)',
        c: 'both of them',
        d: 'none of them,'
      },
      answer:"both of them"
    
    }
  ]
  
  var quizBody = document.querySelector('.quiz-body')
  console.log(quizBody)
  var form = document.querySelector('.form')
  console.log(form)
  
  var h1Name = document.querySelector('.set-name')
  var h1Email = document.querySelector('.set-email')
  var h1RollNo = document.querySelector('.set-rollno')
  var h1Institute= document.querySelector('.set-institute')
  var quizDiv = document.querySelector('.quiz-div')
  var mainDiv = document.querySelector('.main-div')
  var resultDiv = document.querySelector('.result')
  console.log(quizDiv)
  
  var ques = document.getElementById('ques')
  var quesOption = document.getElementById('quesOptions').children
  console.log(quesOption)
  
  for(var i=0; i<quesOption.length ;i++){
    console.log(quesOption[i])
    quesOption[i].className = 'cursor-pointer'
    quesOption[i].setAttribute('onclick', 'selectOption(this)')
  }
  
  for (var liOption of quesOption ){
    console.log(liOption)
  }
  
  
  var footer = document.querySelector('.footer')
  
  function startQuiz() {
    var userName = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var rollNo = document.getElementById("rollno").value;
    var institute = document.getElementById("institute").value;
    console.log(userName, email, rollNo, institute);
    if(!userName || !email || !rollNo || !institute){
      alert('Fields are required')
      return
    }
    mainDiv.style.display = 'block'
  
    form.style.display = 'none'
    h1Name.innerHTML = userName
    h1Email.innerHTML = email
    h1RollNo.innerHTML = rollNo
    h1Institute.innerHTML = institute
  
  
    ques.innerHTML = quesArray[0].question
    quesOption[0].innerHTML = quesArray[0].options.a
    quesOption[1].innerHTML = quesArray[0].options.b
    quesOption[2].innerHTML = quesArray[0].options.c
    quesOption[3].innerHTML = quesArray[0].options.d
  
  
  
  
  }
  
  var tQue = document.getElementById('tQue')
  var cAns = document.getElementById('cAns')
  var wAns = document.getElementById('wAns')
  var res = document.getElementById('res')



  var quesCount = 0
  var totalQues = quesArray.length
  var correctAns = 0
  var wrongAns = 0
  var total = 0
  

  function nextQues() {
    if(quesCount < quesArray.length -1){
      quesCount = quesCount + 1
   
    ques.innerHTML = quesArray[quesCount].question
    quesOption[0].innerHTML = quesArray[quesCount].options.a
    quesOption[1].innerHTML = quesArray[quesCount].options.b
    quesOption[2].innerHTML = quesArray[quesCount].options.c
    quesOption[3].innerHTML = quesArray[quesCount].options.d
    }else{
        // when out of question
      resultDiv.style.display = 'block'
      mainDiv.style.display = 'none'
      tQue.innerHTML = totalQues
      cAns.innerHTML = correctAns
      wAns.innerHTML = wrongAns
      res.innerHTML = total
    }
    
  }
  
  function selectOption(element){
    console.log(element)
    element.className = 'text-emerald-1000'
    element.className = 'bg-emerald-100'
  
    if(element.innerHTML == quesArray[quesCount].answer){
    //   right answer
    }else{
    //   wrong answer
    }
  }