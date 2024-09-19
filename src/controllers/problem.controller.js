// import { StatusCodes } from 'http-status-codes';   // not working

const { StatusCodes } = require("http-status-codes");
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
async function getProblems(req, res){
    return (
        res.status(StatusCodes.NOT_IMPLEMENTED).json({
            message : "Not implemented"
        })
    )
}

// get single problems
async function getProblem(req, res){
    return (
        res.status(StatusCodes.NOT_IMPLEMENTED).json({
            message : "Not implemented"
        })
    )
}

// delete single problem
async function deleteProblem(req, res){
    return (
        res.status(StatusCodes.NOT_IMPLEMENTED).json({
            message : "Not implemented"
        })
    )
}

// update problem
async function updateProblem(req, res){
    return (
        res.status(StatusCodes.NOT_IMPLEMENTED).json({
            message : "Not implemented"
        })
    )
}

module.exports = {
    addProblem,
    getProblems,
    getProblem,
    deleteProblem,
    updateProblem,
    pingProblemController
}