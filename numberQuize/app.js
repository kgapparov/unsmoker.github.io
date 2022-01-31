var express = require('express');
var app = express();
var users = new Map();
app.set("view engine", "pug")

var userModule = (function () {
    var questions = [
        "5, 6, 7, 8 ",
        "1, 1, 2, 3, 5", 
        "1, 4, 9, 16, 25",
        "2, 3, 5, 7, 11" , 
        "1, 2, 4, 8, 16"
    ]; 
    var answers = ["9", "8", "36", "13", "32"];

    let userDB = new Map();
    let  createUser1 = function (){
        let id = Math.floor(Math.random()*100);
        let user = {
            "id" : id, 
            "score": 0
        }
        userDB.set(String(user.id), user.score);
        return user;
    };
    var updateUser = function (id, questionID, answer, score) {
        let sc = parseInt(score);
        if (answers[parseInt(questionID)] == answer) {
            sc = sc+1; 
            users.set(id, String(sc));
        } 
        return {
            "id" : id,
            "score": sc
        }
    }
    return {
        createUser : function () {
            let user = createUser1();
            return user;
        },
        updateUser : function (id, qid, ans, score) {
            return updateUser(id, qid, ans, score);
        },
        userDB : userDB,
        questions : questions,
        answers : answers
    }
})();

app.get("/", function(req, res){
    res.render('quize', {
        user: userModule.createUser(), 
        question : userModule.questions[0], 
        questionID : 0
    });
    res.end();
});

app.get("/quize", express.urlencoded({extended: false}), function(req, res){
    let params = req.query;
    req.body = req.query.score;
    //is it last page? 
    if (params.questionID == 4) {
        res.render('result', {
            score: params.score
        });
        res.end();
    } else {
        res.render('quize', {
            user: userModule.updateUser(params.id, params.questionID, params.answer, params.score), 
            question : userModule.questions[parseInt(params.questionID)+1], 
            questionID : parseInt(params.questionID)+1
        });
        res.end();
    }
    
});

var server = app.listen(8080, function(){
    console.log("Node server is started")
})