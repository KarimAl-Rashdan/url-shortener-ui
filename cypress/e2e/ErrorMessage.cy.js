describe('Error Handling', () => {
  it("should display an error for a 500 status code" , () => {
    cy
    .intercept("GET", "http://localhost:3001/api/v1/urls", {statusCode: 500})
    .visit("http://localhost:3000/")
    .get("header").contains("Something went wrong. Try again later!")
  })
})