import {When} from "cucumber"

When(/^the user enter "(.*)" into the search bar$/, keyword => {
    $(".gLFyf.gsfi").waitForDisplayed(5000);
    $(".gLFyf.gsfi").click();
    $(".gLFyf.gsfi").setValue("cucumber");
    $(".gNO89b").waitForDisplayed(5000);
    $(".gNO89b").click();

});
