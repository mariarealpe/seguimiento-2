let verificar= prompt (estadoComputadora(pitido, discoDuro)) 
    if (pitido && discoDuro) {
        console.log("La computadora está averiada");
    } else if (pitido && !discoDuro) {
        console.log("Verificar contactos de la unidad");
    } else if (!pitido && !discoDuro) {
        console.log("Traer la computadora para repararla en la central.");
    } else if (!pitido && discoDuro) {
        console.log("Compruebe las conexiones de altavoces");
    }
