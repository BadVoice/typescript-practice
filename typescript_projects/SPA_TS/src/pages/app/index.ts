import MainPage from '../main'

class App {
    private container: HTMLElement; // learn private 
    private initPage: MainPage;


    constructor() {
        this.container = document.body;
        this.initPage = new MainPage('main-page')
    }

    run() {
        const mainPageHTML = this.initPage.render()
        this.container.append(mainPageHTML)
    }
}

export default App;