# Resumen de Selectores CSS

## 1. Selectores de Tipo
**Descripción**: Seleccionan todos los elementos de un tipo específico.
Ejemplo 

p {
  color: blue;
}
<Aplicación Práctica:> Utilizado para aplicar estilos uniformes a todos los párrafos en un documento HTML.

## 2. Selectores de Clase
**Descripción: Seleccionan todos los elementos que tienen una clase específica.
**Ejemplo de Código:


css

.button {
  background-color: green;
}
**Aplicación Práctica: Útil para aplicar estilos específicos a un grupo de elementos, como botones de llamada a la acción.

## 3. Selectores de ID
**Descripción: Seleccionan un elemento único basado en su ID.
**Ejemplo de Código:

css

#header {
  font-size: 24px;
}
**Aplicación Práctica: Ideal para aplicar estilos únicos a un elemento específico, como un encabezado principal.

## 4. Selectores de Atributo
**Descripción: Seleccionan elementos basados en la presencia o valor de un atributo.
**Ejemplo de Código:

css

input[type="text"] {
  border: 1px solid black;
}
**Aplicación Práctica: Útil para aplicar estilos a elementos de formulario específicos.

## 5. Selectores de Descendiente
**Descripción: Seleccionan elementos que son descendientes de un elemento específico.
**Ejemplo de Código:

css

div p {
  color: red;
}
**Aplicación Práctica: Usado para aplicar estilos a elementos que están dentro de un contenedor específico.

## 6. Selectores de Hijo
**Descripción: Seleccionan elementos que son hijos directos de un elemento específico.
**Ejemplo de Código:

css

ul > li {
  list-style: none;
}
**Aplicación Práctica: Útil para estilizar elementos que son directamente anidados dentro de otro.

## 7. Selectores de Adjacent Sibling
**Descripción: Seleccionan elementos que son hermanos adyacentes.
**Ejemplo de Código:

css

h1 + p {
  margin-top: 0;
}
**Aplicación Práctica: Aplicado para estilizar elementos que siguen inmediatamente después de otro.

## 8. Selectores de General Sibling
**Descripción: Seleccionan todos los elementos hermanos que siguen a un elemento específico.
**Ejemplo de Código:

css

h1 ~ p {
  color: gray;
}
**Aplicación Práctica: Usado cuando se quiere aplicar un estilo a todos los hermanos siguientes de un elemento.

## 9. Selectores de Pseudo-clase
**Descripción: Seleccionan elementos basados en su estado.
**Ejemplo de Código:

css

a:hover {
  text-decoration: underline;
}
**Aplicación Práctica: Muy útil para estilizar estados interactivos como el "hover" sobre enlaces.

## 10. Selectores de Pseudo-elemento
**Descripción: Seleccionan una parte específica de un elemento.
**Ejemplo de Código:

css

p::first-line {
  font-weight: bold;
}
