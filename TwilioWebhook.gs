function doGet(e){
  //ScriptProperties.setProperty('eventObject', e);


  // this worked
  var a = String(JSON.stringify(e));
  var b = JSON.parse(a);
  var test = b.parameters.From[0] //Will get the number that a message was sent from
  ScriptProperties.setProperty('test', test)  
  
  //Below this works
  ScriptProperties.setProperty('JSON', JSON.stringify(e));
  var jsonObject = JSON.parse(ScriptProperties.getProperty('JSON'));
  var incomingNumber = jsonObject.parameters.From[0];
  var body = jsonObject.parameters.Body[0];

  if(body == 'password'){
    var result = EnteredPassword();
    return ContentService.createTextOutput(result);
  }
  

  var reply = 'Running a test';
  var textOutput = ContentService.createTextOutput(reply);
  return textOutput
}

function EnteredPassword(){
  return 'you entered password'
}
