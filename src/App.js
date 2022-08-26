import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

import Header from './layout/Header';
import Home from './pages/Home';
import Footer from './layout/Footer/Footer';

function App() {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<>
			<div className='scroll-top' onClick={scrollToTop}>
				<FontAwesomeIcon icon={faAngleUp} />
			</div>
			<div
				className='App'
				style={{
					backgroundImage: 'linear-gradient(to top, #accbee 0%, #e7f0fd 100%)',
				}}
			>
				<Header />
				<div className='App container-lg'>
					<Home />
				</div>
				<Footer />
			</div>
		</>
	);
}

export default App;
