/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = 'mongodbVSCodePlaygroundDB';
const collection = 'slttags';

// The current database to use.
use(database);

// Create a new collection.
db.getCollection("slttags").insertMany(
    [
      {"index":0,"name":"Aurelia Gonzales","isActive":false,"registered":{"$date":"2015-02-11T04:22:39Z"},"age":20,"gender":"female","eyeColor":"green","favoriteFruit":"banana","company":{"title":"YURTURE","email":"aureliagonzales@yurture.com","phone":"+1 (940) 501-3963","location":{"country":"USA","address":"694 Hewes Street"}},"tags":["enim","id","velit","ad","consequat"]},
      {"index":1,"name":"Kitty Snow","isActive":false,"registered":{"$date":"2018-01-23T04:46:15Z"},"age":38,"gender":"female","eyeColor":"blue","favoriteFruit":"apple","company":{"title":"DIGITALUS","email":"kittysnow@digitalus.com","phone":"+1 (949) 568-3470","location":{"country":"Italy","address":"154 Arlington Avenue"}},"tags":["ut","voluptate","consequat","consequat"]},
      {"index":2,"name":"Hays Wise","isActive":false,"registered":{"$date":"2015-02-23T10:22:15Z"},"age":24,"gender":"male","eyeColor":"green","favoriteFruit":"strawberry","company":{"title":"EXIAND","email":"hayswise@exiand.com","phone":"+1 (801) 583-3393","location":{"country":"France","address":"795 Borinquen Pl"}},"tags":["amet","ad","elit","ipsum"]},
      {"index":3,"name":"Karyn Rhodes","isActive":true,"registered":{"$date":"2014-03-11T03:02:33Z"},"age":39,"gender":"female","eyeColor":"green","favoriteFruit":"strawberry","company":{"title":"RODEMCO","email":"karynrhodes@rodemco.com","phone":"+1 (801) 505-3760","location":{"country":"USA","address":"521 Seigel Street"}},"tags":["cillum","exercitation","excepteur"]},
      {"index":4,"name":"Alison Farmer","isActive":false,"registered":{"$date":"2018-01-22T10:05:45Z"},"age":33,"gender":"female","eyeColor":"brown","favoriteFruit":"banana","company":{"title":"OTHERSIDE","email":"alisonfarmer@otherside.com","phone":"+1 (902) 572-3954","location":{"country":"Italy","address":"356 Newkirk Placez"}},"tags":["deserunt","et","duis","dolor"]},
      {"index":5,"name":"Grace Larson","isActive":true,"registered":{"$date":"2014-04-20T11:37:23Z"},"age":20,"gender":"female","eyeColor":"blue","favoriteFruit":"apple","company":{"title":"OVOLO","email":"gracelarson@ovolo.com","phone":"+1 (930) 510-3310","location":{"country":"USA","address":"932 Linden Street"}},"tags":["fugiat","minim"]},
      {"index":6,"name":"Carmella Morse","isActive":false,"registered":{"$date":"2014-06-08T11:20:22Z"},"age":39,"gender":"female","eyeColor":"green","favoriteFruit":"apple","company":{"title":"SHEPARD","email":"carmellamorse@shepard.com","phone":"+1 (829) 478-3744","location":{"country":"Germany","address":"379 Tabor Court"}},"tags":["amet","cillum"]},
      {"index":7,"name":"Anastasia Blake","isActive":true,"registered":{"$date":"2016-07-01T02:32:46Z"},"age":40,"gender":"female","eyeColor":"brown","favoriteFruit":"strawberry","company":{"title":"ZERBINA","email":"anastasiablake@zerbina.com","phone":"+1 (867) 563-3788","location":{"country":"Italy","address":"147 Montague Terrace"}},"tags":["Lorem","consequat","ex","pariatur","labore"]},
      {"index":8,"name":"Dale Holman","isActive":false,"registered":{"$date":"2014-07-11T09:08:36Z"},"age":22,"gender":"male","eyeColor":"green","favoriteFruit":"strawberry","company":{"title":"ISONUS","email":"daleholman@isonus.com","phone":"+1 (871) 452-3036","location":{"country":"Italy","address":"586 Blake Court"}},"tags":["tempor","aliqua","duis"]},
      {"index":9,"name":"Tina Barnett","isActive":true,"registered":{"$date":"2015-03-09T11:16:38Z"},"age":39,"gender":"female","eyeColor":"blue","favoriteFruit":"apple","company":{"title":"JETSILK","email":"tinabarnett@jetsilk.com","phone":"+1 (963) 569-3905","location":{"country":"Germany","address":"514 Lefferts Avenue"}},"tags":["veniam","proident"]},
      {"index":10,"name":"Belinda Zimmerman","isActive":true,"registered":{"$date":"2015-11-19T02:18:09Z"},"age":34,"gender":"female","eyeColor":"green","favoriteFruit":"apple","company":{"title":"COMTRAK","email":"belindazimmerman@comtrak.com","phone":"+1 (899) 410-3073","location":{"country":"France","address":"259 Bergen Street"}},"tags":["nisi","officia","nisi"]},
      {"index":11,"name":"Morrison Sheppard","isActive":false,"registered":{"$date":"2014-07-23T04:46:35Z"},"age":34,"gender":"male","eyeColor":"green","favoriteFruit":"strawberry","company":{"title":"CANDECOR","email":"morrisonsheppard@candecor.com","phone":"+1 (825) 473-3920","location":{"country":"USA","address":"585 Wilson Street"}},"tags":["culpa","adipisicing","veniam","aliquip"]},
      {"index":12,"name":"Le Farley","isActive":false,"registered":{"$date":"2014-11-24T07:41:12Z"},"age":36,"gender":"male","eyeColor":"green","favoriteFruit":"banana","company":{"title":"JAMNATION","email":"lefarley@jamnation.com","phone":"+1 (962) 402-3088","location":{"country":"USA","address":"613 Lewis Avenue"}},"tags":["exercitation","enim","deserunt"]},
      {"index":13,"name":"Sharon Grimes","isActive":true,"registered":{"$date":"2017-12-22T01:04:16Z"},"age":28,"gender":"female","eyeColor":"brown","favoriteFruit":"banana","company":{"title":"PHARMEX","email":"sharongrimes@pharmex.com","phone":"+1 (993) 428-2724","location":{"country":"USA","address":"427 Dictum Court"}},"tags":["dolor","eiusmod","esse"]},
      {"index":14,"name":"Wendy Sampson","isActive":true,"registered":{"$date":"2017-03-28T04:46:20Z"},"age":20,"gender":"female","eyeColor":"blue","favoriteFruit":"strawberry","company":{"title":"BUGSALL","email":"wendysampson@bugsall.com","phone":"+1 (822) 433-3614","location":{"country":"France","address":"864 Times Placez"}},"tags":["non","sunt","officia"]},
      {"index":15,"name":"Newman Rodriquez","isActive":true,"registered":{"$date":"2017-09-19T11:25:18Z"},"age":29,"gender":"male","eyeColor":"green","favoriteFruit":"strawberry","company":{"title":"PHARMACON","email":"newmanrodriquez@pharmacon.com","phone":"+1 (906) 591-2086","location":{"country":"France","address":"624 Madeline Court"}},"tags":["ad","in"]},
      {"index":16,"name":"Santana Preston","isActive":false,"registered":{"$date":"2014-05-23T12:41:39Z"},"age":40,"gender":"male","eyeColor":"blue","favoriteFruit":"apple","company":{"title":"AQUAFIRE","email":"santanapreston@aquafire.com","phone":"+1 (861) 525-2717","location":{"country":"France","address":"133 Bushwick Avenue"}},"tags":["ex","magna","qui","laborum","ad"]},
      {"index":17,"name":"Lupe Barry","isActive":false,"registered":{"$date":"2014-01-06T02:04:30Z"},"age":25,"gender":"female","eyeColor":"green","favoriteFruit":"strawberry","company":{"title":"INVENTURE","email":"lupebarry@inventure.com","phone":"+1 (932) 434-2270","location":{"country":"USA","address":"244 Cleveland Street"}},"tags":["enim","deserunt","ea","mollit","commodo"]},
      {"index":18,"name":"Mable Pratt","isActive":true,"registered":{"$date":"2016-04-22T11:00:05Z"},"age":32,"gender":"female","eyeColor":"blue","favoriteFruit":"banana","company":{"title":"PARAGONIA","email":"mablepratt@paragonia.com","phone":"+1 (875) 523-3825","location":{"country":"USA","address":"767 Hendrix Street"}},"tags":["excepteur","et","ullamco","nisi","magna"]},
      {"index":19,"name":"Mcguire Vincent","isActive":false,"registered":{"$date":"2017-01-28T01:53:06Z"},"age":24,"gender":"male","eyeColor":"green","favoriteFruit":"strawberry","company":{"title":"ELENTRIX","email":"mcguirevincent@elentrix.com","phone":"+1 (924) 572-3321","location":{"country":"USA","address":"347 Sandford Street"}},"tags":["do","aute","incididunt"]},
      {"index":20,"name":"Franco Ochoa","isActive":false,"registered":{"$date":"2016-08-02T04:15:34Z"},"age":35,"gender":"male","eyeColor":"brown","favoriteFruit":"banana","company":{"title":"ARTWORLDS","email":"francoochoa@artworlds.com","phone":"+1 (922) 487-3093","location":{"country":"Italy","address":"838 Kane Place"}},"tags":["eiusmod","culpa"]},
      {"index":21,"name":"Leila Cervantes","isActive":false,"registered":{"$date":"2015-04-20T12:59:43Z"},"age":40,"gender":"female","eyeColor":"brown","favoriteFruit":"banana","company":{"title":"NEPTIDE","email":"leilacervantes@neptide.com","phone":"+1 (982) 508-3965","location":{"country":"USA","address":"365 Berriman Street"}},"tags":["ad","eu","ea","labore","quis"]},
      {"index":22,"name":"Agnes West","isActive":true,"registered":{"$date":"2014-03-26T01:38:01Z"},"age":39,"gender":"female","eyeColor":"blue","favoriteFruit":"apple","company":{"title":"GEEKMOSIS","email":"agneswest@geekmosis.com","phone":"+1 (983) 462-2577","location":{"country":"Italy","address":"652 Johnson Street"}},"tags":["sint","sit"]},
      {"index":23,"name":"Bowman Whitaker","isActive":true,"registered":{"$date":"2014-06-28T04:39:11Z"},"age":21,"gender":"male","eyeColor":"blue","favoriteFruit":"apple","company":{"title":"HELIXO","email":"bowmanwhitaker@helixo.com","phone":"+1 (992) 530-2197","location":{"country":"Italy","address":"878 Erasmus Street"}},"tags":["adipisicing","in"]},
      {"index":24,"name":"Roseann Conrad","isActive":false,"registered":{"$date":"2018-02-24T12:39:03Z"},"age":34,"gender":"female","eyeColor":"blue","favoriteFruit":"apple","company":{"title":"SNORUS","email":"roseannconrad@snorus.com","phone":"+1 (983) 544-2622","location":{"country":"Germany","address":"735 Duffield Street"}},"tags":["et","minim","exercitation","amet"]},
      {"index":25,"name":"Bryant Thornton","isActive":true,"registered":{"$date":"2016-07-02T06:12:47Z"},"age":37,"gender":"male","eyeColor":"green","favoriteFruit":"strawberry","company":{"title":"ZENCO","email":"bryantthornton@zenco.com","phone":"+1 (863) 499-2732","location":{"country":"France","address":"744 Poly Place"}},"tags":["ut","consectetur","anim","id","velit"]},
      {"index":26,"name":"Maldonado Osborne","isActive":true,"registered":{"$date":"2015-09-10T01:38:41Z"},"age":31,"gender":"male","eyeColor":"brown","favoriteFruit":"strawberry","company":{"title":"RECRISYS","email":"maldonadoosborne@recrisys.com","phone":"+1 (871) 540-3394","location":{"country":"USA","address":"804 Revere Place"}},"tags":["elit","est","ex","proident","mollit"]},
      {"index":27,"name":"Herman David","isActive":true,"registered":{"$date":"2018-02-22T12:21:33Z"},"age":33,"gender":"male","eyeColor":"blue","favoriteFruit":"strawberry","company":{"title":"LUNCHPAD","email":"hermandavid@lunchpad.com","phone":"+1 (946) 447-3775","location":{"country":"Italy","address":"230 Anthony Street"}},"tags":["adipisicing","dolore","fugiat","exercitation"]},
      {"index":28,"name":"Berta Case","isActive":true,"registered":{"$date":"2014-01-29T09:09:27Z"},"age":23,"gender":"female","eyeColor":"brown","favoriteFruit":"strawberry","company":{"title":"TURNABOUT","email":"bertacase@turnabout.com","phone":"+1 (892) 445-2890","location":{"country":"USA","address":"802 Jefferson Avenue"}},"tags":["velit","est","id","proident"]},
      {"index":29,"name":"Abby Wallace","isActive":false,"registered":{"$date":"2016-07-25T06:30:13Z"},"age":40,"gender":"female","eyeColor":"green","favoriteFruit":"apple","company":{"title":"ZIORE","email":"abbywallace@ziore.com","phone":"+1 (878) 459-2952","location":{"country":"France","address":"981 Hazel Court"}},"tags":["commodo","voluptate","laborum","dolor","enim"]},
      {"index":30,"name":"Hahn Pope","isActive":false,"registered":{"$date":"2014-08-21T11:37:18Z"},"age":21,"gender":"male","eyeColor":"green","favoriteFruit":"banana","company":{"title":"DYNO","email":"hahnpope@dyno.com","phone":"+1 (954) 478-2480","location":{"country":"Germany","address":"171 Devoe Street"}},"tags":["consectetur","exercitation","velit","enim","adipisicing"]},
      {"index":31,"name":"Charlotte Larsen","isActive":false,"registered":{"$date":"2015-12-10T02:55:22Z"},"age":26,"gender":"female","eyeColor":"brown","favoriteFruit":"banana","company":{"title":"MUSAPHICS","email":"charlottelarsen@musaphics.com","phone":"+1 (857) 404-2925","location":{"country":"Germany","address":"546 Senator Street"}},"tags":["deserunt","minim","labore","elit","deserunt"]},
      {"index":32,"name":"Curtis Bruce","isActive":false,"registered":{"$date":"2014-07-10T05:38:35Z"},"age":39,"gender":"male","eyeColor":"blue","favoriteFruit":"apple","company":{"title":"TETAK","email":"curtisbruce@tetak.com","phone":"+1 (952) 488-3266","location":{"country":"France","address":"190 Frost Street"}},"tags":["qui","voluptate","fugiat","irure"]},
      {"index":33,"name":"Livingston Huber","isActive":true,"registered":{"$date":"2016-07-25T12:06:06Z"},"age":40,"gender":"male","eyeColor":"blue","favoriteFruit":"strawberry","company":{"title":"OMNIGOG","email":"livingstonhuber@omnigog.com","phone":"+1 (987) 449-3557","location":{"country":"Italy","address":"786 Homecrest Avenue"}},"tags":["incididunt","dolore","enim","mollit"]},
      {"index":34,"name":"Frances Camacho","isActive":true,"registered":{"$date":"2018-02-16T06:34:26Z"},"age":24,"gender":"female","eyeColor":"blue","favoriteFruit":"apple","company":{"title":"FIREWAX","email":"francescamacho@firewax.com","phone":"+1 (869) 573-3106","location":{"country":"USA","address":"353 Berkeley Place"}},"tags":["ad","officia","magna"]},
      {"index":35,"name":"Merle Hall","isActive":false,"registered":{"$date":"2016-06-09T06:09:14Z"},"age":24,"gender":"female","eyeColor":"green","favoriteFruit":"strawberry","company":{"title":"ZENTHALL","email":"merlehall@zenthall.com","phone":"+1 (863) 471-3799","location":{"country":"Italy","address":"734 Adelphi Street"}},"tags":["tempor","nostrud","sunt","mollit"]},
      {"index":36,"name":"Alejandra Collins","isActive":false,"registered":{"$date":"2014-12-10T07:02:24Z"},"age":23,"gender":"female","eyeColor":"blue","favoriteFruit":"banana","company":{"title":"ETERNIS","email":"alejandracollins@eternis.com","phone":"+1 (811) 598-2748","location":{"country":"Italy","address":"986 Louis Place"}},"tags":["excepteur","dolore","consectetur"]},
      {"index":37,"name":"Combs Graham","isActive":true,"registered":{"$date":"2015-06-24T10:30:08Z"},"age":20,"gender":"male","eyeColor":"green","favoriteFruit":"apple","company":{"title":"FREAKIN","email":"combsgraham@freakin.com","phone":"+1 (803) 596-3695","location":{"country":"Italy","address":"278 Bayard Street"}},"tags":["eiusmod","irure","in","officia"]},
      {"index":38,"name":"Elliott Phelps","isActive":true,"registered":{"$date":"2016-06-29T08:57:29Z"},"age":32,"gender":"male","eyeColor":"green","favoriteFruit":"apple","company":{"title":"OPTIQUE","email":"elliottphelps@optique.com","phone":"+1 (806) 457-2761","location":{"country":"France","address":"710 Lawrence Street"}},"tags":["nisi","deserunt"]},
      {"index":39,"name":"Latasha Bailey","isActive":true,"registered":{"$date":"2016-03-03T07:27:59Z"},"age":25,"gender":"female","eyeColor":"blue","favoriteFruit":"apple","company":{"title":"SLUMBERIA","email":"latashabailey@slumberia.com","phone":"+1 (939) 470-3906","location":{"country":"Italy","address":"915 Freeman Street"}},"tags":["pariatur","veniam","amet"]}
    ]
    );

// Example: Find all active users.
const activeUsersCount = db.getCollection(collection).find({ isActive: true }).count();
console.log(`${activeUsersCount} active users found.`);

// Example: Aggregate to count users per favorite fruit.
const fruitAggregation = db.getCollection(collection).aggregate([
  { $group: { _id: "$favoriteFruit", totalUsers: { $sum: 1 } } }
]).toArray();

console.log("Users per favorite fruit:", fruitAggregation);

// Example: Find users registered in 2015.
const users2015 = db.getCollection(collection).find({
  registered: { $gte: ISODate("2015-01-01"), $lt: ISODate("2016-01-01") }
}).toArray();

console.log("Users registered in 2015:", users2015);








