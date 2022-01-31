// exports.myModule 
// module;
// var module = (function () {
//     var questions = [
//         "5, 6, 7, 8 ",
//         "1, 1, 2, 3, 5", 
//         "1, 4, 9, 16, 25",
//         "2, 3, 5, 7, 11" , 
//         "1, 2, 4, 8, 16"
//     ]; 
//     var answers = ["9", "8", "36", "13", "32"];

//     let userDB = new Map();
//     let  createUser1 = function (){
//         let id = Math.floor(Math.random()*100);
//         let user = {
//             "id" : id, 
//             "score": 0
//         }
//         userDB.set(String(user.id), user.score);
//         return user;
//     };
//     var updateUser = function (id, questionID, answer, score) {
//         let sc = parseInt(score);
//         if (answers[parseInt(questionID)] == answer) {
//             sc = sc+1; 
//             users.set(id, string(sc));
//         } 
//         return {
//             "id" : id,
//             "score": sc
//         }
//     }
//     return {
//         createUser : function () {
//             let user = createUser1();
//             return user;
//         },
//         updateUser : function (id, qid, ans, score) {
//             updateUser(id, qid, ans, score);
//         },
//         userDB : userDB
//     }
// })();