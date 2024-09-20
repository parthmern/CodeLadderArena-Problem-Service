const sanitizeMarkdownContent = require("../utils/markdownSanitizer");


class ProblemService {

    constructor(problemRepository){
        this.problemRepository = problemRepository 
    }

    async createProblem(problemData){
        try{
            // 1) sanitize markdown for description
            problemData.description = await sanitizeMarkdownContent(problemData.description);

            console.log("prblemData=>", problemData);
            
            // 2) db create
            const problem = await this.problemRepository.createProblem(problemData);

            console.log("problem created => ", problem);

            return problem ;
        }
        catch(error){
            console.log("Error in createProblem service => ", error);
            throw error;
        }
    }


    async getAllProblems(){
        
            
        const allProblems = await this.problemRepository.getAllProblems();

        console.log("allProblems => ", allProblems);

        return allProblems ;

        //can avoid try catch because on upper lvl we are already have it and handling it
        
    }

}

module.exports = ProblemService ;