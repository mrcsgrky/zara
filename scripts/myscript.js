// Chatbox açma/kapama fonksiyonu
function toggleChat() {
    const chatBox = document.getElementById("chatBox");
    chatBox.style.display = (chatBox.style.display === "flex") ? "none" : "flex";
  }
  
  // Mesaj gönderme fonksiyonu
  function sendMessage() {
    const input = document.getElementById("userInput");
    const message = input.value.trim();
    const chat = document.getElementById("chatMessages");
  
    if (message !== "") {
      const userMsg = document.createElement("p");
      userMsg.innerHTML = "<strong>Sen:</strong> " + message;
      chat.appendChild(userMsg);
      input.value = "";
      chat.scrollTop = chat.scrollHeight;
  
      setTimeout(() => {
        const reply = document.createElement("p");
        reply.innerHTML = "<strong>Destek:</strong> " + getReply(message);
        chat.appendChild(reply);
        chat.scrollTop = chat.scrollHeight;
      }, 700);
    }
  }
  
  // Destek cevabını belirleyen fonksiyon
  function getReply(message) {
    const msg = message.toLowerCase();
  
    if (msg.includes("merhaba") || msg.includes("selam")) {
      return "Merhaba! Size nasıl yardımcı olabilirim?";
    } else if (msg.includes("fiyat") || msg.includes("ücret")) {
      return "Ürün fiyatlarımız kategoriye göre değişmektedir. Detaylı bilgi için ürün sayfasını ziyaret edebilirsiniz.";
    } else if (msg.includes("kargo")) {
      return "Kargo süremiz genellikle 2-4 iş günü arasındadır. Kargo ücretsizdir.";
    } else if (msg.includes("iade")) {
      return "İade işlemleri ürün tesliminden itibaren 30 gün içerisinde yapılabilir.";
    } else if (msg.includes("beden") || msg.includes("ölçü")) {
      return "Ürün bedenleri genellikle standart kalıptır. Her ürün sayfasında beden tablosu mevcuttur.";
    } else {
      const randomReplies = [
        "Sizi daha iyi anlayabilmem için sorununuzu biraz daha detaylandırabilir misiniz?",
        "Konuyu ilgili birime yönlendiriyorum. Kısa süre içinde yanıt alacaksınız.",
        "Bu konuda detaylı bilgiye ulaşmak için müşteri hizmetleri sayfamızı da inceleyebilirsiniz.",
        "Anladım, yardımcı olabilmem için birkaç dakika içinde size geri dönüş yapacağım."
      ];
      return randomReplies[Math.floor(Math.random() * randomReplies.length)];
    }
  }
  