import {Given} from "cucumber";
import goToURL from "../../support/actions/goToURL"

Given("a web browser is at the Google home page",()=>{

    goToURL("/")
});