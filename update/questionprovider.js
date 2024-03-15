class QuestionProvider{
    
    constructor(){
        this.questions = [
            
            //category science
            new Question("adad", "https://www.facebook.com/2336c7d1-1ce9-45c5-8790-85edd3c523f7", ["asdasd", "dasda", "asdas"], 2, "science"),
            new Question("aaa", null, ["asdasd", "dasda", "asdas"], 2, "asda"),
            new Question("dflkjgsdfl", null,["asdasd", "dasda", "asdas"], 2, "asda"),
            new Question("dflddadakjgsdfl", null,["asdasd", "dasda", "asdas"], 2, "asda"),
            new Question("dflkjgsdfl", null,["asdasd", "dasda", "asdas"], 2, "asda"),
            new Question("dddd", null,["asdasd", "dasda", "asdas"], 2, "asda"),
            new Question("dflkjgsdfl", null,["asdasd", "dasda", "asdas"], 2, "asda"),
            new Question("dflka232jgsdfl", null,["asdasd", "dasda", "asdas"], 2, "asda"),
            new Question("Who sing this song 'My Boo'?", "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FfPgf2meEX1w%2Fmaxresdefault.jpg&tbnid=Ddy0QwehFoKpvM&vet=12ahUKEwjN7a-q---EAxWCTaQEHQUGCjEQMygCegQIARBW..i&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DfPgf2meEX1w&docid=RgKG1CCtYT6ARM&w=1280&h=720&q=usher%20my%20boo&ved=2ahUKEwjN7a-q---EAxWCTaQEHQUGCjEQMygCegQIARBW", ["Usher", "Bionce", "Chris Brown"], 0, "Music"),
            new Question("dflkjgsdfl", null,["asdasd", "dasda", "asdas"], 2, "asda"),
            new Question("dflkjgda adadsdfl", null,["asdasd", "dasda", "asdas"], 2, "asda"),
            new Question("dflkjgsdfl", null,["asdasd", "dasda", "asdas"], 2, "asda"),
            new Question("dflkjadadqqqgsdfl", null,["asdasd", "dasda", "asdas"], 2, "asda"),
            new Question("dflkjeeeegsdfl", null,["asdasd", "dasda", "asdas"], 2, "science"),
            //category music
            new Question("dflkjgsdfl", null, ["asdasd", "dasda", "asdas"], 2, "music")
            
        ];
    }
    getRandomQuestion()
    {
        let randomQuestionIndex = Math.floor(Math.random()  * this.questions.length);
        
        return this.questions[randomQuestionIndex];
        
    }
    
    getRandomQuestionByCategory(category)
    {
        let categoryQuestions = [];
        
        for(let i = 0; i < this.questions.length; i++){
            
            if(this.questions[i].category != undefined && this.questions[i].category.toLocaleLowerCase() == category.toLocaleLowerCase())
                categoryQuestions.push(this.questions[i]); 
        }
        
        let randomQuestionIndex = Math.floor(Math.random()  * categoryQuestions.length);
        
        return categoryQuestions[randomQuestionIndex];
    }
}
