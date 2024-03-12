class Question {
  constructor(text, choices, answer, category) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
    // this.category = category;
  }

  shufflechoices() {
    let i = 0;
    let temp = "";

    while (i < this.choices.length) {
      let random = Math.floor(Math.random() * this.choices.length);
      let randomNum = this.choices[random];
      temp = this.choices[i];
      this.choices[i] = randomNum;
      this.choices[random] = temp;
      i++;
    }
    return this.choices;
  }
}
/////// defir depois em baixo a pergunta as respostas corectas e a categoria
const a = new Question("hello", ["a", "b", "c", "d", "e", "f"], "a");
const b = new Question("hellb", ["d", "e", "f"], "d");
const c = new Question("hellc", ["g", "h", "i"], "h");

// console.log(shuffleChoices());
