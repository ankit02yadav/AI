const box = document.getElementById("messages");
function scrollToBottom() {
    const messagesDiv = document.getElementById("messages");
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}
async function fetchGeminiResponse(event) {
    event.preventDefault();
    const user = document.getElementById("user-msg");
    userinput = user.value;
    user.value = '';
    let usermsg = document.createElement("div");
    usermsg.innerText = `${userinput}`;
    console.log(`Question : ${userinput}`);
    usermsg.classList = "user-msg";
    box.append(usermsg);
    scrollToBottom();
    const apiKey = "AIzaSyCQ_RGfXrV_8jMkb1PNOnTCLhrfnDDAKQA";
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

    const requestBody = {
        contents: [
            {
                parts: [{ text: `${userinput}` }]
            }
        ]
    };
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestBody)
        });

        const data = await response.json();
        const airesponce = data.candidates[0].content.parts[0].text;
        console.log(`Answer : ${airesponce}`);
        let aimsg = document.createElement("div");
        aimsg.innerText = `${airesponce}`;
        aimsg.classList = "ai-msg";
        box.append(aimsg);
        scrollToBottom();
        
    } catch (error) {
        console.error("Error fetching response:", error);
    }
}
const form = document.getElementById("chat-form");
form.addEventListener("submit", fetchGeminiResponse);
