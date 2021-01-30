// This function is for add event//
function ticketNumber(id, isIncrease) {
    const ticketCount = document.getElementById(id).value;
    const ticket = parseInt(ticketCount);
  
    if (isIncrease == true) {
        newTicket = ticket + 1;
    }
    if (isIncrease == false && ticket > 0) {
        newTicket = ticket - 1;
    }
    document.getElementById(id).value = newTicket;
    calculationForTicket();
  }
  
  // Calculation for all ticket price//
    const firstClassTicket = document.getElementById('first-class');
    const economyClassTicket = document.getElementById('economy-class');
    
    function calculationForTicket() {
        const total = firstClassTicket.value * 150 + economyClassTicket.value * 100;
        document.getElementById('sub-total').innerText = total;
        document.getElementById('vat').innerText = '$' + total / 10;
        document.getElementById('total').innerText = '$' + (total + total / 10);
    }
    
    // This function is for book now button//
    function bookingNow() {
        if (firstClassTicket.value === '0' && economyClassTicket.value === '0'){
            alert('Please buy ticket first');
        } else {
            document.getElementById('foot').style.display = 'none';
            document.getElementById('booking-section').style.display = 'none';
            document.getElementById('showMessage').style.display = 'block';
        }
    }