// homepage_spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe('My HomePage Test', () => {
    it('Test Demo Exists', () => {
        cy.visit('http://localhost:3000/')
        cy.get("a").contains('Test Demo!')
    })
})


describe("Search Form Test" , () => {
    it("Checks Results", () => {
        cy.visit('http://localhost:3000/')
        cy.get("input").type("Hello")
        cy.get("button").click()
    })
})
