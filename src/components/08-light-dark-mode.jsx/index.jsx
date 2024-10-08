import useLocalStorage from "./useLocalStorage";
import "./theme.css";

export default function LightDarkMode() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  function handleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  // console.log(theme);

  return (
    <><h1 className="m-t">08. Light & Dark mode</h1>
      <div className="light-dark-mode" data-theme={theme}>
        <div className="contains">
          <p>Hello World !</p>
          <button className="btn" onClick={handleToggleTheme}>
            Change Theme
          </button>
        </div>
      </div>
    </>
  );
}
