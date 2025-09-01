
class CapitalsApp {
  constructor() {
    this.data = this.initializeData();
    this.userProgress = this.loadUserProgress();
    this.settings = this.loadSettings();
    this.currentQuiz = null;
    this.currentQuestion = null;
    this.sessionStartTime = null;
    this.initializeEventListeners();
    this.initializeUI();
    this.updateDashboard();
    this.createContinentChart();
    this.populateMemoryTechniques();
    this.loadSettingsUI();
  }

  initializeData() {
    return {
      kontinente: {
        Europa: [
          { land: "Deutschland", hauptstadt: "Berlin" },
          { land: "Frankreich", hauptstadt: "Paris" },
          { land: "Italien", hauptstadt: "Rom" },
          { land: "Spanien", hauptstadt: "Madrid" },
          { land: "Vereinigtes Königreich", hauptstadt: "London" },
          { land: "Polen", hauptstadt: "Warschau" },
          { land: "Rumänien", hauptstadt: "Bukarest" },
          { land: "Griechenland", hauptstadt: "Athen" },
          { land: "Portugal", hauptstadt: "Lissabon" },
          { land: "Tschechien", hauptstadt: "Prag" },
          { land: "Ungarn", hauptstadt: "Budapest" },
          { land: "Schweden", hauptstadt: "Stockholm" },
          { land: "Österreich", hauptstadt: "Wien" },
          { land: "Belarus", hauptstadt: "Minsk" },
          { land: "Schweiz", hauptstadt: "Bern" },
          { land: "Bulgarien", hauptstadt: "Sofia" },
          { land: "Serbien", hauptstadt: "Belgrad" },
          { land: "Dänemark", hauptstadt: "Kopenhagen" },
          { land: "Finnland", hauptstadt: "Helsinki" },
          { land: "Slowakei", hauptstadt: "Bratislava" },
          { land: "Norwegen", hauptstadt: "Oslo" },
          { land: "Irland", hauptstadt: "Dublin" },
          { land: "Kroatien", hauptstadt: "Zagreb" },
          { land: "Bosnien und Herzegowina", hauptstadt: "Sarajevo" },
          { land: "Georgien", hauptstadt: "Tiflis" },
          { land: "Armenien", hauptstadt: "Eriwan" },
          { land: "Litauen", hauptstadt: "Vilnius" },
          { land: "Slowenien", hauptstadt: "Ljubljana" },
          { land: "Lettland", hauptstadt: "Riga" },
          { land: "Estland", hauptstadt: "Tallinn" },
          { land: "Moldau", hauptstadt: "Chișinău" },
          { land: "Albanien", hauptstadt: "Tirana" },
          { land: "Nordmazedonien", hauptstadt: "Skopje" },
          { land: "Montenegro", hauptstadt: "Podgorica" },
          { land: "Malta", hauptstadt: "Valletta" },
          { land: "Luxemburg", hauptstadt: "Luxemburg" },
          { land: "Island", hauptstadt: "Reykjavík" },
          { land: "Andorra", hauptstadt: "Andorra la Vella" },
          { land: "Monaco", hauptstadt: "Monaco" },
          { land: "San Marino", hauptstadt: "San Marino" },
          { land: "Liechtenstein", hauptstadt: "Vaduz" },
          { land: "Vatikanstadt", hauptstadt: "Vatikanstadt" },
          { land: "Russland", hauptstadt: "Moskau" },
          { land: "Ukraine", hauptstadt: "Kiew" },
          { land: "Belgien", hauptstadt: "Brüssel" },
          { land: "Niederlande", hauptstadt: "Amsterdam" }
        ],
        Asien: [
          { land: "China", hauptstadt: "Peking" },
          { land: "Indien", hauptstadt: "Neu-Delhi" },
          { land: "Indonesien", hauptstadt: "Jakarta" },
          { land: "Pakistan", hauptstadt: "Islamabad" },
          { land: "Bangladesch", hauptstadt: "Dhaka" },
          { land: "Japan", hauptstadt: "Tokio" },
          { land: "Philippinen", hauptstadt: "Manila" },
          { land: "Vietnam", hauptstadt: "Hanoi" },
          { land: "Türkei", hauptstadt: "Ankara" },
          { land: "Iran", hauptstadt: "Teheran" },
          { land: "Thailand", hauptstadt: "Bangkok" },
          { land: "Myanmar", hauptstadt: "Naypyidaw" },
          { land: "Südkorea", hauptstadt: "Seoul" },
          { land: "Irak", hauptstadt: "Bagdad" },
          { land: "Malaysia", hauptstadt: "Kuala Lumpur" },
          { land: "Saudi-Arabien", hauptstadt: "Riad" },
          { land: "Usbekistan", hauptstadt: "Taschkent" },
          { land: "Afghanistan", hauptstadt: "Kabul" },
          { land: "Nepal", hauptstadt: "Kathmandu" },
          { land: "Sri Lanka", hauptstadt: "Sri Jayewardenepura Kotte" },
          { land: "Kambodscha", hauptstadt: "Phnom Penh" },
          { land: "Jordanien", hauptstadt: "Amman" },
          { land: "Aserbaidschan", hauptstadt: "Baku" },
          { land: "Vereinigte Arabische Emirate", hauptstadt: "Abu Dhabi" },
          { land: "Tadschikistan", hauptstadt: "Duschanbe" },
          { land: "Israel", hauptstadt: "Jerusalem" },
          { land: "Laos", hauptstadt: "Vientiane" },
          { land: "Singapur", hauptstadt: "Singapur" },
          { land: "Oman", hauptstadt: "Maskat" },
          { land: "Kuwait", hauptstadt: "Kuwait-Stadt" },
          { land: "Mongolei", hauptstadt: "Ulaanbaatar" },
          { land: "Katar", hauptstadt: "Doha" },
          { land: "Bahrain", hauptstadt: "Manama" },
          { land: "Osttimor", hauptstadt: "Dili" },
          { land: "Brunei", hauptstadt: "Bandar Seri Begawan" },
          { land: "Bhutan", hauptstadt: "Thimphu" },
          { land: "Malediven", hauptstadt: "Malé" },
          { land: "Nordkorea", hauptstadt: "Pjöngjang" },
          { land: "Kasachstan", hauptstadt: "Nur-Sultan" },
          { land: "Kirgisistan", hauptstadt: "Bischkek" },
          { land: "Turkmenistan", hauptstadt: "Asgabat" },
          { land: "Libanon", hauptstadt: "Beirut" },
          { land: "Syrien", hauptstadt: "Damaskus" },
          { land: "Yemen", hauptstadt: "Sanaa" },
          { land: "Zypern", hauptstadt: "Nikosia" }
        ],
        Afrika: [
          { land: "Nigeria", hauptstadt: "Abuja" },
          { land: "Ägypten", hauptstadt: "Kairo" },
          { land: "Südafrika", hauptstadt: "Pretoria" },
          { land: "Kenia", hauptstadt: "Nairobi" },
          { land: "Ghana", hauptstadt: "Accra" },
          { land: "Angola", hauptstadt: "Luanda" },
          { land: "Marokko", hauptstadt: "Rabat" },
          { land: "Sudan", hauptstadt: "Khartum" },
          { land: "Algerien", hauptstadt: "Algier" },
          { land: "Uganda", hauptstadt: "Kampala" },
          { land: "Äthiopien", hauptstadt: "Addis Abeba" },
          { land: "Mosambik", hauptstadt: "Maputo" },
          { land: "Madagaskar", hauptstadt: "Antananarivo" },
          { land: "Kamerun", hauptstadt: "Yaoundé" },
          { land: "Niger", hauptstadt: "Niamey" },
          { land: "Mali", hauptstadt: "Bamako" },
          { land: "Malawi", hauptstadt: "Lilongwe" },
          { land: "Sambia", hauptstadt: "Lusaka" },
          { land: "Somalia", hauptstadt: "Mogadischu" },
          { land: "Senegal", hauptstadt: "Dakar" },
          { land: "Tschad", hauptstadt: "N'Djamena" },
          { land: "Simbabwe", hauptstadt: "Harare" },
          { land: "Guinea", hauptstadt: "Conakry" },
          { land: "Ruanda", hauptstadt: "Kigali" },
          { land: "Benin", hauptstadt: "Porto-Novo" },
          { land: "Tunesien", hauptstadt: "Tunis" },
          { land: "Südsudan", hauptstadt: "Juba" },
          { land: "Togo", hauptstadt: "Lomé" },
          { land: "Sierra Leone", hauptstadt: "Freetown" },
          { land: "Libyen", hauptstadt: "Tripolis" },
          { land: "Liberia", hauptstadt: "Monrovia" },
          { land: "Mauretanien", hauptstadt: "Nouakchott" },
          { land: "Lesotho", hauptstadt: "Maseru" },
          { land: "Namibia", hauptstadt: "Windhoek" },
          { land: "Botsuana", hauptstadt: "Gaborone" },
          { land: "Gambia", hauptstadt: "Banjul" },
          { land: "Gabun", hauptstadt: "Libreville" },
          { land: "Guinea-Bissau", hauptstadt: "Bissau" },
          { land: "Äquatorialguinea", hauptstadt: "Malabo" },
          { land: "Mauritius", hauptstadt: "Port Louis" },
          { land: "Eswatini", hauptstadt: "Mbabane" },
          { land: "Dschibuti", hauptstadt: "Dschibuti" },
          { land: "Komoren", hauptstadt: "Moroni" },
          { land: "Kap Verde", hauptstadt: "Praia" },
          { land: "São Tomé und Príncipe", hauptstadt: "São Tomé" },
          { land: "Seychellen", hauptstadt: "Victoria" },
          { land: "Zentralafrikanische Republik", hauptstadt: "Bangui" },
          { land: "Eritrea", hauptstadt: "Asmara" },
          { land: "Burkina Faso", hauptstadt: "Ouagadougou" },
          { land: "Demokratische Republik Kongo", hauptstadt: "Kinshasa" },
          { land: "Republik Kongo", hauptstadt: "Brazzaville" },
          { land: "Burundi", hauptstadt: "Gitega" },
          { land: "Elfenbeinküste", hauptstadt: "Yamoussoukro" },
          { land: "Tansania", hauptstadt: "Dodoma" }
        ]
      }
    };
  }

  // ... Implementierung sonstiger Methoden folgt hier
}

const app = new CapitalsApp();
