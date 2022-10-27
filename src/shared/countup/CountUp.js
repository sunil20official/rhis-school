import React, { useState } from 'react';
import './CountUp.css';

import ReactCountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const CountUp = () => {
	const [counterOn, setCounterOn] = useState(false);

	return (
		<div style={{ margin: '0rem',padding:"2rem 0rem" }}>
			<h1 style={{ textAlign: 'center',fontWeight:"bolder" }}> Quality Education </h1>
			<div className='count-up-container'>
				<div className='count-up'>
					<ScrollTrigger
						onEnter={() => setCounterOn(true)}
						onExit={() => setCounterOn(false)}
						offset={{ top: 10 }}
						delayedCall
					>
						{counterOn && <ReactCountUp end={100} duration={4} />}
						<span>+</span>
						<p className='count-up-text'>Students </p>
					</ScrollTrigger>
				</div>
				<div className='count-up'>
					<ScrollTrigger
						onEnter={() => setCounterOn(true)}
						onExit={() => setCounterOn(false)}
						offset={{ top: 10 }}
						delayedCall
					>
						{counterOn && <ReactCountUp end={10} duration={3} />}
						<span>+</span>
						<p className='count-up-text'>Teachers </p>
					</ScrollTrigger>
				</div>
				<div className='count-up'>
					<ScrollTrigger
						onEnter={() => setCounterOn(true)}
						onExit={() => setCounterOn(false)}
						offset={{ top: 10 }}
						delayedCall
					>
						{counterOn && <ReactCountUp end={20} duration={3} />}
						<span>+</span>
						<p className='count-up-text'>Classrooms </p>
					</ScrollTrigger>
				</div>
			</div>
		</div>
	);
};

export default CountUp;
