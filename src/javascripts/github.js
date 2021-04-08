export function getGitHubUsers() {
    fetch("https://api.github.com/users?since=100").then(
        function(response) {
            if(!response.ok) {
                throw Error('Call failed')
            }
            return response.json()
        }
    ).then(
        function(users) {
            for(let u of users) {
                let cardHTML = `
                <div class="card" style="width: 18rem;">
                    <img src="${u.avatar_url}" class="card-img-top" alt="${u.login}">
                    <div class="card-body">
                        <h5 class="card-title">${u.login}</h5>
                        <p class="card-text">${u.html_url}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                `

                let cardCol = document.createElement('div')
                cardCol.classList.add('col')
                cardCol.innerHTML = cardHTML
                document.querySelector('.github').appendChild(cardCol)
            }
        }
    ).catch(
        function(err) {
            console.log(err)
            document.querySelector('.github').innerHTML = `
            <p>Failed to get the requested data; something went wrong!!!</p>
            `
        }
    )
}