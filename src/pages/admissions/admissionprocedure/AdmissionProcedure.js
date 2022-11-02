import React from 'react';
import './AdminProcedure.css';
import { Link } from 'react-router-dom';

const AdmissionProcedure = () => {
	return (
		<div className='admn-proc-cont container-fluid'>
			<h1
				style={{
					textAlign: 'center',
					margin: '7rem auto 2rem',
					padding: '2rem',
					width: '100%',
					borderBottom: '#ff7000 3px solid',
				}}
			>
				Admission Procedure
			</h1>
			<p>
				Admission is granted on the basis of an{' '}
				<strong>entrance examination</strong> conducted by the school.{' '}
				<strong>Meritorious students</strong> from Schools having a good academic
				record may be granted direct admission providing they provide the last
				two-year certified mark sheets from their present schools.
			</p>
			<p>
				The school academic session starts in the first week of April every year and
				ends on March 31st of the subsequent year. Hence applications for admission
				for Day Scholars must ordinarily reach the school latest by 31 March in the
				year that admission is sought.
			</p>
			<p>
				It is desirable that all admission formalities be completed well before the
				end of March. However limited vacancies may exist in the middle of the
				academic year. Information on midyear vacancies may be obtained by emailing
				the schools{' '}
				<strong>Admissions Coordinator Principal and account office.</strong>
			</p>

			<br />
			<br />
			<p>
				<strong>Registration/Admission Form –</strong> The registration /admission
				form may be printed from the website or obtained from the school admissions
				office. This form must be completed and sent to the school along with all
				the documents mentioned on the form to enable the school to process the
				application.
			</p>
			<p>
				<strong>Entrance Examination –</strong> The school conducts an entrance
				examination for children seeking admission to Royal Hills International
				School Juniorand Royal Hills International School. These entrance
				examinations are conducted well before the commencement of the new academic
				session. The dates on which these entrance examinations will be conducted
				are communicated well in advance by the school admissions office to the
				parents of children seeking admission. Offers for admissions will be made on
				the basis of the results of these examinations and will depend on the number
				of vacancies in each class.
			</p>
			<p>
				<strong>Entrance Examination Exemption –</strong> The school also has a
				provision of direct offer of admission to children with a proven academic
				record in their old school. For parents who wish to apply for an entrance
				examination exemption and seek direct admission for their ward, it is
				essential that they enclose the last two years report cards and supporting
				certificates/testimonials. On receipt of the application, the school will
				revert with an offer of admission if the School Admissions Committee
				approves the application.
			</p>
			<br />
			<br />
			{/* <PdfFlipbook /> */}
			{/* <div className='container-fluid'>
				<div className='col-md-12'>
					<iframe
						id='theFrame'
						src='https://dancing-sunflower-14dc96.netlify.app/'
						style={{ width: '100%', height: '100vh' }}
						frameborder='0'
					></iframe>
				</div>
			</div> */}
			<h3>Download Resources</h3>
			<ul>
				<li>
					<li>
						<a
							href='https://rhis-prospectus.netlify.app/'
							target='_blank'
							rel='noreferrer'
						>
							Online Flip Prospectus
						</a>
					</li>
				</li>
				{/* <li>
					<Link to='/'>Prospectus RHIS</Link>
				</li>
				<li>
					<Link to='/'>Prospectus Roots</Link>
				</li>
				<li>
					<Link to='/'>School Admission Form</Link>
				</li>
				<li>
					<Link to='/'>School Transport Form</Link>
				</li>
				<li>
					<Link to='/'>Medical Form</Link>
				</li> */}
			</ul>
			<br />
			<br />
			<h3>Note:</h3>
			<ul>
				<li>
					<p>
						Age Criteria must be followed which is directed by the State Education
						Board.
					</p>
				</li>
				<li>
					<p>
						The school reserves the right to admit a student in the appropriate class
						after examining the student. Even after the admission is granted the
						student can either be adjusted in a lower or higher class, whichever the
						case may be, depending upon the student’s ability at the discretion of the
						authorities.
					</p>
				</li>
				<li>
					<p>
						The School Management reserves to itself the right to admit or refuse
						pupils seeking admission to the school without furnishing any reasons
						whatsoever. Similarly, the management decides when the question of
						retaining a student in school arises.
					</p>
				</li>
				<li>
					<p>
						The school reserves the right to revise the fee as determined by the
						School Board of Management. The fee revision will be linked with the
						national cost of living index and current inflation rates which may amount
						to an increase of 10-12% annually or more. The school management can
						increase the transport fee with the increase in fuel rates.
					</p>
				</li>
				<li>
					<p>
						Admission is strictly subject to fulfilling all conditions and submission
						of requisite documents .TC from the previous school must be submitted
						within 15 days after the commencement of the academic session.
					</p>
				</li>
				<li>
					<p>
						Please refer to the School Admission Form, Transport and Medical Form for
						various Terms and Conditions, Document Checklists and other clauses
						subject to your ward’s admission.
					</p>
				</li>
				<li>
					<p>Please read and fill the form carefully.</p>
				</li>
			</ul>
		</div>
	);
};

export default AdmissionProcedure;
