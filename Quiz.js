class Quiz {
  constructor(questions, timeLimit, timeRemaining) {
    this.questions = questions;
    this.timeLimit = timeLimit;
    this.timeRemaining = timeRemaining;
    this.correctAnswers = 0;
    this.currentQuestionIndex = 0;
  }

  getQuesstion() {
    return this.questions[this.currentQuestionIndex];
  }

  moveToNextQuestion() {
    this.currentQuestionIndex;
  }
  shuffleQuestion() {
    let i = 0;
    let temp = "";

    while (i < this.questions.length) {
      let random = Math.floor(Math.random() * this.questions.length);
      let randomNum = this.questions[random];
      temp = this.questions[i];
      this.questions[i] = random;
      this.questions[random]= temp;
      i++;
    }
    return this.questions;
  }
}
//   checkAnswer(answer){
//     if (this.getQuesstion().answer===answer){
//         this.correctAnswers++;
//     }
//     console.log(this.getQuesstion());
//     console.log(answer);
//   }
//   hasEnded(){
//     if (this.currentQuestionIndex < this.questions.length){
//         return false;
// }else {
//     return true;
// }
//   }
// }
