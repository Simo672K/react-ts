import Form from "./components/Form";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Working with forms</h1>
      <div className="row">
        <div className="col-lg-6 col-md-9 col-12">
          <Form/>
        </div>
      </div>
      <ProductList/>
    </div>
  );
}

export default App;
