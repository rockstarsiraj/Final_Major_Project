document.getElementById("newsImage").addEventListener("change", function(e) { 
  const file = e.target.files[0]; 
  const imgPreview = document.getElementById("imgPreview");
   if (file) {
     imgPreview.src = URL.createObjectURL(file); 
     imgPreview.classList.remove("hidden");
     } else { 
      imgPreview.classList.add("hidden");
     }
     });



document.getElementById("predictionForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const newsText = document.getElementById("newsText").value;
  const newsImage = document.getElementById("newsImage").files[0];
  const loader = document.getElementById("loader");
  const resultCard = document.getElementById("resultCard");
  const resultText = document.getElementById("resultText");
  const submitBtn= document.getElementById("submitBtn");

  if (!newsText || !newsImage) {
    alert("Please enter text and upload an image.");
    return;
  }

  const formData = new FormData();
  formData.append("text", newsText);
  formData.append("image", newsImage);

  loader.classList.remove("hidden");
  resultCard.classList.add("hidden");
  submitBtn.disabled = true;

  try {
    console.log("Sending request to backend...");
    const response = await fetch("http://127.0.0.1:5000/predict", {
      method: "POST",
      body: formData,
    });

    console.log("Got response, status:", response.status);

    // handle non-OK status
    if (!response.ok) {
      const errText = await response.text();
      console.error("Server returned non-OK:", response.status, errText);
      loader.classList.add("hidden");
      resultCard.classList.remove("hidden");
      resultText.textContent = "Server error: " + response.status + " - " + errText;
      resultText.style.color = "#ffcc00";
      submitBtn.disabled = false;
      return;
    }

    const data = await response.json();
    console.log("Response JSON:", data);
    loader.classList.add("hidden");
    resultCard.classList.remove("hidden");

    if (data.prediction) {
      resultText.textContent = data.prediction === "FAKE"
        ? "🚨 This news is likely FAKE!"
        : "✅ This news appears to be REAL.";
      resultText.style.color = data.prediction === "FAKE" ? "#ff4d4d" : "#00ff99";
    } else if (data.error) {
      resultText.textContent = "Server error: " + data.error;
      resultText.style.color = "#ffcc00";
    } else {
      resultText.textContent = "Error: Invalid response from server.";
      resultText.style.color = "#ffcc00";
    }
    await new Promise(resolve => setTimeout(resolve, 2000));
    submitBtn.disabled = false;
  } catch (error) {
    console.error("Fetch error:", error);
    loader.classList.add("hidden");
    resultCard.classList.remove("hidden");
    resultText.textContent = "server not reachable.check backend connection."+error;
    resultText.style.color = "#ffcc00";
    submitBtn.disabled = false;
  }
});
