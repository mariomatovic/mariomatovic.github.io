/**
 * Google Apps Script Web App endpoint for the private "Mental training" sheet.
 * Sheet setup: A1 = Feedback.
 */
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Mental training');
  if (!sheet) throw new Error('Sheet "Mental training" not found.');

  const feedback = e && e.parameter ? String(e.parameter.feedback || '').trim() : '';
  if (!feedback) return ContentService.createTextOutput('Missing feedback.');

  sheet.appendRow([feedback]);
  return ContentService.createTextOutput('OK');
}

function doGet() {
  return ContentService.createTextOutput('Feedback endpoint is running.');
}
