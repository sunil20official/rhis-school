import * as React from 'react';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
	outline:'none',
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 450,
	bgcolor: 'background.paper',
	border: '1px solid white',
	boxShadow: 24,
	p: 0,
	mt: 1.5,
};

export default function BasicModal({ open, handleClose, setOpen }) {
	// eslint-disable-next-line
	const handleOpen = () => setOpen(true);
	// const handleClose = () => setOpen(false);

	return (
		<div>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<Box sx={style}>
					<Typography id='modal-modal-title' variant='h6' component='h2'>
						<button
							onClick={() => handleClose()}
							style={{
								position: 'absolute',
								right: '10px',
								top: '15px',
								backgroundColor: 'white',
							}}
							type='button'
							class='btn-close fs-6'
						></button>
					</Typography>
					<Typography id='modal-modal-description' sx={{ mt: 2 }}>
						<div class='modal-dialog p-2' style={{marginTop:"35px"}}>
							<div class='modal-content'>
								<div class='modal-body'>
									<div class='row'>
										<div className='col-md-12 mb-3'>
											<select class='form-control' id='EClass'>
												<option> - Select Academic Session - </option>
												<option> 2022-2023 </option>
												<option> 2023-2024 </option>
											</select>
										</div>

										<div className='col-md-12 mb-3'>
											<input
												type='text'
												class='form-control'
												placeholder='Parent name'
												aria-label='Parent name'
											/>
										</div>
										<div class='col'>
											<input
												type='text'
												class='form-control'
												placeholder='First name'
												aria-label='First name'
											/>
										</div>
										<div class='col'>
											<input
												type='text'
												class='form-control'
												placeholder='Last name'
												aria-label='Last name'
											/>
										</div>
										<div class='col-md-12 mt-3'>
											<input
												type=''
												class='form-control'
												placeholder='Phone Number'
												aria-label='Phone Number'
											/>
										</div>
										<div className='col-md-12 mt-3'>
											<select class='form-control' id='EClass'>
												<option> Select Grade </option>
												<option> Nursery </option>
												<option> Class I </option>
												<option> Class II </option>
												<option> Class II </option>
												<option> Class IV </option>
												<option> Class V </option>
												<option> Class VI </option>
											</select>
										</div>

										<div class='text-center mt-3'>
											<button
												type='submit'
												id='btnSuscribe'
												class='btn btn-primary submit-pop'
											>
												ENQUIRE NOW
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* </div> */}
					</Typography>
				</Box>
			</Modal>
		</div>
	);
}
