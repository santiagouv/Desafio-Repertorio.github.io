let canciones = [];

const cancionesController = {
  getAllCanciones: (req, res) => {
    res.json(canciones);
  },

  createCancion: (req, res) => {
    const { titulo, artista, tono } = req.body;
    const id = canciones.length + 1;
    const nuevaCancion = { id, titulo, artista, tono };
    canciones.push(nuevaCancion);
    res.status(201).json(nuevaCancion);
  },

  updateCancion: (req, res) => {
    const { id } = req.params;
    const { titulo, artista, tono } = req.body;
    const cancion = canciones.find(c => c.id === parseInt(id));
    if (!cancion) {
      return res.status(404).json({ message: 'Canción no encontrada' });
    }
    cancion.titulo = titulo;
    cancion.artista = artista;
    cancion.tono = tono;
    res.json(cancion);
  },

  deleteCancion: (req, res) => {
    const { id } = req.params;
    canciones = canciones.filter(c => c.id !== parseInt(id));
    res.json({ message: 'Canción eliminada correctamente' });
  }
};

module.exports = cancionesController;
