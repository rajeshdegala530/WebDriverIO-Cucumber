/**
 * Search for a keyword
 * @param {string} keyword keyword to search for 
 * @param {object} inputField WebdriverIO input field element
 * @param {object} submitButton WebdriverIO submit button element
 * 
 */

 export default (keyword, inputField, submitButton) =>{

    inputField.waitForDispalyed(5000);
    inputField.click();
    inputField.setValue(keyword);
    submitButton.waitForDispalyed(5000);
    submitButton.click();
 };