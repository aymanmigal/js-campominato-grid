 PROBLEMA: L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe. Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.


PARTE 1
1.Creare il pulsante nel DOM;
2.Recuperare il pulsante in js;
3.Aggiungere l'event listner al pulsante;
4.Creare un div che conterra' le caselle della griglia;
5.Creare le caselle ed appenderle al div.


PARTE 2
1.Scrivere nella casella il numero corrispondente;
 1.1 Dare alle caselle un valore numerico i+1 che parte da 1 e finisce a 100;
2.Aggiungo l'event listner alla casella;
3.Al click, la casella si colora di azzurro;
4.Al click, la casella mostra il proprio numero. 



BONUS: Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;


1.Aggiungere la select al dom;
2.Al click del pulsante , recuperare il valore selezionato dalla select;
3.Generare la griglia in base al valore della select selezionata;