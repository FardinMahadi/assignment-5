// blog button functionalitty
document.getElementById("blog").addEventListener("click", function () {
  window.location.href = "./blog.html";
});

// giving donation btn functionality
document.getElementById("donation-box").addEventListener("click", function () {
  const donationSectionBox = document.getElementById("donation-section-box");
  donationSectionBox.classList.remove("hidden");

  const historySectionBox = document.getElementById("history-box");
  historySectionBox.classList.add("hidden");
});

// giving history btn functionality
document.getElementById("history-btn").addEventListener("click", function () {
  const donationSectionBox = document.getElementById("donation-section-box");
  donationSectionBox.classList.add("hidden");

  const historySectionBox = document.getElementById("history-box");
  historySectionBox.classList.remove("hidden");
});

// history section
function addHistory(amount, event, location) {
  //event like famise-2024, and location like Feni, Bangladesh
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
