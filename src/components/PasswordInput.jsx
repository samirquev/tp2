import { useState } from "react";

function PasswordInput({ password, setPassword }) {
  const [show, setShow] = useState(false);

  return (
    <div>
      <input
        type={show ? "text" : "password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={() => setShow(!show)}>
        {show ? "Ocultar" : "Mostrar"}
      </button>
    </div>
  );
}

export default PasswordInput;