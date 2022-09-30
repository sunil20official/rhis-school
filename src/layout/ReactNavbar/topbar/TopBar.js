import React from 'react';
import './TopBar.css';

import {
	AiOutlineInstagram,
	// AiOutlineLinkedin,
	// AiFillTwitterCircle,
	AiOutlineYoutube,
} from 'react-icons/ai';
import { FiFacebook } from 'react-icons/fi';
import { BsTelephone } from 'react-icons/bs';

import { Link } from 'react-router-dom';
import logo from '../../../media/logo-rhis-cropped.jpeg';

const TopBar = () => {
	return (
		<div className='fixed-top-bar'>
			<div className='logo-container'>
				<img className='logo-image' src={logo} alt='logo' />
			</div>
			<div className='list-container'>
				<ul>
					<li>
						<Link to='tel:8766265528'>
							<BsTelephone style={{ fontSize: '24px', padding: '0px 4px' }} />
							12345679
						</Link>
					</li>
					<li>
						<Link to='/admission'>Admissions</Link>
					</li>
					<li>
						<a
							href='https://rhis.nletschool.com/site/login'
							rel='noreferrer'
							target='_blank'
						>
							ERP Login
						</a>
						{/* <Link to="http://erp.rhis.co.in/">Parent Login</Link> */}
					</li>
					<li>
						<Link to='/contact-us'>Get In Touch</Link>
					</li>
					<li>
						<Link to='/google.com'>
							<FiFacebook style={{ fontSize: '19px' }} />
						</Link>
					</li>
					<li>
						<Link to='/'>
							<AiOutlineInstagram style={{ fontSize: '19px' }} />
						</Link>
					</li>
					{/* <li>
            <Link to="/">
              <AiOutlineLinkedin style={{ fontSize: "19px" }} />
            </Link>
          </li> */}
					{/* <li>
            <Link to="/">
              <AiFillTwitterCircle style={{ fontSize: "19px" }} />
            </Link>
          </li> */}
					<li>
						<Link to='/'>
							<AiOutlineYoutube style={{ fontSize: '19px' }} />
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default TopBar;
