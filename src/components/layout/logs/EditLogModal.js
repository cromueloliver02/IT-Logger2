import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { updateLog } from '../../actions/logActions';
import PropTypes from 'prop-types';

import TechSelectOptions from './TechSelectOptions';

import M from 'materialize-css/dist/js/materialize.min.js';

const EditLogModal = ({ currentLog, updateLog }) => {
	const [message, setMessage] = useState('');
	const [tech, setTech] = useState('');
	const [attention, setAttention] = useState(false);

	useEffect(() => {
		if (currentLog) {
			setMessage(currentLog.message);
			setTech(currentLog.tech);
			setAttention(currentLog.attention);
		}
	}, [currentLog]);

	const onSubmit = e => {
		if (message === '' || tech === '') {
			M.toast({ html: 'Please enter a message and a tech.' });
		} else {
			const log = {
				id: currentLog.id,
				message,
				tech,
				attention,
				date: new Date()
			};

			// update log
			updateLog(log);

			M.toast({ html: `Log successfully updated by ${tech}...` });

			// Clear Fields
			setMessage('');
			setTech('');
			setAttention(false);
		}

		e.preventDefault();
	};

	return (
		<div id='edit-log-modal' className='modal' style={modalStyle}>
			<div className='modal-content'>
				<h4>Edit Current Log</h4>
				<div className='row'>
					<div className='input-field'>
						<input
							type='text'
							name='message'
							value={message}
							onChange={e => setMessage(e.target.value)}
						/>
					</div>
				</div>
				<div className='row'>
					<div className='input-field'>
						<select
							name='tech'
							value={tech}
							className='browser-default'
							onChange={e => setTech(e.target.value)}
						>
							<option value='' disabled>
								Select Technician
							</option>
							<TechSelectOptions />
						</select>
					</div>
				</div>

				<div className='row'>
					<div className='input-field'>
						<p>
							<label>
								<input
									type='checkbox'
									className='filled-in'
									checked={attention}
									value={attention}
									onChange={e => setAttention(!attention)}
								/>
								<span>Needs Attention</span>
							</label>
						</p>
					</div>
				</div>
			</div>
			<div className='modal-footer'>
				<a
					href='#!'
					onClick={onSubmit}
					className='modal-close waves-effect yellow black-text waves-light btn'
				>
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

EditLogModal.propTypes = {
	currentLog: PropTypes.object
};

const mapStateToProps = state => ({
	currentLog: state.log.currentLog,
	updateLog: PropTypes.func.isRequired
});

export default connect(mapStateToProps, { updateLog })(EditLogModal);
