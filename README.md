This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Pokecoin Blockchainfarmer Projekt für ein Web-Engineering Modul.

Die WebApp erlaubt das Sammeln von Pokemon Karten. Kartenpacks können für pokecoins gekauft werden. Diese müssen per Blockchain clientside gethreaded gefarmt werden.

Demo: https://drive.google.com/file/d/1kfIIJI-Cka-RUTMcsjhe5Jm5pWZLsrx8/view?usp=sharing

Der Blockchainfarmer läuft auf einem Worker in einem separatem Thread, damit die GUI nicht einfriert. 
Dafür wurde nach diesem Post gearbeitet: https://medium.com/@bykovskimichael/how-to-use-web-worker-with-create-react-app-e1c1f1ba5279?sk=6d6f9ad9056bc1c44bd881990dc3a8e9

Das Programm läuft nur solange der Server noch online ist. 
