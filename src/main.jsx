import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom"; // Router at the top level

ReactDOM.createRoot(document.getElementById("root")).render(
  
    <BrowserRouter>
      <App />
    </BrowserRouter>
  
);
