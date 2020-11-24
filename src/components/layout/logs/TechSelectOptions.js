import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const TechSelectOptions = ({ tech: { techs, loading } }) => {
	return (
		!loading &&
		techs !== null &&
		techs.map(tech => (
			<option key={tech.id} value={`${tech.firstname} ${tech.lastname}`}>
				{`${tech.firstname} ${tech.lastname}`}
			</option>
		))
	);
};

TechSelectOptions.propTypes = {
	techs: PropTypes.object
};

const mapStateToProps = state => ({
	tech: state.tech
});

export default connect(mapStateToProps)(TechSelectOptions);
