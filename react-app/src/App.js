import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Airlines from './components/Airlines';


function App() {
	return (
		<div>
			<Router>
				<Routes>
				  <Route path="/" element={<Airlines/>} />
				  <Route path="*" element={<h1>No match</h1>} />
				</Routes>
			</Router>
			
		</div>
	);
}

export default App;
