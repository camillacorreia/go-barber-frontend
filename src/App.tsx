import React from "react";

import SignIn from "./pages/SignIn";
import GlobalStyle from "./styles/global";

import ToastContainer from "./components/ToastContainer";
import { AuthProvider } from "./hooks/AuthContext";

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>
    <ToastContainer />
    <GlobalStyle />
  </>
);

export default App;
