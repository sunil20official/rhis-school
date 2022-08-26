import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

import './Footer.css';

const Footer = () => {
	return (
		<div className='footer'>
			<div className='container'>
				<div className='row'>
					<div className='footer-col'>
						<h4>Our School</h4>
						<ul>
							<li>
								<a href='#'>Academic Cirricular</a>
							</li>
							<li>
								<a href='#'>Visit Us</a>
							</li>
							<li>
								<a href='#'>Contact Us</a>
							</li>
							<li>
								<a href='#'>Public Information</a>
							</li>
						</ul>
					</div>

					<div className='footer-col'>
						<h4>Our Facilites</h4>
						<ul>
							<li>
								<a href='#'>Libraries</a>
							</li>
							<li>
								<a href='#'>Conferences</a>
							</li>
							<li>
								<a href='#'>Sports Events</a>
							</li>
							<li>
								<a href='#'>Cultural Events</a>
							</li>
						</ul>
					</div>

					<div className='footer-col'>
						<h4>Connect with us </h4>
						<ul>
							<li>
								<a href='#'>New Students</a>
							</li>
							<li>
								<a href='#'>Alumni</a>
							</li>
							<li>
								<a href='#'>Blogs</a>
							</li>
						</ul>
					</div>

					<div className='footer-col'>
						<h4>Follow Us</h4>
						<div className='social-links'>
							<a href='#'>
								<FontAwesomeIcon icon={faFacebook} />
							</a>

							<a href='#'>
								<FontAwesomeIcon icon={faTwitter} />
							</a>

							<a href='#'>
								<FontAwesomeIcon icon={faInstagram} />
							</a>

							<a href='#'>
								<FontAwesomeIcon icon={faLinkedin} />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
