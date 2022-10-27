import React from 'react';
import '../../../shared/management/Management.css';
import director from '../../../media/director-img.png';

const DirectorDesk = () => {
	return (
		<>
			<h1
				style={{
					textAlign: 'center',
					margin: '6rem auto 0rem',
					padding: '2rem',
					width: '80%',
					borderBottom: '#ff7000 3px solid',
				}}
			>
				From Director's Desk
			</h1>
			<div className='management-container'>
				<div className='man-image-container'>
					<img
						className='management-image'
						src={director}
						alt='director of school'
					/>
				</div>
				<div className='man-message-container'>
					<h4 style={{ fontWeight: '700', marginLeft: '0px' }}> Ashutosh Vibhu </h4>
					<h6 style={{ marginBottom: '0px', fontWeight: '700' }}>Director,</h6>
					<p> RHIS , Lerro Learning Foundation</p>
					<p className='management-message'>
						Ryan Group is the realization of a vision. A vision to transform the
						educational landscape in the country and to make quality education
						available for one and all. From humble beginnings to one of the largest
						privately run educational institutes in the country, the story of Ryan
						Group is a tale written in spunk, enterprise and a compelling desire for
						palpable social change.
						<br />
						<br/>
						It was in 1976 that Dr. Augustine F. Pinto, a
						graduate from the reputed Loyola College, Chennai, laid the foundation of
						this vision. The initial setbacks and challenges were never a concern for
						this man who had tremendous faith in God and in his dream. It is his
						commitment, prudence and visionary approach to school education that has
						made him one of the most admired figures in the contemporary education
						sector.
					</p>
				</div>
			</div>
		</>
	);
};

export default DirectorDesk;
