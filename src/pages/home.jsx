import React, { useContext } from "react";
import { ThemeContext } from "../App";

const Home = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className="bg-white dark:bg-gray-800 h-10">
      Home
      <button onClick={() => setTheme("dark")}>Dark</button>
      <button onClick={() => setTheme("light")}>Light</button>
      <p>{theme}</p>
    </div>
  );
};

export default Home;
