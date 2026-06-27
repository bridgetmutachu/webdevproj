import { useState } from "react";

const SignIn = () => {
  const [isProvider, setIsProvider] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // TODO: send the form data to your backend here.
    // Photos/resume need to be sent as FormData (not JSON) since they're files.
  };

  if (submitted) {
    return (
      <div className="card signin-card">
        <h2>Thanks for signing up!</h2>
        <p>
          {isProvider
            ? "You're set up as a client for now. We'll review your photos and resume and email you once you're approved as a provider."
            : "You're all set as a client."}
        </p>
      </div>
    );
  }

  return (
    <div className="card signin-card" id="sign up">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="signin-row">
        <input type="text" placeholder="Full name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        </div>

        <label className="signin-checkbox">
          <input
            type="checkbox"
            checked={isProvider}
            onChange={(e) => setIsProvider(e.target.checked)}
          />
          I want to become a service provider
        </label>

        {isProvider && (
          <>
            <p className="signin-subtext">
              Providers need to be verified. Please upload photos of your
              work and your resume.
            </p>
            <label htmlFor="photos">Photos of your work</label>
            <input id="photos" type="file" accept="image/*" multiple required />

            <label htmlFor="resume">Resume</label>
            <input id="resume" type="file" accept=".pdf,.doc,.docx" required />
          </>
        )}

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignIn;