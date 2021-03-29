import React from 'react';

export function Email() {
  const [email, setEmail] = React.useState('');
  const [emailLoading, setEmailLoading] = React.useState(false);
  const [emailError, setEmailError] = React.useState();
  const [emailSuccess, setEmailSuccess] = React.useState();

  function handleEmailSubmit(e) {
    e.preventDefault();

    if (!email) {
      return;
    }

    setEmailError(false);
    setEmailSuccess(false);
    setEmailLoading(true);

    fetch('/api/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setEmailLoading(false);
        setEmailSuccess(true);
      })
      .catch(() => {
        setEmailLoading(false);
        setEmailSuccess(false);
        setEmailError(true);
      });
  }

  return (
    <div className="email">
      <h2 className="content__section-title">Stay Informed</h2>
      <div className="email__subtitle">
        We will keep you up to date with the latest on this case.
      </div>

      <label htmlFor="email">Email</label>
      <form className="email__group" onSubmit={handleEmailSubmit}>
        <input
          type="email"
          name="email"
          placeholder="savecrypto@protonmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button disabled={!email || emailLoading}>
          {emailLoading ? 'Submitting' : 'Submit'}
        </button>
      </form>

      {emailSuccess && (
        <div className="email__success">
          Thank you! We will keep you in the loop.
        </div>
      )}
      {emailError && (
        <div className="email__success">
          Sorry, there was an error. Please try again.
        </div>
      )}
    </div>
  );
}
