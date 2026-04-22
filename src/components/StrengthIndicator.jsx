function getStrength(password) {
  let score = 0;

  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  if (score <= 1) return "Poco segura";
  if (score <= 3) return "Segura";
  return "Muy segura";
}

function StrengthIndicator({ password }) {
  const strength = getStrength(password);

  return <h3>Fortaleza: {strength}</h3>;
}

export default StrengthIndicator;