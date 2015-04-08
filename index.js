/**
 * Created by wfsovereign on 15-4-7.
 */

$(function () {
   $("#submit").on('click',function (){
       console.log("----");

     $("input[name='three1']:checked").each(function (){
               console.log(this.value);
       });
       console.log($("input[name='three2']:checked").val());
       //console.log($("#fillingInBlank1").val());
       console.log("----");
       console.log($("#studentClass").width());
   })
});