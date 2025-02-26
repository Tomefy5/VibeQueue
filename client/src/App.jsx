import { Route, Routes } from "react-router-dom";
import VibeQueuePage from "./pages/VibeQueuePage";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<VibeQueuePage/>}  />
      </Routes>
    </div>
  );
}

export default App;
