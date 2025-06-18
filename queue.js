let queue = JSON.parse(localStorage.getItem("textQueue") || "[]");

function saveQueue() {
  localStorage.setItem("textQueue", JSON.stringify(queue));
  renderQueue();
}

function pushToQueue() {
  const input = document.getElementById("textInput").value.trim();
  if (input) {
    queue.push(input);
    document.getElementById("textInput").value = "";
    saveQueue();
  }
}

function popFromQueue() {
  if (queue.length === 0) {
    alert("Queue is empty!");
    return;
  }
  queue.shift();
  saveQueue();
}

function renderQueue() {
  const queueDisplay = document.getElementById("queueDisplay");
  queueDisplay.innerHTML = "";
  queue.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = item;
    if (index === 0) li.classList.add("front");
    queueDisplay.appendChild(li);
  });
}

renderQueue();
