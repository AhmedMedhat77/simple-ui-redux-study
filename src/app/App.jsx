import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import Form from "../components/form";
function App() {
  return (
    <div>
      <Navbar />
      <div className="main">
        <Sidebar />
        <Form />
      </div>
    </div>
  );
}

export default App;
