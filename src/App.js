import { createContext, useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/home";
import About from "./pages/about";

export const ThemeContext = createContext();
function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Home />
      <About />
    </ThemeContext.Provider>
  );
}

export default App;
