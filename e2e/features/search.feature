Feature: search shows Editorial and generic search results

    Scenario: verify editorial search result section
        Given I am on the home page
        When I search sky in the search bar
        Then I should see editorial section