import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
	if (!song) {
		return <em>Select a song!</em>;
	}

	return (
		<div className="list">
			<h3>Details:</h3>
			<p>
				<b>Title:</b> {song.title}
				<br />
				<b>Author:</b> {song.author}
				<br />
				<b>Duration:</b> {song.duration}
			</p>
		</div>
	);
};

const mapStateToProps = (state) => {
	return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
