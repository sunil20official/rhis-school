import React from 'react';
import './Management.css';
import principal from '../../media/principal.png';

const Management = () => {
	return (
		<div className='management-container'>
			<div className='man-image-container'>
				<img
					className='management-image'
					src={principal}
					alt='director of school'
				/>
			</div>
			<div className='man-message-container'>
				<h4 style={{ fontWeight: '700' }}>Dr. Principal Name </h4>
				<h5>Principal , Royal Hills International School</h5>
				<p className='management-message'>
					Ryan Group is the realization of a vision. A vision to transform the
					educational landscape in the country and to make quality education
					available for one and all. From humble beginnings to one of the largest
					privately run educational institutes in the country, the story of Ryan
					Group is a tale written in spunk, enterprise and a compelling desire for
					palpable social change. It was in 1976 that Dr. Augustine F. Pinto, a
					graduate from the reputed Loyola College, Chennai, laid the foundation of
					this vision. The initial setbacks and challenges were never a concern for
					this man who had tremendous faith in God and in his dream. It is his
					commitment, prudence and visionary approach to school education that has
					made him one of the most admired figures in the contemporary education
					sector.
				</p>
			</div>
		</div>
	);
};

export default Management;
