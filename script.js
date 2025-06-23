document.getElementById('searchForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const id = document.getElementById('complaintId').value.trim();
    const resultDiv = document.getElementById('result');
    const offenderDiv = document.getElementById('offender-details');
    const progressDiv = document.getElementById('complaint-progress');

    if (id === 'CYB202506230001') {
        resultDiv.innerHTML = `
        <div class="complaint-card" style="background:#fff;border-radius:12px;box-shadow:0 2px 12px rgba(0,0,0,0.08);padding:28px 32px 22px 32px;max-width:440px;margin:30px auto 0 auto;">
            <div style="display:flex;align-items:center;gap:16px;margin-bottom:18px;">
                <img src='https://cybercrime.gov.in/assets/images/emblem-dark.png' alt='Emblem' style='width:48px;height:48px;'>
                <div style="font-size:1.18em;font-weight:600;color:#0b3d91;">Complaint Registered Successfully</div>
            </div>
            <table style="width:100%;font-size:1.05em;margin-bottom:10px;">
                <tr><td style="font-weight:600;width:160px;">Complaint ID:</td><td>CYB202506230001</td></tr>
                <tr><td style="font-weight:600;">Date:</td><td>23/06/2025</td></tr>
                <tr><td style="font-weight:600;">Time:</td><td>14:37</td></tr>
                <tr><td style="font-weight:600;">Complainant Name:</td><td>Adarsh Tiwari</td></tr>
                <tr><td style="font-weight:600;">Contact Number:</td><td>6232408477</td></tr>
                <tr><td style="font-weight:600;">Email:</td><td>adarsh.tiwa6232@gmail.com</td></tr>
                <tr><td style="font-weight:600;vertical-align:top;">Complaint Summary:</td><td>Non-repayment of borrowed money by an individual despite multiple reminders.</td></tr>
                <tr><td style="font-weight:600;">Status:</td><td><span style='color:green;font-weight:600;'>Registered Successfully</span></td></tr>
            </table>
            <div style="margin-top:10px;font-size:0.98em;color:#555;background:#e9f7ef;border-left:4px solid #0b3d91;padding:10px 16px;border-radius:6px;">
                <b>Note:</b> This is a system-generated confirmation. Please keep your Complaint ID for future reference.
            </div>
        </div>
        `;
        offenderDiv.style.display = 'block';
        progressDiv.style.display = 'block';
    } else {
        resultDiv.innerHTML = `<div style="color:red;">Complaint not found. Please check your Complaint ID and try again.</div>`;
        offenderDiv.style.display = 'none';
        progressDiv.style.display = 'none';
    }
});
