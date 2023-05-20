import { Routes, Route } from "react-router-dom";
import SignUpScreen from "./pages/SignUpScreen/index.js";
import SignInScreen from "./pages/SignInScreen/index.js";
import UrlsScreen from "./pages/UrlsScreen/index.js";
import RankingSreen from "./pages/RankingScreen/index.js";

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<SignUpScreen />}></Route>
      <Route path="/signin" element={<SignInScreen />}></Route>
      <Route path="/urls" element={<UrlsScreen />}></Route>
      <Route path="/ranking" element={<RankingSreen />}></Route>
    </Routes>
  );
}

export default App;
