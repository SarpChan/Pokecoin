This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Pokecoin Blockchainfarmer Projekt für ein Web-Engineering Modul.

Die WebApp erlaubt das Sammeln von Pokemon Karten. Kartenpacks können für pokecoins gekauft werden. Diese müssen per Blockchain clientside gethreaded gefarmt werden.
Der Miner funktioniert nur, wenn der Nutzer sich auf der Minerseite befindet, und wenn das Fenster und der Tab der WebApp im Fokus sind.

[Demo](https://vimeo.com/470136196)

Der Blockchainfarmer läuft auf einem Worker in einem separatem Thread, damit die GUI nicht einfriert. 
Dafür wurde nach diesem [Post](https://medium.com/@bykovskimichael/how-to-use-web-worker-with-create-react-app-e1c1f1ba5279?sk=6d6f9ad9056bc1c44bd881990dc3a8e9) gearbeitet. 

Das Programm läuft nur solange der Server noch online ist. 
