export const RefundPolicyPage = () => {
  return (
    <div style={{
      fontFamily: 'Inter, Arial, sans-serif',
      background: 'linear-gradient(135deg, #f4fdfc 0%, #e9f7f6 100%)',
      minHeight: '100vh',
      padding: '20px 0',
    }}>
      <div style={{
        maxWidth: 900,
        margin: 'auto',
        boxShadow: '0 4px 24px 0 rgba(9,164,152,0.08)',
        borderRadius: 18,
        background: '#fff',
        padding: '32px 28px',
        color: '#333',
      }}>
        <header style={{
          borderBottom: '3px solid #09a498',
          marginBottom: 28,
          paddingBottom: 10,
        }}>
            <h1 style={{
                color: '#09a498',
                marginBottom: 5,
                fontWeight: 800,
                fontSize: 32,
                letterSpacing: 1,
            }}>REFUND & CANCELLATION POLICY</h1>
            <p style={{color: '#666', fontSize: '1em', fontWeight: 500}}>Last Updated: 12/2025</p>
        </header>
        <section style={{marginBottom: 24}}>
            <p style={{fontSize: 18, fontWeight: 500, color: '#09a498'}}>This Refund & Cancellation Policy applies to all purchases made through the <strong>Mini Split Master</strong> website.</p>
        </section>
        <section style={{marginBottom: 24}}>
            <h2 style={{color: '#09a498', fontWeight: 700, fontSize: 22}}>1. Order Cancellation</h2>
            <h3 style={{color: '#444', fontWeight: 600}}>a. Cancellation Before Scheduling</h3>
            <p>Orders may be canceled within 48 hours of purchase and before installation is scheduled for a full refund, less any non-refundable processing fees.</p>
            <h3 style={{color: '#444', fontWeight: 600}}>b. Cancellation After Scheduling</h3>
            <p>If installation has been scheduled:</p>
            <ul style={{marginLeft: 20}}>
                <li>A cancellation fee may apply</li>
                <li>Refunds may be reduced to cover administrative, logistics, or contractor-related costs</li>
                <li>Restocking fees for equipment and parts may apply</li>
            </ul>
        </section>
        <section style={{marginBottom: 24}}>
            <h2 style={{color: '#09a498', fontWeight: 700, fontSize: 22}}>2. Same-Day and Missed Appointments</h2>
            <p>If the customer is not available or access is not provided at the scheduled installation time, rescheduling fees may apply. Refunds are not guaranteed in these cases.</p>
        </section>
        <section style={{marginBottom: 24}}>
            <h2 style={{color: '#09a498', fontWeight: 700, fontSize: 22}}>3. Installation Day Cancellations</h2>
            <p>Cancellations made within 24 hours of the scheduled installation may be subject to significant fees due to contractor commitments and equipment allocation.</p>
        </section>
        <section style={{marginBottom: 24}}>
            <h2 style={{color: '#09a498', fontWeight: 700, fontSize: 22}}>4. Refund Method</h2>
            <p>Approved refunds will be issued to the original payment method within 7–10 business days.</p>
            <p style={{fontWeight: 700, color: '#09a498'}}>If financing was used:</p>
            <ul style={{marginLeft: 20}}>
                <li>Refunds will be handled according to the financing provider’s policies</li>
                <li>Mini Split Master does not control financing account adjustments</li>
            </ul>
        </section>
        <section style={{marginBottom: 24}}>
            <h2 style={{color: '#09a498', fontWeight: 700, fontSize: 22}}>5. Non-Refundable Items</h2>
            <p>The following are non-refundable:</p>
            <ul style={{marginLeft: 20}}>
                <li>Completed installation services</li>
                <li>Permit fees</li>
                <li>Custom-ordered or special-order equipment</li>
                <li>Third-party financing fees</li>
            </ul>
        </section>
        <section style={{marginBottom: 24}}>
            <h2 style={{color: '#09a498', fontWeight: 700, fontSize: 22}}>6. Site Condition Discrepancies</h2>
            <p>If, upon arrival at the job site, installation conditions materially differ from what was described or selected at the time of purchase:</p>
            <ul style={{marginLeft: 20}}>
                <li>Additional charges may be required to complete the installation properly and in compliance with applicable codes</li>
                <li>The customer will be informed of any additional costs before work begins</li>
            </ul>
            <p>If the customer chooses not to proceed under the revised scope and pricing:</p>
            <ul style={{marginLeft: 20}}>
                <li>The installation may be canceled or rescheduled</li>
                <li>Refund eligibility will be determined in accordance with this policy and may be subject to deductions for site visits, logistics, or contractor costs already incurred</li>
            </ul>
        </section>
        <section style={{marginBottom: 24}}>
            <h2 style={{color: '#09a498', fontWeight: 700, fontSize: 22}}>7. Force Majeure</h2>
            <p>Mini Split Master is not responsible for delays or cancellations due to events beyond our reasonable control, including weather, supply chain disruptions, or acts of God.</p>
        </section>
        <section style={{marginBottom: 24}}>
            <h2 style={{color: '#09a498', fontWeight: 700, fontSize: 22}}>8. Policy Changes</h2>
            <p>We reserve the right to update this policy at any time. Changes will be posted on our website and apply to future purchases.</p>
        </section>
        <section style={{marginBottom: 24}}>
          <h2 style={{color: '#09a498', fontWeight: 700, fontSize: 22}}>9. Contact Us</h2>
          <div style={{backgroundColor: '#f4fdfc', padding: 20, border: '1px dashed #09a498', borderRadius: 10, marginTop: 10}}>
            <p style={{margin: 0, fontWeight: 700, color: '#09a498'}}>Mini Split Master</p>
            <p style={{margin: 0}}>Email: <a href="mailto:hello@minisplitmaster.us" style={{color: '#09a498', textDecoration: 'underline'}}>hello@minisplitmaster.us</a></p>
            <p style={{margin: 0}}>Phone: <a href="tel:7863617673" style={{color: '#09a498', textDecoration: 'underline'}}>786-361-7673</a></p>
          </div>
        </section>
      </div>
    </div>
  );
};