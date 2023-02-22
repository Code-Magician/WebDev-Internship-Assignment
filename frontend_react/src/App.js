import React from "react";
import "./App.scss";
import { Background, Navbar } from "./components";
import {
	About,
	Certificates,
	Footer,
	Header,
	Skills,
	Testimonials,
	Work,
} from "./container";

const App = () => {
	return (
		<div className="app">
			{/* <Background /> */}
			<Navbar />
			<Header />
			<About />
			{/* <Work /> */}
			{/* <Skills /> */}
			{/* <Certificates /> */}
			<Footer />
			{/* <Testimonials /> */}
		</div>
	);
};

export default App;
