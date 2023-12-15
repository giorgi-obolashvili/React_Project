const reactDescription = ["Core", "Main", "Crucial", "Fundamental"];
function getRand(maxValue) {
  return Math.floor(Math.random() * (maxValue + 1));
}

function Header() {
  const descpriction = reactDescription[getRand(reactDescription.length)]
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {descpriction} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
