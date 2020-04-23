import { combineReducers } from 'redux';

const songsReducer = () => {
	return [
		{ title: 'No Scrubs', duration: '4:09', author: 'TLC' },
		{ title: 'Macarena', duration: '3:50', author: 'Antoine Niagne' },
		{ title: 'All Star', duration: '3:57', author: 'Smash Mouth' },
		{ title: 'I Want it That Way', duration: '3:40', author: 'Backstreet Boys' }
	];
};

const selectedSongReducer = (selectedSong = null, action) => {
	if (action.type === 'SONG_SELECTED') {
		return action.payload;
	}

	return selectedSong;
};

export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer
});
