conn  = new Mongo();
db = conn.getDB("mgo");
db.dropDatabase();
db = conn.getDB("mgo");

bulk = [
  {
    "user": "janetclarke@futurity.com",
    "gender": "female",
    "name": "Stephanie Franks",
    "age": 32,
    "email": "stephaniefranks@futurity.com"
  },
  {
    "user": "stephaniefranks@futurity.com",
    "gender": "female",
    "name": "Pearson Cox",
    "age": 24,
    "email": "pearsoncox@futurity.com"
  },
  {
    "user": "pearsoncox@futurity.com",
    "gender": "male",
    "name": "Savannah Day",
    "age": 22,
    "email": "savannahday@futurity.com"
  },
  {
    "user": "savannahday@futurity.com",
    "gender": "female",
    "name": "Downs Beard",
    "age": 33,
    "email": "downsbeard@futurity.com"
  },
  {
    "user": "downsbeard@futurity.com",
    "gender": "male",
    "name": "Shari Bryan",
    "age": 39,
    "email": "sharibryan@futurity.com"
  },
  {
    "user": "sharibryan@futurity.com",
    "gender": "female",
    "name": "Martina England",
    "age": 27,
    "email": "martinaengland@futurity.com"
  },
  {
    "user": "martinaengland@futurity.com",
    "gender": "female",
    "name": "Matilda Meadows",
    "age": 33,
    "email": "matildameadows@futurity.com"
  },
  {
    "user": "matildameadows@futurity.com",
    "gender": "female",
    "name": "Golden Estes",
    "age": 27,
    "email": "goldenestes@futurity.com"
  },
  {
    "user": "goldenestes@futurity.com",
    "gender": "male",
    "name": "Dollie Shaw",
    "age": 20,
    "email": "dollieshaw@futurity.com"
  },
  {
    "user": "dollieshaw@futurity.com",
    "gender": "female",
    "name": "Georgina Witt",
    "age": 34,
    "email": "georginawitt@futurity.com"
  },
  {
    "user": "georginawitt@futurity.com",
    "gender": "female",
    "name": "Emilia Howard",
    "age": 34,
    "email": "emiliahoward@futurity.com"
  },
  {
    "user": "emiliahoward@futurity.com",
    "gender": "female",
    "name": "Carmen Duncan",
    "age": 24,
    "email": "carmenduncan@futurity.com"
  },
  {
    "user": "carmenduncan@futurity.com",
    "gender": "female",
    "name": "Cherry Franco",
    "age": 36,
    "email": "cherryfranco@futurity.com"
  },
  {
    "user": "cherryfranco@futurity.com",
    "gender": "female",
    "name": "Gillespie Beach",
    "age": 33,
    "email": "gillespiebeach@futurity.com"
  },
  {
    "user": "gillespiebeach@futurity.com",
    "gender": "male",
    "name": "Knowles Mullins",
    "age": 29,
    "email": "knowlesmullins@futurity.com"
  },
  {
    "user": "knowlesmullins@futurity.com",
    "gender": "male",
    "name": "Wise Watson",
    "age": 25,
    "email": "wisewatson@futurity.com"
  },
  {
    "user": "wisewatson@futurity.com",
    "gender": "male",
    "name": "Ophelia Frazier",
    "age": 40,
    "email": "opheliafrazier@futurity.com"
  },
  {
    "user": "opheliafrazier@futurity.com",
    "gender": "female",
    "name": "Nicholson Olsen",
    "age": 39,
    "email": "nicholsonolsen@futurity.com"
  },
  {
    "user": "nicholsonolsen@futurity.com",
    "gender": "male",
    "name": "Phoebe Watts",
    "age": 27,
    "email": "phoebewatts@futurity.com"
  },
  {
    "user": "phoebewatts@futurity.com",
    "gender": "female",
    "name": "Victoria Madden",
    "age": 26,
    "email": "victoriamadden@futurity.com"
  },
  {
    "user": "victoriamadden@futurity.com",
    "gender": "female",
    "name": "Stanton Frank",
    "age": 35,
    "email": "stantonfrank@futurity.com"
  },
  {
    "user": "stantonfrank@futurity.com",
    "gender": "male",
    "name": "Madden Giles",
    "age": 38,
    "email": "maddengiles@futurity.com"
  },
  {
    "user": "maddengiles@futurity.com",
    "gender": "male",
    "name": "Stewart Curry",
    "age": 38,
    "email": "stewartcurry@futurity.com"
  },
  {
    "user": "stewartcurry@futurity.com",
    "gender": "male",
    "name": "Wright Finley",
    "age": 23,
    "email": "wrightfinley@futurity.com"
  },
  {
    "user": "wrightfinley@futurity.com",
    "gender": "male",
    "name": "Ballard Yang",
    "age": 38,
    "email": "ballardyang@futurity.com"
  },
  {
    "user": "ballardyang@futurity.com",
    "gender": "male",
    "name": "Lyons Garrison",
    "age": 23,
    "email": "lyonsgarrison@futurity.com"
  },
  {
    "user": "lyonsgarrison@futurity.com",
    "gender": "male",
    "name": "Stevenson Buck",
    "age": 38,
    "email": "stevensonbuck@futurity.com"
  },
  {
    "user": "stevensonbuck@futurity.com",
    "gender": "male",
    "name": "Hannah Mcclain",
    "age": 25,
    "email": "hannahmcclain@futurity.com"
  },
  {
    "user": "hannahmcclain@futurity.com",
    "gender": "female",
    "name": "Kim Gardner",
    "age": 22,
    "email": "kimgardner@futurity.com"
  },
  {
    "user": "kimgardner@futurity.com",
    "gender": "male",
    "name": "Bates Lucas",
    "age": 24,
    "email": "bateslucas@futurity.com"
  }
];

bulk.forEach(function(item){
    db.users.insert({user_id:item.email,password:"12345"});
    item.user_id = db.users.findOne({user_id:item.email})._id;    
    db.profile.insert(item);
});
cursor = db.users.find();
while(cursor.hasNext()){
    printjson(cursor.next());
}


