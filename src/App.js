import About from "./components/About/about";
import Footer from "./components/Footer/footer";
import Join from "./components/Join/join";
import Navbar from "./components/Navbar/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
