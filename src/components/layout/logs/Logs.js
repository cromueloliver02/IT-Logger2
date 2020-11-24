import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getLogs } from '../../actions/logActions';

import LogItem from '../logs/LogItem';
import Preloader from '../Preloader';

const Logs = ({ log: { logs, loading }, getLogs }) => {
	useEffect(() => {
		getLogs();
		// eslint-disable-next-line
	}, []);

	if (loading || logs === null) {
		return <Preloader />;
	}

	return (
		<ul className='collection with-header'>
			<li className='collection-header'>
				<h4 className='center'>System Logs</h4>
			</li>
			{!loading && logs.length === 0 ? (
				<p className='center'>No logs to show...</p>
			) : (
				logs.map(log => <LogItem key={log.id} log={log} />)
			)}
		</ul>
	);
};

const mapStateToProps = state => ({
	log: state.log
});

export default connect(mapStateToProps, { getLogs })(Logs);
