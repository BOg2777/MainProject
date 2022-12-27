import { makeAutoObservable } from "mobx";

import imgNews1 from "assets/img/News/image1.jpg";

class NewsModel {
  id = "";

  title = "";

  text = "";

  date = "";

  img = "";

  description = "";

  nextNews = "";

  previousNews = "";

  constructor() {
    makeAutoObservable(this);
  }

  fetch() {
    setTimeout(() => {
      this.id = 1;
      this.title = "Ночная лига. Играй в бадминтон ночью!";
      this.text = "Ночная лига. Играй в бадминтон ночью!";
      this.date = "123";
      this.img = imgNews1;
      this.description = "Ночная лига. Играй в бадминтон ночью!";

      this.nextNews = 2;
      this.previousNews = 0;
    }, 2000);
  }
}

export default new NewsModel();
