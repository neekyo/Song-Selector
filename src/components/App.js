import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';

const App = () => {
	return (
		<React.Fragment>
			<div className="ui container grid">
				<h1 id="header">Playlist</h1>
				<div className="ui row">
					<div className="column eight wide list">
						<SongList />
					</div>
					<div className="column eight wide list">
						<SongDetail />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default App;
