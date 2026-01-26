# Anatomisjas.spele
###	Idejas apraksts
Šī projekta ideja ir izveidot izglītojošu mājaslapu, kas sniedz iespēju latviešu valodā apgūt cilvēka anatomiju – kaulus, muskuļus un iekšējos orgānus. Pašlaik gandrīz visas pieejamās anatomijas mācību aplikācijas un mājaslapas ir svešvalodās, visbiežāk angļu valodā. Tas rada grūtības skolēniem un studentiem, jo mācību procesā ir jātērē laiks terminu tulkošanai, nevis pašas tēmas izpratnei. Mācoties dzimtajā valodā, informācija tiek uztverta vieglāk, ātrāk un arī labāk paliek atmiņā, īpaši, ja pārbaudes darbi un eksāmeni notiek latviešu valodā.
Ienākot mājaslapā, lietotājam būs iespēja izvēlēties, kuru anatomijas sadaļu viņš vēlas apgūt – cilvēka kaulus, muskuļus vai orgānus. Pēc izvēles veikšanas ekrānā parādīsies vizuāls cilvēka attēls ar attiecīgo anatomisko sistēmu, piemēram, skelets, muskuļu karte vai iekšējo orgānu izvietojums. Šajā posmā lietotājs varēs brīvi apskatīt attēlu un iepazīties ar pareizajiem nosaukumiem un to novietojumu, tādējādi nostiprinot pamatzināšanas.
Pēc tam būs iespējams uzsākt interaktīvu spēli. Spēles laikā ekrānā parādīsies viens anatomisks nosaukums, un lietotāja uzdevums būs uzspiest uz pareizās vietas cilvēka attēlā. Ja atbilde būs pareiza, tiks ieskaitīts punkts, ja nepareiza – punkts netiks piešķirts. Neatkarīgi no atbildes pareizības, spēle turpināsies ar nākamo nosaukumu. Šis process atkārtosies, līdz būs iziets cauri visiem kauliem, muskuļiem vai orgāniem attiecīgajā sadaļā.
Kad spēle būs pabeigta, lietotājs redzēs savu rezultātu. Papildus tam mājaslapā būs iespēja reģistrēties un izveidot savu profilu, lai sekotu līdzi progresam, redzētu iepriekšējos rezultātus un uzlabotu savas zināšanas laika gaitā. Šāda mājaslapa padarītu anatomijas apguvi pieejamāku, saprotamāku un interesantāku latviešu valodā.
 
###	Problēmas analīze
**Mērķauditorija**

Šīs mājaslapas galvenā mērķauditorija ir skolēni un studenti, kuri mācās bioloģiju un anatomiju latviešu valodā. Tā būs piemērota pamatskolas un vidusskolas skolēniem, kuriem cilvēka anatomija ir daļa no mācību programmas, kā arī profesionālo un augstākās izglītības iestāžu studentiem, piemēram, topošajiem medicīnas, sporta, fizioterapijas, masieru vai veselības aprūpes nozares speciālistiem. Mājaslapa var būt noderīga arī skolotājiem kā palīgmateriāls mācību stundās vai mājasdarbu uzdošanai.
Papildus formālajai izglītībai, risinājums būs piemērots arī ikvienam interesentam, kurš vēlas paplašināt savas zināšanas par cilvēka ķermeni, piemēram, sportistiem, treneriem vai cilvēkiem, kuri vienkārši interesējas par veselību un bioloģiju. Mājaslapai būs vienkāršs un pārskatāms dizains, kas padarīs to saprotamu dažāda vecuma un zināšanu līmeņa lietotājiem.


**Kāpēc vērts risinājumu izstrādāt?**

Šādu risinājumu ir vērts izstrādāt, jo šobrīd trūkst kvalitatīvu un mūsdienīgu anatomijas mācību resursu latviešu valodā. Lielākā daļa pieejamo materiālu ir svešvalodās, kas apgrūtina mācību procesu un samazina efektivitāti. Mācoties dzimtajā valodā, lietotāji var koncentrēties uz satura izpratni, nevis terminu tulkošanu.
Šajā risinājumā tiek izmantots active recall jeb aktīvās atcerēšanās princips, kas ir viens no efektīvākajiem veidiem, kā apgūt un ilgtermiņā saglabāt zināšanas. Atšķirībā no pasīvās mācīšanās, piemēram, vienkāršas grāmatas vai attēlu skatīšanās, active recall liek cilvēkam aktīvi domāt, meklēt atbildi un pieņemt lēmumu. Kad lietotājs redz anatomisko nosaukumu un pats mēģina atrast pareizo vietu cilvēka attēlā, smadzenes strādā intensīvāk, tādējādi informācija tiek labāk nostiprināta. Šāda mācīšanās veicina dziļāku izpratni un samazina virspusēju iekalšanu.
Interaktīva pieeja ar vizuāliem attēliem un spēles elementiem veicina lielāku iesaisti un motivāciju mācīties. Šāda mājaslapa palīdz nostiprināt zināšanas, uzlabot atmiņu un padarīt mācīšanos interesantāku un efektīvāku. Turklāt iespēja sekot līdzi savam progresam motivē lietotājus atkārtoti atgriezties platformā un pilnveidot savas zināšanas ilgtermiņā.
 
###	Izmantojamās tehnoloģijas
Programmai kā pamats tiks izmantots Python, HTML un SQL, jo tās ir savstarpēji labi savienojamas, un autoriem ir iepriekšēja pieredze ar tām strādājot.
Python tiktu izmantots kā servera puses jeb back-end programmēšanas valoda. Ar Python palīdzību var realizēt lietotāju reģistrāciju un autorizāciju, punktu skaitīšanu, uzdevumu secību, progresa saglabāšanu un datu apstrādi.
HTML tiktu izmantots mājaslapas struktūras veidošanai. Tas nodrošina lapas pamata uzbūvi – izvēlnes, pogas, tekstu, attēlus un spēles saskarni. Iespējams, HTML tiktu papildināts ar CSS, jo tam ir citādas iespējas glīta dizaina veidošanā.
Lai mājaslapa būtu interaktīva, nepieciešams izmantot arī JavaScript. Ar tā palīdzību var apstrādāt lietotāja klikšķus uz cilvēka attēla, uzreiz parādīt rezultātus, mainīt uzdevumus bez lapas pārlādes un padarīt spēles procesu dinamisku.
SQL tiktu izmantots datubāzes izveidei un pārvaldībai. Datubāzē var glabāt lietotāju kontus, progresu, rezultātus un statistiku.
Papildus tiks izmantotas arī bibliotēkas anatomisko attēlu pārvaldībai, kā arī drošības risinājumi (piemēram, paroļu šifrēšana), lai nodrošinātu drošu un stabilu sistēmas darbību. Pārējās detaļas tiks specificētas vēlāk pēc vajadzības.  

### Darba plāns 
| nedēlas nr. | Evelīna | Līva | Megija|
| ------------- | ------------- | ------------- | ------------- |
| 1. | Atrast/izveidot cilvēka kaulu, muskuļu un orgānu modeļus | Sagatavot konceptuālo modeli. Sagatavot izstrādes vidi. Sagatavot bibliotēku saistības (dependencies). | Megija|
| 2. | Izveidot sarasktu/uzskatāmu materiālu ar iekļaujamajiem kauliem + 1/2 muskuļiem | Izveidot python failu un datubāžu sistēmu backend. Izveidot javascript failu un HTML failu frontend  | Megija|
| 3. | Izveidot sarasktu/uzskatāmu materiālu ar iekļaujamajiem 1/2 muskuļiem + orgāniem|   Izveidot backend savienojumu ar serveri. Izmēģināt API saziņu ar serveri un pārbaudīt, vai no frontend var nosūtīt informāciju uz datubāzi  | Megija|
| 4. | Ievietot cilvēka modeļus mājaslapā.| Izveidot sign up un log in funkcionalitāti: informācijas nosūtīšanu uz  backend un datubāzēm un informācijas pieprasīšanu no datubāzēm | Megija|
| 5. | Novietot cilvēka daļu nosaukumus uz modeļiem tā, ka tie parādas, kad tiek aktivizēta funkcija “parādīt nosaukumus” (saprast, kā to darīt, uztaisīt muskuļu modelim šo funkciju) | Izveidot backend tā, lai var nomainīt paroli, ir saikne ar e-pastu un var atgūt aizmirstu paroli caur e-pastu. | Megija|
| 6. | Turpināt novietot cilvēka daļu nosaukumus uz modeļiem tā, ka tie parādas, kad tiek aktivizēta funkcija “parādīt nosaukumus” (kaulu, orgānu modeļi) | Ievietot sarakstus ar iekļaujamajiem kauliem/muskuļiem datubāzē. | Megija|
| 7. | Novietot nospiežamās pogas uz cilvēka muskuļu, kaulu modeļiem. |  Izveidot algoritmu jautājuma ģenerēšanai un nodrošināt jautājuma sūtīšanu uz frontend | Megija|
| 8. | Novietot nospiežamās pogas uz cilvēka orgānu modeļa. | Iveidot kodu ievadītās atbildes saņemšanai backend. Izveidot ievadītās atbildes pareizības pārbaudi un boolean pazeiz vai nepareizs vērtības nosūtīšanu uz frontend | Megija|
| 9. | Mājas lapas dizains - pogas, nodaļas, krāsas -, lai viss labi izskatās. | Nodrošināt rezultātu saņemšanu backend un ievietošanu datubāzē  | Megija|
| 10. | Programmas loģistikas, log in testēšana | Programmas frontend testēšana | Lietotāja saskarnes (spēles) testēšana|
