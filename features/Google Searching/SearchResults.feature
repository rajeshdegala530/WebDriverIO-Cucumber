Feature: Google Searching

Scenario: Search from the search bar products search results
    Given a web browser is at the Google home page
    When the user enter "cucumber" into the search bar
    Then search results related to "cucumber" will be displayed
    
