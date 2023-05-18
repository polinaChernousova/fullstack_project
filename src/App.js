import Routing from "./Routing";
import AuthContext from "./context/authContext";
import ProductContext from "./context/productContext";

function App() {
  return (
    <>
      <ProductContext>
        <AuthContext>
          <h2>Fullstack Project</h2>
          <Routing />
        </AuthContext>
      </ProductContext>
    </>
  );
}

export default App;
