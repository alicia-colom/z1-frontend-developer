# Z1 FrontEnd Developer

## Prueba técnica para puesto de **Front-end Developer** en **[Z1.digital](https://z1.digital/)**

### *By Alicia Colom* 👋

------------

## 🔎 **OBJETIVO**
Se trata de una app desarrollada en **React**, la cual conecta con una **API REST** que analiza fotos de documentos de identidad, y sigue el diseño del prototipo dado en **InVision**.

Desde el front se implementan los siguientes aspectos:
- [ ] Accionar la cámara del dispositivo desde el que se accede a la app.
- [ ] Tomar fotografía automáticamente al encajar en el encuadre dado.
- [ ] Implementar botón *"Cancelar"* para volver a la pantalla principal.
- [ ] Envío de la fotografía tomada a la API.
- [ ] Recepción de la respuesta de la API tras analizar si es válida o no.
- [ ] Gestión de las diferentes respuestas posibles.
- [ ] Mostrar visualmente al usuario de la app si la fotografía es válida o no.
- [ ] Redirigir a pantalla principal tras respuesta de la API.
- [ ] Registrar la última fotografía tomada y:
- [ ]  si es válida: mostrar imagen y mensaje de *"aceptada"*
- [ ]  si no es válida: mostrar imagen, mensaje de *"rechazada"*, y botón para tomar nueva fotografía

------------

## 🛠️ **STACK TECNOLÓGICO:**

- React
- TypeScript
- JSX
- HTML5 + CSS3
- Sass
- Git + GitHub
- npm
- API REST
- expo-camera

------------

## 🗃️ **Estructura del proyecto**

```
src
 ├─ public
 |  ├─ index.hmtl
 |  └─ favicon.ico
 |
 ├─ components
 |  ├─ App.js _______ comp. principal
 |  ├─ Landing.js _______ comp. de aterrizaje a la web
 |  ├─ CharacterList.js _______ listado de personajes e input de búsqueda
 |  ├─ CharacterCard.js _______ tarjeta de personaje que se renderiza en CharacterList.js
 |  ├─ CharacterDetail.js _______ comp. con información general del personaje
 |  ├─ Header.js _______ cabecera con logo y link a landing
 |  ├─ Footer.js _______ pie de página con datos de autoría
 |  ├─ Error.js _______ comp. de personaje inexistente
 |  ├─ NotResults.js _______ comp. de búsqueda fallida
 |  └─ Filters.js _______ comp. de trabajo para filtrados
 |
 ├─ images
 |  └─ ...
 |
 ├─ services
 |  └─ api.js _______ solicitud fetch a API
 |
 ├─ stylesheets
 |  ├─ CharacterList.scss
 |  ├─ CharacterCard.scss
 |  ├─ CharacterDetail.scss
 |  ├─ Error.scss
 |  └─ ...
 |
 ├─ index.js
 └─ index.scss
```

------------

## ⚙️ **SCRIPTS DISPONIBLES**

#### `npm start` o `yarn start`

Arranca la palicación en modo desarrollo.
Abre `http://localhost:3000` para visualizarla en el navegador.

La página se actualizará automáticamente con cada cambio que ocurra en el código.
Igualmente, se mostrarán los errores y los warning del lint en la consola.

#### `npm test` o `yarn test`

Arranca el "test watcher" en modo interactivo
Por defecto, se arrancan los tests relacionados con los archivos que hayan sufrido algún cambio desde el últimos commit.

------------

## 💻 **DESARROLLO**

1\. **Librería react-webcam**

Porqué he decidido usar esa librería para lanzar la cámara

2\. **Uso de React Router**

Enrutamiento dinámico de las dos vistas de la navegación de la app:

| Vista | Componente | URL |
| -- | -- | -- |
| Pantalla principal | Home | `/` |
| Vista de cámara | CamView | `/cam-view` |

3\. **xxx**

A través de un dos `<input>` (de tipo `radio` y de tipo `select`) se realiza un filtrado en la búsqueda realizada, pudiendo filtrar por uno o por los dos conceptos: GENERO y ESTADO. 
Una vez filtrados, se renderiza de nuevo y aparece en la interfaz los personajes que cumplen esos requisitos. 

4\. **xxx**

Al hacer click sobre alguna de las tarjetas se pinta la tarjeta clicada a pantalla completa con el detalle de cada personaje. 
En los detalles aparece la siguiente información: imagen, nombre, especie, planeta de origen, género,  número de episodios en los que aparece el personaje, listado de episodios, y si está vivo o muerto.

------------

## ✨ Detalles de calidad

- Incluir el campo de texto dentro de una etiqueta `<form>` para cuidar la semántica.
-  Impedir que el navegador envíe una petición o cambie de ruta al dar a intro sobre el campo de texto vacío aplicando un `prevent event default`.
- Al entrar en detalles del personaje y volver al listado de personajes se debe poder leer el texto que se había incluido inicialmente en el campo de texto.
 Para ello se recoge el valor del input y aplicando lifting se guarda en el estado del componente principal para bajarlo nuevamente al value del componente filters.

*BONUS:* Mejoras visuales
- Mostrar el estado del personaje con un icono.
- Usar un sistema de grid para pintar el listado de personajes.
- Cuidar el funcionamiento del responsive en dispositivos pequeños.

*BONUS:* URL compartible
- La URL del detalle del personaje debe ser compartible y poder acceder a ella visitándola directamente desde el navegador.

------------

## 💡 Improvements

- Mostrar un mensaje de error si se introduce una ruta inexistente en el navegador.

------------

## 🚀 RESULTADO

Puedes navegar por la aplicación en modo usuario siguiendo el siguiente enlace:

#### **http://beta.adalab.es/modulo-3-evaluacion-final-alicia-colom/#/**