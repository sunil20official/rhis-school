import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

export default function BasicModal({ open, handleClose, setOpen }) {
	const handleOpen = () => setOpen(true);
	// const handleClose = () => setOpen(false);

	return (
		<div>
			<Button onClick={handleOpen}>Open modal</Button>
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
								right: '23px',
								top: '25px',
								backgroundColor: 'white',
							}}
							type='button'
							class='btn-close'
						></button>
					</Typography>
					<Typography id='modal-modal-description' sx={{ mt: 2 }}>
						{/* <div
							class='modal fade'
							id='exampleModal'
							tabindex='-1'
							aria-labelledby='exampleModalLabel'
							aria-hidden='true'
						> */}
						<div class='modal-dialog '>
							<div class='modal-content'>
								<div class='modal-header '>
									<img
										src='https://www.kamalpublicschool.com/assets/images/AD-popup.jpg'
										className='w-100'
										style={{ position: 'relative' }}
										alt=''
									/>
								</div>
								<div class='modal-body'>
									<div class='row'>
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
												type='number'
												class='form-control'
												placeholder='Phone Number'
												aria-label='Phone Number'
											/>
										</div>
										<div className='col-md-12 mt-3'>
											<select class='form-control' id='EClass'>
												<option> Select Class </option>
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
												Register
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
