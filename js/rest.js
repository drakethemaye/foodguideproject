// List of Deals
const deals = [
    { name: "Tiny Thai Restaurant", deal: "20% off all Pad Thai dishes!" },
    { name: "Honey Road", deal: "Free dessert with any entree!" },
    { name: "Bluebird Barbeque", deal: "Buy one get one free on ribs!" },
    { name: "The Friendly Toast", deal: "15% off all brunch items!" },
    { name: "Maliwan Thai Restaurant", deal: "Complimentary spring rolls with any meal!" },
    { name: "Leunig's Bistro", deal: "Half-price wine bottles after 7 PM!" },
    { name: "Farmhouse Tap & Grill", deal: "10% off burgers every Tuesday!" },
  ];
  
  // Function to update deals
  function updateDeals() {
    const dealsContainer = document.getElementById("deals-container");
    dealsContainer.innerHTML = ""; // Clear existing deals
  
    // Randomly select 3 deals
    const selectedDeals = [];
    while (selectedDeals.length < 3) {
      const randomIndex = Math.floor(Math.random() * deals.length);
      if (!selectedDeals.includes(deals[randomIndex])) {
        selectedDeals.push(deals[randomIndex]);
      }
    }
  
    // Display the selected deals
    selectedDeals.forEach(deal => {
      const dealElement = document.createElement("div");
      dealElement.classList.add("deal");
      dealElement.innerHTML = `
        <h3>${deal.name}</h3>
        <p>${deal.deal}</p>
      `;
      dealsContainer.appendChild(dealElement);
    });
  }
  
  // Initial update and interval
  updateDeals();
  setInterval(updateDeals, 600000); // Update every 10 minutes
  