import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import AuthPage from "./pages/Auth";

// const queryClient = new QueryClient();

function App() {
  const signedIn = true;

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={signedIn ? <Home /> : <Navigate to="/auth" />}
        />
        <Route path="/auth" element={!signedIn ? <AuthPage /> : <Home />} />
      </Routes>
    </div>
  );
}

export default App;
