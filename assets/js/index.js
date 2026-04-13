    fetch("https://api.github.com/users/danielcoons/repos")
      .then(res => res.json())
      .then(repos => {
        const container = document.getElementById("repos");

        repos
          .filter(r => !r.fork)
          .forEach(repo => {

            const el = document.createElement("div");
            el.className = "card";

            el.innerHTML = `
              <h3>${repo.name}</h3>
              <p>${repo.description || "No description provided."}</p>
              <a href="${repo.html_url}">View Repo →</a>
            `;

            container.appendChild(el);
          });
      });