import Home from "./components/Home";
import DataProvider from "./context/DataProvider";
import Result from "./components/Result";

const App=()=> {
  return (
    <DataProvider>
      <Home />
      <Result/>
    </DataProvider>
  );
}

export default App;
