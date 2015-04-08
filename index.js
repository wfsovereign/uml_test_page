
function PageSniffer(){

}

PageSniffer.prototype.getFillingInBlank = function (){
    var fillingInBlank = {};
    fillingInBlank.one = $('#fillingInBlank1').val();
    fillingInBlank.two = [];
    fillingInBlank.two.push($('#fillingInBlank2-1').val());
    fillingInBlank.two.push($('#fillingInBlank2-2').val());
    fillingInBlank.two.push($('#fillingInBlank2-3').val());
    return fillingInBlank;
};

PageSniffer.prototype.getSingleOption = function (){
    var singleOption = [];
    singleOption.push($("input[name='two1']:checked").val());
    singleOption.push($("input[name='two2']:checked").val());
    return singleOption;
};

PageSniffer.prototype.getMultipleOption = function (){
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
};


PageSniffer.prototype.getJudgeResult = function (){
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


function setSessionStorageItem(name, data) {
    for(var i=0;i<name.length;i++){
        sessionStorage.setItem(name[i],JSON.stringify(data[i]));
    }
}



var pageSniffer = new PageSniffer();


$(function () {
    $("#submit").on('click', function () {
        var studentInfo = pageSniffer.getStudentInfo();
        var fillingInBlank = pageSniffer.getFillingInBlank();
        var singleOption = pageSniffer.getSingleOption();
        var multipleOption = pageSniffer.getMultipleOption();
        var judgeResult = pageSniffer.getJudgeResult();

        var pageInfo = [studentInfo,fillingInBlank,singleOption,multipleOption,judgeResult];
        var storageNameArray = ["studentInfo","fillingInBlank","singleOption","multipleOption","judgeResult"];

        setSessionStorageItem(storageNameArray,pageInfo);

    })
});


