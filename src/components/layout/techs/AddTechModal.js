import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTech } from '../../actions/techActions';
import PropTypes from 'prop-types';

import M from 'materialize-css/dist/js/materialize.min.js';

const AddTechModal = ({ addTech }) => {
	const [firstname, setFirstname] = useState('');
	const [lastname, setLastname] = useState('');

	const onSubmit = e => {
		if (firstname === '' || lastname === '') {
			M.toast({ html: 'Please enter firstname and lastname.' });
		} else {
			const tech = {
				firstname,
				lastname
			};

			// add tech
			addTech(tech);

			M.toast({ html: 'New tech added successfully...' });

			// Clear Fields
			setFirstname('');
			setLastname('');
		}

		e.preventDefault();
	};

	return (
		<div id='add-tech-modal' className='modal' style={modalStyle}>
			<div className='modal-content'>
				<h4>Add Technician</h4>
				<div className='row'>
					<div className='input-field'>
						<input
							type='text'
							name='firstname'
							value={firstname}
							onChange={e => setFirstname(e.target.value)}
						/>
						<label htmlFor='message' className='active'>
							First name
						</label>
					</div>
				</div>
				<div className='row'>
					<div className='input-field'>
						<input
							type='text'
							name='lastname'
							value={lastname}
							onChange={e => setLastname(e.target.value)}
						/>
						<label htmlFor='message' className='active'>
							Last name
						</label>
					</div>
				</div>
			</div>
			<div className='modal-footer'>
				<a href='#!' onClick={onSubmit} className='modal-close waves-effect red waves-light btn'>
					Enter
				</a>
			</div>
		</div>
	);
};

const modalStyle = {
	width: '75%',
	height: '75%'
};

AddTechModal.propTypes = {
	addTech: PropTypes.func.isRequired
};

export default connect(null, { addTech })(AddTechModal);
