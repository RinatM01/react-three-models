import { useState } from 'react';
import './App.css';
import Footer from './Components/Footer';
import InteractiveMenu from './Components/InteractiveMenu';

function App() {
	return (
		<div className="App">
			<div className=" absolute top-[20px] left-[20px] md:top-[60px] md:left-[100px]">
				<h1 className=" drop-shadow-md text-primary md:text-[90px]">
					<span className=" text-[30px] font-normal">Hello,</span>
					<br />
					I'm Rinat
				</h1>
				<p className="text-white mt-8 text-[20px]">
					I'm a web developer.
				</p>
			</div>
			<InteractiveMenu />
			<Footer />
		</div>
	);
}

export default App;
