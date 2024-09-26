# UX Alarma Web App
Esta es una aplicación web de alarmas y recordatorios desarrollada con React y Material-UI. La aplicación permite a los usuarios gestionar sus recordatorios y alarmas de manera eficiente.

Estructura del Proyecto

## Estructura del Proyecto

``` bash
.gitignore
package.json
public/
    index.html
    manifest.json
    robots.txt
README.md
src/
    App.css
    App.js
    App.test.js
    assets/
    components/
        NavBar.js
        ReminderItem.js
    index.css
    index.js
    pages/
        Home.js
        Pomodoro.js
        Recordatorios.js
        Resumen.js
    reportWebVitals.js
    setupTests.js
```


## Instalación
Para instalar las dependencias del proyecto, ejecuta el siguiente comando:

```bash
npm install
```


## Scripts Disponibles
En el directorio del proyecto, puedes ejecutar:

```bash
npm start
```

Ejecuta la aplicación en modo de desarrollo.
Abre http://localhost:3000 para verlo en tu navegador.

La página se recargará cuando hagas cambios.
También verás cualquier error de lint en la consola.

```bash
npm test
```

Inicia el corredor de pruebas en el modo de reloj interactivo.
Consulta la sección sobre running tests para más información.

```bash
npm run build
```

Construye la aplicación para producción en la carpeta build.
Empaqueta correctamente React en modo de producción y optimiza la construcción para el mejor rendimiento.

La construcción está minificada y los nombres de los archivos incluyen los hashes.
¡Tu aplicación está lista para ser desplegada!

Consulta la sección sobre deployment para más información.

```bash
npm run eject
```

Nota: esta es una operación unidireccional. Una vez que eject se haya ejecutado, ¡no se puede deshacer!

Si no estás satisfecho con la herramienta de construcción y las opciones de configuración, puedes eject en cualquier momento. Este comando eliminará la dependencia de construcción única de tu proyecto.

En su lugar, copiará todos los archivos de configuración y las dependencias transitivas (Webpack, Babel, ESLint, etc.) directamente en tu proyecto para que tengas control total sobre ellos. Todos los comandos excepto eject seguirán funcionando, pero apuntarán a los scripts copiados para que puedas modificarlos. En este punto, estás por tu cuenta.

No tienes que usar eject. El conjunto de características seleccionadas es adecuado para implementaciones pequeñas y medianas, y no deberías sentirte obligado a usar esta característica. Sin embargo, entendemos que esta herramienta no sería útil si no pudieras personalizarla cuando estés listo para ello.

## Estructura de Carpetas

- public/: Contiene los archivos públicos que no pasan por el proceso de construcción de Webpack.
- src/: Contiene el código fuente de la aplicación.
- assets/: Contiene los recursos estáticos como imágenes y fuentes.
- components/: Contiene los componentes reutilizables de la aplicación.
- pages/: Contiene las páginas principales de la aplicación.
- App.js: El componente principal de la aplicación.
- index.js: El punto de entrada de la aplicación.

## Dependencias
React: Biblioteca de JavaScript para construir interfaces de usuario.
Material-UI: Biblioteca de componentes de React para un diseño consistente y moderno.
React Router: Biblioteca para el enrutamiento en aplicaciones de React.


## Contribuir
Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

Haz un fork del repositorio.
Crea una rama para tu nueva característica (git checkout -b feature/nueva-caracteristica).
Realiza tus cambios y haz commit (git commit -am 'Agrega nueva característica').
Haz push a la rama (git push origin feature/nueva-caracteristica).
Abre un Pull Request.