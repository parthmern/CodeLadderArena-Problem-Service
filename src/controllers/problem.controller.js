
// ping on all controllers
async function pingProblemController(req, res){
    return(
        res.json({
            message : "pingProblemController is up"
        })
    )
}


// adding problem
async function addProblem(req, res){
    console.log("addProblem");
}

// get all problems
async function getProblems(req, res){

}

// get single problems
async function getProblem(req, res){

}

// delete single problem
async function deleteProblem(req, res){

}

// update problem
async function updateProblem(req, res){

}

module.exports = {
    addProblem,
    getProblems,
    getProblem,
    deleteProblem,
    updateProblem,
    pingProblemController
}