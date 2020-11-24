import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { updateTech } from '../../actions/techActions';
import PropTypes from 'prop-types';

import M from 'materialize-css/dist/js/materialize.min.js';

const EditTechModal = ({ currentTech, updateTech }) => {
	const [firstname, setFirstname] = useState('');
	const [lastname, setLastname] = useState('');

	useEffect(() => {
		if (currentTech) {
			setFirstname(currentTech.firstname);
			setLastname(currentTech.lastname);
		}
	}, [currentTech]);

	const onSubmit = e => {
		if (firstname === '' || lastname === '') {
			M.toast({ html: 'Please enter firstname and lastname.' });
		} else {
			const tech = {
				id: currentTech.id,
				firstname,
				lastname
			};

			// update log
			updateTech(tech);

			M.toast({ html: `${tech.firstname} ${tech.lastname} tech awas successfully updated...` });

			// Clear Fields
			setFirstname('');
			setLastname('');
		}

		e.preventDefault();
	};

	return (
		<div id='edit-tech-modal' className='modal' style={modalStyle}>
			<div className='modal-content'>
				<h4>Edit Current Log</h4>
				<div className='row'>
					<div className='input-field'>
						<input
							type='text'
							name='firstname'
							value={firstname}
							onChange={e => setFirstname(e.target.value)}
						/>
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
					</div>
				</div>
			</div>
			<div className='modal-footer'>
				<a
					href='#!'
					onClick={onSubmit}
					className='modal-close waves-effect yellow black-text waves-light btn'
				>
					Update
				</a>
			</div>
		</div>
	);
};

const modalStyle = {
	width: '75%',
	height: '75%'
};

EditTechModal.propTypes = {
	currentTech: PropTypes.object,
	updateTech: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	currentTech: state.tech.currentTech
});

export default connect(mapStateToProps, { updateTech })(EditTechModal);
