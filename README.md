# Nmap Helper - Mihkel Joll

### Sissejuhatus

**Nmap** ("Network Mapper") on tasuta ja avatud lähtekoodiga (litsents) utiliit võrgu avastamiseks ja turbeauditeerimiseks.
Paljud süsteemid ja võrguadministraatorid leiavad, et see on kasulik ka selliste ülesannete jaoks nagu võrgu inventuur, teenuse uuendamise ajakavade haldamine ja host või teenuse tööaja jälgimine.
Nmap kasutab uudseid võimalusi töötlemata IP-pakettide leidmiseks, millised masinad on võrgus saadaval, milliseid teenuseid (rakenduse nimi ja versioon) need masinad pakuvad, milliseid operatsioonisüsteeme (ja OS-i versioone) nad töötavad, mis tüüpi pakettfiltrid / tulemüürid on kasutusel ja kümneid muid omadusi. 
See oli mõeldud suurte võrkude kiireks skannimiseks, kuid töötab hästi ka üksikute masinate korral.

### Rakenduse funktsionaalsuse kirjeldus

##### 1. Nmap Builder
Rakendusel on võimalik ehitada nmapi terminali koodi veebilehekuljel.
Samuti on võimalik lugeda kõiki commande ning harjutada neid meelde jätta
