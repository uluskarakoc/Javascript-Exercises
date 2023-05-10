import { useEffect, usaState } from "react";
import "./App.scss";

const API_URL = "https://jsonplaceholder.typicode.com/users";
const storedData = localStorage.getItem("users");
return storedData ? JSON.parse(storedData) : [];
function App() {
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(API_URL);
      const data = await response.json();
      localStorage.setItem("users", JSON.stringify(data));
      setUsers(data);
    };

    fetchData();
  }, []);

  return <div className="App"></div>;
}

export default App;
