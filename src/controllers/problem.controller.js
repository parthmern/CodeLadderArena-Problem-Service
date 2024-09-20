// import { StatusCodes } from 'http-status-codes';   // not working

// const { StatusCodes } = require("http-status-codes");
const NotImplemented = require("../errors/notImplemented.error");

// ping on all controllers
async function pingProblemController(req, res){
    return(
        res.status(StatusCodes.OK).json({
            message : "pingProblemController is up"
        })
    )
}


// adding problem
async function addProblem(req, res, next){
    
    try{

        // nothing implemented right now
        throw new NotImplemented("addProblem");
        
    }catch(error){

        // last middleware going to call here "errorHandler"
        next(error);
    }

}

// get all problems
async function getProblems(req, res, next){
    try{
        throw new NotImplemented("addProblem");
        
    }catch(error){
        next(error);
    }
}

// get single problems
async function getProblem(req, res, next){
    try{
        throw new NotImplemented("addProblem");
        
    }catch(error){
        next(error);
    }
}

// delete single problem
async function deleteProblem(req, res, next){
    try{
        throw new NotImplemented("addProblem");
        
    }catch(error){
        next(error);
    }
}

// update problem
async function updateProblem(req, res, next){
    try{
        throw new NotImplemented("addProblem");
        
    }catch(error){
        next(error);
    }
}

module.exports = {
    addProblem,
    getProblems,
    getProblem, 
    deleteProblem,
    updateProblem,
    pingProblemController
}