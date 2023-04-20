Kleine Übung: importiere jquery in die main.js dem npm-demo Projekt was ihr mit Micha gemacht habt
- suche zunächst auf npmjs.com nach jquery
- installiere dann  jquery mittels node package manager über dein Terminal
	- siehe Überschrift "Node" bei npmjs.com
	- => NICHT mittels <script> einbinden
- Frage: wo erscheint nun der jQuery-Eintrag in der package.json? Warum erscheint er da? (Antwort bitte per Slack)
- Implementiere anschließend in der index.js ein `alert('hallo Welt')`, das in der `ready` function von jquery ausgeführt wird 
	- dazu musst du zuerst jquery in der index.js importieren (`import $ from "jquery";`)
	- hier siehst du, wie die Funktion ready() von jQuery funktioniert: https://api.jquery.com/ready/
- Dein Code: Schicke deinen Code per Slack
- Frage: Mit welchem Befehl entfernst du jQuery (als Abhängigkeit) aus deinem Projekt? (Antwort bitte per Slack)

