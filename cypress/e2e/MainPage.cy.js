describe('URL Flow', () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/v1/urls", {fixture: "urls"})
    cy.visit("http://localhost:3000/")
  })
  it('should display page title and urls', () => {
    cy.get("h1").should("be.visible").contains("URL Shortener")
    cy.get(".urlWrapper").children().should("have.length", 2)
    cy.get(".url > h3").first().contains("Awesome photo")
    cy.get(".url > a").first().contains("http://localhost:3001/useshorturl/1")
    cy.get(".url > p").first().contains("https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80")
    cy.get(".url > h3").last().contains("Cat website")
    cy.get(".url > a").last().contains("http://localhost:3001/useshorturl/2")
    cy.get(".url > p").last().contains("https://en.wikipedia.org/wiki/Cat")

  })
  it("should display a form", () => {
    cy.get("form").should("be.visible")
    cy.get('input[name="title"]').should("be.visible")
    cy.get('input[name="url"]').should("be.visible")
    cy.get('button').should("be.visible").contains("Shorten Please")
  })
  it("should be able to fill out form", () => {
    cy
    .get("form > .titleInput").type("Walrus Website").should("have.value", "Walrus Website")
    .get("form > .urlInput").type("https://en.wikipedia.org/wiki/Walrus").should("have.value", "https://en.wikipedia.org/wiki/Walrus")
  })
  it.only("should be able to submit the form", () => {
    cy
    .get("form > .titleInput").type("Walrus Website").should("have.value", "Walrus Website")
    .get("form > .urlInput").type("https://en.wikipedia.org/wiki/Walrus").should("have.value", "https://en.wikipedia.org/wiki/Walrus")
    .get("form > button").click()
    cy.intercept("GET", "http://localhost:3001/api/v1/urls", {fixture: "post"})
    .get(".urlWrapper").children().should("have.length", 3)
    .get(".url > h3").last().contains("Walrus Website")
  })
  it("should display error when form is submitted incpmplete", () => {
    cy
    .get("form > .titleInput").type("Dogs").should("have.value", "Dogs")
    .get("form > button").click()
    .get("h2").contains("Please fill out both inputs")
  })
})