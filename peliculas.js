// Datos de las películas
const movies = [
    {
      title: 'A tres metros sobre el cielo',
      description: '"A tres metros sobre el cielo" es una historia cautivadora que narra el encuentro de dos jóvenes, Hache y Babi, provenientes de mundos completamente diferentes. Hache es un joven rebelde, amante de las carreras ilegales de motocicletas y de vivir al límite. Por otro lado, Babi es una chica responsable y educada, hija de una familia adinerada. A pesar de sus diferencias, cuando sus caminos se cruzan, surge una intensa conexión que los lleva a embarcarse en un romance apasionado. Juntos, descubren el amor y enfrentan los desafíos que se interponen en su camino, luchando contra los estereotipos y las expectativas de la sociedad. "A tres metros sobre el cielo" es una historia de amor prohibido y emociones desbordantes, donde los protagonistas deberán aprender a equilibrar sus diferencias y superar las adversidades para encontrar la felicidad verdadera.',
      image: 'imgs/3metros.jpg',
      video: 'imgs/a3msc.gif',
      gif: 'imgs/a3msc.gif',
      año: 2004,
      director: 'Fernando González Molina',
      trailer: "https://www.youtube.com/watch?v=heOcee5ZB9c",
      imdb: 6.8
    },
    {
      title: '10 Razones para odiarte',
      description: '"10 razones para odiarte" es una encantadora comedia romántica que gira en torno a la vida de dos adolescentes, Kat y Patrick. La trama se desarrolla en una escuela secundaria, donde Cameron se enamora perdidamente de Bianca, pero se encuentra con el obstáculo de que el estricto padre de Bianca ha impuesto la regla de que ella solo puede tener citas si su hermana mayor, Kat, también lo hace. En un intento desesperado por estar con Bianca, Cameron convence a Patrick, un chico problemático, de que conquiste a Kat. A medida que Patrick se acerca a Kat, surgen situaciones cómicas y románticas. A través de un enredo de malentendidos y revelaciones, los personajes descubren el verdadero amor y aprenden a romper las barreras sociales y emocionales. "10 razones para odiarte" es una historia divertida y conmovedora que muestra cómo el amor puede florecer en los lugares más inesperados y desafiar las expectativas de todos.',
      image: 'imgs/10razones.jpg',
      video: 'imgs/rvf.gif',
      gif: 'imgs/rvf.gif',
      año: 1999,
      director: 'Gil Junger',
      trailer: 'https://www.youtube.com/watch?v=2L2qi0KW0jM',
      imdb: 7.3
    },
    {
      title: 'Querido Jhon',
      description: '"Querido John" es un conmovedor drama romántico que cuenta la historia de John, un soldado que se enamora de Savannah, una joven estudiante universitaria. Su amor florece rápidamente durante un verano mágico, pero se ven obligados a separarse cuando John debe regresar al servicio militar. A través de cartas apasionadas, mantienen su conexión a pesar de la distancia y las circunstancias adversas. Sin embargo, el destino les depara desafíos inesperados que pondrán a prueba su amor y lealtad. "Querido John" explora la fuerza del amor verdadero en medio de los sacrificios, las decisiones difíciles y las realidades del tiempo y la distancia. Esta emotiva historia nos muestra cómo el amor puede perdurar incluso en las circunstancias más difíciles y cómo los lazos entre las personas pueden trascender cualquier obstáculo.',
      image: 'imgs/jhon.jpg',
      video: 'imgs/dearjohn.gif',
      gif: 'imgs/dearjohn.gif',
      año: 2010,
      director: 'Lasse Hallström',
      trailer: 'https://www.youtube.com/watch?v=xTveWRygCmo',
      imdb: 6.3
    },
    {
      title: 'Dirty Dancing',
      description: '"Dirty Dancing" es un icónico drama romántico que transporta a los espectadores a los años 60. La historia sigue a Baby, una joven de familia adinerada que pasa sus vacaciones en un exclusivo resort de verano. Allí, se enamora del carismático instructor de baile, Johnny Castle. A pesar de las diferencias sociales y las expectativas impuestas por sus padres, Baby decide aprender a bailar y se convierte en la pareja de Johnny en una competencia de baile. A medida que su relación se intensifica, ambos descubren la importancia del amor, la valentía y la lucha por lo que desean. "Dirty Dancing" es una emocionante historia que combina música, baile y romance, transmitiendo un mensaje de empoderamiento y liberación a través del arte y el amor.',
      image: 'imgs/Dirty_Dancing.jpg',
      video: 'imgs/dirty.gif',
      gif: 'imgs/dirty.gif',
      año: 1987,
      director: 'Emile Ardolino',
      trailer: 'https://youtu.be/0rzsa_KEoKs',
      imdb: 7.0
    },
    {
      title: 'A todos los chicos de los que me enamoré',
      description: '"A todos los chicos de los que me enamoré" es una encantadora comedia romántica que sigue la vida de Lara Jean, una adolescente tímida y soñadora. Su vida da un giro inesperado cuando las cartas de amor secretas que escribió para cada chico del que se ha enamorado son misteriosamente enviadas. Esto desata una serie de situaciones embarazosas y románticas, incluyendo su inesperado romance con Peter, uno de los destinatarios de las cartas. A medida que Lara Jean se adentra en el mundo del amor y la autenticidad, descubre la importancia de enfrentar sus miedos y seguir su propio corazón. "A todos los chicos de los que me enamoré" es una historia dulce y divertida que celebra el crecimiento personal, la amistad y el poder del amor verdadero.',
      image: 'imgs/chicos.jpg',
      video: 'imgs/blav.gif',
      gif: 'imgs/blav.gif',
      año: 2018,
      director: 'Susan Johnson',
      trailer: 'https://www.youtube.com/watch?v=3gAKmD51ML4',
      imdb: 7.1
    },
    {
      title: 'El Truco Final',
      description: '"El truco final" es un intrigante thriller que gira en torno a dos magos rivales, Robert Angier y Alfred Borden, en la Londres victoriana. La competencia entre ellos se convierte en una obsesión destructiva, donde ambos magos están dispuestos a ir más allá de los límites para superarse mutuamente. A medida que sus trucos se vuelven cada vez más peligrosos y complejos, se desencadena una serie de eventos llenos de traición, engaño y secretos oscuros. Esta película te sumergirá en un mundo lleno de ilusiones y te mantendrá al borde de tu asiento mientras descubres el increíble giro final que revela la verdadera naturaleza de su rivalidad. "El truco final" es un cautivador viaje a través de la magia, el engaño y la obsesión, que te mantendrá adivinando hasta el último momento.',
      image: 'imgs/theprestige.jpg',
      video: 'imgs/prestige.gif',
      gif: 'imgs/prestige.gif',
      año: 2006,
      director: 'Christopher Nolan',
      trailer: 'https://www.youtube.com/watch?v=V6OffjwxpDs',
      imdb: 8.5
    },
    {
      title: 'Orgullo y Prejuicio',
      description: '"Orgullo y Prejuicio" es un clásico romance literario llevado a la pantalla grande que nos transporta a la Inglaterra del siglo XIX. La historia se centra en la joven y decidida Elizabeth Bennet, quien se encuentra inmersa en un mundo de etiqueta y matrimonio arreglado. Cuando conoce al apuesto y arrogante señor Darcy, comienza una tensa relación llena de prejuicios y malentendidos. A medida que Elizabeth y Darcy se enfrentan a sus propias limitaciones y prejuicios, descubren que sus primeras impresiones pueden no ser tan confiables como creían. A través de un delicado juego de amor, deseo y superación social, "Orgullo y Prejuicio" nos muestra la importancia de mirar más allá de las apariencias y encontrar la verdadera conexión emocional. Una historia de amor eterno y un retrato perspicaz de la sociedad de la época, esta película nos cautiva con su belleza y su mensaje atemporal.',
      image: 'imgs/orgullo.jpg',
      video: 'imgs/orgullo.gif',
      gif: 'imgs/orgullo.gif',
      año: 2005,
      director: 'Joe Wright',
      trailer: 'https://www.youtube.com/watch?v=Ov0PdD5c7m0',
      imdb: 7.8
    },
    {
      title: 'Call me by your Name',
      description: '"Call Me by Your Name" es una hermosa historia de amor ambientada en la Italia de los años 80. Elio, un joven introvertido y talentoso, se enamora de Oliver, un estudiante graduado estadounidense que pasa el verano en la casa de su familia. A medida que se desarrolla su relación, Elio y Oliver experimentan una conexión intensa y apasionada, explorando su sexualidad y descubriendo la belleza del primer amor. La película captura de manera magistral los sentimientos de descubrimiento, vulnerabilidad y crecimiento emocional mientras los personajes se enfrentan a la realidad de una relación transitoria. "Call Me by Your Name" es una obra maestra cinematográfica que celebra el poder del amor y el despertar de la identidad personal, dejando una huella duradera en el corazón del espectador.',
      image: 'imgs/name.jpg',
      video: 'imgs/callme.gif',
      gif: 'imgs/callme.gif',
      año: 2017,
      director: 'Luca Guadagnino',
      trailer: 'https://www.youtube.com/watch?v=CDR8oapp2Wo',
      imdb: 7.9
    },
    {
      title: 'Antes de ti',
      description: '"Antes de ti" es un emotivo drama romántico que narra la historia de Louisa, una joven optimista y llena de vida, y Will, un hombre exitoso pero paralizado después de un trágico accidente. A medida que Louisa se convierte en la cuidadora de Will, surge una conexión especial entre ellos, desafiando las barreras emocionales y físicas. Juntos, exploran el amor, la aceptación y el significado de la vida. Sin embargo, se enfrentan a la dolorosa realidad de que Will ha tomado una decisión que cambiará sus vidas para siempre. "Antes de ti" es una historia poderosa que aborda temas profundos como la discapacidad, la libertad de elección y el valor de vivir plenamente cada día. Nos enseña la importancia de encontrar la felicidad en los momentos más difíciles y cómo el amor puede transformar y sanar incluso en las circunstancias más desafiantes.',
      image: 'imgs/antes.jpg',
      video: 'imgs/antes de ti.gif',
      gif: 'imgs/antes de ti.gif',
      año: 2016,
      director: 'Thea Sharrock',
      trailer: 'https://www.youtube.com/watch?v=y-tS4DcM-Ug',
      imdb: 7.4
    },
    {
      title: 'A dos metros de ti',
      description: '"A dos metros de ti" es un conmovedor drama romántico que sigue la historia de Stella y Will, dos jóvenes que sufren de fibrosis quística, una enfermedad genética que afecta sus pulmones. Debido a la gravedad de su condición, deben mantenerse a una distancia de dos metros para evitar el contagio de bacterias. A pesar de esta barrera física, una conexión especial se forma entre ellos cuando comienzan a compartir sus esperanzas, miedos y sueños. Juntos, descubren el valor de vivir el presente y de encontrar la alegría en los momentos más difíciles. "A dos metros de ti" es una historia poderosa que nos recuerda la importancia del amor, la amistad y el apoyo mutuo en tiempos de adversidad. A través de su emotiva narrativa, nos invita a reflexionar sobre la fragilidad de la vida y la importancia de aprovechar cada instante que tenemos junto a las personas que amamos.',
      image: 'imgs/metros.jpg',
      video: 'imgs/happy-date.gif',
      gif: 'imgs/happy-date.gif',
      año: 2019,
      director: 'Justin Baldoni',
      trailer: 'https://www.youtube.com/watch?v=vWhX8aTj5TI',
      imdb: 7.2
    },
    {
      title: 'Your Name',
      description: '"Your Name" es una cautivadora película de anime que sigue la vida de Taki y Mitsuha, dos jóvenes que viven en diferentes partes de Japón y que, de alguna manera misteriosa, intercambian sus cuerpos mientras duermen. A medida que descubren este fenómeno inexplicable, comienzan a comunicarse y a experimentar la vida del otro. A medida que su conexión se fortalece, intentan encontrarse en la realidad y desentrañar el misterio detrás de sus intercambios. "Your Name" es un viaje emocionante y conmovedor que explora el destino, el amor y la trascendencia del tiempo y el espacio. La película te sumerge en un mundo de hermosa animación y teje una historia que te hará reír, llorar y reflexionar sobre la importancia de los lazos humanos y las conexiones que trascienden las limitaciones de nuestro mundo físico.',
      image: 'imgs/yourname.jpg',
      video: 'imgs/yourname.gif',
      gif: 'imgs/yourname.gif',
      año: 2016,
      director: 'Makoto Shinkai',
      trailer: 'https://www.youtube.com/watch?v=qz0TDMd_cB0',
      imdb: 8.4
    },
    {
      title: 'Chicas Malas',
      description: '"Mean Girls" es una comedia adolescente que sigue la historia de Cady Heron, una estudiante recién llegada a una escuela secundaria. Al intentar adaptarse, Cady se ve envuelta en el mundo de las "plásticas", un grupo popular de chicas liderado por Regina George. A medida que Cady se sumerge en este mundo de intrigas y manipulaciones, descubre la importancia de la amistad verdadera y el valor de ser auténtica. "Mean Girls" es una película hilarante y satírica que aborda temas de pertenencia, identidad y los peligros de la crueldad entre adolescentes. Con personajes inolvidables y diálogos ingeniosos, nos enseña valiosas lecciones sobre la importancia de ser fiel a uno mismo y tratar a los demás con amabilidad y respeto.',
      image: 'imgs/girls.jpg',
      video: 'imgs/chicasmalas.gif',
      gif: 'imgs/chicasmalas.gif',
      año: 2004,
      director: 'Mark Waters',
      trailer: 'https://youtu.be/EMzEmGfTuM4',
      imdb: 7.0
    },
    // Agrega más películas aquí
  ];
  
  // Generar las tarjetas de películas dinámicamente
const container = document.getElementById('movies-container');

function generateMovieCard(movie, index) {
  const movieCard = document.createElement('div');
  movieCard.className = 'movie-card';
  movieCard.setAttribute('data-index', index);

  const movieImg = document.createElement('div');
  movieImg.className = 'movie-img';

  const img = document.createElement('img');
  img.src = movie.image;
  img.alt = movie.title;

  movieImg.appendChild(img);

  const movieInfo = document.createElement('div');
  movieInfo.className = 'movie-info';
  const title = document.createElement('h3');
  title.textContent = movie.title;
  const description = document.createElement('p');
  description.textContent = movie.description;
  movieInfo.appendChild(title);

  movieCard.appendChild(movieImg);
  movieCard.appendChild(movieInfo);

  movieCard.addEventListener('mouseover', () => {
    if (movie.gif) {
      const gif = document.createElement('img');
      gif.src = movie.gif;
      gif.alt = movie.title;
      movieImg.innerHTML = '';
      movieImg.appendChild(gif);
    } else {
      const video = document.createElement('video');
      video.src = movie.video;
      video.autoplay = true;
      video.loop = true;
      video.muted = true;
      movieImg.innerHTML = '';
      movieImg.appendChild(video);
    }
  });

  movieCard.addEventListener('mouseout', () => {
    movieImg.innerHTML = '';
    movieImg.appendChild(img);
  });

  movieCard.addEventListener('click', event => {
    if (!event.target.closest('.movie-img')) {
      loadMovieInfo(movie);
      loadTrailer(movie.trailer);
      localStorage.setItem('selectedMovie', JSON.stringify(movie));
      window.location.href = 'pelicula.html';
    }
  });

  return movieCard;
}




function displayMovies(movieArray) {
  container.innerHTML = '';
  movieArray.forEach((movie, index) => {
    const movieCard = generateMovieCard(movie, index);
    container.appendChild(movieCard);
  });
}

function filterMovies(searchTerm) {
  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm)
  );
  displayMovies(filteredMovies);
}

const searchInput = document.getElementById('search-input');

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();
  filterMovies(searchTerm);
});

// Mostrar todas las películas al cargar la página
displayMovies(movies);

// Redireccionar a la página de detalle de la película al hacer clic en una tarjeta de película
container.addEventListener('click', event => {
  const clickedElement = event.target;
  if (clickedElement.closest('.movie-card')) {
    const movieCard = clickedElement.closest('.movie-card');
    const index = parseInt(movieCard.getAttribute('data-index'));
    const movie = movies[index];
    localStorage.setItem('selectedMovie', JSON.stringify(movie));
    window.location.href = 'pelicula.html';
  }
});

function loadTrailer(trailerUrl) {
  const videoId = extractVideoId(trailerUrl);
  if (videoId) {
    const playerContainer = document.getElementById('player');
    playerContainer.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  }
}

function extractVideoId(url) {
    var match;
    var videoId;
  
    // Intentar extraer el ID del video de diferentes formatos de URL de YouTube
    match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^?&]+)/i);
    if (match && match[1]) {
      videoId = match[1];
    } else {
      match = url.match(/^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([^\s&]+)/);
      if (match && match[1]) {
        videoId = match[1];
      } else {
        videoId = null;
      }
    }
  
    return videoId;
  }