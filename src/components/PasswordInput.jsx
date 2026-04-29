import { useState } from "react";

function PasswordInput({ password, setPassword }) {
  const [show, setShow] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (password === "") return;

    navigator.clipboard.writeText(password);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <div>
      <input
        type={show ? "text" : "password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Ingrese contraseña"
      />

      <div className="botones">
        <button onClick={() => setShow(!show)}>
        {show ? "Ocultar" : "Mostrar"}
        </button>

        <button onClick={handleCopy}>
        Copiar
        </button>
      </div>

      {copied && <p style={{ color: "green" }}>¡Copiado!</p>}
    </div>
  );
}

export default PasswordInput;