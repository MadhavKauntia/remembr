import Content from "./Components/Content/Content";
import AuthProvider from "./Store/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <Content />
    </AuthProvider>
  );
}

export default App;
