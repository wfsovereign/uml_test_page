function getFillingInBlank() {
    var fillingInBlank = {};
    fillingInBlank.one = $('#fillingInBlank1').val();
    fillingInBlank.two = [];
    fillingInBlank.two.push($('#fillingInBlank2-1').val());
    fillingInBlank.two.push($('#fillingInBlank2-2').val());
    fillingInBlank.two.push($('#fillingInBlank2-3').val());
    return fillingInBlank;
}

function getSingleOption() {
    var singleOption = [];
    singleOption.push($("input[name='two1']:checked").val());
    singleOption.push($("input[name='two2']:checked").val());
    return singleOption;
}

function getMultipleOption() {
    var multipleOption = {
        one:[],
        two:[]
    };
    $("input[name='three1']:checked").each(function () {
        multipleOption.one.push(this.value);
     });
    $("input[name='three2']:checked").each(function () {
        multipleOption.two.push(this.value);
     });

    return multipleOption;
}


function getJudgeResult() {
    var judgeResult = [];
    judgeResult.push($("input[name='judge1']:checked").val());
    judgeResult.push($("input[name='judge2']:checked").val());
    return judgeResult;
}

function getStudentInfo() {
    var studentInfo = {};
    studentInfo.name = $('#studentName').val();
    studentInfo.id = $('#studentId').val();
    studentInfo.class = $('#studentClass').val();
    return studentInfo
}

function setSessionStorageItem(name, data) {
    for(var i=0;i<name.length;i++){
        sessionStorage.setItem(name[i],Json.stringify(data[i]));
    }
}


$(function () {
    $("#submit").on('click', function () {
        var studentInfo = getStudentInfo();
        var fillingInBlank = getFillingInBlank();
        var singleOption = getSingleOption();
        var multipleOption = getMultipleOption();
        var judgeResult = getJudgeResult();

        var pageInfo = [studentInfo,fillingInBlank,singleOption,multipleOption,judgeResult];
        var storageNameArray = ["studentInfo","fillingInBlank","singleOption","multipleOption","judgeResult"];

        setSessionStorageItem(storageNameArray,pageInfo);

    })
});


