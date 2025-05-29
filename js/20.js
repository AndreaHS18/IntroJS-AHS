// Métodos de propiedad
const player = {
    play: function(id) {
        console.log(`Reproduciendo canción con ID ${id}`);
    },
    pause: function() {
        console.log('Pausando...');
    },
    createPlaylist: function(name) {
        console.log(`Creando playlist ${name}`);
    },
    playPlaylist: function(name) {
        console.log(`Reproduciendo playlist ${name}`);
    }
}

player.delete = function(id) {
    console.log(`Eliminando la canción con ID ${id}`);
}

player.play(10);
player.pause();
player.delete(20);
player.createPlaylist('Pop');
player.playPlaylist('Pop');

console.log(player);