import Header from "./components/Header";
import Pomodoro from "./pages/Pomodoro";
import { GlobalStyle } from "./styles/globalStyles";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Pomodoro />
    </>
  );
};

export default App;
