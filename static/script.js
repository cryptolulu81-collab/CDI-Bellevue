<script>
document.addEventListener("DOMContentLoaded", () => {
    const helper = document.querySelector(".chat-helper");
    const bubble = document.querySelector(".chat-bubble");
    const input = document.getElementById("user-input");
    const sendBtn = document.getElementById("send-btn");
    const messages = document.getElementById("chat-messages");

    // Ouvre / ferme la bulle
    helper.addEventListener("click", () => {
        bubble.style.display = (bubble.style.display === "block") ? "none" : "block";
    });

    // Fonction d'envoi de message
    function sendMessage() {
        const text = input.value.trim();
        if (text === "") return;

        // Ajout du message utilisateur
        messages.innerHTML += `<p><strong>Vous :</strong> ${text}</p>`;
        input.value = "";

        // Scroll automatique en bas
        messages.scrollTop = messages.scrollHeight;

        // Réponse automatique
        setTimeout(() => {
            let reply = "Je ne suis pas sûr de comprendre, mais je suis là pour t’aider !";

            if (text.toLowerCase().includes("livre")) reply = "Tu cherches un livre ? Je peux te montrer ceux de la médiathèque !";
            if (text.toLowerCase().includes("film")) reply = "Tu veux un film ? Je peux t’aider à en trouver.";
            if (text.toLowerCase().includes("musique")) reply = "Ah la musique ! Tu veux une recommandation ?";
            if (text.toLowerCase().includes("bonjour")) reply = "Bonjour à toi ! Ravie de discuter 😊";
            if (text.toLowerCase().includes("aide")) reply = "Je peux t’aider à chercher des livres, films ou musiques.";

            messages.innerHTML += `<p><strong>Assistant :</strong> ${reply}</p>`;
            messages.scrollTop = messages.scrollHeight;
        }, 500);
    }

    sendBtn.addEventListener("click", sendMessage);

    // Envoi avec la touche ENTER
    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") sendMessage();
    });
});

</script>