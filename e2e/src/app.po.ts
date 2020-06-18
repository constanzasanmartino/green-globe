import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(s: string) {
    return browser.get(browser.baseUrl + s);
  }

 
  getText(s:string){
    return element(by.css(s)).getText() as Promise<string>;
  }
}
