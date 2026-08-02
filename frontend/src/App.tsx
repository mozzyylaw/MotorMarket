import { useEffect, useState } from "react";
import "./App.css";

type ApiResponse = {
  message: string;
};

function App() {
  const [message, setMessage] = useState("Connecting to backend...");

  useEffect(() => {
    const fetchBackendMessage = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/");

        if (!response.ok) {
          throw new Error("Backend request failed");
        }

        const data: ApiResponse = await response.json();
        setMessage(data.message);
      } catch (error) {
        console.error(error);
        setMessage("Could not connect to the backend.");
      }
    };

    void fetchBackendMessage();
  }, []);

  return (
    <main>
      <h1>MotorMarket</h1>
      <p>{message}</p>
    </main>
  );
}

export default App;