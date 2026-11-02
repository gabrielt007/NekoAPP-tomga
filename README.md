# NekoAPP - Explorador de Nekos con Ionic y Angular

Aplicación móvil híbrida desarrollada con **Ionic**, **Angular** y **Capacitor** que consume la API pública [NEKOSBEST](https://nekos.best/) para explorar, buscar, visualizar y guardar imágenes de nekos (y otras categorías).

El proyecto fue diseñado para demostrar el dominio de conceptos clave en el desarrollo móvil moderno: consumo de APIs, navegación, scroll infinito, manejo de estados y persistencia local.

---

## Características principales

- **Listado remoto (Tab 2):** Consumo de la API real de NEKOSBEST mostrando imágenes y datos del artista.
- **Scroll Infinito:** Carga incremental de imágenes al hacer scroll, con validación para evitar solicitudes simultáneas y duplicados.
- **Búsqueda y filtros (Tab 1):** Barra de búsqueda con debounce y filtro por categoría (Neko, Husbando, Kitsune, Waifu).
- **Vista de Detalle:** Navegación a una pantalla con la imagen en alta resolución, nombre del artista y enlace a la fuente original.
- **Favoritos Persistentes:** Uso de `@capacitor/preferences` para guardar imágenes favoritas localmente, incluso si se cierra la app.
- **Manejo de Estados:** Pantallas de carga (spinners), mensajes de lista vacía, errores de red y botones de reintento.
- **Autoevaluación (Tab 3):** Sección con preguntas y respuestas técnicas sobre el desarrollo del proyecto.

---

## Tecnologías utilizadas

- **Framework:** Angular 22
- **UI Toolkit:** Ionic 9 (Standalone Components)
- **Lenguaje:** TypeScript 6
- **Persistencia local:** Capacitor Preferences
- **Manejo de estado y asincronía:** RxJS (Observables, Subjects, debounceTime, switchMap, finalize)
- **Estilos:** SCSS

---

## Capturas de pantalla

<table>
  <tr>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/c131a52f-ff70-4409-aa3f-0ea424027a7b" width="300" alt="Imagen 1" />
    </td>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/f05fd531-c2a5-4d55-b8bd-e0a2dfa77dc7" width="300" alt="Imagen 2" />
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/4a476b1e-854c-4bef-ad40-b864a216cff9" width="300" alt="Imagen 3" />
    </td>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/9e568462-7477-47ac-bd7a-e527434e6a41" width="300" alt="Imagen 4" />
    </td>
  </tr>
</table>

---

## Estructura del proyecto

La arquitectura sigue el patrón de separación de responsabilidades, dividiendo la lógica en servicios, modelos y componentes/páginas.


```
├── android
│   ├── app
│   │   ├── src
│   │   │   ├── androidTest
│   │   │   │   └── java
│   │   │   │       └── com
│   │   │   │           └── getcapacitor
│   │   │   │               └── myapp
│   │   │   │                   └── ExampleInstrumentedTest.java
│   │   │   ├── main
│   │   │   │   ├── assets
│   │   │   │   │   ├── public
│   │   │   │   │   │   ├── assets
│   │   │   │   │   │   │   ├── icon
│   │   │   │   │   │   │   │   └── favicon.png
│   │   │   │   │   │   │   └── shapes.svg
│   │   │   │   │   │   ├── 3rdpartylicenses.txt
│   │   │   │   │   │   ├── chunk-1WgjXSTw.js
│   │   │   │   │   │   ├── chunk-7WcvkKlU.js
│   │   │   │   │   │   ├── chunk-8yMdoG2z.js
│   │   │   │   │   │   ├── chunk-Bxqom4kZ.js
│   │   │   │   │   │   ├── chunk-C9livjS5.js
│   │   │   │   │   │   ├── chunk-CABSGZFi.js
│   │   │   │   │   │   ├── chunk-CAwx4EWc.js
│   │   │   │   │   │   ├── chunk-CI4LkdbL.js
│   │   │   │   │   │   ├── chunk-Ctx-D6wZ.js
│   │   │   │   │   │   ├── chunk-CzZl3Iud.js
│   │   │   │   │   │   ├── chunk-D8u402mx.js
│   │   │   │   │   │   ├── chunk-D9AI81tR.js
│   │   │   │   │   │   ├── chunk-DEQTwfN6.js
│   │   │   │   │   │   ├── chunk-DOSs6Ze0.js
│   │   │   │   │   │   ├── chunk-DPApHFrv.js
│   │   │   │   │   │   ├── chunk-DadZ8CdW.js
│   │   │   │   │   │   ├── chunk-DdqYLLxr.js
│   │   │   │   │   │   ├── chunk-Dkdutnr5.js
│   │   │   │   │   │   ├── chunk-DwVhQacj.js
│   │   │   │   │   │   ├── chunk-FEHyn2aG.js
│   │   │   │   │   │   ├── chunk-FUXlWMD4.js
│   │   │   │   │   │   ├── chunk-Xk3Hag2_.js
│   │   │   │   │   │   ├── chunk-tHhOmcA5.js
│   │   │   │   │   │   ├── chunk-ys1gFkB0.js
│   │   │   │   │   │   ├── cordova.js
│   │   │   │   │   │   ├── cordova_plugins.js
│   │   │   │   │   │   ├── index.html
│   │   │   │   │   │   ├── main-A3EG3WS5.js
│   │   │   │   │   │   └── styles-QP5JXTGN.css
│   │   │   │   │   ├── capacitor.config.json
│   │   │   │   │   └── capacitor.plugins.json
│   │   │   │   ├── java
│   │   │   │   │   └── io
│   │   │   │   │       └── ionic
│   │   │   │   │           └── starter
│   │   │   │   │               └── MainActivity.java
│   │   │   │   ├── res
│   │   │   │   │   ├── drawable
│   │   │   │   │   │   ├── ic_launcher_background.xml
│   │   │   │   │   │   └── splash.png
│   │   │   │   │   ├── drawable-land-hdpi
│   │   │   │   │   │   └── splash.png
│   │   │   │   │   ├── drawable-land-mdpi
│   │   │   │   │   │   └── splash.png
│   │   │   │   │   ├── drawable-land-xhdpi
│   │   │   │   │   │   └── splash.png
│   │   │   │   │   ├── drawable-land-xxhdpi
│   │   │   │   │   │   └── splash.png
│   │   │   │   │   ├── drawable-land-xxxhdpi
│   │   │   │   │   │   └── splash.png
│   │   │   │   │   ├── drawable-port-hdpi
│   │   │   │   │   │   └── splash.png
│   │   │   │   │   ├── drawable-port-mdpi
│   │   │   │   │   │   └── splash.png
│   │   │   │   │   ├── drawable-port-xhdpi
│   │   │   │   │   │   └── splash.png
│   │   │   │   │   ├── drawable-port-xxhdpi
│   │   │   │   │   │   └── splash.png
│   │   │   │   │   ├── drawable-port-xxxhdpi
│   │   │   │   │   │   └── splash.png
│   │   │   │   │   ├── drawable-v24
│   │   │   │   │   │   └── ic_launcher_foreground.xml
│   │   │   │   │   ├── layout
│   │   │   │   │   │   └── activity_main.xml
│   │   │   │   │   ├── mipmap-anydpi-v26
│   │   │   │   │   │   ├── ic_launcher.xml
│   │   │   │   │   │   └── ic_launcher_round.xml
│   │   │   │   │   ├── mipmap-hdpi
│   │   │   │   │   │   ├── ic_launcher.png
│   │   │   │   │   │   ├── ic_launcher_foreground.png
│   │   │   │   │   │   └── ic_launcher_round.png
│   │   │   │   │   ├── mipmap-mdpi
│   │   │   │   │   │   ├── ic_launcher.png
│   │   │   │   │   │   ├── ic_launcher_foreground.png
│   │   │   │   │   │   └── ic_launcher_round.png
│   │   │   │   │   ├── mipmap-xhdpi
│   │   │   │   │   │   ├── ic_launcher.png
│   │   │   │   │   │   ├── ic_launcher_foreground.png
│   │   │   │   │   │   └── ic_launcher_round.png
│   │   │   │   │   ├── mipmap-xxhdpi
│   │   │   │   │   │   ├── ic_launcher.png
│   │   │   │   │   │   ├── ic_launcher_foreground.png
│   │   │   │   │   │   └── ic_launcher_round.png
│   │   │   │   │   ├── mipmap-xxxhdpi
│   │   │   │   │   │   ├── ic_launcher.png
│   │   │   │   │   │   ├── ic_launcher_foreground.png
│   │   │   │   │   │   └── ic_launcher_round.png
│   │   │   │   │   ├── values
│   │   │   │   │   │   ├── ic_launcher_background.xml
│   │   │   │   │   │   ├── strings.xml
│   │   │   │   │   │   └── styles.xml
│   │   │   │   │   └── xml
│   │   │   │   │       ├── config.xml
│   │   │   │   │       └── file_paths.xml
│   │   │   │   └── AndroidManifest.xml
│   │   │   └── test
│   │   │       └── java
│   │   │           └── com
│   │   │               └── getcapacitor
│   │   │                   └── myapp
│   │   │                       └── ExampleUnitTest.java
│   │   ├── .gitignore
│   │   ├── build.gradle
│   │   ├── capacitor.build.gradle
│   │   └── proguard-rules.pro
│   ├── capacitor-cordova-android-plugins
│   │   ├── src
│   │   │   └── main
│   │   │       ├── java
│   │   │       │   └── .gitkeep
│   │   │       ├── res
│   │   │       │   └── .gitkeep
│   │   │       └── AndroidManifest.xml
│   │   ├── build.gradle
│   │   └── cordova.variables.gradle
│   ├── gradle
│   │   └── wrapper
│   │       ├── gradle-wrapper.jar
│   │       └── gradle-wrapper.properties
│   ├── .gitignore
│   ├── build.gradle
│   ├── capacitor.settings.gradle
│   ├── gradle.properties
│   ├── gradlew
│   ├── gradlew.bat
│   ├── settings.gradle
│   └── variables.gradle
├── src
│   ├── app
│   │   ├── detail
│   │   │   ├── detail.page.html
│   │   │   ├── detail.page.scss
│   │   │   └── detail.page.ts
│   │   ├── explore-container
│   │   │   ├── explore-container.component.html
│   │   │   ├── explore-container.component.scss
│   │   │   ├── explore-container.component.spec.ts
│   │   │   └── explore-container.component.ts
│   │   ├── models
│   │   │   └── neko.model.ts
│   │   ├── services
│   │   │   ├── favorites.service.ts
│   │   │   ├── neko.service.spec.ts
│   │   │   └── neko.service.ts
│   │   ├── tab1
│   │   │   ├── tab1.page.html
│   │   │   ├── tab1.page.scss
│   │   │   ├── tab1.page.spec.ts
│   │   │   └── tab1.page.ts
│   │   ├── tab2
│   │   │   ├── tab2.page.html
│   │   │   ├── tab2.page.scss
│   │   │   ├── tab2.page.spec.ts
│   │   │   └── tab2.page.ts
│   │   ├── tab3
│   │   │   ├── tab3.page.html
│   │   │   ├── tab3.page.scss
│   │   │   ├── tab3.page.spec.ts
│   │   │   └── tab3.page.ts
│   │   ├── tabs
│   │   │   ├── tabs.page.html
│   │   │   ├── tabs.page.scss
│   │   │   ├── tabs.page.spec.ts
│   │   │   ├── tabs.page.ts
│   │   │   └── tabs.routes.ts
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   └── app.routes.ts
│   ├── assets
│   │   ├── icon
│   │   │   └── favicon.png
│   │   └── shapes.svg
│   ├── environments
│   │   ├── environment.prod.ts
│   │   └── environment.ts
│   ├── theme
│   │   └── variables.scss
│   ├── global.scss
│   ├── index.html
│   ├── main.ts
│   └── test-setup.ts
├── .browserslistrc
├── .editorconfig
├── .gitignore
├── angular.json
├── capacitor.config.ts
├── eslint.config.js
├── ionic.config.json
├── package-lock.json
├── package.json
├── tsconfig.app.json
├── tsconfig.json
└── tsconfig.spec.json
``` 
