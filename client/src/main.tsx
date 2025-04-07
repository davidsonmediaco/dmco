import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Set the document title
document.title = "Davidson Media Co";

createRoot(document.getElementById("root")!).render(<App />);
