var testRemoveMe = '1ADqIx3NK4YO1EfKrjuj2qUEpJDAbqYPR';
var destanation = '1AykqcOmKN6BqVIOoG5YqMyQtZkbeeYtf';
function myFunctgfhhfion() {

console.log(AceAlBastoni.getEmailsFromTo(new Date("2021/1/1"),new Date("2021/1/10"),objectStationID));
return;

    /*var JSONFeed = JSON.parse(DriveApp.getFileById(destanation).getBlob().getDataAsString());
    var keys = [];
    keys = Object.keys(JSONFeed);
    keys = keys.map(key => { return { [key]: JSONFeed[key] } })*/
    //console.log(//keys[0].emailAddress)
    /*
    keys = keys.sort(
    function(a,b){
    console.log( Object.keys(Object(keys)[0])[0])
    if(a.emailAddress < b.emailAddress) { return -1; }
    if(a.emailAddress > b.emailAddress) { return 1; }
    return 0;
    }
    //function(a,b){return a.emailAddress.localeCompare(b.emailAddress);}
    // (a, b) => (a.emailAddress > b.emailAddress) ? 1 : -1
    )
    AceAlBastoni.setContent(keys.map(item => JSON.stringify(item)),testRemoveMe)
    */
    console.log("hello");
    var threads = GmailApp.getInboxThreads(0, 5);
    var theJson = AceAlBastoni.getNewAllMessagesss_Local_(threads,account);
    var crateriea = 'emailAddress';
    var theJsonarr = (Object.keys(theJson)).sort(function (a, b) { return (a[crateriea] < b[crateriea]) ? -1 : (a[crateriea] > b[crateriea]) ? 1 : 0; })
    var tt = {};
    var newtheJson = theJsonarr.map(e => {
        tt[e] = theJson[e]
        //newtheJson[e]= theJson[e];
    });
    console.log(tt);
    return;
    var keys = Object.keys(theJson)
    for (var key of keys) {
        JSONFeed[key] = theJson[key];

    }
    console.log((AceAlBastoniAPI.unique(Object.keys(JSONFeed))).length);
    JSONFeed = JSON.stringify(JSONFeed);
    DriveApp.getFileById(testRemoveMe).setContent(JSONFeed);
}

