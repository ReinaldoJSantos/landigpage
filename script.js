const form = document.getElementById("leadForm");
const msg = document.getElementById("msg");
const btn = document.getElementById("btn");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  btn.innerText = "Enviando...";
  btn.classList.add("loading");

  try {
    const response = await fetch("https://automacao-leads.onrender.com/lead", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome: document.getElementById("nome").value,
        telefone: document.getElementById("telefone").value,
        mensagem: document.getElementById("mensagem").value,
      }),
    });

    if (response.ok) {
      msg.innerText = "✅ Recebemos seu contato! Em breve você será atendido.";
      form.reset();
    } else {
      msg.innerText = "❌ Algo deu errado. Tente novamente.";
    }
  } catch (error) {
    msg.innerText = "❌ Falha na conexão.";
  }

  btn.innerText = "🚀 Quero automatizar meu atendimento";
  btn.classList.remove("loading");
});
