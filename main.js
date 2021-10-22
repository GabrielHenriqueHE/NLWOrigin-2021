const socialMediaLinks = {
    github: "gabrielhenriquehe",
    instagram: "_gabriel_h_e",
    facebook: "gabrielhenrique.evaristo"
}

function getUserInfo() {
    const userName = document.getElementById('userName')
    const url = `https://api.github.com/users/${socialMediaLinks.github}`
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name
    })
}

getUserInfo()