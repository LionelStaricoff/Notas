 const jsondb = './db.json'
  
 //importScripts('./json/db.json');
/*
 const datos =  fetch(jsondb)
 .then(response => response.json())
 .then(data => {
   console.log(data)})*/
  
  let db;
  
  self.addEventListener('install', (event) => {
    event.waitUntil(
      fetch(jsondb)
        .then(response => response.json())
        .then(data => {
          db = data;
        })
        .catch(e => console.error('no se puedo instalar el json') )
    );
  });
  
  self.addEventListener('message', (event) => {
    switch (event.data.action) {
     
      case 'read':
        fetch(jsondb)
        .then(data => data.json())
        .then(n => util.cargarNotalAlFront(n))
        .catch(  util.promptBase('Error al cargar las notas '))
        break;


      case 'update':
        const usuarioActualizado = event.data.usuario;
        db = util.traerTodasLasNotasDelFront();
        fetch(jsondb, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(db)
        });
        break;
    
    }
  });
  