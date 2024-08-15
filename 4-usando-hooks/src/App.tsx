import { UserProvider } from "./contexts/UserContext";
import UserComponent from "./components/UserComponent";

function App(){
  return(
    <UserProvider>
      <UserComponent />
    </UserProvider>
  );
}

export default App;
