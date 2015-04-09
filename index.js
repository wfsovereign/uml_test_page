function PageSniffer() {

}

PageSniffer.prototype.getFillingInBlank = function () {
    var fillingInBlank = {};
    fillingInBlank.one = [];
    fillingInBlank.one.push($('#fillingInBlank1').val());
    fillingInBlank.two = [];
    fillingInBlank.two.push($('#fillingInBlank2-1').val());
    fillingInBlank.two.push($('#fillingInBlank2-2').val());
    fillingInBlank.two.push($('#fillingInBlank2-3').val());
    return [fillingInBlank.one, fillingInBlank.two];
};

PageSniffer.prototype.getSingleOption = function () {
    var singleOption = [];
    singleOption.push($("input[name='two1']:checked").val());
    singleOption.push($("input[name='two2']:checked").val());
    return singleOption;
};

PageSniffer.prototype.getMultipleOption = function () {
    var multipleOption = {
        one: [],
        two: []
    };
    $("input[name='three1']:checked").each(function () {
        multipleOption.one.push(this.value);
    });
    $("input[name='three2']:checked").each(function () {
        multipleOption.two.push(this.value);
    });

    return [multipleOption.one, multipleOption.two];
};


PageSniffer.prototype.getJudgeResult = function () {
    var judgeResult = [];
    judgeResult.push($("input[name='judge1']:checked").val());
    judgeResult.push($("input[name='judge2']:checked").val());
    return judgeResult;
};

PageSniffer.prototype.getStudentInfo = function () {
    var studentInfo = {};
    studentInfo.name = $('#studentName').val();
    studentInfo.id = $('#studentId').val();
    studentInfo.class = $('#studentClass').val();
    return studentInfo;
};

PageSniffer.prototype.getShortAnswer = function () {

    return $('#shortProblem').val();
};


var pageSniffer = new PageSniffer();

function StorageInfo() {
    this.storageNameArray = [
        "studentInfo",
        "fillingInBlank",
        "singleOption",
        "multipleOption",
        "judgeResult",
        "shortProblem"];
    this.storageStandardAnswer = {
        fillingInBlankAnswer:[["统一建模语言"], ["封装", "继承", "多态"]],
        singleOptionAnswer:['b', 'a'],
        mutipleOptionAnswer:[['a', 'b', 'd'], ['a', 'b', 'c']],
        judgeResultAnswer: ['false', 'true'],
        shortProblem: {
            standardAnswer:"模型是对现实世界的简化和抽象,模型是对所研究的系统、过程、事物或概念的一种表达形式。" +
            "可以是物理实体;可以是某种图形;或者是一种数学表达式。",
            keyWord:["数学表达式","物理实体","图形","现实世界","表达形式","系统","过程","概念"]
        }
    }

}


function getPageScore() {

    var teacher = new Teacher(), storageStandardAnswer = new StorageInfo().storageStandardAnswer,score = 0 ;
    var fillingInBlankAnswer = storageStandardAnswer.fillingInBlankAnswer,
        singleOptionAnswer = storageStandardAnswer.singleOptionAnswer,
        multipleOptionAnswer = storageStandardAnswer.mutipleOptionAnswer,
        judgeResultAnswer = storageStandardAnswer.judgeResultAnswer,
        shortProblem = storageStandardAnswer.shortProblem;
    var storageNameArray = new StorageInfo().storageNameArray;
    storageNameArray.splice(0,1);
    console.log(storageNameArray,'0');
    console.log(singleOptionAnswer,'1');

    score += teacher.scoreFillingInBlank(JSON.parse(sessionStorage.getItem(storageNameArray[0])), fillingInBlankAnswer);
    score += teacher.scoreSingleOption(JSON.parse(sessionStorage.getItem(storageNameArray[1])), singleOptionAnswer);
    score += teacher.scoreMultipleOption(JSON.parse(sessionStorage.getItem(storageNameArray[2])), multipleOptionAnswer);
    score += teacher.scoreSingleOption(JSON.parse(sessionStorage.getItem(storageNameArray[3])), judgeResultAnswer);
    score += teacher.scoreSingleShortProblem(JSON.parse(sessionStorage.getItem(storageNameArray[4])),shortProblem);
    return score;

}




function showScore() {
    $("#score").attr("value", getPageScore());
}




function depositAnswerInfo() {
    var studentInfo = pageSniffer.getStudentInfo();
    var fillingInBlank = pageSniffer.getFillingInBlank();
    var singleOption = pageSniffer.getSingleOption();
    var multipleOption = pageSniffer.getMultipleOption();
    var judgeResult = pageSniffer.getJudgeResult();
    var shortProblem = pageSniffer.getShortAnswer();

    var pageInfo = [studentInfo, fillingInBlank, singleOption, multipleOption, judgeResult,shortProblem];
    var storageNameArray = new StorageInfo().storageNameArray;

    setSessionStorageItem(storageNameArray, pageInfo);

}

function setSessionStorageItem(name, data) {
    for (var i = 0; i < name.length; i++) {
        sessionStorage.setItem(name[i], JSON.stringify(data[i]));
    }
}


function isFinishWork() {
    var storageNameArray = new StorageInfo().storageNameArray,judgeResult = true;
    _(storageNameArray).each(function (item){
        var storageItem = JSON.parse(sessionStorage.getItem(item));
        if(!_.isArray(storageItem)){
            storageItem = _.values(storageItem);
        }
        storageItem.forEach(function (element){
            if(element == '' || element == null || element == []){
                judgeResult = false
            }
            if(judgeResult == false) {
                return false
            }
        });
    });
    return judgeResult;
}

$(function () {
    $("#submit").on('click', function () {
        depositAnswerInfo();
        if(isFinishWork()){
            showScore();
            $(window).scrollTop($("header").offset().top);
        }else{
            alert("请检查您的试卷！！！");
        }
    })
});


