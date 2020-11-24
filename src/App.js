import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './store';

import SearchBar from './components/layout/SearchBar';
import Logs from './components/layout/logs/Logs';
import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/layout/logs/AddLogModal';
import EditLogModal from './components/layout/logs/EditLogModal';
import TechListModal from './components/layout/techs/TechListModal';
import AddTechModal from './components/layout/techs/AddTechModal';
import EditTechModal from './components/layout/techs/EditTechModal';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

const App = () => {
	useEffect(() => {
		// Init Materialize JS
		M.AutoInit();
		// eslint-disable-next-line
	}, []);

	return (
		<Provider store={store}>
			<div className='App'>
				<SearchBar />
				<div className='container'>
					<Logs />
					<AddBtn />
					<AddLogModal />
					<EditLogModal />
					<TechListModal />
					<AddTechModal />
					<EditTechModal />
				</div>
			</div>
		</Provider>
	);
};

export default App;
