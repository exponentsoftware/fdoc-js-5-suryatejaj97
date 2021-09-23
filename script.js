async function fetchCountries() {
    const res = await fetch("https://restcountries.com/v3/all")
    const data = res.json()
    console.log(data)
}

fetchCountries()

// async function fetchUsers() {
//     const res = await fetch("https://api.github.com/users")
//     console.log(res.json())
// }

// fetchUsers()