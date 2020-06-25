import assert from "assert";
import SearchPage from "../../pages/SearchPage"


/**
 * Ensure the link text includes keyword
 * @param{Array.Object} links List of WebdriverIO elements
 * @param {string} keyword search keyword
 *
 */

 export default keyword =>{

    SearchPage.searchResultsLinks.forEach(links => {
        const linkText = links.getText().toLowerCase();

        if (linkText){
            assert(
                linkText.includes(keyword),
                'Link ${linkText} does not include ${keyword}'
            );
        }
        
    });

 };