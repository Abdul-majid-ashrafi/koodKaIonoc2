import {Page,NavController} from 'ionic-angular';
import {CarPage} from '../car/car.ts';



@Page({
  templateUrl: 'build/pages/hello-ionic/hello-ionic.html'
})
export class HelloIonicPage {
  tasks : any[];
  item : any[];
  constructor(public nav : NavController) {
      this.tasks = [ 
          { title : "KIA CERATOR",name : "Name" , rs : "80.000 AED", description : "Description",text : "Power Windows , Power Locks , Keyless Entry , Keyless Start , Power Sunroof , Sunroof , Moonroof ",img : "http://koodka.com/timthumb.php?src=http://koodka.com/ym-content/uploads/2016/01/16/500_869781494.jpeg&w=400&h=226"},
          { title : "TOYOTA COROLLA",name : "Banadir" , rs : " 5,000 USD", description : "Description", text : "Gariga waa toyota corolla 2009 waxaan watay 2 sano, waana gaari fiican oo aan cilad lahayn. ",img : "http://koodka.com/timthumb.php?src=http://koodka.com/ym-content/uploads/2016/03/31/500_627945567.jpg&w=400&h=226"},
          { title : "2000 HATTERAS 82 CUSTOM",name : "Ship" , rs : "4,959,000 USD", description : "Description",text : "Immaculate condition Professionally maintainedFull crew from newMany " ,img: "http://koodka.com/timthumb.php?src=http://koodka.com/ym-content/uploads/2016/01/16/500_563323974.jpeg&w=400&h=226"},
          { title : "FOTON BJ6129 49+1+1 LUXURY",name : "Name" , rs : "435,000 SOS", description : "Description",text : "Passenger Seats: 49+1+1 •	2016 Model •	Model BJ6129U8MJB-1 •	ISLe340-30 Cummins,",img : "http://koodka.com/timthumb.php?src=http://koodka.com/ym-content/uploads/2016/01/16/500_884735107.jpeg&w=400&h=226"},
          { title : "MOBILE",name : "Banadir" , rs : " 260 USD", description : "Description",text : "IPHONE 5S 16GB SILVER FACTORY UNLOCKED! WHITE APPLE 5 S 16 GB GSM NEW! ",img : "http://koodka.com/timthumb.php?src=http://koodka.com/ym-content/uploads/2016/03/31/500_63434827.jpeg&w=400&h=226" },
          { title : "REDUCED - 2009 MAJESTY 77",name : "Ship" , rs : "5,900,000 USD", description : "Description" ,text : "Length Overall ( LOA ) 77ft / 23.7m Beam	19.8ft / 5.99m Draft	4.2ft / 1.25m",img : "http://koodka.com/timthumb.php?src=http://koodka.com/ym-content/uploads/2016/01/16/500_232177734.jpeg&w=400&h=226"},
 ]

      this.item = [
          { title : "KIA CERATOR",name : "3 months ago" , rs : "80.000 AED", description : "Used Cars For Sale",img : "http://koodka.com/timthumb.php?src=http://koodka.com/ym-content/uploads/2016/01/16/500_869781494.jpeg&w=400&h=226"},
          { title : "TOYOTA COROLLA",name : "2 weeks ago" , rs : " 5,000 USD", description : "Used Cars For Sale",img : "http://koodka.com/timthumb.php?src=http://koodka.com/ym-content/uploads/2016/03/31/500_627945567.jpg&w=400&h=226"},
          { title : "tv",name : "2weeks ago" , rs : "240 USD", description : "Tv's",img: "http://koodka.com/timthumb.php?src=http://koodka.com/ym-content/uploads/2016/03/31/250_250074660.jpg&w=153&h=134"},
          { title : "FOTON BJ6129 49+1+1 LUXURY",name : "3 months ago" , rs : "435,000 SOS", description : "Heavy Vehicles" ,img : "http://koodka.com/timthumb.php?src=http://koodka.com/ym-content/uploads/2016/01/16/500_884735107.jpeg&w=400&h=226"},
          { title : "MOBILE",name : "2 weeks ago" , rs : " 260 USD", description : "Mobile Phones",img : "http://koodka.com/timthumb.php?src=http://koodka.com/ym-content/uploads/2016/03/31/500_63434827.jpeg&w=400&h=226" },
          { title : "REDUCED - 2009 MAJESTY 77",name : "3 months ago" , rs : "5,900,000 USD", description : "Boats" ,img : "http://koodka.com/timthumb.php?src=http://koodka.com/ym-content/uploads/2016/01/16/500_232177734.jpeg&w=400&h=226"},
 ]
  }
    nextPage(){
        this.nav.push(CarPage)
    }
}
