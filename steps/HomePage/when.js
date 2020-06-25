import {When} from "cucumber";
import search from "../../support/actions/search"

When(/^the user enter "(.*)" into the search bar$/, keyword => {
search(keyword, $(".gLFyf.gsfi"),$(".gNO89b"));

});
