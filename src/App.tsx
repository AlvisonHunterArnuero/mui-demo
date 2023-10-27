import Button from "@mui/material/Button";
import "./App.css";
import MuiCard from "./components/MuiCard";

function App() {
  return (
    <>
      <MuiCard customStyles={{padding: '55px'}} />
      <Button variant="contained">Welcome To Material UI</Button>
    </>
  );
}

export default App;
