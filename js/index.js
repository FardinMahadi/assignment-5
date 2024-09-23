// blog button functionalitty
document.getElementById("blog").addEventListener("click", function () {
  window.location.href = "./blog.html";
});

// giving donation btn functionality
document.getElementById("donation-btn").addEventListener("click", function () {
  const donationSectionBox = document.getElementById("donation-section-box");
  donationSectionBox.classList.remove("hidden");

  const historySectionBox = document.getElementById("history-box");
  historySectionBox.classList.add("hidden");

  const donationBtn = document.getElementById("donation-btn");
  const historyBtn = document.getElementById("history-btn");

  donationBtn.classList.add("bg-lime-300");
  donationBtn.classList.add("hover:bg-lime-400");
  donationBtn.classList.remove("btn-outline");

  historyBtn.classList.remove("bg-lime-300");
  historyBtn.classList.remove("hover:bg-lime-400");
  historyBtn.classList.add("btn-outline");
});

// giving history btn functionality
document.getElementById("history-btn").addEventListener("click", function () {
  const donationSectionBox = document.getElementById("donation-section-box");
  donationSectionBox.classList.add("hidden");

  const historySectionBox = document.getElementById("history-box");
  historySectionBox.classList.remove("hidden");

  const donationBtn = document.getElementById("donation-btn");
  const historyBtn = document.getElementById("history-btn");

  historyBtn.classList.add("bg-lime-300");
  historyBtn.classList.add("hover:bg-lime-400");
  historyBtn.classList.remove("btn-outline");

  donationBtn.classList.remove("bg-lime-300");
  donationBtn.classList.remove("hover:bg-lime-400");
  donationBtn.classList.add("btn-outline");
});

// history section
function addHistory(amount, event, location) {
  const historyBox = document.getElementById("history-box");
  historyBox.innerHTML += ` <div class=" border-2 p-3 rounded-md my-5">
              <h1>${amount} Taka is Donated for ${event} at ${location}</h1>
              <p class="text-sm text-green-600">Date : ${getCurrentFormattedDate()} </p>
            </div>`;
}

// to get time
function getCurrentFormattedDate() {
  const now = new Date();
  return now.toString();
}

// close modal event listener
document.getElementById("modal-btn").addEventListener("click", closeModal);

// function to open modal
function openModal() {
  document.getElementById("modal-box").classList.remove("hidden");
}

// function to clove modal
function closeModal() {
  document.getElementById("modal-box").classList.add("hidden");
  console.log("clicked");
}
