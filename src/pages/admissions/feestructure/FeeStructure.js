import React from 'react';

const FeeStructure = () => {
	return (
		<div style={{ margin: '4rem auto 60vh' }}>
			<h1
				style={{
					textAlign: 'center',
					margin: '5rem auto 1rem',
					padding: '1rem',
					width: '80%',
					borderBottom: '#ff7000 3px solid',
				}}
			>
				Fee Details
			</h1>
			<ul style={{ listStyle: 'none' }}>
				<li style={{ margin: '3rem auto' }}>
					<a href='/' target='_blank' rel='noreferrer'>
						<button className='btn btn-primary'>RHIS Fee Structure</button>
					</a>
				</li>
				<li style={{ margin: '3rem auto' }}>
					<a href='/' target='_blank' rel='noreferrer'>
						<button className='btn btn-primary'>Roots Fee Structure</button>
					</a>
				</li>
			</ul>
		</div>
	);
};

export default FeeStructure;
