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

}

module.exports = ProblemService ;