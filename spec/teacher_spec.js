/**
 * Created by wfsovereign on 15-4-8.
 */

describe("teacher's duty test", function(){
    var teacher;
    var studentAnswer, correctAnswer;
   beforeEach(function (){
       teacher = new Teacher();
   });
    
    it("should output 1 when input student answer and use scoreSingleOption method", function(){
         studentAnswer = ['a','b'];
         correctAnswer = ['a','c'];

        expect(1).toEqual(teacher.scoreSingleOption(studentAnswer,correctAnswer));

    });

    it("should output 2 when input student answer and use scoreSingleOption method", function(){
         studentAnswer = ['a','c'];
         correctAnswer = ['a','c'];

        expect(2).toEqual(teacher.scoreSingleOption(studentAnswer,correctAnswer));

    });

    it("should output 0 when input student answer and use scoreSingleOption method", function(){
         studentAnswer = ['c','b'];
         correctAnswer = ['a','c'];

        expect(0).toEqual(teacher.scoreSingleOption(studentAnswer,correctAnswer));

    });



    it("should output 2 when input student answer and use scoreMultipleOption method", function(){
         studentAnswer = [['a','b','c'],['a','b','d']];
         correctAnswer = [['a','b','c'],['a','b','d']];

        expect(2).toEqual(teacher.scoreMultipleOption(studentAnswer,correctAnswer));

    });

    it("should output 1 when input student answer and use scoreMultipleOption method", function(){
        studentAnswer = [['a','b','c'],['a','b','d']];
        correctAnswer = [['a','b','c'],['a','b','a']];

        expect(1).toEqual(teacher.scoreMultipleOption(studentAnswer,correctAnswer));

    });

    it("should output 0 when input student answer and use scoreMultipleOption method", function(){
        studentAnswer = [['a','b','c'],['a','b','d']];
        correctAnswer = [['a','b','b'],['a','b','a']];

        expect(0).toEqual(teacher.scoreMultipleOption(studentAnswer,correctAnswer));

    });

    xit("should output 0 when input null of student answer and use scoreMultipleOption method", function(){
        studentAnswer = [[],[]];
        correctAnswer = [['a','b','b'],['a','b','a']];

        expect(0).toEqual(teacher.scoreMultipleOption(studentAnswer,correctAnswer));
    });



    it("should output 2 when input student judge problem answer", function(){
        studentAnswer = ['true','false'];
        correctAnswer = ['true','false'];

        expect(2).toEqual(teacher.scoreSingleOption(studentAnswer,correctAnswer));

    });

    it("should output 4 when input student filling in blank answer and the same sequence", function(){
        studentAnswer = [["统一建模语言"],["封装","继承","多态"]];
        correctAnswer = [["统一建模语言"],["封装","继承","多态"]];

        expect(4).toEqual(teacher.scoreFillingInBlank(studentAnswer,correctAnswer));

    });

    it("should output 3 when input student filling in blank answer and the same sequence", function(){
        studentAnswer = [["统一建模语言"],["封装","继承","好看"]];
        correctAnswer = [["统一建模语言"],["封装","继承","多态"]];

        expect(3).toEqual(teacher.scoreFillingInBlank(studentAnswer,correctAnswer));
    });

    it("should output 4 when input student filling in blank answer and not the same sequence", function(){
        studentAnswer = [["统一建模语言"],["封装","多态","继承"]];
        correctAnswer = [["统一建模语言"],["封装","继承","多态"]];

        expect(4).toEqual(teacher.scoreFillingInBlank(studentAnswer,correctAnswer));
    });

    it("should output 3 when input student filling in blank answer and not the same sequence and have repeated " +
    "answer in student answer", function(){
        studentAnswer = [["统一建模语言"],["封装","封装","继承"]];
        correctAnswer = [["统一建模语言"],["封装","继承","多态"]];

        expect(3).toEqual(teacher.scoreFillingInBlank(studentAnswer,correctAnswer));
    });

    it("should output 1 when input student filling in blank answer and not the same sequence and have repeated " +
    "answer in student answer", function(){
        studentAnswer = [["统一建模语言"],["统一建模语言","统一建模语言","统一建模语言"]];
        correctAnswer = [["统一建模语言"],["封装","继承","多态"]];

        expect(1).toEqual(teacher.scoreFillingInBlank(studentAnswer,correctAnswer));
    });

    it("should output 4 when input student filling in blank answer and have space in student answer" , function(){
        studentAnswer = [[" 统一建模语言"],[" 封装","多态"," 继承"]];
        correctAnswer = [["统一建模语言"],["封装","继承","多态"]];

        expect(4).toEqual(teacher.scoreFillingInBlank(studentAnswer,correctAnswer));
    });

    it("should output 5 when input correct shortAnswer answer of student ", function(){
        studentAnswer = "模型是对现实世界的简化和抽象,模型是对所研究的系统、过程、事物或概念的一种表达形式。" +
        "可以是物理实体;可以是某种图形;或者是一种数学表达式。";
        correctAnswer = {
            standardAnswer:"模型是对现实世界的简化和抽象,模型是对所研究的系统、过程、事物或概念的一种表达形式。" +
            "可以是物理实体;可以是某种图形;或者是一种数学表达式。",
            keyWord:["数学表达式","物理实体","图形","现实世界","表达形式","系统","过程","概念"]
        };

        expect(5).toEqual(teacher.scoreSingleShortProblem(studentAnswer,correctAnswer));

    });

















        
});