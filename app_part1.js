
// APP.JS START
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
