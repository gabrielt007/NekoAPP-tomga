import { Component } from '@angular/core';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, IonCard, 
  IonCardHeader, IonCardTitle, IonCardContent, IonList, IonItem, IonLabel 
} from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [
    CommonModule, 
    IonHeader, IonToolbar, IonTitle, IonContent, 
    IonCard, IonCardHeader, IonCardTitle, IonCardContent, 
    IonList, IonItem, IonLabel
  ],
})
export class Tab3Page {
  preguntas = [
    {
      q: '¿Por qué conviene consumir la API desde un servicio en vez de directamente desde cada página?',
      a: 'Consumir la API desde un servicio centraliza la lógica de red, promoviendo la reutilización de código y evitando duplicidad. Si la URL de la API cambia, solo se modifica el servicio y no cada página. Además, facilita el manejo de errores, la inyección de dependencias y la aplicación de políticas globales como interceptores o caché.'
    },
    {
      q: '¿Qué cambia entre reemplazar un arreglo y concatenar nuevos resultados?',
      a: 'Reemplazar un arreglo destruye la referencia anterior y actualiza la vista solo con los nuevos datos (ideal para búsquedas). Concatenar añade los nuevos elementos al final del arreglo existente, preservando lo que ya estaba en pantalla. Esto es fundamental para el scroll infinito, donde queremos acumular páginas sin perder las anteriores.'
    },
    {
      q: '¿Cómo evitar duplicados y solicitudes simultáneas al llegar al final del listado?',
      a: 'Para evitar solicitudes simultáneas, usamos una bandera "loading" que bloquea nuevas peticiones mientras una está en curso. Para evitar duplicados, implementamos una deduplicación usando un Set con las URLs existentes antes de añadir los nuevos resultados. Así garantizamos que el scroll no repita imágenes ni sature el servidor.'
    },
    {
      q: '¿Qué se debe reiniciar cuando cambia el texto de búsqueda?',
      a: 'Al cambiar la búsqueda, se deben reiniciar los resultados actuales (limpiar el arreglo), la paginación (volver a la página 1 o 0), la bandera de "hasMore" (para permitir nuevas cargas) y limpiar cualquier mensaje de error previo. Todo esto asegura que la nueva consulta empiece desde cero sin mezclar datos de búsquedas anteriores.'
    },
    {
      q: '¿Qué ocurre si falla la tercera página? ¿Cómo recuperar la interfaz?',
      a: 'Si falla una página, el estado de carga debe detenerse (usando finalize) para no bloquear el scroll. La interfaz no debe romperse; en su lugar, se muestra un mensaje de error y un botón de "Reintentar". Al pulsarlo, se vuelve a solicitar la página fallida, manteniendo los datos de las páginas anteriores intactos en pantalla.'
    },
    {
      q: '¿Cómo diferenciar “sin resultados” de “error de conexión”?',
      a: 'Un estado "sin resultados" ocurre cuando la API responde exitosamente con un arreglo vacío (HTTP 200). Un "error de conexión" ocurre cuando falla la petición (HTTP 400, 500 o fallo de red). En el código, se diferencian usando el arreglo vacío para el primero, y la captura de excepciones (error en el subscribe) para el segundo, mostrando mensajes visuales distintos al usuario.'
    },
    {
      q: '¿Qué información se almacena localmente y qué se obtiene de la API?',
      a: 'De la API obtenemos datos volátiles como las imágenes, los nombres de los artistas y las fuentes. Localmente (usando Capacitor Preferences) almacenamos solo los datos que el usuario quiere preservar, como la lista de nekos favoritos. Esto permite que los favoritos persistan incluso si el usuario cierra la app o se queda sin internet.'
    }
  ];
}