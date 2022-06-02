const linksSocialMedia = {
  github: 'maik-emanoel',
  youtube: 'UCVm1sKpU57J0cOj5--PeFAA',
  facebook: 'maikemanoel',
  instagram: 'maik.emanoel',
  twitter: 'jakelinytec'
}

function changeSocialMediaLinks() {
  for(let li of socialLinks.children){
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`

  }
}

// i = i + 1
// i++


// ser humano 123456789
// computador 0123456789

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`
  
  fetch(url)
   .then(response => response.json())
   .then(data => {
     userName.textContent = data.name
     userBio.textContent = data.bio
     userLink.href = data.html_url
     userImage.src = data.avatar_url
     userLogin.textContent = data.login
   })
}

getGitHubProfileInfos()






// ARROW FUNCTIONS
function nomedafuncao(argurmentos){
  //code
}

argumento => {

}