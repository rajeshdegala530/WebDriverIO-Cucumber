import {Given} from "cucumber";
import HomePage from "../../pages/HomePage";
import goToURL from "../../support/actions/goToURL"


Given("a web browser is at the Google home page",()=>{

    goToURL(HomePage.url);
});