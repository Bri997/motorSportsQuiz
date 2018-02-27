const questionList = [
  {

  question: 'The constructor with the most wins in Formula 1 is ?',
  answer1: 'Ferrari',
  answer2: 'Williams',
  answer3: 'Lotus',
  answer4: 'Red Bull',
  correct: 'Ferrari'
  },

  {

  question: 'The 24 Hours of Lemans first race was in what year ?',
  answer1: '1951',
  answer2: '1923',
  answer3: '1946',
  answer4: '1939',
  correct: '1923'
  },

  {

  question: 'The Mille Miglia an open-road endurance race took place from 1927 to 1957. Where was the race held ?',
  answer1: 'Sardegna',
  answer2: 'Spain',
  answer3: 'Italy',
  answer4: 'Monaco',
  correct: 'Italy'
  },

  {

  question: 'The Brabham BT46B Formula 1 car was banned just after one race for having what ?',
  answer1: 'illegal side skirts',
  answer2: 'Wider tyers',
  answer3: 'High capacity fuel tank ',
  answer4: 'A big fan',
  correct: 'A big fan'
  },

  {

  question: 'The fastest top speed down the mulsanne straight at Le Mans is ?',
  answer1: '251 MPH',
  answer2: '188 MPH',
  answer3: '265 MPH',
  answer4: '199 MPH',
  correct: '251 MPH'
  },

  {

  question: 'The last turn of the last race determined the Formula 1 drivers championship in what year ?',
  answer1: '2006',
  answer2: '1999',
  answer3: '2008',
  answer4: '2011',
  correct: '2008'
  },

  {

  question: 'In Formula 1 James Hunt was know for ?',
  answer1: 'Calculated  driving style',
  answer2: 'Aggressive track driving',
  answer3: 'Extreme partying',
  answer4: 'Winning the most races',
  correct: 'Extreme partying'

  },
  {

  question: 'The last year for the classic running start of the 24 Hours of LeMans ?',
  answer1: '1969',
  answer2: '1955',
  answer3: '1975',
  answer4: '1961',
  correct: '1969'
  },

  {

  question: 'The modern Formula 1 car now costs about how much ?',
  answer1: '$957 Thousand',
  answer2: '$100 Million',
  answer3: '$8 Million',
  answer4: '2 Bitcoins',
  correct: '$8 Million'
  },

  {

  question: 'The Nürburgring Nordschleife Combined has how many turns ?',
  answer1: '88',
  answer2: '117',
  answer3: '10',
  answer4: '170',
  correct: '170'
  }

];

let questionNumber = 0;
let quizScore = 0;
//
//

function addQuestionNumber() {
  questionNumber++;
  $('.questionNumber').text(questionNumber + 1);
}
function addQuizScore() {
  quizScore++;
  $('.quizScore').text(quizScore);
}
function emptyContainer() {
  $('.pageInserts').empty();
}
function emptyTitle() {
  $('.questionScore').empty();
}

function handleStartButton() {
  $('.questionNumber').text(questionNumber + 1);
  $('.startButton').on('click', function(event) {
    $('.startQuiz').empty();
    $('.pageInserts').append(`
          <form>
            <fieldset>
            <legend>${questionList[questionNumber].question}</legend>
              <div class ='radios'>
              <label for="answer1">
                <input type="radio" aria-labelledby="radio_label" name="answer" id="answer1" required>
              ${questionList[questionNumber].answer1}
              </label>
              </div>
              <div class ='radios'>
              <label for="answer2">
                <input type="radio" name="answer" id="answer2" required>
              ${questionList[questionNumber].answer2}
              </label>
              </div>
              <div class ='radios'>
              <label for="answer3">
                <input type="radio" name="answer" id="answer3" required>
              ${questionList[questionNumber].answer3}
              </label>
              </div>
              <div class ='radios'>
              <label for="answer4">
                <input type="radio" name="answer" id="answer4" required>
              ${questionList[questionNumber].answer4}
              </label>
              </div>
              <button type="submit" aria-labelledby="Submit button" class="btn btn-dark submitButton">Submit</button>
            </fieldset>
          </form>
    `);
    handleSubmitButton();
    // console.log("`handleStartButton` ran");
    // console.log("Starting Quiz");
  });
}

function handleSubmitButton() {
  $('form').on('submit', function(event) {
    event.preventDefault();
    let userAnswer = $('input:checked').parent().text().trim();
    // console.log('`handleSubmitButton` ran');
    // console.log(`User selects "${userAnswer}"`);
    let userAnswerCheck = $('input:checked').parent().text().trim();
    let correctAnswer = `${questionList[questionNumber].correct}`;
    if (userAnswerCheck === correctAnswer) {
      correctFeedback();
    }
    else {
      incorrectFeedback();
    }
  });
}

function correctFeedback() {
  emptyContainer();
  // console.log('`correctFeedback` ran')
  $('.pageInserts').append(`
    <h3>Correct! Keep going!</h3>
    <button type="button" aria-labelledby="Next button" class="btn btn-dark nextButton">Next Question</button>
  `);
  handleNextButton();
  addQuizScore();
}

function incorrectFeedback() {
  let correctAnswer = `${questionList[questionNumber].correct}`;
  emptyContainer();
  // console.log('`incorrectFeedback` ran');
  $('.pageInserts').append(`
    <h3>Woops.. </h3>
    <h3>It was ${correctAnswer}</h3>
    <button type="button" aria-labelledby="Next button" class="btn btn-dark nextButton">Next Question</button>
  `);
  handleNextButton();
}

function handleNextButton() {
  $('.nextButton').on('click', function(event) {
    if (questionNumber < 9) {
      // console.log('`handleNextButton` ran');
      addQuestionNumber();
      emptyContainer();
      $('.pageInserts').append(`
          <form>
            <fieldset>
              <div class ='radios'>
            <legend>${questionList[questionNumber].question}</legend>
              <label for="answer1">
                <input type="radio" aria-labelledby="radio_label" name="answer" id="answer1" required>
              ${questionList[questionNumber].answer1}
              </label>
              </div>
              <div class ='radios'>
              <label for="answer2">
                <input type="radio" name="answer" id="answer2" required>
              ${questionList[questionNumber].answer2}
              </label>
              </div>
              <div class ='radios'>
              <label for="answer3">
                <input type="radio" name="answer" id="answer3" required>
              ${questionList[questionNumber].answer3}
              </label>
              </div>
              <div class ='radios'>
              <label for="answer4">
                <input type="radio" name="answer" id="answer4" required>
              ${questionList[questionNumber].answer4}
              </label>
              </div>
              <button type="submit" aria-labelledby="submit button" class="btn btn-dark submitButton">Submit</button>
            </fieldset>
          </form>
    `);
    handleSubmitButton();
    // console.log(questionNumber);
    }
    else {
      emptyContainer();
      finalPage();
      handleRestartButton();
    }
  });
}

function finalPage() {
  // console.log('`finalPage` ran');
  let finalScore = quizScore;
  // console.log(`User's score: ${quizScore}`);
  if (finalScore >= 8) {
    // console.log("User's score is greater than or equal to 8");
    emptyTitle();
    $('.pageInserts').append(`
      <p>Final Score: <span class="quizScore">${finalScore}</span>/10</p>
      <h3> Wowie you're a fan and must drive well too.</h3>
      <button type="button" class="btn btn-dark restartButton">Restart Quiz</button>
    `);
  }
  else if (finalScore < 8 && finalScore >= 5) {
    // console.log("User's score is between 5 and 7");
    emptyTitle();
    $('.pageInserts').append(`
      <p>Final Score: <span class="quizScore">${finalScore}</span>/10</p>
      <h3>Nice job get to the track more.</h3>
      <button type="button" class="btn btn-dark restartButton">Restart Quiz</button>
    `);
  }
  else {
    // console.log("User's score is less than or equal to 4");
    emptyTitle();
    $('.pageInserts').append(`
      <p>Final Score: <span class="quizScore">${finalScore}</span>/10</p>
      <h3> Ugh.. You need more track time. :) </h3>
      <button type="button" class="btn btn-dark restartButton">Restart Quiz</button>
    `);
  }
}

function handleRestartButton() {
  $('.restartButton').on('click', function(event){
    // console.log('`handleRestartButton` ran');
    window.location.reload(true);
    });
}

function handleAllButtons() {
  // console.log('`handleAllButtons` ran - Starting Quiz');
  handleStartButton();
  handleSubmitButton();
  handleNextButton();
  handleRestartButton();
}

$(handleAllButtons);
