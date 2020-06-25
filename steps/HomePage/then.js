import {Then} from "cucumber";
import assert from "assert";
import verifyLinksContain from "../../support/assertions/verifyLinksContain"

Then (/^search results related to "(.*)" will be displayed$/,keyword =>{

    //const links = $$(".LC20lb");
    verifyLinksContain(keyword);

});