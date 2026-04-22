import { useState } from "react";
import PasswordInput from "./components/PasswordInput";
import StrengthIndicator from "./components/StrengthIndicator";
import RequirementsChecklist from "./components/RequirementsChecklist";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");

  return (
    <div className="container">
      <h1>Fortaleza de Contraseña</h1>

      <PasswordInput password={password} setPassword={setPassword} />
      <StrengthIndicator password={password} />
      <RequirementsChecklist password={password} />
    </div>
  );
}

export default App;