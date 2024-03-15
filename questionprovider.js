class QuestionProvider{
    
    constructor(){
        this.questions = [
            
            //category science
            new Question("dflkjgsdfl", "https://www.facebook.com/2336c7d1-1ce9-45c5-8790-85edd3c523f7",
             ["asdasd", "dasda", "asdas"], 2, "science"),
            new Question("dflkjgsdfl", null, ["asdasd", "dasda", "asdas"], 2, "asda"),
            new Question("dflkjgsdfl", ["asdasd", "dasda", "asdas"], 2, "asda"),
            new Question("dflkjgsdfl", ["asdasd", "dasda", "asdas"], 2, "asda"),
            new Question("dflkjgsdfl", ["asdasd", "dasda", "asdas"], 2, "asda"),
            new Question("dflkjgsdfl", ["asdasd", "dasda", "asdas"], 2, "asda"),
            new Question("dflkjgsdfl", ["asdasd", "dasda", "asdas"], 2, "asda"),
            new Question("dflkjgsdfl", ["asdasd", "dasda", "asdas"], 2, "asda"),
            //category music
            new Question("What is the best-selling album of all time?",
            ["'Thriller'" - "Michael Jackson", "'The Dark Side of the Moon'" - "Pink Floyd",
              "'Back in Black'" - "AC/DC",  "'Led Zeppelin IV'" - "Led Zeppelin Correct"],
                "'Thriller'" - "Michael Jackson", "music"),
            new Question("Which British rock band is known as 'The Fab Four'?",
             ["The Rolling Stones", "The Who", "Queen", "The Beatles"],  "The Beatles", "music"),
            new Question("Who is the lead singer of the rock band Queen?", 
            ["Freddie Mercury", "Mick Jagger", "David Bowie", "Robert Plant"], "Freddie Mercury", "music"),
            new Question("Which of these artists is known as the 'King of Pop'?", 
            ["Prince", "Justin", "Timberlake", "Madonna", "Michael Jackson"], "Michael Jackson", "music"),
            new Question("Which singer is known for hits such as 'Rolling in the Deep' and 'Hello'?", 
            ["Taylor Swift", "Beyoncé", "Adele", "Rihanna"] ,"Adele","music"),
            new Question("What is the name of the famous music festival held annually in Indio, California?",
                ["Lollapalooza", "Coachella", "Glastonbury", "Burning Man"] , "Coachella", "music")
            
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
