# Proyecto: Card Validator 

Card Validator es una librería para la validación del número de tarjeta, fecha de vencimiento, código de verificación (cvv) y nombre completo que aparece en la tarjeta. Para la verificación del número de tarjeta se hace uso del algoritmo de Luhn.

![card-validator](https://user-images.githubusercontent.com/32307611/36379847-1b25a5c2-154e-11e8-94aa-7f99c20a7242.PNG)

## Desarrollado para 
[Laboratoria](http://laboratoria.la)

- Producto Final: Library to Card Validation.


**Card Validator** es una librería para la `validación del número de tarjeta`, `fecha de vencimiento`, `código de verificación (cvv)` y `nombre completo` que aparece en la tarjeta.  

Para la verificación del número de tarjeta se hace uso del algoritmo de [Luhn](https://es.wikipedia.org/wiki/Algoritmo_de_Luhn).

---
[Demo](https://aracelicumen.github.io/card-validator/public/)
---
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
// var $buttonPay = $('#btn-pay');

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

| Input Fecha de vencimiento  |Dato  Válido|
| ---  |---|
| `'10/19'`      | true |
| `'10 19'`      | true      |
| `'10/2019'`    | false      |
| `'102019'`     | false     |
---


## Planificación  

* Elección de temática de librería:  Se realizó un analisis estadístico. Según datos de la SBS, hay 7,9 millones de tarjetahabientes activos en el sistema financiero a julio del 2017 (Perú).  
Cada vez más personas emplean las tarjetas de crédito al momento de realizar compras, pagos de consumo u otros servicios online y diversas empresas estan iniciando la implementación de venta de sus productos mediante sus páginas web para lo cual un desarrollador verá la necesidad de contar con un validador de ingreso de datos de tarjeta.  

* Tareas desarrolladas por etapas (Observar ISUUES y MILESTONES)


**Otra herramienta de planificación - TRELLO**

![](public/assets/img/trello.png)  
  
## Desarrolladoras

* **Araceli Cueva:** [GitHub Account](https://github.com/AraceliCumen).
* **Alejandra Cabrera:** [GitHub Account](https://github.com/AlejandraCP).  
