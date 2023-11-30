import { useSelector } from "react-redux";
import "./App.css";
import Feed from "./Feed";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { selectUser } from "./features/userSlice";
import Login from "./Login";

function App() {
  const user = useSelector(selectUser);

  return (
    <div className="app">
      <Header />

      {!user ? (
        <Login />
      ) : (
        <>
          {/* App Body */}
          <div className="app__body">
            {/* Sidebar */}
            <Sidebar />
            {/* Feed */}
            <Feed />
            {/* Widgets */}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
