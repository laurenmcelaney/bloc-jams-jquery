{
   $('button#play-pause').on('click', function() {
     helper.playPauseAndUpdate();
     $(this).attr('playState', player.playState);
   });

  $('button#next').on('click', function() {
    if (player.playState !== 'playing') { return; }

     const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
     const nextSongIndex = currentSongIndex + 1;
     const nextSong = album.songs[nextSongIndex];
     if (nextSongIndex >= album.songs.length) { return; }

     helper.playPauseAndUpdate(nextSong);
  });

   $('button#previous').on('click', function() {
     if (player.playState !== 'playing') { return; }

      const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
      const previousSongIndex = currentSongIndex - 1;
      const previousSong = album.songs[previousSongIndex];
      if (previousSongIndex >= album.songs.length) { return; }

     helper.playPauseAndUpdate(previousSong);
  });
}
