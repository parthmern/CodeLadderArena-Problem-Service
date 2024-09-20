const { Problem } = require("../models");


class ProblemRepository {

    async createProblem(problemData){

        try{
            const problem = await Problem.create({
                title : problemData.title ,
                description : problemData.description ,
                difficulty : problemData.difficulty ,
                testCases : problemData.testCases ? problemData.testCases : [] ,
                editorial : problemData.editorial
            })

            return problem ;
        }
        catch(error){
            console.log("error ==>", error);
            throw error; 
        }   
        
    }

    async getAllProblems(){
        
        const problems = await Problem.find({});

        return problems ;
        
        //can avoid try catch because on upper lvl we are already have it and handling it
    }


}

module.exports = ProblemRepository ;