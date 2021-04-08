//That trigger which Updates the File which is called : EmailsFile of Current Account:
function DailyMail_Java_Developer_Mohamed_MailTrigger(){
  var emails = (DriveApp.getFileById(emailsFileId).getBlob().getDataAsString())
  .match(/[.\w-]+@([\w-]+\.)+[\w-]+/g);
  emails = emails ? emails : []; 
  //------------ get All Threads 
  var threads = GmailApp.getInboxThreads(/*Number(AceAlBastoni.getStart())*/0,500);
  console.log(threads.length);
  var allMessages = AceAlBastoni.getNewAllMessages(threads);
  allMessages = ((allMessages.toString()).match(/[.\w-]+@([\w-]+\.)+[\w-]+/g));
  emails = emails.concat(allMessages);
  emails= emails.map(function(item){try{return item.toLowerCase();}catch(e){}});
  emails= emails.filter(e => AceAlBastoni.isValidEmail(e));
  AceAlBastoni.rename(emailsFileId,"Emails"+AceAlBastoni.getNamePostfix());
  AceAlBastoni.setContent(AceAlBastoni.unique(emails),emailsFileId); 
}
//█████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████	
//update_ObjectStation_Trigger2
//written on:  4 jan 2021
function Update_ObjectStation_Trigger() {
  var threads = GmailApp.getInboxThreads(0, 500);
  var jsonFromEmails = AceAlBastoni.getNewAllMessagesss_Local(threads,account);
  var jsonFromFile =AceAlBastoni.getJsonFromFileOnDrive(objectStationID);
  var newJson = { ...jsonFromEmails, ...jsonFromFile }
  AceAlBastoni.setJsonObjectOnFileOnDrive(newJson, objectStationID);
  var emailsCount = Object.keys(newJson).length;
  var name = "ObjectStation" + AceAlBastoni.getNamePostfix() + " _" + emailsCount;
  AceAlBastoni.rename(objectStationID, name);
 }

//█████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████	
////written on:  4 jan 2021
//not used 
function sortEmails_Trigger() {
  var Emails_Object_SortedBy = '1WAvYxu72DcOulMBDcMB3Wml1xO4GMzRV';
  //var sortionType = Crateriea.emailAddress;
  var values = Object.values(Crateriea);
  var random = Math.floor(Math.random() * values.length);
  var sortionType =values[random];// Crateriea.timestamp;

  var theJson = AceAlBastoni.getJsonFromFileOnDrive(objectStationID)
  var emailsArray = AceAlBastoni.getListOfEmailsObjectsSortedBy(theJson, sortionType);
  var emailsCount = emailsArray.length;
  AceAlBastoni.setJsonObjectOnFileOnDrive({ "emails": emailsArray }, Emails_Object_SortedBy)
  var name = "Sorted Emails By: SortedBy_ " + sortionType + " " + AceAlBastoni.getNamePostfix() + " _" + emailsCount;
  AceAlBastoni.rename(Emails_Object_SortedBy, name);
}
