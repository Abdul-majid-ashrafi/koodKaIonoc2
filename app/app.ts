import 'es6-shim';
import {App, IonicApp, Platform, MenuController} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HelloIonicPage} from './pages/hello-ionic/hello-ionic';
import {Contact} from './pages/contact/contact';
import {CarPage} from './pages/car/car';
import {About} from './pages/about/about';
import {Faq} from './pages/faq/faq';
import {Login} from './pages/login/login';
import {Register} from './pages/register/register';


@App({
  templateUrl: 'build/app.html',
  // directives: [Login],
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
class MyApp {
  // make HelloIonicPage the root (or first) page
  rootPage: any = HelloIonicPage;
  pages: Array<{title: string, component: any}>;
  nestedPage: Array<{title: string, component: any}>;

  constructor(
    private app: IonicApp,
    private platform: Platform,
    private menu: MenuController
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Home (Extra)', component: HelloIonicPage },
      //{ title: 'My First List', component: ListPage },
      { title: 'Post (Extra)', component: CarPage },
      { title: 'About', component: About },
      { title: 'Contact', component: Contact },
      { title: 'FAQ', component: Faq },
      { title: 'Login', component: Login },
      { title: 'Register', component: Register},
      { title: '+ Post Advert', component: Login }
      
    ];
     this.nestedPage = [
       { title: 'Banadir', component: Login },
       { title: 'Galmugud', component: Login },
       { title: 'Puntland', component: Login },
       { title: 'Somaliland', component: Login },
       { title: 'Jubaland', component: Login },
        { title: 'South Western State', component: Login },
       { title: 'Hiiraan & Shabele', component: Login } 
    ];
    
    
    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    let nav = this.app.getComponent('nav');
    nav.setRoot(page.component);
  }
}
