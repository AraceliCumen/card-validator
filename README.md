# Card Validator
>Producto Final: Library to Card Validation.

**Card Validator** es una librería para la `validación del número de tarjeta`, `fecha de vencimiento`, `código de verificación (cvv)` y `nombre completo` que aparece en la tarjeta.  

Para la verificación del número de tarjeta se hace uso del algoritmo de [Luhn](https://en.wikipedia.org/wiki/Luhn_algorithm).

---
## Herramientas
- HTML5.
- CSS3
- ECMAScript6
- Babel
- Node JS
- NPM 
- Jquery
---

## Dependencias
- jQuery
---
## Instalación  

1. Usar Jquery (cdn). 
   ```html
    <script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    ```
2. Descargar o clonar repositorio.  
3. Agregar archivo public/js/index.js a su proyecto.  
    ```html
    <script type="text/javascript" src="js/index.js"></script>
    ```
* **Opción sin descargar archivo**  
  ```html
    <script type="text/javascript" src="https://aracelicumen.github.io/card-validator/public/js/index.js"></script>
    ```  

4. Cada input de ingreso de datos debe contener los siguientes ID.  

```html
<form id="form-card-validate">
  <div class="form-group">
    <label for="cn">Número de tarjeta</label>
    <input id="cn"/>
  </div>
  <div class="form-group">
    <label for="exp">Fecha de vencimiento</label>
    <input id="exp"/>
  </div>
  <div class="form-group">
    <label for="cvv">CVV</label>
    <input id="cvv"/>
  </div>
  <div class="form-group">
    <label for="name">Nombre completo</label>
    <input id="name"/>
  </div>
  <input type="submit" value="Pagar" id="btn-pay"/>
</form>
```  
---  

## Uso  

Llama a las siguientes funciones.  

```js
    
var $formCardValidate = $('#form-card-validate');
var $cardNumber = $('#cn');
var $expiryDate = $('#exp');
var $cvv = $('#cvv');
var $name = $('#name');
var $buttonPay = $('#btn-pay');

$cardNumber.on('input', function () {
  validateNumberCard($cardNumber, $typeOfCard);
  activeButton($buttonPay);
});

$name.on('input', function () {
  isNameValid($name);
  activeButton($buttonPay);
});

$cvv.on('input', function () {
  validateCvv($cvv);
  activeButton($buttonPay);
});

$expiryDate.on('input', function () {
  isDateValid($expiryDate);
  activeButton($buttonPay);
});
```  

Ingreso de datos  

| Input Fecha de vencimiento       |Dato  Válido           |
| --- |---|---|
| `'10/19'`      | true |
| `'10 19'`      | true      |
| `'10/2019'`      | false      |
| `'102019'`      | false     |
---

Se implementa por etapas las tareas establecidas por semanas:

#### ETAPA 1

* Formar equipo.
* Elegir reto.
* Hacer fork de reto modelo o crear nuevo repo si has propuesto un reto no propuesto por Laboratoria.
* Escribir primera versión del `README.md` con una descripción general de la librería así como ejemplos (snippets) de uso y configuración (si fuera necesario).
* Crear issues y milestones que sirvan como hoja de ruta (roadmap)
* Inicializar proyecto con `npm init` y `git init`.
* Crear `index.html` con ejemplo principal de uso.

#### ETAPA 2

* Agregar tests que describan la `API` de tu librería y los casos de uso esperados.
* Implementar funcionalidad esencial.
* Hacer code review con compañeras e instructores.

#### ETAPA 3

* Completar implementación de librería y ejemplo principal (usando la librería).
* Hacer code review con compañeras e instructores.
* Preparar demo/presentación.
* Publicar el ejemplo principal (`index.html`) en GitHub pages.

**Herramienta de planificación - TRELLO**

![](public/assets/img/trello.png)  
