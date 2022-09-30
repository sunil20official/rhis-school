import React, { useState } from 'react';
import './GetInTouch.css';
import { GoLocation } from 'react-icons/go';
import { MdEmail } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';

const GetInTouch = () => {
	const [data, setData] = useState({
		first_name: '',
		last_name: '',
		email: '',
		message: '',
	});

	const onChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};

	return (
		<>
			<div className='get-in-touch-container'>
				<div className='get-in-touch-form-container'>
					<div style={{ margin: '5rem 0rem' }}>
						<h1
							style={{
								margin: '2rem auto',
								paddingBottom: '1rem',
								textAlign: 'center',
								borderBottom: '3px solid #f89503',
								// width: '35%',
							}}
						>
							Get In Touch
						</h1>
						<form className='row g-2'>
							<div className='col-md-6'>
								<label htmlFor='validationDefault01' className='form-label'>
									First name
								</label>
								<input
									type='text'
									className='form-control'
									id='validationDefault01'
									name='first_name'
									value={data.first_name}
									onChange={onChange}
									required
								/>
							</div>
							<div className='col-md-6'>
								<label htmlFor='validationDefault02' className='form-label'>
									Last name
								</label>
								<input
									type='text'
									className='form-control'
									name='last_name'
									id='validationDefault02'
									value={data.last_name}
									onChange={onChange}
									required
								/>
							</div>
							<div className='col-md-12'>
								<label htmlFor='validationDefaultUsername' className='form-label'>
									Email
								</label>
								<div className='input-group'>
									<span className='input-group-text' id='inputGroupPrepend2'>
										@
									</span>
									<input
										type='text'
										className='form-control'
										name='email'
										id='validationDefaultUsername'
										aria-describedby='inputGroupPrepend2'
										onChange={onChange}
										required
									/>
								</div>
							</div>
							<div className='input-group'>
								<span className='input-group-text'> Message </span>
								<textarea
									className='form-control'
									name='message'
									aria-label='With textarea'
									onChange={onChange}
									style={{ height: '10rem' }}
								></textarea>
							</div>
							<div className='col-12' style={{ textAlign: 'center' }}>
								<button className='btn btn-primary' type='submit'>
									Submit form
								</button>
							</div>
						</form>
					</div>
				</div>
				<div className='address-container'>
					<h1
						style={{
							margin: '2rem auto',
							borderBottom: '3px solid #f89503',
							width: '60%',
							paddingBottom: '2rem',
							textAlign: 'center',
						}}
					>
						Head Office
					</h1>
					<div>
						<div className='address' style={{ marginBottom: '2rem' }}>
							<GoLocation style={{ fontSize: '35px' }} />
							<p style={{ width: '70%' }}>
								address jdskl a jfioeuroi ewuuori ewuori uewoi ruoie tuoiewr uoie uroiew
								uroiew uroi ewuroi ewuroi
							</p>
						</div>
						<div className='address'>
							<MdEmail style={{ fontSize: '35px' }} />
							<p style={{ width: '70%', marginBottom: '0px' }}>
								royalhillsinternationalschool@gmail.com
							</p>
						</div>
						<div className='address' style={{ marginTop: '2rem' }}>
							<BsFillTelephoneFill style={{ fontSize: '30px' }} />
							<p style={{ width: '70%', marginBottom: '0px' }}>9999999999</p>
						</div>
					</div>
				</div>
			</div>

			<div style={{ textAlign: 'center', margin: '2rem 0rem' }}>
				<iframe
					title='location of royal hills internation school'
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3568.084294872143!2d85.51515241487566!3d26.581670183271243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ecf1b60f77444b%3A0x945ee11e49dab320!2sRoyal%20Hills%20International%20School%20Junior!5e0!3m2!1sen!2sin!4v1662620024754!5m2!1sen!2sin'
					className='map'
					height='400'
					style={{ border: '2px soild black' }}
					allowFullScreen=''
					loading='lazy'
					referrerpolicy='no-referrer-when-downgrade'
				></iframe>
			</div>

			<div className='branch-main-container'>
				<h1
					style={{
						margin: '2rem auto',
						borderBottom: '3px solid #f89503',
						width: '60%',
						paddingBottom: '2rem',
						textAlign: 'center',
					}}
				>
					Our Branches
				</h1>
				<div className='branch-container'>
					<div className='address-container1'>
						<h1
							style={{
								margin: '2rem auto',
								borderBottom: '3px solid #f89503',
								// width: '30%',
								paddingBottom: '2rem',
								textAlign: 'center',
							}}
						>
							RHIS, Sitamarhi
						</h1>
						<div>
							<div className='address' style={{ marginBottom: '2rem' }}>
								<GoLocation style={{ fontSize: '35px' }} />
								<p style={{ width: '70%' }}>
									address jdskl a jfioeuroi ewuuori ewuori uewoi ruoie tuoiewr uoie
									uroiew uroiew uroi ewuroi ewuroi
								</p>
							</div>
							<div className='address'>
								<MdEmail style={{ fontSize: '35px' }} />
								<p style={{ width: '70%', marginBottom: '0px' }}>
									royalhillsinternationalschool@gmail.com
								</p>
							</div>
							<div className='address' style={{ marginTop: '2rem' }}>
								<BsFillTelephoneFill style={{ fontSize: '30px' }} />
								<p style={{ width: '70%', marginBottom: '0px' }}>9999999999</p>
							</div>
						</div>

						<div style={{ textAlign: 'center', margin: '2rem 0rem' }}>
							<iframe
								title='location of royal hills internation school'
								src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3568.084294872143!2d85.51515241487566!3d26.581670183271243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ecf1b60f77444b%3A0x945ee11e49dab320!2sRoyal%20Hills%20International%20School%20Junior!5e0!3m2!1sen!2sin!4v1662620024754!5m2!1sen!2sin'
								className='map'
								height='400'
								style={{ border: '0px' }}
								allowFullScreen=''
								loading='lazy'
								referrerpolicy='no-referrer-when-downgrade'
							></iframe>
						</div>
					</div>

					<div className='address-container2'>
						<h1
							style={{
								margin: '2rem auto',
								borderBottom: '3px solid #f89503',
								// width: '30%',
								paddingBottom: '2rem',
								textAlign: 'center',
							}}
						>
							Roots, Sitamarhi
						</h1>
						<div>
							<div className='address' style={{ marginBottom: '2rem' }}>
								<GoLocation style={{ fontSize: '35px' }} />
								<p style={{ width: '70%' }}>
									address jdskl a jfioeuroi ewuuori ewuori uewoi ruoie tuoiewr uoie
									uroiew uroiew uroi ewuroi ewuroi
								</p>
							</div>
							<div className='address'>
								<MdEmail style={{ fontSize: '35px' }} />
								<p style={{ width: '70%', marginBottom: '0px' }}>
									royalhillsinternationalschool@gmail.com
								</p>
							</div>
							<div className='address' style={{ marginTop: '2rem' }}>
								<BsFillTelephoneFill style={{ fontSize: '30px' }} />
								<p style={{ width: '70%', marginBottom: '0px' }}>9999999999</p>
							</div>
						</div>

						<div style={{ textAlign: 'center', margin: '2rem 0rem' }}>
							<iframe
								title='location of royal hills internation school'
								src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3568.084294872143!2d85.51515241487566!3d26.581670183271243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ecf1b60f77444b%3A0x945ee11e49dab320!2sRoyal%20Hills%20International%20School%20Junior!5e0!3m2!1sen!2sin!4v1662620024754!5m2!1sen!2sin'
								className='map'
								height='400'
								style={{ border: '0px' }}
								allowFullScreen=''
								loading='lazy'
								referrerpolicy='no-referrer-when-downgrade'
							></iframe>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default GetInTouch;
