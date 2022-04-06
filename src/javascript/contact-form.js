// AJAX
let form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      let status = document.getElementById("my-form-status");
      let data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          status.innerHTML = "Merci de votre message";
          status.style.color = "green";
          status.style.marginTop = "20px";
          form.reset()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
              status.innerHTML = "Oops! Il y a eu un problème lors de l'envoi de votre message"
            }
          })
        }
      }).catch(error => {
        status.innerHTML = "Oops! Il y a eu un problème lors de l'envoi de votre message"
      });
    }
    form.addEventListener("submit", handleSubmit)

