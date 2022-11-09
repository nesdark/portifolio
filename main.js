function toggleCollapse(projects) {
  projects.classList.toggle("collapsed")
}

function createProject(title, description) {
  let projectsTag = document.querySelector("#projects ul")
  projectsTag.innerHTML += `
  <li class="card project">
    <a href="https://github.com/nesdark/${title}" target="_blank">
      <h4>
        <img src="assets/folder.svg" alt="Icone de pasta" />
        ${title}
      </h4>
      <p>
        ${description}
      </p>
      <div class="info">
        <ul class="github-info">
          <li>
            <img src="./assets/star.svg" alt="Estrela" />100
          </li>
          <li>
            <img
              src="./assets/git-branch.svg"
              alt="Git Branch"
            />100
          </li>
        </ul>
        <ul class="languages">
          <li>🔴HTML</li>
          <li>🔵CSS</li>
          <li>🟡JavaScript</li>
        </ul>
      </div>
    </a>
  </li>  
  `
}

function createComment(date, title, comment, tags) {
  let createdYearMinusActualYear = new Date().getFullYear() - date
  let posts = document.querySelector("#posts")
  let tagsText = ""

  for (c = 0; c < tags.length; c++) {
    tagsText += `
    <li>${tags[c]}</li>
  `
    console.log(tagsText)
  }

  posts.innerHTML += `
  <div class="post card">
    <img src="./assets/user.png" alt="Foto de Usuário" />
    <div class="container">
      <h3>
        ${title}
      </h3>
      <div class="date">${createdYearMinusActualYear} anos atrás</div>
      <div class="comment">
        ${comment}
      </div>
      <ul class="tags">
      ${tagsText}
      </ul>
    </div>
  </div>`
}

createProject(
  "nlw-esports",
  `Este projeto disponibiliza informações sobre os usuários para os visitantes da página, sendo eles seus interesses e como contatá-lo`
)

createComment(2022, "Olá dev", "XXXXXXX", ["#js", "#css", "#html"])

let currentDelay = 0
let cards = document.querySelectorAll(".card")
for (let c = 0; c < cards.length; c++) {
  cards[c].setAttribute("style", `animation-delay: ${currentDelay}s;`)
  currentDelay += 0.2
}
