//var defaultTheme = getRandom(4);
var defaultTheme = 3;

var today = new Date();

var events = [ {
    id: "imwyx6S",
    name: "Event #3",
    description: "Lorem ipsum dolor sit amet.",
    date: today.getMonth() + 1 + "/18/" + today.getFullYear(),
    type: "event"
}, {
    id: "9jU6g6f",
    name: "Holiday #1",
    description: "Lorem ipsum dolor sit amet.",
    date: today.getMonth() + 1 + "/10/" + today.getFullYear(),
    type: "holiday"
}, {
    id: "0g5G6ja",
    name: "Event #1",
    description: "Lorem ipsum dolor sit amet.",
    date: [ today.getMonth() + 1 + "/2/" + today.getFullYear(), today.getMonth() + 1 + "/5/" + today.getFullYear() ],
    type: "event",
    everyYear: !0
}, {
    id: "y2u7UaF",
    name: "Holiday #3",
    description: "Lorem ipsum dolor sit amet.",
    date: today.getMonth() + 1 + "/23/" + today.getFullYear(),
    type: "holiday"
}, {
    id: "dsu7HUc",
    name: "Birthday #1",
    description: "Lorem ipsum dolor sit amet.",
    date: new Date(),
    type: "birthday"
}, {
    id: "dsu7HUc",
    name: "Birthday #2",
    description: "Lorem ipsum dolor sit amet.",
    date: today.getMonth() + 1 + "/27/" + today.getFullYear(),
    type: "birthday"
} ];

var active_events = [];

var week_date = [];

var curAdd, curRmv;

function getRandom(a) {
    return Math.floor(Math.random() * a);
}

function getWeeksInMonth(a, b) {
    var c = [], d = new Date(b, a, 1), e = new Date(b, a + 1, 0), f = e.getDate();
    var g = 1;
    var h = 7 - d.getDay();
    while (g <= f) {
        c.push({
            start: g,
            end: h
        });
        g = h + 1;
        h += 7;
        if (h > f) h = f;
    }
    return c;
}

week_date = getWeeksInMonth(today.getMonth(), today.getFullYear())[2];

$(document).ready(function() {
    $("#demoEvoCalendar").evoCalendar({
        format: "MM dd, yyyy",
        titleFormat: "MM",
        calendarEvents: [{
            id: "d8jai7s",
            name: "Pesta Gendang Nusantara 2024",
            description: "Author's note: Thank you for using EvoCalendar! :)",
            date: "January/2/2024",
            type: "event",
            everyYear: !0 
     },{

            id: "d8jai7s",
            name: "Festival Kuih Muih Malaysia",
            description: "Author's note: Thank you for using EvoCalendar! :)",
            date: "January/6/2024",
            type: "event",
            everyYear: !0
    },{
            id: "d8jai7s",
            name: "Great British Circus Hollywood",
            description: "Author's note: Thank you for using EvoCalendar! :)",
            date: "January/6/2024",
            type: "event",
            everyYear: !0
   },{
    
              id: "d8jai7s",
              name: "Thaipusam",
              description: "Author's note: Thank you for using EvoCalendar! :)",
              date: "January/25/2024",
              type: "event",
              everyYear: !0
    
              
    
              
   },{
    
            id: "d8jai7s",
            name: "ROTAX Max Challenge Asia 2024",
            description: "Author's note: Thank you for using EvoCalendar! :)",
            date: "January/26/2024",
            type: "event",
            everyYear: !0
    
            
    
            
   },{
    
          id: "d8jai7s",
          name: "20th LANGKAWI ROYAL INTERNATIONAL REGATTA",
          description: "Author's note: Thank you for using EvoCalendar! :)",
          date: "January/20/2024",
          type: "event",
          everyYear: !0
    
          
    
          
  },{
        id: "d8jai7s",
        name: "Perlis International Sunnah Competition 2024",
        description: "Author's note: Thank you for using EvoCalendar! :)",
        date: "January/27/2024",
        type: "event",
        everyYear: !0
    
        
    
        
  },{
      id: "d8jai7s",
      name: "Chinese Calligraphy and Writing For Couplet",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "January/28/2024",
      type: "event",
      everyYear: !0
    
      
    
      
  },{
      id: "d8jai7s",
      name: "LAMPOOPALOOZA",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "February/2/2024",
      type: "event",
      everyYear: !0
    
      
    
      
  },{
      id: "d8jai7s",
      name: "Cameron Night Run (CAMRUN)",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "February/3/2024",
      type: "event",
      everyYear: !0
    
      
    
      
  },{
    
      id: "d8jai7s",
      name: "Sustainability International Art Exbihition",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "January/5/2024",
      type: "event",
      everyYear: !0
    
      
    
      
  },{
    
      id: "d8jai7s",
      name: "Konsert Muzikal Tahun Baru Cina",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "February/8/2024",
      type: "event",
      everyYear: !0
    
      
    
      
  },{
    
      id: "d8jai7s",
      name: "Cherating Surf Festival",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "February/9/2024",
      type: "Holiday",
      everyYear: !0
    
      
    
      
  },{
    
      id: "d8jai7s",
      name: "Karinval Tahun Baru Cina 2024",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "February/9/2024",
      type: "event",
      everyYear: !0
    
      
    
      
  },{
    
      id: "d8jai7s",
      name: "Chinese New Year",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "February/10/2024",
      type: "Holiday",
      everyYear: !0
    
      
    
      
  },{
    
      id: "d8jai7s",
      name: "SANDBAR Walk 2024",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "February/11/2024",
      type: "event",
      everyYear: !0
    
      
    
      
  },{
    
      id: "d8jai7s",
      name: "IRS Prima Malaysian Open 2024",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "February/15/2024",
      type: "event",
      everyYear: !0
    
      
    
      
  },{
    
      id: "d8jai7s",
      name: "Chinese New Year 2024- Long Dinner table With communites",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "February/16/2024",
      type: "event",
      everyYear: !0
    
      
    
      
  },{
    
      id: "d8jai7s",
      name: "PENGKISAHAN DETIK KEMERDEKAAN BERSAMA TUNKU ABDUL RAHMAN PUTRA AL HAJ ",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "February/20/2024",
      type: "A day in History",
      everyYear: !0
    
      
    
      
  },{
    
      id: "d8jai7s",
      name: "PESTA Teluk Balik",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "February/20/2024",
      type: "event",
      everyYear: !0
    
      
    
      
    
      
  },{
              
      id: "d8jai7s",
      name: "NATIONAL CRAFT DAY (HKK)",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "January/27/2024",
      type: "event",
      everyYear: !0
    
      
    
      
  },{
    
      id: "d8jai7s",
      name: "Pertandingan Memancing Dan Pertandingan Masak Air Tawar",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "February/25/2024",
      type: "event",
      everyYear: !0
    
      
    
      
  },{
    
    
      id: "d8jai7s",
      name: "LE TOUR DE FEMINA",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "Februaru/27/2024",
      type: "event",
      everyYear: !0
    
      
    
      
  },{
    
      id: "d8jai7s",
      name: "CHINGAY FESTIVAL ",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "January/27/2024",
      type: "event",
      everyYear: !0
    
      
    
      
  },{
      id: "d8jai7s",
      name: "Pasir Gudang World Kite Festival",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "February/28/2024",
      type: "event",
      everyYear: !0
    
      
    
      
  },{
    
      id: "d8jai7s",
      name: "Melaka International Sea Challenge (MISC) 2024",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "March/1/2024",
      type: "event",
      everyYear: !0
    
      
    
      
  },{
    
      id: "d8jai7s",
      name: "Pesta Angin Timur",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "March/1/2024",
      type: "Highlight",
      everyYear: !0
    
      
    
      
  },{
    
      id: "d8jai7s",
      name: "Borneo Ultra Trail Marathon (BUTM) ",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "March/2/2024",
      type: "event",
      everyYear: !0
    
      
    
      
  },{
    
      id: "d8jai7s",
      name: "Kejohanan Muaythai Antarabangsa Melaka 2024",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "March/2/2024",
      type: "event",
      everyYear: !0
    
      
    
      
  },{
    
      id: "d8jai7s",
      name: "Homestay FELDA Klah Kg.Run",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "March/2/2024",
      type: "event",
      everyYear: !0
    
      
    
      
  },{
    
      id: "d8jai7s",
      name: "FESTIVAL KEBUDAYAAN KESENIAN DAN ADAT MASYARAKAT KERIAN 2024",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "//2024",
      type: "event",
      everyYear: !0
    
      
    
      
  },{
    
      id: "d8jai7s",
      name: "MIRI MARATHON ",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "March/3/2024",
      type: "event",
      everyYear: !0
    
      
    
      
  },{
    
      id: "d8jai7s",
      name: "Lumut Surfcasting Challenge",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "March/3/2024",
      type: "event",
      everyYear: !0
    
      
    
      
  },{
    
      id: "d8jai7s",
      name: "International Geopark Run LENGGONG Series 1",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "March/3/2024",
      type: "event",
      everyYear: !0
    
      
    
      
  },{
    
      id: "d8jai7s",
      name: "Raptor Watch 2023",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "March/9/2024",
      type: "event",
      everyYear: !0
    
      
    
      
  },{
    
      id: "d8jai7s",
      name: "PELITER Raya TTI (Pelita Raya Terengganu)",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "March/19/2024",
      type: "event",
      everyYear: !0
    
      
    
      
  },{
      id: "d8jai7s",
      name: "Johor International Day Of Forests",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "March/21/2024",
      type: "event",
      everyYear: !0
    
      
    
      
  },{
    
      id: "d8jai7s",
      name: "Iftar Madani",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "March/23/2024",
      type: "event",
      everyYear: !0
    
      
    
      
  },{
    
    
    
    
       id: "d8jai7s",
      name: "Malam 7 Likur",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "March/30/2024",
      type: "event",
      everyYear: !0
    
      
    
      
  },{
      id: "d8jai7s",
      name: "Sultan Mizan Underwater Photo Awards",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "March/30/2024",
      type: "event",
      everyYear: !0
    
      
    
      
  },{
    
      id: "d8jai7s",
      name: "Hari Raya Aidilfitri",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "April/10/2024",
      type: "Holiday",
      everyYear: !0
    
      
    
      
  },{
    
      id: "d8jai7s",
      name: "Majis Rumah Terbuka Sempena Tahun Melawat Melaka 2024",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "April/13/2024",
      type: "event",
      everyYear: !0
    
      
    
      
  },{
      id: "d8jai7s",
      name: "Taman Negara Bird Count",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "April/19/2024",
      type: "event",
      everyYear: !0
    
      
    
      
    },{
      id: "d8jai7s",
      name: "Malakka Dutch Week 2024",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "April/22/2024",
      type: "event",
      everyYear: !0
    
      
    
      
    },{
      id: "d8jai7s",
      name: "Johor Panti Bird Race 2024",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "April/27/2024",
      type: "event",
      everyYear: !0
    
      
    
      
    },{
      id: "d8jai7s",
      name: "Festival Mangga Harumanis Perlis",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "April/10/2024",
      type: "Holiday",
      everyYear: !0
    
      
    
      
    },{
    
      id: "d8jai7s",
      name: "Pesta Sungai Kedah",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "April/10/2024",
      type: "event",
      everyYear: !0
    
      
    
      
    },{
    
      id: "d8jai7s",
      name: "Hari Sambutan Tentera Laut Diraja Malaysia",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "April/27/2024",
      type: "Holiday",
      everyYear: !0
    
      
    
      
    },{
    
    
      id: "d8jai7s",
      name: "Promising Perak Surfcasting Challenge",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "April/1/2024",
      type: "Holiday",
      everyYear: !0
    
      
    
      
    },{
    
      id: "d8jai7s",
      name: "70's reviving Camping ",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "April/27/2024",
      type: "event",
      everyYear: !0
    
      
    
      
    },{
    
      id: "d8jai7s",
      name: "Royal Autoshow Kuala Kangsar",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "April/30/2024",
      type: "event",
      everyYear: !0
    
      
    
      
    },{
    
      id: "d8jai7s",
      name: "Labuan International SEA Challenge",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "April/23/2024",
      type: "highlights",
      everyYear: !0
    
      
    
      
  },{
    
      id: "d8jai7s",
      name: "Labuan Big Show Highlights (LABS)",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "May/3/2024",
      type: "event",
      everyYear: !0
    
      
    
      
  },{
      id: "d8jai7s",
      name: "Gopeng 4x4 TUG OF WAR CHALLENGE 2024 ",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "May/4/2024",
      type: "event",
      everyYear: !0
    
      
    
      
  },{
      id: "d8jai7s",
      name: "Pantai Remis Half Marathon 2024",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "May/5/2024",
      type: "event",
      everyYear: !0
    
      
    
      
  },{
    
      id: "d8jai7s",
      name: "Karnival Motosport MELAKA 2024",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "May/10/2024",
      type: "event",
      everyYear: !0
    
      
    
      
  },{
      id: "d8jai7s",
      name: "Perak Tourism International Invitation TAKEWON-Do Championship 2024",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "May/30/2024",
      type: "event",
      everyYear: !0
    
      
    
      
  },{
      id: "d8jai7s",
      name: "Night  Of Gilttering Lights",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "May/16/2024",
      type: "event",
      everyYear: !0
    
      
    
      
  },{
      id: "d8jai7s",
      name: "PICCI 2024 Perak International Convention On Creative Industry 2024",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "May/18/2024",
      type: "event",
      everyYear: !0
    
      
    
      
  },{
      id: "d8jai7s",
      name: "Ironman 70.3 Desaru Challenge 2024",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "May/19/2024",
      type: "event",
      everyYear: !0
    
      
    
      
  },{
      id: "d8jai7s",
      name: "Perak Half Marathon",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "May/19/2024",
      type: "event",
      everyYear: !0
    
      
    
      
  },{
      id: "d8jai7s",
      name: "Karnival Hari BandarRaya",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "May/23/2024",
      type: "event",
      everyYear: !0
    
      
    
      
  },{
      id: "d8jai7s",
      name: "Bagan Datuk Kelapa Fast",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "May/24/2024",
      type: "event",
      everyYear: !0
    
      
    
      
  },{
      id: "d8jai7s",
      name: "Festival Kesenian Probumi Malaysia",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "May/24/2024",
      type: "event",
      everyYear: !0
    
      
    
      
  },{
      id: "d8jai7s",
      name: "The 5th Perak Rogaining Championship 2024",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "May/24/2024",
      type: "event",
      everyYear: !0
    
      
    
      
  },{
      id: "d8jai7s",
      name: "Kampar River Festival",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "May/24/2024",
      type: "event",
      everyYear: !0
    
      
    
      
  },{
      id: "d8jai7s",
      name: "East Coast Craft Festival 2024",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "May/24/2024",
      type: "event",
      everyYear: !0
    
      
    
      
  },{
      id: "d8jai7s",
      name: "Program Citra Warisan Chitra Perak",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "May/25/2024",
      type: "event",
      everyYear: !0
    
      
    
      
  },{
      id: "d8jai7s",
      name: "Battle of the Bands",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "May/25/2024",
      type: "event",
      everyYear: !0
    
      
    
      
  },{
      id: "d8jai7s",
      name: "Mabul world turtle Day",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "May/23/2024",
      type: "event",
      everyYear: !0
    
      
    
      
  },{
      id: "d8jai7s",
      name: "Hari Peladang, Penternak Dan Nelayan Kebangsaan (HPPNK)",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "May/24/2024",
      type: "event",
      everyYear: !0
    
      
    
      
  },{
      id: "d8jai7s",
      name: "Durian Fest",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "May/30/2024",
      type: "event",
      everyYear: !0
    
      
    
      
  },{
      id: "d8jai7s",
      name: "Pertandingan Fotografi Pelancongan Pengkalan HULU",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "Mei/27/2024",
      type: "event",
      everyYear: !0
    
      
    
      
  },{
      id: "d8jai7s",
      name: "MUALIM Digital & ESPORTS Festival ",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "May/29/2024",
      type: "event",
      everyYear: !0
    
      
    
      
  },{
      id: "d8jai7s",
      name: "Tasik Raban Challenge And  Raya Gathering 2024",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "May/29/2024",
      type: "event",
      everyYear: !0
    
      
    
      
  },{
      id: "d8jai7s",
      name: "Motocross International Endurance 2024",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "//2024",
      type: "event",
      everyYear: !0
    
      
    
      
  },{
      id: "d8jai7s",
      name: "The 17th Langkawi UNESCO Global Geopark Anniversary",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "May/1/2024",
      type: "event",
      everyYear: !0
    
      
    
      
  },{
      id: "d8jai7s",
      name: "World Heritage Culinary Challenge 2024",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "June/1/2024",
      type: "event",
      everyYear: !0
    
      
    
      
  },{
      id: "d8jai7s",
      name: "Sabah Fest 2024",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "June/1/2024",
      type: "event",
      everyYear: !0
    
      
    
      
  },{
      id: "d8jai7s",
      name: "Langkawi Swimming Fest 2024",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "June/2/2024",
      type: "event",
      everyYear: !0
    
      
    
      
  },{
      id: "d8jai7s",
      name: "Fun Run Jom Pontian 2024",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "June/3/2024",
      type: "event",
      everyYear: !0
    
      
    
      
  },{
      id: "d8jai7s",
      name: "18th Malaysia International DIve Expo(MIDE) 2024",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "June/7/2024",
      type: "event",
      everyYear: !0
    
      
    
      
  },{
    
      id: "d8jai7s",
      name: "Festival Pergendangan Antarabangsa",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "June/7/2024",
      type: "event",
      everyYear: !0
    
      
    
      
  },{ id: "d8jai7s",
      name: "Fraser's Hill International Bird Race",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "May/7/2024",
      type: "event",
      everyYear: !0
    
      
    
      
    
    
     
      
  },{
      id: "d8jai7s",
      name: "Gawai Dayak Open House And Parade",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "June/8/2024",
      type: "event",
      everyYear: !0
    
      
    
      
  },{
      id: "d8jai7s",
      name: "Melaka International Dragon Boat Festival 2024",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "June/9/2024",
      type: "event",
      everyYear: !0
    
      
    
      
  },{
      id: "d8jai7s",
      name: "Malaysia Mega Sales",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "June/15/2024",
      type: "event",
      everyYear: !0
    
      
    
      
  },{
      id: "d8jai7s",
      name: "Festival Kopi Pahang",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "June/14/2024",
      type: "event",
      everyYear: !0
    
      
    
      
  },{
      id: "d8jai7s",
      name: "Pertandingan Memancing Terbuka Perak",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "June/23/2024",
      type: "event",
      everyYear: !0
    
      
    
      
  },{
      id: "d8jai7s",
      name: "Temasya Budaya Dalam Negeri Perak",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "June/27/2024",
      type: "event",
      everyYear: !0
    
      
    
      
  },{
    
      id: "d8jai7s",
      name: "Pesta Wau Antarabangsa",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "June/27/2024",
      type: "event",
      everyYear: !0
    
      
    
    
    
    
    
      
    
      
  },{
      id: "d8jai7s",
      name: "Rainforest World Music Festival",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "June/28/2024",
      type: "event",
      everyYear: !0
    
      
    
      
  },{
    
      id: "d8jai7s",
      name: "Pahang International Challenge Ocean Festival 2024",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "June/28/2024",
      type: "event",
      everyYear: !0
    
      
    
      
  },{
      id: "d8jai7s",
      name: "Terengganu International Bike Week",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "June/28/2024",
      type: "event",
      everyYear: !0
    
      
    
      
  },{
      id: "d8jai7s",
      name: "Labuan Diving Festival 2.0",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "June/28/2024",
      type: "event",
      everyYear: !0
    
      
    
      
  },{
      id: "d8jai7s",
      name: "Fiesta San Diego",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "June/29/2024",
      type: "event",
      everyYear: !0
    
      
    
      
  },{
      id: "d8jai7s",
      name: "Karnival KL Dulu-Dulu",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "June/29/2024",
      type: "event",
      everyYear: !0
    
      
    
      
  },{
      id: "d8jai7s",
      name: "Perak Triathlon 2024",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "June/29/2024",
      type: "event",
      everyYear: !0
    
      
    
      
  },{
      id: "d8jai7s",
      name: "TNBYY ULTRA (THE CRYPIC ASTHETIC Trail)",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "June/29/2024",
      type: "event",
      everyYear: !0
    
      
    
      
  },{
      id: "d8jai7s",
      name: "Sambutan Ulang Tahun Pengiktirafan Lembah Lenggong Sebagai Tapak Warisan Dunia UNESCO KE-12",
      description: "Author's note: Thank you for using EvoCalendar! :)",
      date: "June/30/2024",
      type: "event",
      everyYear: !0},{
        id: "d8jai7s",
        name: "Pesta Padi",
        description: "Author's note: Thank you for using EvoCalendar! :)",
        date: "June/30/2024",
        type: "event",
        everyYear: !0
      
        
      
        
    },{
        id: "d8jai7s",
        name: "Labuan International Horseback Archery Competition",
        description: "Author's note: Thank you for using EvoCalendar! :)",
        date: "June/30/2024",
        type: "event",
        everyYear: !0
      
        
      
        
    },{
        id: "d8jai7s",
        name: "Lenggong Outdoor Festival",
        description: "Author's note: Thank you for using EvoCalendar! :)",
        date: "June/30/2024",
        type: "event",
        everyYear: !0
      
        
      
        
    },{
        id: "d8jai7s",
        name: "Ipoh International 24 Festive Drums Festival",
        description: "Author's note: Thank you for using EvoCalendar! :)",
        date: "June/30/2024",
        type: "event",
        everyYear: !0
      
        
      
        
    },{
        id: "d8jai7s",
        name: "Family Day with Bicycle Day",
        description: "Author's note: Thank you for using EvoCalendar! :)",
        date: "June/30/2024",
        type: "event",
        everyYear: !0
    },{
        id: "d8jai7s",
        name: "Exhibition Kinta Valley KARST-The GEM Of Perak",
        description: "Author's note: Thank you for using EvoCalendar! :)",
        date: "July/30/2024",
        type: "event",
        everyYear: !0
      
        
      
        
    },{
        id: "d8jai7s",
        name: "Kem Belia Kreatif",
        description: "Author's note: Thank you for using EvoCalendar! :)",
        date: "June/30/2024",
        type: "event",
        everyYear: !0
      
        
      
        
    },{
        id: "d8jai7s",
        name: "Kejuaraan Cub Prix MUSIM 2024",
        description: "Author's note: Thank you for using EvoCalendar! :)",
        date: "June/30/2024",
        type: "event",
        everyYear: !0
      
        
      
        
    },{
        id: "d8jai7s",
        name: "MUALLIM BIKE CAMP",
        description: "Author's note: Thank you for using EvoCalendar! :)",
        date: "June/30/2024",
        type: "event",
        everyYear: !0
      
        
      
        
    },{
        id: "d8jai7s",
        name: "Festival Kraf Dan Boria Pulau Pinang",
        description: "Author's note: Thank you for using EvoCalendar! :)",
        date: "July/5/2024",
        type: "event",
        everyYear: !0
      
        
      
        
    },{
        id: "d8jai7s",
        name: "GERIK Mountain Festival",
        description: "Author's note: Thank you for using EvoCalendar! :)",
        date: "July/6/2024",
        type: "event",
        everyYear: !0
      
        
      
        
    },{
        id: "d8jai7s",
        name: "Warisan  Dalam Lenggong",
        description: "Author's note: Thank you for using EvoCalendar! :)",
        date: "July/6/2024",
        type: "event",
        everyYear: !0
      
        
      
        
    },{
        id: "d8jai7s",
        name: "Royal Pahang Dragon Boat Regatta",
        description: "Author's note: Thank you for using EvoCalendar! :)",
        date: "July/6/2024",
        type: "event",
        everyYear: !0
      
        
      
        
    },{
        id: "d8jai7s",
        name: "Ipoh International RUN 2024",
        description: "Author's note: Thank you for using EvoCalendar! :)",
        date: "July/7/2024",
        type: "event",
        everyYear: !0
      
        
      
        
    },{
        id: "d8jai7s",
        name: "Terengganu Turtle Tourism ",
        description: "Author's note: Thank you for using EvoCalendar! :)",
        date: "July/12/2024",
        type: "event",
        everyYear: !0
      
        
      
        
    },{
        id: "d8jai7s",
        name: "Cameron Ultra (CULTRA)",
        description: "Author's note: Thank you for using EvoCalendar! :)",
        date: "July/12/2024",
        type: "event",
        everyYear: !0
      
        
      
        
    },{
        id: "d8jai7s",
        name: "BORIA Festival With Penang Crafts Festival 2024",
        description: "Author's note: Thank you for using EvoCalendar! :)",
        date: "July/12/2024",
        type: "event",
        everyYear: !0
      
        
      
        
    },{
        id: "d8jai7s",
        name: "SULAMAN BAY Fishing Competition",
        description: "Author's note: Thank you for using EvoCalendar! :)",
        date: "July/13/2024",
        type: "event",
        everyYear: !0
      
        
      
        
    },{
        id: "d8jai7s",
        name: "GULIIEMARD RAILWAY BRIDGE INTERNATIONAL RUN (100 years)",
        description: "Author's note: Thank you for using EvoCalendar! :)",
        date: "July/19/2024",
        type: "event",
        everyYear: !0
      
        
      
        
    },{
        id: "d8jai7s",
        name: "Malaysian Indiegenous Arts Cultural Festival",
        description: "Author's note: Thank you for using EvoCalendar! :)",
        date: "July/19/2024",
        type: "event",
        everyYear: !0
      
        
      
        
    },{
        id: "d8jai7s",
        name: "Tawau International Fishing Tournament ",
        description: "Author's note: Thank you for using EvoCalendar! :)",
        date: "July/20/2024",
        type: "event",
        everyYear: !0
      
        
      
        
    },{
      
        id: "d8jai7s",
        name: "The 48th BON ORDRI Festival 2024 ",
        description: "Author's note: Thank you for using EvoCalendar! :)",
        date: "July/20/2024",
        type: "event",
        everyYear: !0
      
        
      
        
    },{
        id: "d8jai7s",
        name: "Festival Layang-Layang Antarabangsa Kuantan",
        description: "Author's note: Thank you for using EvoCalendar! :)",
        date: "July/25/2024",
        type: "event",
        everyYear: !0
      
        
      
        
    },{
        id: "d8jai7s",
        name: "The Taste Of Perak",
        description: "Author's note: Thank you for using EvoCalendar! :)",
        date: "July/25/2024",
        type: "event",
        everyYear: !0
      
        
      
        
    },{
        id: "d8jai7s",
        name: "Festival Masakan Warisan Melaka 2024",
        description: "Author's note: Thank you for using EvoCalendar! :)",
        date: "July/26/2024",
        type: "event",
        everyYear: !0
      
        
      
        
    },{
        id: "d8jai7s",
        name: "Trans Naning ULTRA NS Challenge 2024",
        description: "Author's note: Thank you for using EvoCalendar! :)",
        date: "July/26/2024",
        type: "event",
        everyYear: !0
      
        
      
        
    },{
        id: "d8jai7s",
        name: "Kelantan Arts And Culture Festival",
        description: "Author's note: Thank you for using EvoCalendar! :)",
        date: "July/26/2024",
        type: "Highlight",
        everyYear: !0
      
        
      
        
    },{
        id: "d8jai7s",
        name: "International Lion Dance Festival ",
        description: "Author's note: Thank you for using EvoCalendar! :)",
        date: "July/27/2024",
        type: "Highlight",
        everyYear: !0
      
        
      
        
    },{
        id: "d8jai7s",
        name: "Lenggong International Kayak Orientating Championship 2024 2.0",
        description: "Author's note: Thank you for using EvoCalendar! :)",
        date: "July/27/2024",
        type: "event",
        everyYear: !0
      
        
      
        
    },{
        id: "d8jai7s",
        name: "Kedah Halal Fest",
        description: "Author's note: Thank you for using EvoCalendar! :)",
        date: "July/27/2024",
        type: "event",
        everyYear: !0
      
        
      
        
    },{
        id: "d8jai7s",
        name: "Festival Pangkor",
        description: "Author's note: Thank you for using EvoCalendar! :)",
        date: "July/27/2024",
        type: "event",
        everyYear: !0},{
            id: "d8jai7s",
            name: "SELANGAU Raft Safari",
            description: "Author's note: Thank you for using EvoCalendar! :)",
            date: "July/28/2024",
            type: "event",
            everyYear: !0
          
            
          
            
        },{
            id: "d8jai7s",
            name: "Jom Makan Durian KROH Dalam Pengkalan HULU",
            description: "Author's note: Thank you for using EvoCalendar! :)",
            date: "July/28/2024",
            type: "event",
            everyYear: !0
          
            
          
            
        },{
            id: "d8jai7s",
            name: "Festival Durian 2024 Johor",
            description: "Author's note: Thank you for using EvoCalendar! :)",
            date: "July/28/2024",
            type: "event",
            everyYear: !0
          
            
          
            
        },{
            id: "d8jai7s",
            name: "Kelantan Festival Of Arts 2024",
            description: "Author's note: Thank you for using EvoCalendar! :)",
            date: "August/1/2024",
            type: "event",
            everyYear: !0
          
            
          
            
        },{
            id: "d8jai7s",
            name: "Patriotic Heritage and Therapy",
            description: "Author's note: Thank you for using EvoCalendar! :)",
            date: "August/3/2024",
            type: "event",
            everyYear: !0
          
            
          
            
        },{
            id: "d8jai7s",
            name: "Melaka International REGATTA 2024",
            description: "Author's note: Thank you for using EvoCalendar! :)",
            date: "August/3/2024",
            type: "event",
            everyYear: !0
          
            
          
            
        },{
            id: "d8jai7s",
            name: "Temasya Ganu Kite",
            description: "Author's note: Thank you for using EvoCalendar! :)",
            date: "August/8/2024",
            type: "event",
            everyYear: !0
          
            
          
            
        },{
           id: "d8jai7s",
            name: "ENDAU-ROMPIN Explorace",
            description: "Author's note: Thank you for using EvoCalendar! :)",
            date: "August/9/2024",
            type: "event",
            everyYear: !0
          
            
          
            
        },{
            id: "d8jai7s",
            name: "creators Birthday 🐐",
            description: "Author's note: Thank you for using EvoCalendar! :)",
            date: "August/12/2024",
            type: "Special Day ",
            everyYear: !0
          
            
          
            
        },{
            id: "d8jai7s",
            name: "Labuan 3 Trails Ultra 2024 ",
            description: "Author's note: Thank you for using EvoCalendar! :)",
            date: "August/17/2024",
            type: "event",
            everyYear: !0
          
            
          
            
        },{
            id: "d8jai7s",
            name: "SUKMA Sarawak 2024",
            description: "Author's note: Thank you for using EvoCalendar! :)",
            date: "August/17/2024",
            type: "event",
            everyYear: !0
          
            
          
            
        },{
            id: "d8jai7s",
            name: "Terengganu Craft Festival 2024",
            description: "Author's note: Thank you for using EvoCalendar! :)",
            date: "August/22/2024",
            type: "event",
            everyYear: !0
          
            
          
            
        },{
            id: "d8jai7s",
            name: "Temasya Budaya Dalam Negeri Perak",
            description: "Author's note: Thank you for using EvoCalendar! :)",
            date: "August/23/2024",
            type: "event",
            everyYear: !0
          
            
          
            
        },{
            id: "d8jai7s",
            name: "Perak Craft Festival 2024",
            description: "Author's note: Thank you for using EvoCalendar! :)",
            date: "August/23/2024",
            type: "event",
            everyYear: !0
          
            
          
            
        },{
            id: "d8jai7s",
            name: "Langkawi International Folding Bike 2024",
            description: "Author's note: Thank you for using EvoCalendar! :)",
            date: "August/24/2024",
            type: "event",
            everyYear: !0
          
            
          
            
        },{
            id: "d8jai7s",
            name: "Batu Gajah Heritage Trail Run ",
            description: "Author's note: Thank you for using EvoCalendar! :)",
            date: "August/25/2024",
            type: "event",
            everyYear: !0
          
            
          
            
        },{
            id: "d8jai7s",
            name: "Independence Day ",
            description: "Author's note: Thank you for using EvoCalendar! :)",
            date: "August/31/2024",
            type: "event",
            everyYear: !0
          
            
          
            
        },{
            id: "d8jai7s",
            name: "Borneo Trail Run",
            description: "Author's note: Thank you for using EvoCalendar! :)",
            date: "September/1/2024",
            type: "event",
            everyYear: !0
          
            
          
            
        },{
            id: "d8jai7s",
            name: "The Majestic Lenggong Valley - Perak Ultra",
            description: "Author's note: Thank you for using EvoCalendar! :)",
            date: "September/1/2024",
            type: "event",
            everyYear: !0
          
            
          
            
        },{
            id: "d8jai7s",
            name: "Borneo Cycletron ",
            description: "Author's note: Thank you for using EvoCalendar! :)",
            date: "September/1/2024",
            type: "event",
            everyYear: !0
          
        },{
            id: "d8jai7s",
            name: "Tanjong Aru Beach Festival 2024",
            description: "Author's note: Thank you for using EvoCalendar! :)",
            date: "September/1/2024",
            type: "event",
            everyYear: !0
          
            
          
            
        },{
            id: "d8jai7s",
            name: "Sepilok Jazz",
            description: "Author's note: Thank you for using EvoCalendar! :)",
            date: "6/September/2024",
            type: "event",
            everyYear: !0
          
            
          
            
        },{
            id: "d8jai7s",
            name: "Festival Layang-Layang Gergasi Melaka 2024",
            description: "Author's note: Thank you for using EvoCalendar! :)",
            date: "September/14/2024",
            type: "event",
            everyYear: !0
          
            
          
            
        },{
            id: "d8jai7s",
            name: "Malaysia Day",
            description: "Author's note: Thank you for using EvoCalendar! :)",
            date: "September/16/2024",
            type: "event",
            everyYear: !0
          
            
          
            
        },{
            id: "d8jai7s",
            name: "Borneo Art Festival 2024",
            description: "Author's note: Thank you for using EvoCalendar! :)",
            date: "September/20/2024",
            type: "event",
            everyYear: !0
          
            
          
            
        },{
            id: "d8jai7s",
            name: "PutraJaya cultural Festival ",
            description: "Author's note: Thank you for using EvoCalendar! :)",
            date: "September/27/2024",
            type: "event",
            everyYear: !0
          
            
          
            
        },{
            id: "d8jai7s",
            name: "Pesta Budaya Nusantara , Ipoh",
            description: "Author's note: Thank you for using EvoCalendar! :)",
            date: "September/27/2024",
            type: "event",
            everyYear: !0
          
            
          
            
        },{
            id: "d8jai7s",
            name: "ZOORAMA 24",
            description: "Author's note: Thank you for using EvoCalendar! :)",
            date: "September/17/2024",
            type: "event",
            everyYear: !0
          
            
          
            
        },{
            id: "d8jai7s",
            name: "Taiping Bird Week 2.0",
            description: "Author's note: Thank you for using EvoCalendar! :)",
            date: "October/6/2024",
            type: "event",
            everyYear: !0
          
            
          
            
        },{
            id: "d8jai7s",
            name: "Mount Kinabalu Climbathon 2024",
            description: "Author's note: Thank you for using EvoCalendar! :)",
            date: "October/6/2024",
            type: "event",
            everyYear: !0
          
            
          
            
        },{
            id: "d8jai7s",
            name: "Kuala Lumpur Standard Chardted Marathon",
            description: "Author's note: Thank you for using EvoCalendar! :)",
            date: "October/5/2024",
            type: "event",
            everyYear: !0
          
            
          
            
        },{
            id: "d8jai7s",
            name: "Community-Based Tourism Fair",
            description: "Author's note: Thank you for using EvoCalendar! :)",
            date: "October/16/2024",
            type: "event",
            everyYear: !0
          
            
          
            
        },{
            id: "d8jai7s",
            name: "Asean Festival Of Arts",
            description: "Author's note: Thank you for using EvoCalendar! :)",
            date: "October/24/2024",
            type: "event",
            everyYear: !0
          
            
          
            
        },{
            id: "d8jai7s",
            name: "Melaka Marathon 2024",
            description: "Author's note: Thank you for using EvoCalendar! :)",
            date: "October/26/2024",
            type: "event",
            everyYear: !0
          
            
          
            
        },{
            id: "d8jai7s",
            name: "Borneo Bird Festival",
            description: "Author's note: Thank you for using EvoCalendar! :)",
            date: "October/26/2024",
            type: "event",
            everyYear: !0
          
            
          
            
        },{
            id: "d8jai7s",
            name: "Deepavali",
            description: "Author's note: Thank you for using EvoCalendar! :)",
            date: "October/27/2024",
            type: "Holiday",
            everyYear: !0
           
        },{
           
            id: "d8jai7s",
            name: "The Northenmost Bird race",
            description: "Author's note: Thank you for using EvoCalendar! :)",
            date: "October/31/2024",
            type: "event",
            everyYear: !0
        },{
            id: "d8jai7s",
            name: "Sarawak Intenational Dragon Boat REGATTA 2024",
            description: "Author's note: Thank you for using EvoCalendar! :)",
            date: "October/25/2024",
            type: "event",
            everyYear: !0
        },{
            id: "d8jai7s",
            name: "Malam Warisan Dikir Barat Nusantara",
            description: "Author's note: Thank you for using EvoCalendar! :)",
            date: "November/2/2024",
            type: "event",
            everyYear: !0
        },{
            id: "d8jai7s",
            name: "Remembrance Day for Labuan War",
            description: "Author's note: Thank you for using EvoCalendar! :)",
            date: "November/10/2024",
            type: "event",
            everyYear: !0
        },{
            id: "d8jai7s",
            name: "Raja Muda Selangor International REGATTA 2024",
            description: "Author's note: Thank you for using EvoCalendar! :)",
            date: "November/15/2024",
            type: "event",
            everyYear: !0
        },{
            id: "d8jai7s",
            name: "Petronas Grand Prix 2024",
            description: "Author's note: Thank you for using EvoCalendar! :)",
            date: "November/1/2024",
            type: "event",
            everyYear: !0
        },{
            id: "d8jai7s",
            name: "Tropical Rainforst Run 2024",
            description: "Author's note: Thank you for using EvoCalendar! :)",
            date: "November/17/2024",
            type: "event",
            everyYear: !0
        },{
            id: "d8jai7s",
            name: "Larian Warisan And Berbasikal Beruas",
            description: "Author's note: Thank you for using EvoCalendar! :)",
            date: "November/30/2024",
            type: "event",
            everyYear: !0
        },{
            id: "d8jai7s",
            name: "Festival Orang Asli In Tapah",
            description: "Author's note: Thank you for using EvoCalendar! :)",
            date: "November/30/2024",
            type: "event",
            everyYear: !0
        },{
            id: "d8jai7s",
            name: "Selat Dinding Open Swimming completition",
            description: "Author's note: Thank you for using EvoCalendar! :)",
            date: "November/30/2024",
            type: "event",
            everyYear: !0
        },{
           id: "d8jai7s",
            name: "",
            description: "Author's note: Thank you for using EvoCalendar! :)",
            date: "//2024",
            type: "event",
            everyYear: !0
        },{
            id: "d8jai7s",
            name: "KLULU Adventure Challenge",
            description: "Author's note: Thank you for using EvoCalendar! :)",
            date: "Decemeber/1/2024",
            type: "event",
            everyYear: !0
        },{
            id: "d8jai7s",
            name: "Tanjung Bidara Challenge 2024",
            description: "Author's note: Thank you for using EvoCalendar! :)",
            date: "December/7/2024",
            type: "event",
            everyYear: !0
        },{
            id: "d8jai7s",
            name: "Sunset Music Festival And The Tip of Borneo",
            description: "Author's note: Thank you for using EvoCalendar! :)",
            date: "December/14/2024",
            type: "event",
            everyYear: !0 
        },{
            id: "d8jai7s",
            name: "Johor Craft Fesitival",
            description: "Author's note: Thank you for using EvoCalendar! :)",
            date: "December/19/2024",
            type: "event",
            everyYear: !0   
        },{
            id: "d8jai7s",
            name: "Christmas",
            description: "Author's note: Thank you for using EvoCalendar! :)",
            date: "December/24/2024",
            type: "Holiday",
            everyYear: !0 
        },{
            id: "d8jai7s",
            name: "Batu Gajah Mountain Bike (MTB) Challenge",
            description: "Author's note: Thank you for using EvoCalendar! :)",
            date: "DEcember/29/2024",
            type: "event",
            everyYear: !0 
        },{
            id: "d8jai7s",
            name: "Pesta Laut Pangkor LUMUT 2024",
            description: "Author's note: Thank you for using EvoCalendar! :)",
            date: "December/30/2024",
            type: "event",
            everyYear: !0  
                
    
  
            
  
            
        
         }]
    });
    $("[data-set-theme]").click(function(b) {
        a(b.target);
    });
    $("#addBtn").click(function(a) {
        curAdd = getRandom(events.length);
        $("#demoEvoCalendar").evoCalendar("addCalendarEvent", events[curAdd]);
        active_events.push(events[curAdd]);
        events.splice(curAdd, 1);
        if (0 === events.length) a.target.disabled = !0;
        if (active_events.length > 0) $("#removeBtn").prop("disabled", !1);
    });
    $("#removeBtn").click(function(a) {
        curRmv = getRandom(active_events.length);
        $("#demoEvoCalendar").evoCalendar("removeCalendarEvent", active_events[curRmv].id);
        events.push(active_events[curRmv]);
        active_events.splice(curRmv, 1);
        if (0 === active_events.length) a.target.disabled = !0;
        if (events.length > 0) $("#addBtn").prop("disabled", !1);
    });
    a($("[data-set-theme]")[defaultTheme]);
    function a(a) {
        var b = a.dataset.setTheme;
        $("[data-set-theme]").removeClass("active");
        $(a).addClass("active");
        $("#demoEvoCalendar").evoCalendar("setTheme", b);
    }
    var b = getRandom($("[data-settings]").length);
    var c = $("[data-settings]")[b];
    var d = getRandom($("[data-method]").length);
    var e = $("[data-method]")[d];
    var f = getRandom($("[data-event]").length);
    var g = $("[data-event]")[f];
    showSettingsSample($(c).data().settings);
    showMethodSample($(e).data().method);
    showEventSample($(g).data().event);
    $("[data-settings]").on("click", function(a) {
        var b = $(a.target).closest("[data-settings]");
        var c = b.data().settings;
        showSettingsSample(c);
    });
    $("[data-method]").on("click", function(a) {
        var b = $(a.target).closest("[data-method]");
        var c = b.data().method;
        showMethodSample(c);
    });
    $("[data-event]").on("click", function(a) {
        var b = $(a.target).closest("[data-event]");
        var c = b.data().event;
        showEventSample(c);
    });
});

function showSettingsSample(a) {
    var b = $("#event-settings");
    var c;
    switch (a) {
      case "theme":
        c = '<br><span class="green">// theme</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">evoCalendar</span>({<br>' + "&#8194;&#8194;&#8194;&#8194;&#8194;<span class=\"violet\">'theme'</span>: <span class=\"red\">'Theme Name'</span><br>" + "});" + "<br> ";
        break;

      case "language":
        c = '<br><span class="green">// language</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">evoCalendar</span>({<br>' + "&#8194;&#8194;&#8194;&#8194;&#8194;<span class=\"violet\">'language'</span>: <span class=\"red\">'en'</span><br>" + '&#8194;&#8194;&#8194;&#8194;&#8194;<span class="green">// Supported language: en, es, de..</span><br>' + "});" + "<br> ";
        break;

      case "format":
        c = '<br><span class="green">// format</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">evoCalendar</span>({<br>' + "&#8194;&#8194;&#8194;&#8194;&#8194;<span class=\"violet\">'format'</span>: <span class=\"red\">'MM dd, yyyy'</span><br>" + '&#8194;&#8194;&#8194;&#8194;&#8194;<span class="green">// some browsers doesn\'t support other format, so...</span><br>' + "});" + "<br> ";
        break;

      case "titleFormat":
        c = '<br><span class="green">// titleFormat</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">evoCalendar</span>({<br>' + "&#8194;&#8194;&#8194;&#8194;&#8194;<span class=\"violet\">'titleFormat'</span>: <span class=\"red\">'MM'</span><br>" + "});" + "<br> ";
        break;

      case "eventHeaderFormat":
        c = '<br><span class="green">// eventHeaderFormat</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">evoCalendar</span>({<br>' + "&#8194;&#8194;&#8194;&#8194;&#8194;<span class=\"violet\">'eventHeaderFormat'</span>: <span class=\"red\">'MM dd'</span><br>" + "});" + "<br> ";
        break;

      case "firstDayOfWeek":
        c = '<br><span class="green">// firstDayOfWeek</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">evoCalendar</span>({<br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;<span class="violet">\'firstDayOfWeek\'</span>: <span class="red">0</span> <span class="green">// Sun</span><br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;<span class="green">// 0-6 (Sun-Sat)</span><br>' + "});" + "<br> ";
        break;

      case "todayHighlight":
        c = '<br><span class="green">// todayHighlight</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">evoCalendar</span>({<br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;<span class="violet">\'todayHighlight\'</span>: <span class="blue">true</span><br>' + "});" + "<br> ";
        break;

      case "sidebarDisplayDefault":
        c = '<br><span class="green">// sidebarDisplayDefault</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">evoCalendar</span>({<br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;<span class="violet">\'sidebarDisplayDefault\'</span>: <span class="blue">false</span><br>' + "});" + "<br> ";
        break;

      case "sidebarToggler":
        c = '<br><span class="green">// sidebarToggler</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">evoCalendar</span>({<br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;<span class="violet">\'sidebarToggler\'</span>: <span class="blue">false</span><br>' + "});" + "<br> ";
        break;

      case "eventDisplayDefault":
        c = '<br><span class="green">// eventDisplayDefault</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">evoCalendar</span>({<br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;<span class="violet">\'eventDisplayDefault\'</span>: <span class="blue">false</span><br>' + "});" + "<br> ";
        break;

      case "eventListToggler":
        c = '<br><span class="green">// eventListToggler</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">evoCalendar</span>({<br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;<span class="violet">\'eventListToggler\'</span>: <span class="blue">false</span><br>' + "});" + "<br> ";
        break;

      case "calendarEvents":
        c = '<br><span class="green">// calendarEvents</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">evoCalendar</span>(<span class="violet">\'calendarEvents\'</span>, {<br>' + "&#8194;&#8194;&#8194;&#8194;&#8194;<span class=\"violet\">'calendarEvents'</span>: [<br>" + "&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;{<br>" + '&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;<span class="blue">id</span>: <span class="red">\'4hducye\'</span>, <span class="green">// Event\'s id (required, for removing event)</span><br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;<span class="blue">description</span>: <span class="red">\'Lorem ipsum dolor sit amet..\'</span>, <span class="green">// Description of event (optional)</span><br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;<span class="blue">badge</span>: <span class="red">\'1-day event\'</span>, <span class="green">// Event badge (optional)</span><br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;<span class="blue">date</span>: <span class="blue">new</span> <span class="yellow">Date</span>(), <span class="green">// Date of event</span><br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;<span class="blue">type</span>: <span class="red">\'holiday\'</span>, <span class="green">// Type of event (event|holiday|birthday)</span><br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;<span class="blue">color</span>: <span class="red">\'#63d867\'</span>, <span class="green">// Event custom color (optional)</span><br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;<span class="blue">everyYear</span>: <span class="blue">true</span> <span class="green">// Event is every year (optional)</span><br>' + "&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;}<br>" + "&#8194;&#8194;&#8194;&#8194;&#8194;]<br>" + "});" + "<br> ";
    }
    $("[data-settings]").removeClass("active");
    $('[data-settings="' + a + '"]').addClass("active");
    b.html(c);
}

function showMethodSample(a) {
    var b = $("#method-code");
    var c;
    switch (a) {
      case "setTheme":
        c = '<br><span class="green">// setTheme</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">evoCalendar</span>(<span class="violet">\'setTheme\'</span>, <span class="red">\'Theme Name\'</span>);' + "<br> ";
        break;

      case "toggleSidebar":
        c = '<br><span class="green">// toggleSidebar</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">evoCalendar</span>(<span class="violet">\'toggleSidebar\'</span>);' + "<br> " + '<br><span class="green">// open sidebar</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">evoCalendar</span>(<span class="violet">\'toggleSidebar\'</span>, <span class="blue">true</span>);' + "<br> ";
        break;

      case "toggleEventList":
        c = '<br><span class="green">// toggleEventList</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">evoCalendar</span>(<span class="violet">\'toggleEventList\'</span>);' + "<br> " + '<br><span class="green">// close event list</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">evoCalendar</span>(<span class="violet">\'toggleEventList\'</span>, <span class="blue">false</span>);' + "<br> ";
        break;

      case "getActiveDate":
        c = '<br><span class="green">// getActiveDate</span><br>' + '<span class="red">var</span> <span class="orange">active_date</span> = $(<span class="red">\'#calendar\'</span>).<span class="yellow">evoCalendar</span>(<span class="violet">\'getActiveDate\'</span>);' + "<br> ";
        break;

      case "getActiveEvents":
        c = '<br><span class="green">// getActiveEvents</span><br>' + '<span class="red">var</span> <span class="orange">active_events</span> = $(<span class="red">\'#calendar\'</span>).<span class="yellow">evoCalendar</span>(<span class="violet">\'getActiveEvents\'</span>);' + "<br> ";
        break;

      case "selectYear":
        c = '<br><span class="green">// selectYear</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">evoCalendar</span>(<span class="violet">\'selectYear\'</span>, <span class="red">2021</span>);' + "<br> ";
        break;

      case "selectMonth":
        c = '<br><span class="green">// selectMonth</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">evoCalendar</span>(<span class="violet">\'selectMonth\'</span>, <span class="red">1</span>); <span class="green">// february</span>' + "<br> ";
        break;

      case "selectDate":
        c = '<br><span class="green">// selectDate</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">evoCalendar</span>(<span class="violet">\'selectDate\'</span>, <span class="red">\'February 15, 2020\'</span>);' + "<br> ";
        break;

      case "addCalendarEvent":
        c = '<br><span class="green">// addCalendarEvent</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">evoCalendar</span>(<span class="violet">\'addCalendarEvent\'</span>, {<br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;<span class="blue">id</span>: <span class="red">\'kNybja6\'</span>,<br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;<span class="blue">name</span>: <span class="red">\'Mom\\\'s Birthday\'</span>,<br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;<span class="blue">description</span>: <span class="red">\'Lorem ipsum dolor sit..\'</span>,<br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;<span class="blue">date</span>: <span class="red">\'May 27, 2020\'</span>,<br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;<span class="blue">type</span>: <span class="red">\'birthday\'</span><br>' + "});" + '<br><span class="green">// add multiple events</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">evoCalendar</span>(<span class="violet">\'addCalendarEvent\'</span>, [<br>' + "&#8194;&#8194;&#8194;&#8194;&#8194;{<br>" + '&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;<span class="blue">id</span>: <span class="red">\'kNybja6\'</span>,<br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;<span class="blue">name</span>: <span class="red">\'Mom\\\'s Birthday\'</span>,<br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;<span class="blue">date</span>: <span class="red">\'May 27, 1965\'</span>,<br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;<span class="blue">type</span>: <span class="red">\'birthday\'</span>,<br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;<span class="blue">everyYear</span>: <span class="blue">true</span> <span class="green">// optional</span><br>' + "&#8194;&#8194;&#8194;&#8194;&#8194;},<br>" + "&#8194;&#8194;&#8194;&#8194;&#8194;{<br>" + '&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;<span class="blue">id</span>: <span class="red">\'asDf87L\'</span>,<br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;<span class="blue">name</span>: <span class="red">\'Graduation Day!\'</span>,<br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;<span class="blue">date</span>: <span class="red">\'March 21, 2020\'</span>,<br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;<span class="blue">type</span>: <span class="red">\'event\'</span><br>' + "&#8194;&#8194;&#8194;&#8194;&#8194;}<br>" + "]);" + "<br> ";
        break;

      case "removeCalendarEvent":
        c = '<br><span class="green">// removeCalendarEvent</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">evoCalendar</span>(<span class="violet">\'removeCalendarEvent\'</span>, <span class="red">\'kNybja6\'</span>);' + "<br> " + '<br><span class="green">// delete multiple event</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">evoCalendar</span>(<span class="violet">\'removeCalendarEvent\'</span>, [<span class="red">\'kNybja6\'</span>, <span class="red">\'asDf87L\'</span>]);' + "<br> ";
        break;

      case "destroy":
        c = '<br><span class="green">// destroy</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">evoCalendar</span>(<span class="violet">\'destroy\'</span>);' + "<br> ";
    }
    $("[data-method]").removeClass("active");
    $('[data-method="' + a + '"]').addClass("active");
    b.html(c);
}

function showEventSample(a) {
    var b = $("#event-code");
    var c;
    switch (a) {
      case "selectDate":
        c = '<br><span class="green">// selectDate</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">on</span>(<span class="violet">\'selectDate\'</span>, <span class="blue">function</span>(<span class="yellow">event</span>, <span class="yellow">newDate</span>, <span class="yellow">oldDate</span>) {<br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;<span class="green">// code here...</span><br>' + "});" + "<br> ";
        break;

      case "selectEvent":
        c = '<br><span class="green">// selectEvent</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">on</span>(<span class="violet">\'selectEvent\'</span>, <span class="blue">function</span>(<span class="yellow">event</span>, <span class="yellow">activeEvent</span>) {<br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;<span class="green">// code here...</span><br>' + "});" + "<br> ";
        break;

      case "selectMonth":
        c = '<br><span class="green">// selectMonth</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">on</span>(<span class="violet">\'selectMonth\'</span>, <span class="blue">function</span>(<span class="yellow">event</span>, <span class="yellow">activeMonth</span>, <span class="yellow">monthIndex</span>) {<br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;<span class="green">// code here...</span><br>' + "});" + "<br> ";
        break;

      case "selectYear":
        c = '<br><span class="green">// selectYear</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">on</span>(<span class="violet">\'selectYear\'</span>, <span class="blue">function</span>(<span class="yellow">event</span>, <span class="yellow">activeYear</span>) {<br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;<span class="green">// code here...</span><br>' + "});" + "<br> ";
        break;

      case "destroy":
        c = '<br><span class="green">// destroy</span><br>' + '$(<span class="red">\'#calendar\'</span>).<span class="yellow">on</span>(<span class="violet">\'destroy\'</span>, <span class="blue">function</span>(<span class="yellow">event</span>, <span class="yellow">evoCalendar</span>) {<br>' + '&#8194;&#8194;&#8194;&#8194;&#8194;<span class="green">// code here...</span><br>' + "});" + "<br> ";
    }
    $("[data-event]").removeClass("active");
    $('[data-event="' + a + '"]').addClass("active");
    b.html(c);
}

$('[data-go*="#"]').on("click", function(a) {
    a.preventDefault();
    var b = $(this).data().go;
    if ("#top" === b) {
        $("html, body").animate({
            scrollTop: 0
        }, 500);
        return;
    } else var c = $(b)[0].offsetTop - $("header")[0].offsetHeight - 10;
    $("html, body").animate({
        scrollTop: c
    }, 500);
});