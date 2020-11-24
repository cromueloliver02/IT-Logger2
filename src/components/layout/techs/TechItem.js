import React from 'react';
import { connect } from 'react-redux';
import { deleteTech, setCurrentTech } from '../../actions/techActions';
import PropTypes from 'prop-types';

import M from 'materialize-css/dist/js/materialize.min';

const TechItem = ({ tech, deleteTech, setCurrentTech }) => {
	const onDelete = e => {
		// delete tech
		deleteTech(tech.id);

		M.toast({ html: 'Tech deleted successfully...' });

		e.preventDefault();
	};

	const onEdit = e => {
		// set current tech
		setCurrentTech(tech);

		e.preventDefault();
	};

	return (
		<li className='collection-item'>
			<div>
				<span>
					<a href='#edit-tech-modal' className='modal-trigger' onClick={onEdit}>
						{tech.firstname} {tech.lastname}
					</a>
				</span>
				<a href='#!' className='secondary-content' onClick={onDelete}>
					<i className='material-icons red-text'>delete</i>
				</a>
			</div>
		</li>
	);
};

TechItem.propTypes = {
	tech: PropTypes.object.isRequired,
	deleteTech: PropTypes.func.isRequired,
	setCurrentTech: PropTypes.func.isRequired
};

export default connect(null, { deleteTech, setCurrentTech })(TechItem);
