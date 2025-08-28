// Going to the Teacher site page
function teacherSite() {
    window.open("../teacher-site.html", "_self");
}
function handleClientLoad() {
    gapi.auth.init({
      clientId: '739632382664-70jlgkcmmqb9a2s6bc91uvvf3c1amng6.apps.googleusercontent.com',
      scope: 'https://www.googleapis.com/auth/spreadsheets.readonly',
      discoveryDocs: ['https://sheets.googleapis.com/$discovery/v4/rest'],
    });
  }
  
  function authorize() {
    gapi.auth.signIn({
      callback: handleAuthorization
    });
  }
  
  function handleAuthorization(authResult) {
    if (authResult && authResult.access_token) {
      // Use the access token to access the spreadsheet
      loadSpreadsheetData();
    } else {
      console.error('Authorization failed');
    }
  }
  function loadSpreadsheetData() {
    var spreadsheetId = '16C0K-zUxUsjQYtuitCqF8B7_cXA8xRT6U7Evo3uQiXs';
    var range = 'Sheet!A1:C180'; // Adjust the range as needed
  
    gapi.client.sheets.spreadsheets.values.get({
      spreadsheetId: spreadsheetId,
      range: range
    }).then(function(response) {
      if (response.result.values) {
        // Process the retrieved data
        console.log(response.result.values);
      } else {
        console.error('No data found');
      }
    }, function(error) {
      console.error('Error retrieving data:', error.message);
    });
  }
  function redirect(){
    window.open("/h/l/table.html", "_self");

  }
  function go(){
    var uid = document.getElementById('uid').value;
    if(uid.length >= 10){
    window.open("/Html-Files/Site-Pages/student-site.html", "_self");
    }
    else{
      alert("Please enter a valid Roll number.");
    }

  }
