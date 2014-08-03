conn  = new Mongo();
db = conn.getDB();
db.dropDatabase();
db = conn.getDB("mgo");

bulk = [
  {
    "email": "estersolomon@terrago.com",
    "name": "Latoya Flores",
    "age": 35,
    "gender": "female",
    "company": "SPEEDBOLT",
    "phone": "+1 (824) 555-3467",
    "address": "202 John Street, Baker, South Carolina, 5993"
  },
  {
    "email": "latoyaflores@speedbolt.com",
    "name": "Ward Hunt",
    "age": 21,
    "gender": "male",
    "company": "BALUBA",
    "phone": "+1 (955) 600-3496",
    "address": "241 Dahlgreen Place, Catherine, Wyoming, 1801"
  },
  {
    "email": "wardhunt@baluba.com",
    "name": "Cotton Simmons",
    "age": 33,
    "gender": "male",
    "company": "BULLJUICE",
    "phone": "+1 (896) 523-2729",
    "address": "509 Lefferts Place, Northridge, Mississippi, 142"
  },
  {
    "email": "cottonsimmons@bulljuice.com",
    "name": "Cassandra Jones",
    "age": 37,
    "gender": "female",
    "company": "UNIWORLD",
    "phone": "+1 (819) 464-2149",
    "address": "732 Crosby Avenue, Wanamie, Oklahoma, 8898"
  },
  {
    "email": "cassandrajones@uniworld.com",
    "name": "Sosa Wilcox",
    "age": 38,
    "gender": "male",
    "company": "KINDALOO",
    "phone": "+1 (845) 498-3746",
    "address": "313 Bank Street, Coventry, Indiana, 5459"
  },
  {
    "email": "sosawilcox@kindaloo.com",
    "name": "Bolton Stafford",
    "age": 36,
    "gender": "male",
    "company": "COMTOURS",
    "phone": "+1 (940) 445-2114",
    "address": "523 Truxton Street, Chicopee, Missouri, 8113"
  },
  {
    "email": "boltonstafford@comtours.com",
    "name": "Hebert Floyd",
    "age": 26,
    "gender": "male",
    "company": "PROFLEX",
    "phone": "+1 (956) 417-3392",
    "address": "660 Seeley Street, Barronett, Georgia, 4912"
  },
  {
    "email": "hebertfloyd@proflex.com",
    "name": "Glover Rich",
    "age": 38,
    "gender": "male",
    "company": "FUTURITY",
    "phone": "+1 (831) 525-3975",
    "address": "212 Grand Street, Yorklyn, Pennsylvania, 7673"
  },
  {
    "email": "gloverrich@futurity.com",
    "name": "Annette Jordan",
    "age": 26,
    "gender": "female",
    "company": "CENTICE",
    "phone": "+1 (942) 449-2774",
    "address": "579 Liberty Avenue, Rockingham, New Hampshire, 510"
  },
  {
    "email": "annettejordan@centice.com",
    "name": "Mathis Hood",
    "age": 24,
    "gender": "male",
    "company": "FLEXIGEN",
    "phone": "+1 (940) 525-3361",
    "address": "287 Mayfair Drive, Dana, Palau, 6110"
  },
  {
    "email": "mathishood@flexigen.com",
    "name": "Riley Brock",
    "age": 32,
    "gender": "male",
    "company": "HELIXO",
    "phone": "+1 (852) 539-3556",
    "address": "272 Taaffe Place, Terlingua, Vermont, 3475"
  },
  {
    "email": "rileybrock@helixo.com",
    "name": "Ginger Middleton",
    "age": 24,
    "gender": "female",
    "company": "GEEKMOSIS",
    "phone": "+1 (900) 452-3205",
    "address": "974 Columbus Place, Tyro, Arkansas, 8547"
  },
  {
    "email": "gingermiddleton@geekmosis.com",
    "name": "Casey Moses",
    "age": 34,
    "gender": "male",
    "company": "ROCKYARD",
    "phone": "+1 (931) 425-3459",
    "address": "522 Laurel Avenue, Gordon, Maine, 7790"
  },
  {
    "email": "caseymoses@rockyard.com",
    "name": "Lillie Lucas",
    "age": 39,
    "gender": "female",
    "company": "VERBUS",
    "phone": "+1 (936) 518-3267",
    "address": "141 Fiske Place, Camas, Colorado, 4316"
  },
  {
    "email": "lillielucas@verbus.com",
    "name": "Dena Charles",
    "age": 24,
    "gender": "female",
    "company": "ORBIXTAR",
    "phone": "+1 (891) 594-2792",
    "address": "539 Roosevelt Place, Westphalia, Michigan, 5641"
  },
  {
    "email": "denacharles@orbixtar.com",
    "name": "Golden Farrell",
    "age": 26,
    "gender": "male",
    "company": "PORTICO",
    "phone": "+1 (970) 493-3537",
    "address": "167 Polhemus Place, Bannock, Rhode Island, 2760"
  },
  {
    "email": "goldenfarrell@portico.com",
    "name": "Carolyn Valencia",
    "age": 32,
    "gender": "female",
    "company": "ULTRIMAX",
    "phone": "+1 (922) 558-2422",
    "address": "435 Hall Street, Ada, Ohio, 7098"
  },
  {
    "email": "carolynvalencia@ultrimax.com",
    "name": "Fry Rutledge",
    "age": 22,
    "gender": "male",
    "company": "TALAE",
    "phone": "+1 (939) 430-2555",
    "address": "231 Everit Street, Golconda, Northern Mariana Islands, 2842"
  },
  {
    "email": "fryrutledge@talae.com",
    "name": "Celina Bentley",
    "age": 24,
    "gender": "female",
    "company": "STOCKPOST",
    "phone": "+1 (827) 418-3303",
    "address": "763 Hunts Lane, Rossmore, North Carolina, 1889"
  },
  {
    "email": "celinabentley@stockpost.com",
    "name": "Yvonne Bullock",
    "age": 25,
    "gender": "female",
    "company": "CYTREK",
    "phone": "+1 (855) 469-2158",
    "address": "273 Ebony Court, Bartley, South Dakota, 8477"
  },
  {
    "email": "yvonnebullock@cytrek.com",
    "name": "Wilkins Waller",
    "age": 33,
    "gender": "male",
    "company": "ENDIPINE",
    "phone": "+1 (826) 561-3056",
    "address": "991 Thomas Street, Vernon, New Mexico, 7508"
  },
  {
    "email": "wilkinswaller@endipine.com",
    "name": "Duke Mcdaniel",
    "age": 29,
    "gender": "male",
    "company": "GEEKY",
    "phone": "+1 (985) 575-2067",
    "address": "663 Amber Street, Albany, New York, 2083"
  },
  {
    "email": "dukemcdaniel@geeky.com",
    "name": "Lillian Hawkins",
    "age": 37,
    "gender": "female",
    "company": "COMVERGES",
    "phone": "+1 (951) 500-2755",
    "address": "420 Homecrest Avenue, Canoochee, Florida, 8555"
  },
  {
    "email": "lillianhawkins@comverges.com",
    "name": "Jan Wilkinson",
    "age": 34,
    "gender": "female",
    "company": "STELAECOR",
    "phone": "+1 (858) 500-2021",
    "address": "973 Arkansas Drive, Wyano, North Dakota, 1788"
  },
  {
    "email": "janwilkinson@stelaecor.com",
    "name": "Kay Carter",
    "age": 22,
    "gender": "female",
    "company": "DIGIAL",
    "phone": "+1 (991) 596-3419",
    "address": "122 Banker Street, Homeworth, Nebraska, 7794"
  },
  {
    "email": "kaycarter@digial.com",
    "name": "Janelle Perry",
    "age": 25,
    "gender": "female",
    "company": "MAINELAND",
    "phone": "+1 (889) 492-3828",
    "address": "605 Vandalia Avenue, Winston, Delaware, 8297"
  },
  {
    "email": "janelleperry@maineland.com",
    "name": "Shawn Garrett",
    "age": 25,
    "gender": "female",
    "company": "BIOTICA",
    "phone": "+1 (929) 480-3031",
    "address": "716 Bulwer Place, Centerville, Minnesota, 5219"
  },
  {
    "email": "shawngarrett@biotica.com",
    "name": "Aurelia Richardson",
    "age": 27,
    "gender": "female",
    "company": "IZZBY",
    "phone": "+1 (805) 583-2555",
    "address": "803 Lamont Court, Williams, Puerto Rico, 5735"
  },
  {
    "email": "aureliarichardson@izzby.com",
    "name": "Paul Mayo",
    "age": 29,
    "gender": "male",
    "company": "MAZUDA",
    "phone": "+1 (947) 541-3220",
    "address": "763 Legion Street, Cumberland, Maryland, 5013"
  },
  {
    "email": "paulmayo@mazuda.com",
    "name": "Cooley Chan",
    "age": 38,
    "gender": "male",
    "company": "GALLAXIA",
    "phone": "+1 (981) 510-3802",
    "address": "507 Desmond Court, Greenbackville, Arizona, 1085"
  }
];

bulk.forEach(function(item){
    db.users.insert({user_id:item.email,password:"8b072b44590e5d3aa5a09e70ce5e0bdfc68e93bc"});
    item.user_id = db.users.findOne({user_id:item.email})._id;    
    db.profile.insert(item);
});
cursor = db.users.find();
while(cursor.hasNext()){
    printjson(cursor.next());
}


