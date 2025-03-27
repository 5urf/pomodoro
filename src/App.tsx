import { Outlet } from "react-router";
import Header from "./components/Header";
import { GlobalStyle } from "./styles/globalStyles";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Outlet />
    </>
  );
};

export default App;
