import { Grid, useTheme } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  User,
  getAuth,
  signInWithRedirect,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/header/header";
import { AboutPage } from "./pages/about-page";
import { HomePage } from "./pages/home-page";
import { NotFoundPage } from "./pages/not-found-page";
import { RealizedProfitPage } from "./pages/realized-profit-page";

const firebaseConfig = {
  authDomain: "ageless-thought-400117.firebaseapp.com",
};
initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

function App() {
  const spacing = useTheme().spacing();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
        signInWithRedirect(auth, provider);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <>
      {!user ? (
        <LinearProgress />
      ) : (
        <BrowserRouter>
          <Grid container sx={{ p: spacing }}>
            <Header />
            <Grid item xs={12} marginTop={2}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route
                  path="/realizedProfit"
                  element={<RealizedProfitPage />}
                />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Grid>
          </Grid>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
