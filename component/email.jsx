import React from 'react';
import { m } from '../i18n';

export function Email({ i18n }) {
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
      <h2 className="content__section-title">{i18n(m.email_title)}</h2>
      <div className="email__subtitle">{i18n(m.email_subtitle)}</div>

      <label htmlFor="email">{i18n(m.email_input_label)}</label>
      <form className="email__group" onSubmit={handleEmailSubmit}>
        <input
          type="email"
          name="email"
          placeholder="savecrypto@protonmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button disabled={!email || emailLoading}>
          {emailLoading
            ? i18n(m.email_input_button_loading)
            : i18n(m.email_input_button)}
        </button>
      </form>

      {emailSuccess && (
        <div className="email__success">{i18n(m.email_success)}</div>
      )}
      {emailError && (
        <div className="email__success">{i18n(m.email_error)}</div>
      )}
    </div>
  );
}
