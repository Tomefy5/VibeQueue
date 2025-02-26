import { Route, Routes } from "react-router-dom";
import VibeQueuePage from "./pages/VibeQueuePage";

function App() {

  return (
    <div className="absolute w-full h-full p-2">
      <Routes>
        <Route path="/" element={<VibeQueuePage/>}  />
      </Routes>
    </div>
  );
}

export default App;
