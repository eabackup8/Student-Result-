function doGet(e){
  return HtmlService.createTemplateFromFile("index")
                     .evaluate()
                     .setTitle("Mohammad Rameez Imdad");
}
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function sub(v){
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Sheet1");
  var  flag  =  1 ;
  var lr = sheet.getLastRow();
      for(var i = 2;i <= lr;i++){
  if(v.roll == sheet.getRange(i, 1).getValue()){
      flag = 0;
var tt = sheet.getRange(1, 2).getValue(); 
var h1 = sheet.getRange(1, 3).getValue();  
var h2 = sheet.getRange(1, 5).getValue();  
var h3 = sheet.getRange(1, 6).getValue();  
var h4 = sheet.getRange(1, 7).getValue();  
var h5 = sheet.getRange(1, 8).getValue();  
var h6 = sheet.getRange(1, 9).getValue();  
var h7 = sheet.getRange(1, 10).getValue();  
var b1 = sheet.getRange(i, 2).getValue();
var b2 = sheet.getRange(i, 3).getValue();  
var b3 = sheet.getRange(i, 4).getValue();  
var m1 = sheet.getRange(i, 5).getValue();  
var m2 = sheet.getRange(i, 6).getValue();  
var m3 = sheet.getRange(i, 7).getValue();  
var m4 = sheet.getRange(i, 8).getValue();  
var m5 = sheet.getRange(i, 9).getValue();  
var m6 = sheet.getRange(i, 10).getValue();

  var lo = "https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png";
  var data ='<table class="tg"><thead><tr><th class="tg-0pky"><img src='+lo+' height="50px"width="50px"></th><th class="tg-0pky" colspan="5"><h4>'+tt+'</h4></th></tr></thead><tbody><tr><td class="tg-0pky">Roll No.</td><td class="tg-0pky">'+v.roll+'</td><td class="tg-0pky">Name:</td><td class="tg-0pky"colspan="3">'+b1+'</td></tr><tr><td class="tg-0pky"colspan="6">Results:</td></tr><tr><td class="tg-0pky">slr.</td><td class="tg-0pky">Competition</td><td class="tg-0pky">Maximum score</td><td class="tg-0pky">CutOff Score</td><td class="tg-0pky">Obtained Score</td><td class="tg-0pky">Remarks</td></tr><tr><td class="tg-0pky">1.</td><td class="tg-0pky">Reasoning</td><td class="tg-0pky">'+h2+'</td><td class="tg-0pky">11.50</td><td class="tg-0pky">'+m1+'</td><td class="tg-0pky">qualified</td></tr><tr><td class="tg-0pky">2.</td><td class="tg-0pky">General awareness</td><td class="tg-0pky">'+h3+'</td><td class="tg-0pky">17.10</td><td class="tg-0pky">'+m2+'</td><td class="tg-0pky">qualified</td></tr><tr><td class="tg-0pky">3.</td><td class="tg-0pky">Computer knowledge</td><td class="tg-0pky">'+h4+'</td><td class="tg-0pky">29.20</td><td class="tg-0pky">'+m3+'</td><td class="tg-0pky">qualified</td></tr><tr><td class="tg-0pky">4.</td><td class="tg-0pky">English</td><td class="tg-0pky">'+h5+'</td><td class="tg-0pky">23.50</td><td class="tg-0pky">'+m4+'</td><td class="tg-0pky">not qualified</td></tr><tr><td class="tg-0pky">5.</td><td class="tg-0pky">Hindi</td><td class="tg-0pky">'+h6+'</td><td class="tg-0pky">-</td><td class="tg-0pky">'+m5+'</td><td class="tg-0pky">-</td></tr><tr><td class="tg-0pky">6.</td><td class="tg-0pky">Quantitative aptitude</td><td class="tg-0pky">'+h7+'</td><td class="tg-0pky">30.10</td><td class="tg-0pky">'+m6+'</td><td class="tg-0pky">qualified</td></tr></tbody><tfooter><tr><td class="tg-0pky"colspan="2">Total</td><td class="tg-0pky">'+h1+'</td><td class="tg-0pky">111.4</td><td class="tg-0pky">'+b2+'</td><td class="tg-0pky"></td></tr></tfooter></table>*Not secured cutoff score of English language, whereever necessary.';
  
  return data;
    }
   }
     if(flag==1){
  var data ="Roll Number not found.";
      return data;
    } 
    };
