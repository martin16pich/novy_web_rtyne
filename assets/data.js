/* Rtyně v Podkrkonoší – pracovní ukázkový obsah. Ručně ověřeno 14. 11. 2026.
   Data jsou záměrně oddělena od vykreslování pro snadnou editaci. */
window.RTYNE_DATA = {
  official: 'https://www.rtyne.cz',
  town: {name:'Rtyně v Podkrkonoší', address:'Hronovská 431, 542 33 Rtyně v Podkrkonoší', phone:'+420 499 888 140', email:'podatelna@mestortyne.cz', databox:'2awbshw'},
  links: {
    services:'https://www.rtyne.cz/mesto-1',
    waste:'https://www.rtyne.cz/svoz-odpadu-a-odpadove-hospodarstvi',
    fees:'https://sluzby.alis.cz/rtyne',
    forms:'https://www.rtyne.cz/formulare',
    board:'https://www.rtyne.cz/uredni-deska',
    news:'https://www.rtyne.cz/aktualni-informace',
    tourism:'https://www.rtyne.cz/volny-cas-turistika-a-ubytovani',
    clubs:'https://www.rtyne.cz/spolky-a-sdruzeni',
    culture:'https://www.rtyne.cz/',
    munipolis:'https://www.rtyne.cz/munipolis-mobilni-aplikace'
  },
  /* Wikimedia Commons, licence CC BY-SA 4.0. Autory a odkazy viz FOTO-A-LICENCE.md.
     Obrázky se načítají ze vzdáleného Wikimedia Commons; při nedostupnosti se zobrazí barevný podklad. */
  images: {
    bells:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Rtyn%C4%9B_v_Podkrkono%C5%A1%C3%AD_-_kostel_sv._Jana_K%C5%99titele_se_zvonic%C3%AD_%28stav_%C4%8Derven_2023%29_%281%29.jpg/1280px-Rtyn%C4%9B_v_Podkrkono%C5%A1%C3%AD_-_kostel_sv._Jana_K%C5%99titele_se_zvonic%C3%AD_%28stav_%C4%8Derven_2023%29_%281%29.jpg',
    bellsSmall:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Rtyn%C4%9B_v_Podkrkono%C5%A1%C3%AD_-_kostel_sv._Jana_K%C5%99titele_se_zvonic%C3%AD_%28stav_%C4%8Derven_2023%29_%281%29.jpg/640px-Rtyn%C4%9B_v_Podkrkono%C5%A1%C3%AD_-_kostel_sv._Jana_K%C5%99titele_se_zvonic%C3%AD_%28stav_%C4%8Derven_2023%29_%281%29.jpg',
    centre:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Rtyn%C4%9B_v_Podkrkono%C5%A1%C3%AD_-_doln%C3%AD_%C4%8D%C3%A1st_ul._Kosteleck%C3%A1_nad_n%C3%A1m%C4%9Bst%C3%ADm_Horn%C3%ADk%C5%AF%2C_vpravo_%C4%8Dp._563_a_370.jpg?width=640',
    trails:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Rtyn%C4%9B_v_Podkrkono%C5%A1%C3%AD%2C_%C5%BEelezni%C4%8Dn%C3%AD_zast%C3%A1vka%2C_turistick%C3%A9_zna%C4%8Den%C3%AD.jpg?width=640'
  },
  /* Události jsou jen výchozí sada. Data web automaticky nesynchronizuje s městem. */
  events: [
    {id:'e1',date:'2026-11-17',time:'18:00',title:'Kino Na Rychtě – Skřítek: Nový začátek',category:'Film',place:'Kino Na Rychtě',desc:'Promítání filmu. Jednotné vstupné dle oznámení města: 50 Kč. Před návštěvou ověřte aktuální program.',source:'https://www.rtyne.cz/'},
    {id:'e2',date:'2026-11-21',time:'',title:'Vánoční jarmark',category:'Trhy',place:'Rtyně v Podkrkonoší',desc:'Vánoční jarmark ve městě. Aktuální program ověřte na oficiálním webu.',source:'https://www.rtyne.cz/'},
    {id:'e3',date:'2026-11-24',time:'',title:'U moře v Černé Hoře',category:'Přednáška',place:'Rtyně v Podkrkonoší',desc:'Cestovatelská přednáška Libora Drahoňovského. Čas a místo si ověřte u pořadatele.',source:'https://www.rtyne.cz/'},
    {id:'e4',date:'2026-11-26',time:'17:00',title:'Čtení a zpívání o válce roku 1866',category:'Kultura',place:'Městská knihovna',desc:'Kulturní setkání v městské knihovně.',source:'https://www.rtyne.cz/titulni-stranka'},
    {id:'e5',date:'2026-11-27',time:'19:00',title:'Adventní koncert Koletovy hornické hudby',category:'Koncert',place:'Hala Orlovna',desc:'Adventní koncert Koletovy hornické hudby.',source:'https://www.rtyne.cz/titulni-stranka'},
    {id:'e6',date:'2026-11-28',time:'19:00',title:'Adventní koncert Koletovy hornické hudby',category:'Koncert',place:'Hala Orlovna',desc:'Druhý termín adventního koncertu Koletovy hornické hudby.',source:'https://www.rtyne.cz/titulni-stranka'}
  ],
  attractions: [
    {title:'Dřevěná zvonice',desc:'Výrazná historická dominanta města u kostela sv. Jana Křtitele.',icon:'landmark',image:'bells',url:'https://www.rtyne.cz/volny-cas-turistika-a-ubytovani'},
    {title:'Město a jeho historie',desc:'Poznejte hornickou tradici a místa, která utvářela Rtyni.',icon:'map',image:'centre',url:'https://www.rtyne.cz/volny-cas-turistika-a-ubytovani'},
    {title:'Výlety v Jestřebích horách',desc:'Vyrazte do okolní přírody po turistických trasách.',icon:'route',image:'trails',url:'https://www.rtyne.cz/volny-cas-turistika-a-ubytovani'}
  ],
  clubs: [
    {name:'SDH Rtyně',type:'Dobrovolní hasiči',icon:'flame'},
    {name:'TJ Baník Rtyně',type:'Sport',icon:'activity'},
    {name:'T. J. Sokol Rtyně',type:'Sport a pohyb',icon:'users'},
    {name:'Orel Rtyně',type:'Sport a komunita',icon:'users'},
    {name:'Koletova hornická hudba Rtyně',type:'Hudba',icon:'music'},
    {name:'SKAUT Rtyně',type:'Mládež a volný čas',icon:'compass'},
    {name:'Český zahrádkářský svaz Rtyně',type:'Zahrádkáři',icon:'leaf'},
    {name:'TS Ballare',type:'Tanec',icon:'music'},
    {name:'TŠ Bonifác',type:'Tanec',icon:'music'}
  ],
  news: [
    {title:'Uzavření městského úřadu 16. listopadu',date:'2026-11-11',until:'2026-11-16',desc:'Městský úřad bude v pondělí 16. listopadu 2026 uzavřen.',url:'https://www.rtyne.cz/aktualni-informace'},
    {title:'Rozhlasové hlášení 12. listopadu',date:'2026-11-12',desc:'Záznam informací a hlášení z města.',url:'https://www.rtyne.cz/titulni-stranka'},
    {title:'Rtyňské foto 2026 – výsledky',date:'2026-11-09',desc:'Výsledky letošního ročníku fotografické soutěže.',url:'https://www.rtyne.cz/titulni-stranka'}
  ]
};
