import React, { useEffect } from 'react';
// import $ from 'jquery';

import Carousel from '../shared/carousel/Carousel';
import Testimonials from '../shared/Testimonials';
import WhatWeOffer from '../shared/whatWeOffer/WhatWeOffer';
import Staff from '../shared/staff/Staff';
import CountUp from '../shared/countup/CountUp';
import RhisYouTube from '../shared/RhisYouTube';
import PopupModal from '../shared/PopupModal';

const Home = () => {
	const [open, setOpen] = React.useState(false);
	const handleClose = () => {
		setOpen(false);
		sessionStorage.setItem('popup', 'false');
	};
	useEffect(() => {
		// sessionStorage.setItem('popup', { sessionStorage.getItem('popup') ? 'true' : 'false' });
		{
			!sessionStorage.getItem('popup') && sessionStorage.setItem('popup', 'true');
		}
		// if()
		{
			sessionStorage.getItem('popup') === 'true' &&
				setTimeout(() => setOpen(sessionStorage.getItem('popup')), 2000);
		}
		// setOpen(true);
	}, []);

	window.onunload = function () {
		sessionStorage.removeItem('popup');
	};

	return (
		<>
			<Carousel />
			<div className='container-lg'>
				<WhatWeOffer />
				<div id='story' className='story-section' data-aos='zoom-out'>
					<h1>Our Story</h1>
					<p className='story-text'>
						<p>
							There is a future we believe in, fostered by strong souls and inventive
							minds. We believe the way to usher in change, is to empower young minds
							with stellar education, thus creating the enablers of tomorrow.
						</p>
						<p>
							Laying its foundation stone in 2021, Royal Hills International School was
							set up with a vision: To create leaders of tomorrow by imparting
							education. free from all prejudices with a focus on the holistic
							development of students.
						</p>
						<p>
							RHIS offers a curriculum from Grades I onwards, mapped as per the Central
							Board of Secondary Education, New Delhi. At RHIS, we encourage our
							student to learn, play and create new opportunities for themselves.
							Education is not the process of teaching by the teacher, it is the
							process to encourage the learning process of the student. Our main
							emphasis is on providing quality education and excellence in all the
							fields to inspire the students to be morally upright and possess
							qualities of integrity, truthfulness and honesty. Not only this, but we
							also develop patriotic, social and ethical values among students for
							developing responsive citizenship to revive the past glory of Indian
							culture .
						</p>
					</p>
				</div>

				{/* <Testimonials /> */}
				<RhisYouTube />
				<PopupModal open={open} handleClose={handleClose} setOpen={setOpen} />
				<CountUp />
				<Staff />
			</div>
		</>
	);
};

export default Home;
