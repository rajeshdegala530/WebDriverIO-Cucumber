import assert from "assert"

/**
 * Ensure the link text includes keyword
 * @param{Array.Object} links List of WebdriverIO elements
 * @param {string} keyword search keyword
 *
 */

 export default (links, keyword) =>{

    links.forEach(links => {
        const linkText = links.getText().toLowerCase();

        if (linkText){
            assert(
                linkText.includes(keyword),
                'link text does not include ${keyword}'
            );
        }
        
    });

 };