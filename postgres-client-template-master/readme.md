# postgres-client-template

Brug projektet som skabelon til visualiseringer med d3.js som skal forbinde en til postgres-database.

Visualisering (html, css, js) skal ligge i `public`-folderen og `main.js` indeholder node.js-programmet der forbinder til databasen. I main.js er defineret en API man kan kalde fra sin browser-javascript med en SQL query i. 

Du får brug for at ændre database-indstillingerne i main.js eller sætte dem gennem environment variables som beskrevet i kode-kommentarerne.

For at starte projektet, brug følgende kommandoer 

```js
$ npm install      // kun første gang
$ npm start
```

