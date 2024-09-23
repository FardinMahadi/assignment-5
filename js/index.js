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

// donation count
// noakhali flood
document
  .getElementById("noakhali-flood-btn")
  .addEventListener("click", function () {
    if (parseFloat(document.getElementById("noakhali-flood-input").value) > 0) {
      const donationAmount = parseFloat(
        document.getElementById("noakhali-flood-input").value
      );
      let historyDonationAmount = parseFloat(
        document.getElementById("noakhali-flood-amount").innerText
      );
      let balance = parseFloat(document.getElementById("balance").innerText);

      if (balance >= donationAmount) {
        historyDonationAmount += donationAmount;
        balance -= donationAmount;

        document.getElementById("balance").innerText = balance;
        document.getElementById("noakhali-flood-amount").innerText =
          historyDonationAmount;
        openModal();

        document.getElementById("noakhali-flood-input").value = "";

        addHistory(donationAmount, "Flood at Noakhali, Bangladesh");
      } else {
        alert("You don't have enough money");
        document.getElementById("noakhali-flood-input").value = "";
      }
    } else {
      alert("Enter a valid amount");
      document.getElementById("noakhali-flood-input").value = "";
    }
  });

// feni flood
document
  .getElementById("feni-flood-btn")
  .addEventListener("click", function () {
    if (parseFloat(document.getElementById("feni-flood-input").value) > 0) {
      const donationAmount = parseFloat(
        document.getElementById("feni-flood-input").value
      );
      let historyDonationAmount = parseFloat(
        document.getElementById("feni-flood-amount").innerText
      );
      let balance = parseFloat(document.getElementById("balance").innerText);

      if (balance >= donationAmount) {
        historyDonationAmount += donationAmount;
        balance -= donationAmount;

        document.getElementById("balance").innerText = balance;
        document.getElementById("feni-flood-amount").innerText =
          historyDonationAmount;

        document.getElementById("feni-flood-input").value = "";
        openModal();

        addHistory(donationAmount, "Flood at Feni, Bangladesh");
      } else {
        alert("You don't have enough money");
        document.getElementById("feni-flood-input").value = "";
      }
    } else {
      alert("Enter a valid amount");
      document.getElementById("feni-flood-input").value = "";
    }
  });

//   for students
document
  .getElementById("donate-for-injured-btn")
  .addEventListener("click", function () {
    if (
      parseFloat(document.getElementById("donate-for-injured-input").value) > 0
    ) {
      const donationAmount = parseFloat(
        document.getElementById("donate-for-injured-input").value
      );
      let historyDonationAmount = parseFloat(
        document.getElementById("donate-for-injured-amount").innerText
      );
      let balance = parseFloat(document.getElementById("balance").innerText);

      if (balance >= donationAmount) {
        historyDonationAmount += donationAmount;
        balance -= donationAmount;

        document.getElementById("balance").innerText = balance;
        document.getElementById("donate-for-injured-amount").innerText =
          historyDonationAmount;

        document.getElementById("donate-for-injured-input").value = "";
        openModal();

        addHistory(donationAmount, "Aid for Injured in the Quota Movement");
      } else {
        alert("You don't have enough money");
        document.getElementById("donate-for-injured-input").value = "";
      }
    } else {
      alert("Enter a valid amount");
      document.getElementById("donate-for-injured-input").value = "";
    }
  });

// history section
function addHistory(amount, title) {
  const historyBox = document.getElementById("history-box");
  historyBox.innerHTML += ` <div class=" border-2 p-3 rounded-md my-5">
              <h1>${amount} Taka is Donated for ${title} </h1>
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
}
