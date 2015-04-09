/**
 * Created by wfsovereign on 15-4-8.
 */

function Teacher(){

}

Teacher.prototype.scoreSingleOption = function (studentAnswer,correctAnswer) {
    var score = 0;
    for(var i = 0; i < correctAnswer.length; i++) {
      if(correctAnswer[i] === studentAnswer[i]){
          score++;
      }
    }
    return score;
};

Teacher.prototype.scoreMultipleOption = function (studentAnswer,correctAnswer) {
    var score = 0;
    var wrongChoiceLength ;
    for(var j = 0; j < correctAnswer.length; j++) {
        wrongChoiceLength = _.difference(studentAnswer[j], correctAnswer[j]).length;
        if(wrongChoiceLength == 0){
            score++;
        }
    }
    return score;
};

Teacher.prototype._compareContent = function (studentAnswer, correctAnswer) {
    var singleFillingInBlankProblemScore = 0,problemResult;

    _(studentAnswer).each(function (stuItem){
        stuItem =stuItem.trim();
        problemResult = _(correctAnswer).find(function (corItem){

            return stuItem == corItem;
        });
        if(problemResult != undefined){
            singleFillingInBlankProblemScore++;
            correctAnswer.splice(_(correctAnswer).indexOf(stuItem),1);
        }
    });

    return singleFillingInBlankProblemScore;
};

Teacher.prototype.scoreFillingInBlank = function (studentAnswer,correctAnswer) {
    var score = 0;
    for(var k = 0; k < correctAnswer.length; k++) {
        score += this._compareContent(studentAnswer[k],correctAnswer[k]);
    }

    return score;
};

Teacher.prototype.scoreSingleShortProblem = function (studentAnswer,correctAnswer) {
    var score = 0;
    if(studentAnswer == correctAnswer.standardAnswer){
        score =5;
    }

    return score;
};






