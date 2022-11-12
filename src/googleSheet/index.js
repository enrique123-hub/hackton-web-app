const { google, speech_v1p1beta1 } = require("googleapis");


async function getInfo(){
    const auth = new google.auth.GoogleAuth({
        keyFile: "credentials.json",
        scopes: "https://www.googleapis.com/auth/spreadsheets",
      });
    
    // Create client instance for auth
    const client = await auth.getClient();
    
    // Instance of Google Sheets API
    const googleSheets = google.sheets({ version: "v4", auth: client });

    const spreadsheetId = "1bGvoqXbhk66iEtWnPZdRPjQGaqxXh_s7alinRp_bwm8";

    const metaData = await googleSheets.spreadsheets.get({
        auth,
        spreadsheetId,
    });

    //Get DATA
    const getRows = await googleSheets.spreadsheets.values.get({
        auth,
        spreadsheetId,
        range: "Hoja 1",
    });
    return getRows.data.values;
}



