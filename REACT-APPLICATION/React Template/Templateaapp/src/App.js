import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.container}>
      <Header />

      <Body />

      <Footer />
    </div>
  );
}

export default App;
