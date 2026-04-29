function RequirementsChecklist({ password }) {
  const rules = [
    { label: "Mínimo 8 caracteres", valid: password.length >= 8 },
    { label: "Tiene mayúscula", valid: /[A-Z]/.test(password) },
    { label: "Tiene número", valid: /[0-9]/.test(password) },
    { label: "Tiene símbolo", valid: /[^A-Za-z0-9]/.test(password) },
  ];

  return (
    <div>
      <h4>Requisitos:</h4>
      <ul>
        {rules.map((rule, index) => (
          <li
            key={index}
            style={{
              color: rule.valid ? "green" : "red",
              textDecoration: rule.valid ? "line-through" : "none",
              fontWeight: "bold",
            }}
          >
            {rule.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RequirementsChecklist;