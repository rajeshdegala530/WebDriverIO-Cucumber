import {Then} from "cucumber"
import assert from "assert"

Then (/^search results related to "(.*)" will be displayed$/,keyword =>{

    const links = $$(".LC20lb");
    links.forEach(link =>{
        const linkText = link.getText().toLowerCase();

        if (linkText){
            assert(
                linkText.includes(keyword),
                'Link text does not include ${keyword}'
            )
        }
    })

});