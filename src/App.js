import './App.css';
import Footer from './layout/Footer/Footer';

import Header from './layout/Header';
import Home from './pages/Home';

function App() {
	return (
		<div className='App' style={{ border: '3px solid black' }}>
			<Header />
			<div className='App container-lg' style={{ border: '3px solid red' }}>
				<Home />
			</div>
			<Footer />
		</div>
	);
}

export default App;
