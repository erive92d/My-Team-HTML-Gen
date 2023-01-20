const whichRole = (data) => { 
  let html = "";
  for (let i = 0; i < data.length; i++) {
    if (data[i].getRole() === "Manager") { 
      let role = data[i];
      html += ` <div class="container manager">
      <div class="title">${role.getRole()}</div>
      <div class="info-card">
        <div class="info name">Name: ${role.name} </div>
        <div class="info id">ID: ${role.id}</div>
        <div class="info email">Email: <a href="" target="__blank">${
          role.email
        }</a></div>
        <div class="info office">Office: ${role.officenum}</div>
      </div>
    </div>`;
    }
    if (data[i].getRole() === "Engineer") {
      let role = data[i];
      html += ` <div class="container engineer">
        <div class="title">${role.getRole()}</div>
        <div class="info-card">
        <div class="info name">Name: ${role.name} </div>
        <div class="info id">ID: ${role.id}</div>
        <div class="info email">Email: <a href="mailto:${role.email}" target="__blank">${
          role.email
        }</a></div>
        <div class="info github">Github: <a href="https://github.com/${role.github}" target="__blank">${role.github}</a></div>
        </div>
      </div>`;
    }
    if (data[i].getRole() === "Intern") {
      let role = data[i];
      html += ` <div class="container intern">
        <div class="title">${role.getRole()}</div>
        <div class="info-card">
        <div class="info name">Name: ${role.name} </div>
        <div class="info id">ID: ${role.id}</div>
        <div class="info email">Email: <a href="" target="__blank">${
          role.email
        }</a></div>
        <div class="info school">School: ${role.school}</div>
        </div>
      </div>`;
    }
  }
  let fullHTML = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="stylesheet" href="./dist/style.css"/>
          <title>My Team</title>
      </head>
      <body>
          <nav> <h1>My Software Development Team</h1></nav>
          <main class="main">${html}
          </main>
      </body>

      <footer>
      <p>Created by Deorren Erive</p>
      <a href="https://github.com/erive92d" target="__blank">Github</a>
      <a href="https://www.linkedin.com/in/deorren-erive-1aa581236/" target="__blank">LinkedIn</a>
      
    </footer>
      </html>
      `;
  return fullHTML;
};

module.exports = whichRole;
