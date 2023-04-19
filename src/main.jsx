import React, { Suspense } from 'react';
import { Loader } from '@react-three/drei';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.Fragment>
		<Suspense fallback={null}>
			{/* <Portfolio />
			<Footer /> */}
			<App />
		</Suspense>
		<Loader />
	</React.Fragment>
);
