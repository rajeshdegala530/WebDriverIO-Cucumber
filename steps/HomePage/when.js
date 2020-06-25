import {When} from "cucumber";
import googleSearch from "../../support/actions/googleSearch"

When(/^the user enter "(.*)" into the search bar$/, keyword => {
googleSearch(keyword);

});
