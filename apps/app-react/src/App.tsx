import { useState } from "react";
import { Button } from "package-react"
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<Button label="Hello"></Button>
		</div>
	);
}

export default App;
