import UserChallenge from "./tutorial/06-forms/starter/02-user-challenge";
function App() {
  return (
    <div>
      <ToggleTheme />
      <div
        className="container d-flex justify-content-center align-items-center flex-column"
        style={{ height: "80vh" }}
      >
        <UserChallenge />
      </div>
    </div>
  );
}

const ToggleTheme = () => {
  const handleClick = () => {
    //change theme data-bs-theme from dark to light and vice versa
    const htmlTag = document.documentElement;
    const currentTheme = htmlTag.getAttribute("data-bs-theme");

    if (currentTheme === "dark") {
      htmlTag.setAttribute("data-bs-theme", "light");
    } else {
      htmlTag.setAttribute("data-bs-theme", "dark");
    }
  };
  return (
    <div>
      <button className="btn 
        btn-success mt-3 mb-3
      " onClick={handleClick}>
        toggle theme
      </button>
    </div>
  );
};

export default App;
