import React from 'react';
import { connect } from 'react-redux';
import { deleteLog, setCurrentLog } from '../../actions/logActions';
import Moment from 'react-moment';
import PropTypes from 'prop-types';

import M from 'materialize-css/dist/js/materialize.min';

const LogItem = ({ log, deleteLog, setCurrentLog }) => {
	const onDelete = e => {
		deleteLog(log.id);

		M.toast({ html: 'Log deleted successfully...' });

		e.preventDefault();
	};

	const onEdit = e => {
		setCurrentLog(log);

		e.preventDefault();
	};

	return (
		<li className='collection-item'>
			<div>
				<a
					href='#edit-log-modal'
					className={`modal-trigger ${log.attention ? 'red-text' : 'blue-text'}`}
					onClick={onEdit}
				>
					{log.message}
				</a>
				<a href='#!' className='secondary-content red-text' onClick={onDelete}>
					<i className='material-icons'>delete</i>
				</a>
				<br />
				<span className='grey-text'>
					<span className='black-text'>ID #{log.id}</span> last updated by{' '}
					<span className='black-text'>{log.tech}</span> on{' '}
					<Moment format='MMMM Do YYYY, h:mm:ss a'>{log.date}</Moment>
				</span>
			</div>
		</li>
	);
};

LogItem.propTypes = {
	log: PropTypes.object.isRequired,
	deleteLog: PropTypes.func.isRequired,
	setCurrentLog: PropTypes.func.isRequired
};

export default connect(null, { deleteLog, setCurrentLog })(LogItem);
