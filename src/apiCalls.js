export const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
      .then((response) => {
        if(!response.ok) {
          throw new Error("Something went wrong. Try again later!")
        } else {
          return response.json()
        }
      })
}
