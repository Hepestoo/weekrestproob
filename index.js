
//  lista de platos que aparecen en el home 
const platos = [
    {
    "tipo": "plato_f",
  
      "title": "Salmon con salsa hoisin y de ostras",
      "img": "https://d1e1vgxjd1htwd.cloudfront.net/-/media/recipe-lucky-pan-glazed-salmon-with-oyster-flavored-sauce-and-basil.jpg?h=775&la=es-MX&w=1000&hash=3FDEB22B21115731E2F52E71099BBE74D906407C",
      "descript": "Salmón suculento bañado en salsa hoisin y de ostras. Equilibrio perfecto de dulzura, sal y umami. Ternura del salmón con riqueza de salsas orientales. Ven y deleita tu paladar con esta exquisita fusión de sabores.",
      "precio": 11.00
  },
  {
    "tipo": "plato_f",
  
      "title": "Suve de conejo",
      "img": "https://th.bing.com/th/id/OIP.LDPZ8-MpgCJiX3cKu5hy0QHaDR?w=297&h=154&c=7&r=0&o=5&dpr=1.1&pid=1.7",
      "descript": "Un manjar exquisito, nuestro conejo es dorado a la perfección, cocinado a presión con verduras frescas y vino blanco. Se sirve con una salsa de jugo de naranja y soja, ofreciendo una experiencia culinaria única y memorable.",
      "precio": 9.00
  },
  {"tipo": "plato_f",
  
      "title": "Capón Relleno",
      "img": "https://www.playingwithfireandwater.com/wp-content/uploads/2022/12/IMG_0463.CR2_.jpg",
      "descript": "Disfruta de nuestro capón jugoso, relleno con una mezcla de carnes selectas y frutos secos. Cocinado a fuego medio con especias aromáticas y dorado al horno. Se sirve con patatas pequeñas, creando una sinfonía de sabores. Este plato festivo es una verdadera celebración de la gastronomía.",
      "precio": 12.00
  },
  {"tipo": "plato_f",
  
      "title": "Tofu sellado con quinua bicolor",
      "img": "https://th.bing.com/th/id/R.c55483756bd4ad8c32dc1a8ed667ce8c?rik=mfY8x9jqEVCyAA&riu=http%3a%2f%2fcocinarte.co%2fwp-content%2fuploads%2f2017%2f05%2fsaludable-634x408.jpg&ehk=lUGKRYk5ugJhq9KbSD82E5xGFoMh4ATZ66eSNsFvxvQ%3d&risl=&pid=ImgRaw&r=0",
      "descript": "Tofu sellado y quinua bicolor en un plato vegetariano equilibrado y sabroso. Servido con verduras frescas para una comida saludable y satisfactoria. Cocinado en salsa de soya y jengibre, este plato es una opción vegetariana que deleitará tus papilas gustativas.",
      "precio": 8.00
  },
  {"tipo": "plato_f",
  
      "title": "Lomo tropical",
      "img": "https://th.bing.com/th/id/OIP.EeAN4IPf-ihVLsAyn34_igHaE7?w=272&h=181&c=7&r=0&o=5&dpr=1.1&pid=1.7",
      "descript": "Un plato vibrante y sabroso, nuestro Lomo Tropical combina la ternura del lomo de res con una salsa exótica de frutas tropicales. La dulzura de la piña y el mango se mezcla con el jugoso lomo, creando un sabor inolvidable. ¡Una delicia tropical que te transportará a un paraíso culinario!",
      "precio": 7.00
  },
  {"tipo": "plato_f",
  
      "title": "Bowl Pangoa",
      "img": "https://urbanecafe.com/wp-content/uploads/2019/12/UC_Fiesta-Bowl-1024x683.jpg",
      "descript": "Un viaje culinario a la selva amazónica, nuestro Bowl Pangoa es una mezcla nutritiva de quinoa, frijoles negros, maíz y aguacate fresco. Aderezado con un toque de cilantro y jugo de lima, este plato ofrece una explosión de sabores. ¡Una opción saludable y deliciosa para cualquier hora del día!",
      "precio": 6.00
  },
  {
    "tipo": "bebidas",
      "title": "Bloody Mary",
      "img": "https://th.bing.com/th/id/R.b98a4332ed8694bfaca1ec37aa3e2813?rik=QOkOgHm7rgAjrA&pid=ImgRaw&r=0",
      "descript": "El Bloody Mary es un cóctel clásico y picante. Hecho con jugo de tomate, vodka, salsas y limón, se adorna con apio. Es popular en brunchs y como remedio para la resaca. Su nombre podría provenir de la reina María I de Inglaterra. ",
      "precio": 7.00
  },
  
  
  {
    "tipo": "postres",
  
      "title": "Corona de Frutos Rojos",
      "img": "https://chokolat.com.ec/wp-content/uploads/2021/12/Chokolat-Parte-30723-1024x1536.jpg",
      "descript": "Un postre elegante, nuestra Corona de Frutos Rojos se compone de una base de Sablée de Almendras, cubierta con una suave crema pastelera de vainilla y rematada con una generosa cantidad de frutos rojos.",
      "precio": 12.00
  },
  {
    "tipo": "postres",
  
      "title": "Tiramisú",
      "img": "https://th.bing.com/th/id/OIP.PUtVCGjYekdsCCjiYvoBPAHaE7?w=267&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
      "descript": "Un postre italiano clásico, nuestro Tiramisú combina capas de bizcocho empapado en café con una rica crema de queso mascarpone. Espolvoreado con cacao en polvo para un final amargo que equilibra la dulzura del postre. ¡Una delicia decadente que te transportará a la bella Italia con cada bocado!",
      "precio": 10.0
  },
  {
    "tipo": "postres",
  
      "title": "Gelatina de frutas",
      "img": "https://th.bing.com/th/id/OIP.QnjOz1yKyWVMQHqOkM175AHaD3?w=335&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
      "descript": "Un postre refrescante y colorido, nuestra Gelatina de Frutas combina la textura suave de la gelatina con la dulzura natural de varias frutas. Cada bocado ofrece un estallido de sabor frutal, haciendo de este postre una opción ligera y deliciosa. ¡Perfecto para disfrutar en cualquier momento del día!",
      "precio": 8.0
  },
  {
    "tipo": "postres",
  
      "title": "Cheescake Frío de Fresa",
      "img": "https://th.bing.com/th/id/OIP.G_4_zvxFd3_ULUJUE6qKCAHaGL?w=214&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
      "descript": "Un postre indulgente, nuestro Cheescake Frío de Fresa combina una base crujiente de galleta con una capa cremosa de queso y una cobertura de fresas frescas. La acidez de las fresas complementa perfectamente la dulzura del queso, creando un postre equilibrado y delicioso.",
      "precio": 7.00
  },
  {
    "tipo": "postres",
  
      "title": "Pasta Choux (Repollitas)",
      "img": "https://th.bing.com/th/id/OIP.ktDZLTwVf5sIGvTl4KbL7wHaEK?w=262&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
      "descript": "Un postre francés clásico, nuestras Repollitas son pequeñas bolas de pasta choux horneadas hasta que estén doradas y crujientes por fuera, pero suaves y aireadas por dentro. Rellenas con una crema pastelera ligera y dulce, estas delicias son irresistibles. ¡Un bocado de estas repollitas te transportará a una pastelería parisina!",
      "precio": 8.00
  },
  {
    "tipo": "postres",
  
      "title": "Tarta de Tomate Chonto",
      "img": "https://chokolat.com.ec/wp-content/uploads/2021/12/Chokolat-Parte-30723-1024x1536.jpg",
      "descript": "Un plato fresco y vibrante, nuestra Tarta de Tomate Chonto combina tomates chonto maduros con una base crujiente de masa quebrada. Los tomates se hornean hasta que estén jugosos y llenos de sabor, y se complementan con hierbas aromáticas. Esta tarta es un homenaje a los sabores simples pero deliciosos de la cocina mediterránea. ",
      "precio": 7.00
  },
  {
    "tipo": "postres",
  
      "title": "Panettone",
      "img": "http://cocinarte.co/wp-content/uploads/2015/11/pan-web-596x384.jpg  ",
      "descript": "Un clásico de la Navidad italiana, nuestro Panettone es un bizcocho alto y esponjoso lleno de frutas confitadas y pasas. Horneado hasta que esté dorado y luego dejado enfriar, este dulce tiene una textura ligera y aireada. Servido en rebanadas, el Panettone es perfecto para disfrutar con una taza de café o vino dulce.  ",
      "precio": 6.00
  },
  {
    "tipo": "postres",
  
      "title": "Torta de banano y blueberries deshidratados",
      "img": "http://cocinarte.co/wp-content/uploads/2016/05/Torta-de-Banano-596x384.jpg",
      "descript": "Un clásico de la Navidad italiana, nuestro Panettone es un bizcocho alto y esponjoso lleno de frutas confitadas y pasas. Horneado hasta que esté dorado y luego dejado enfriar, este dulce tiene una textura ligera y aireada. Servido en rebanadas, el Panettone es perfecto para disfrutar con una taza de café o vino dulce",
      "precio": 9.00
  },

  {
    "tipo": "plato_f",
  
      "title": "Puré de papas y plátano maduro",
      "img": "https://th.bing.com/th/id/OIP.8fKACCBMbxuT-uW7NjBFhwHaE6?rs=1&pid=ImgDetMain",
      "descript": "Disfruta de nuestro suave puré de papas, acompañado de plátano maduro caramelizado. La dulzura natural del plátano complementa perfectamente la cremosidad del puré. Un plato reconfortante con un toque tropical. ¡Ven y saborea esta deliciosa combinación en nuestro acogedor restaurante!",
      "precio": 6.00
  },
  {
    "tipo": "bebidas",
      "title": "Negroni",
      "img": "https://th.bing.com/th/id/OIP.WpMXlifQGq4nTvap2njC9QHaHa?w=185&h=185&c=7&r=0&o=5&dpr=1.1&pid=1.7",
      "descript": "El Negroni es un cóctel italiano, creado en 1919 por Fosco Scarselli. Se compone de ginebra, Campari y vermú rojo. Según la historia, el conde Camillo Negroni pidió que se sustituyera la soda de su coctel americano por ginebra, dando origen a este cóctel1. Se sirve con hielo y a veces se añaden unas gotas de naranja o limón.",
      "precio": 9.00
  },
  {
    "tipo": "bebidas",
      "title": "Caipirinha",
      "img": "https://elcoctelero.com/wp-content/uploads/2020/10/coctel-caipiri%C3%B1a-caipirinha.jpg",
      "descript": "La Caipirinha es el cóctel nacional de Brasil, famoso por su sabor refrescante y vibrante. Se prepara con cachaça (un destilado de caña de azúcar), lima y azúcar. La mezcla de estos ingredientes resulta en una bebida deliciosa y revitalizante, perfecta para disfrutar en cualquier momento",
      "precio": 6.00
  },
  {
    "tipo": "bebidas",
      "title": "Pisco Sour",
      "img": "https://elcoctelero.com/wp-content/uploads/2020/10/coctel-pisco-sour-ok-e1616925946258.jpg",
      "descript": "El Pisco Sour es un cóctel alcohólico de origen peruano que es tradicional en la cocina peruana y chilena. El nombre de la bebida proviene de pisco, que es su licor base, y del término cóctel sour, que se refiere a los componentes de jugo cítrico agrio y endulzante",
      "precio": 8.00
  },
  {
    "tipo": "bebidas",
      "title": "Daiquirí de Fresa",
      "img": "https://th.bing.com/th/id/OIP.8LsjBXOTB9yZvb3dtMabDAHaE8?rs=1&pid=ImgDetMain",
      "descript": "Un cóctel refrescante y vibrante, nuestro Daiquirí de Fresa combina el ron blanco con el dulzor de las fresas frescas y el toque cítrico del jugo de lima. Mezclado hasta obtener una textura suave y servido frío, este cóctel es la elección perfecta para un día caluroso.",
      "precio": 8.00
  },
  {
    "tipo": "bebidas",
      "title": "Sangría",
      "img": "https://th.bing.com/th/id/R.a7c123f4dd8c0db3e32d39ba2da90251?rik=61aR0%2bjir6G3KQ&pid=ImgRaw&r=0",
      "descript": "Un cóctel español clásico, nuestra Sangría combina vino tinto de calidad con una variedad de frutas frescas y un toque de brandy. La fruta absorbe el vino, creando un cóctel que es tan delicioso para comer como para beber. Servida fría, esta bebida es perfecta para compartir en una tarde soleada. ",
      "precio": 9.00
  },
  {
    "tipo": "bebidas",
      "title": "Ron Punch ",
      "img": "https://th.bing.com/th/id/OIP.e-tJgDOx1_2lTBTgStlLIAHaE8?w=272&h=181&c=7&r=0&o=5&dpr=1.1&pid=1.7",
      "descript": "Un cóctel caribeño clásico, nuestro Ron Punch combina ron oscuro con jugos de frutas tropicales y un toque de especias. La dulzura de los jugos de frutas se equilibra perfectamente con el calor del ron y las especias, creando un cóctel que es tanto refrescante como embriagador.",
      "precio": 7.00
  },
  {
    "tipo": "bebidas",
      "title": "Cóctel El Poncho Rojo",
      "img": "https://th.bing.com/th/id/OIP.IXD3xNNMv4tgWHWM12ErhAHaE7?w=250&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
      "descript": "Un cóctel audaz y vibrante, nuestro Poncho Rojo combina ron oscuro con jugos de frutas cítricas y un toque de granadina para darle su color rojo característico. La dulzura de la granadina se equilibra perfectamente con el calor del ron y la acidez de los jugos de frutas, creando un cóctel que es tanto refrescante como embriagador",
      "precio": 10.00
  },
  {"tipo": "plato_f",
  
      "title": "Risotto Fungie con orellanas rostizadas",
      "img": "https://th.bing.com/th/id/R.c46e953c2192aa2e5a60df9bbf78e6bd?rik=5g94iqBoY5gxPA&pid=ImgRaw&r=0",
      "descript": "Un plato italiano con un toque ecuatoriano, nuestro Risotto Fungie presenta arroz cremoso cocido lentamente con champiñones frescos y orellanas rostizadas",
      "precio": 9.00
  },
  
  
  ]
  var miElemento = document.getElementById('Platos');
  var micarrito = document.getElementById('carrito');
  
  var tip = 'plato_f'
  
  var datoString = localStorage.getItem("datoKey");
  
  // Convierte la cadena JSON a un array
  var datos = JSON.parse(datoString) || []; // Si no hay datos, inicializa como un array vacío
  

  function hola(tiulo, img, descipcion, precio) {
  
  
    localStorage.setItem('plato_title', tiulo)
    localStorage.setItem('plato_img', img)
    localStorage.setItem('plato_des', descipcion)
    localStorage.setItem('plato_precio', precio)
  
  
  
  }
  
  
  function cambio_menu(tipo){
  tip = tipo
   // Reemplaza 'tuContenedor' con el ID de tu contenedor
  
  while (miElemento.firstChild) {
    
      miElemento.removeChild(miElemento.firstChild);
  }
  //leva los patos
  for( var plato in platos){
    if(platos[plato].tipo === tip){
      var nuevoParrafo = document.createElement('div'); 
      nuevoParrafo.id = 'tipos'
      nuevoParrafo.innerHTML = `
      <div class="card-platos">
        <div class="plato">
          <div>
            <img src='${platos[plato].img}' alt="" height="148px">
          </div>
          <div class="texto">
            <div class="titulo">
              <h5>${platos[plato].title}</h5>
            </div>
            
            <div class="contenido">
              <p>${platos[plato].descript}</p>
            </div>
            <div class = 'bnt-precio'>
            <div class="precio">
              <p>$ ${platos[plato].precio}</p>
            </div>
            <a href="src/platos/plato.html">
           
            <button class="btn btna " onclick="hola('${platos[plato].title}', '${platos[plato].img}', '${platos[plato].descript}', '${platos[plato].precio}')"><svg width="26" height="26" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.8 39.95C10.8 39.95 9.95 39.6 9.25 38.9C8.55 38.2 8.2 37.35 8.2 36.35C8.2 35.35 8.55 34.5 9.25 33.8C9.95 33.1 10.8 32.75 11.8 32.75C12.8 32.75 13.65 33.1 14.35 33.8C15.05 34.5 15.4 35.35 15.4 36.35C15.4 37.35 15.05 38.2 14.35 38.9C13.65 39.6 12.8 39.95 11.8 39.95ZM31.8 39.95C30.8 39.95 29.95 39.6 29.25 38.9C28.55 38.2 28.2 37.35 28.2 36.35C28.2 35.35 28.55 34.5 29.25 33.8C29.95 33.1 30.8 32.75 31.8 32.75C32.8 32.75 33.65 33.1 34.35 33.8C35.05 34.5 35.4 35.35 35.4 36.35C35.4 37.35 35.05 38.2 34.35 38.9C33.65 39.6 32.8 39.95 31.8 39.95ZM9.2 6.95L14.7 18.35H29.1L35.35 6.95H9.2ZM7.7 3.95H37.15C37.9167 3.95 38.5 4.3 38.9 5C39.3 5.7 39.3 6.4 38.9 7.1L32.15 19.25C31.7833 19.8833 31.3083 20.3917 30.725 20.775C30.1417 21.1583 29.5 21.35 28.8 21.35H13.65L10.85 26.55H35.4V29.55H11.3C9.9 29.55 8.89167 29.0833 8.275 28.15C7.65833 27.2167 7.66667 26.1667 8.3 25L11.5 19.1L3.9 3H0V0H5.85L7.7 3.95Z" fill="#FDFDFD"/>
            </svg></button>
            </a>
            </div>
            </div>
  
        </div>
      </div>
    `;
    
      
      
      miElemento.appendChild(nuevoParrafo);
  
  }}
  
  
  
  
  }
  
  for( var dato in datos){
   console.log(plato)
      var nuevoParrafo = document.createElement('div'); 
      
      
      nuevoParrafo.innerHTML = `
      <h5>${datos[dato].title}</h5>
      <button class="btn btn-danger " onclick="elimina(${dato})">Eliminar</button>
  
    `;
    
      
      
      micarrito.appendChild(nuevoParrafo);
  
  }
  
  
  
  //vuelve a traer los platos
  for( var plato in platos){
    if(platos[plato].tipo === tip){
      var nuevoParrafo = document.createElement('div'); 
      
      
      nuevoParrafo.innerHTML = `
      <div class="card-platos">
        <div class="plato">
          <div>
            <img src='${platos[plato].img}' alt="" height="148px">
          </div>
          <div class="texto">
            <div class="titulo">
              <h5>${platos[plato].title}</h5>
            </div>
            
            <div class="contenido">
              <p>${platos[plato].descript}</p>
            </div>
            <div class = 'bnt-precio'>
            <div class="precio">
              <p>$ ${platos[plato].precio}</p>
            </div>
            <a href="src/platos/plato.html">
           
            <button class="btn btna " onclick="hola('${platos[plato].title}', '${platos[plato].img}', '${platos[plato].descript}', '${platos[plato].precio}')"><svg width="26" height="26" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.8 39.95C10.8 39.95 9.95 39.6 9.25 38.9C8.55 38.2 8.2 37.35 8.2 36.35C8.2 35.35 8.55 34.5 9.25 33.8C9.95 33.1 10.8 32.75 11.8 32.75C12.8 32.75 13.65 33.1 14.35 33.8C15.05 34.5 15.4 35.35 15.4 36.35C15.4 37.35 15.05 38.2 14.35 38.9C13.65 39.6 12.8 39.95 11.8 39.95ZM31.8 39.95C30.8 39.95 29.95 39.6 29.25 38.9C28.55 38.2 28.2 37.35 28.2 36.35C28.2 35.35 28.55 34.5 29.25 33.8C29.95 33.1 30.8 32.75 31.8 32.75C32.8 32.75 33.65 33.1 34.35 33.8C35.05 34.5 35.4 35.35 35.4 36.35C35.4 37.35 35.05 38.2 34.35 38.9C33.65 39.6 32.8 39.95 31.8 39.95ZM9.2 6.95L14.7 18.35H29.1L35.35 6.95H9.2ZM7.7 3.95H37.15C37.9167 3.95 38.5 4.3 38.9 5C39.3 5.7 39.3 6.4 38.9 7.1L32.15 19.25C31.7833 19.8833 31.3083 20.3917 30.725 20.775C30.1417 21.1583 29.5 21.35 28.8 21.35H13.65L10.85 26.55H35.4V29.55H11.3C9.9 29.55 8.89167 29.0833 8.275 28.15C7.65833 27.2167 7.66667 26.1667 8.3 25L11.5 19.1L3.9 3H0V0H5.85L7.7 3.95Z" fill="#FDFDFD"/>
            </svg></button>
            </a>
            </div>
            </div>
  
        </div>
      </div>
    `;
    
      
      
      miElemento.appendChild(nuevoParrafo);
  
  }}



  // Función para seleccionar elementos del DOM
  function E(selector) {
    return document.querySelectorAll(selector);
  }

  //funcion tabs
  function hasClass(element, className){
    return element.classList.contains(className);
  }
  
  function radioClass(element, className){
    E("." + className).forEach((elem) =>
        elem.classList.remove(className));
    element.classList.toggle(className); 
  }
  
  
  function tabs(nav) {
    let navElem = E(nav)[0];

    navElem.addEventListener("click", (e) => {
        let target = e.target;

        if (hasClass(target, "tab"))
            radioClass(target, "active");

        let linkedTab = E("." + target.id)[0];

        radioClass(linkedTab, "visible");
    });

    let active = E(".tab.active")[0];
    if (active) {
        radioClass(E("." + active.id)[0], "visible");
    }
}

tabs(".menu-nav");

  
  
    // Recuperar el carrito existente del localStorage
  
    function elimina(numero) {
      var datoString = localStorage.getItem("datoKey");
  
      // Convierte la cadena JSON a un array
      var datos = JSON.parse(datoString) || [];
  
      // Verifica si el número es un índice válido
      if (numero >= 0 && numero < datos.length) {
          // Elimina 1 elemento en la posición indicada
          datos.splice(numero, 1);
  
          // Convierte el array actualizado a cadena JSON
          var datosString = JSON.stringify(datos);
  
  
          // Guarda la cadena actualizada en el localStorage
          localStorage.setItem("datoKey", datosString);
          location.reload();
      } else {
          console.log("Índice no válido");
      }
  }
  
    function showSideBlock() {
      $('#sideBlock').fadeOut();
    }
  
    function hideSideBlock() {
      $('#sideBlock').fadeIn();
    }