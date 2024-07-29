document.addEventListener('DOMContentLoaded', () => {
    const donationForm = document.getElementById('donation-form');
    donationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Handle the form submission logic here
        const name = document.getElementById('donor-name').value;
        const email = document.getElementById('donor-email').value;
        const amount = document.getElementById('donation-amount').value;
        const message = document.getElementById('donor-message').value;

        console.log(`Donor Name: ${name}`);
        console.log(`Donor Email: ${email}`);
        console.log(`Donation Amount: ${amount}`);
        console.log(`Message: ${message}`);

        alert('Thank you for your donation!');
    });
});
