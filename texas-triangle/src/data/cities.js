const citiesInfo = [
  {
    "id": "1",
    "city": "Houston",
    "country": "USA",
    "population": "Population: 2.3 million",
    "parks": "Houston has 22,000 acres of parkland, including 160 miles of hike and bike trails, 11,000 acres of bayous and lakes, and 1,000 acres of green space. The city’s parks and green spaces are home to 1,000 species of plants and animals, including 200 species of birds, 50 species of reptiles and amphibians, and 30 species of mammals.",
    "museums": "The Museum of Fine Arts, Houston, is the largest art museum in the Southwest and one of the 10 largest in the United States. It is home to more than 64,000 works of art, including one of the world’s largest collections of Impressionist and Post-Impressionist art.",
    "restaurants": "Houston offers a wide variety of food specializing in Mexican, Cajun, and Tex-Mex cuisines. The city is also home to a large number of restaurants specializing in Asian, Italian, and French cuisines. ",
    "attractions": "Houston is home of Seaworld and the international space center. The city is also home to the Houston Museum of Natural Science, the Houston Museum of Fine Arts, the Houston Zoo, and the Houston Arboretum and Nature Center.",
    "zoo": "The Houston Zoo is home to more than 6,000 animals representing more than 900 species. The zoo is a leader in animal conservation and research, and is a member of the Association of Zoos and Aquariums. The zoo is also home to the Houston Zoo Institute for Conservation Research, which is dedicated to the conservation of endangered species.",
    "image": "https://images.pexels.com/photos/15353653/pexels-photo-15353653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "University": "University of Houston",
    "Companies": "Some notable companies are ExxonMobil, Chevron, Halliburton, Schlumberger, Baker Hughes, and ConocoPhillips.",
    "description": "Houston is the acknowledged energy capital of the world with its complex of energy headquarters, financing institutions, research centers, and petroleum processing and transportation facilities. Its medical center houses more clinical institutions and life sciences research facilities than any other medical complex in the world."
  },
  {
    "id": "2",
    "city": "Dallas-Fort Worth",
    "country": "USA",
    "population": "Population: 7.7 million",
    "parks": "The Park & Recreation Department maintains close to 297 parks (12,893 acres) and public spaces citywide, as well as providing recreational activities and educational programming that makes Fort Worth a great place to live, work and play.",
    "museums": "The Dallas Museum of Art is one of the largest art museums in the Southwest United States. The museum is located in the Arts District of downtown Dallas, Texas, along Woodall Rodgers Freeway between St. Paul Street and Flora Street.",
    "restaurants": "Dallas is home to a wide variety of food specializing in Mexican, Cajun, and Tex-Mex cuisines. The city is also home to a large number of restaurants specializing in barbecue.",
    "attractions": "Dallas is home to the Dallas World Aquarium, the Dallas Museum of Art, the Dallas Arboretum and Botanical Garden, the Dallas Zoo, and the Perot Museum of Nature and Science.",
    "zoo": "The Dallas Zoo is home to more than 2,000 animals representing more than 400 species. The zoo is a leader in animal conservation and research, and is a member of the Association of Zoos and Aquariums. The zoo is also home to the Dallas Zoo Institute for Conservation Research, which is dedicated to the conservation of endangered species.",
    "image": "https://images.unsplash.com/photo-1580536793208-117fdb20ffc1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    "University": "University of Texas at Dallas and Texas Christian University",
    "Companies": "Some notable companies are AT&T, American Airlines, Southwest Airlines, ExxonMobil, and Texas Instruments.",
    "description": "Dallas-Fort Worth is an established financial center, telecommunications pioneer, and its two airports are the hubs of flights connecting the Southwestern U.S. to the nation and to the world. It has become a favored location for corporate expansions and relocations for both domestic and foreign companies."
  },
  {
    "id": "3",
    "city": "San Antonio",
    "country": "USA",
    "population": "Population: 1.4 million",
    "parks": "The city of San Antonio operates and maintains 257 parks covering (15,469 acres) of land, with more than 100 miles of trails. The city also operates and maintains 11 golf courses, 10 recreation centers, 10 swimming pools, 2 ice arenas, 2 tennis centers, 2 skate parks, 2 dog parks, and 2 disc golf courses.",
    "museums": "The San Antonio Museum of Art is the largest art museum in San Antonio, Texas. It is located in the city's Museum Reach, a 15-block area along the San Antonio River that is home to several museums, including the Witte Museum, the San Antonio Children's Museum, and the San Antonio Museum of Science and Technology.",
    "restaurants": "San Antonio is home to a wide variety of food specializing in Tex-Mex cuisines. Some notable restaurants are Mi Tierra, La Gloria, and La Margarita. The city is known for puffy tacos, texas quail, sweet potato fries, and pan dulce.",
    "attractions": "San Antonio is home to the San Antonio Zoo, the San Antonio Museum of Art, the San Antonio Botanical Garden, and the San Antonio Children's Museum.",
    "zoo": "The San Antonio Zoo is home to more than 3,500 animals representing more than 600 species. The zoo is a leader in animal conservation and research, and is a member of the Association of Zoos and Aquariums. The zoo is also home to the San Antonio Zoo Institute for Conservation Research, which is dedicated to the conservation of endangered species.",
    "image": "https://images.unsplash.com/photo-1634508943216-5887aac4eb66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1671&q=80",
    "University": "University of Texas at San Antonio and Trinity University",
    "Companies": "Some notable companies are USAA, Valero Energy, Tesoro, and Rackspace.",
    "description": "San Antonio is home to the nation’s second largest concentration of cybersecurity companies, to three major Armed Forces commands, to an international automotive manufacturing hub centered on Toyota, and to the most visited destinations in the state, the Alamo and the Riverwalk."
  },
  {
    "id": "4",
    "city": "Austin",
    "country": "USA",
    "population": "Population: 1 million",
    "parks": "The city of Austin operates and maintains 300 parks covering (17,000 acres) of land, over the last 3 years, the city has added 20 new parks and is planing on adding 20 more in the next 3 years. The city tries to maintain a park within a 10-minute walk of every resident similar to Dallas and San Antonio.",
    "museums": "The Blanton Museum of Art is an art museum located on the campus of the University of Texas at Austin. The museum is named after the Blanton family, who donated the museum's collection to the university in 1964. The museum is home to more than 17,000 works of art, including one of the world’s largest collections of Latin American art.",
    "restaurants": "While Austin may be known for its legendary Tex-Mex, tasty breakfast tacos and juicy barbecue, there's so much more to the capital city's food history to explore. Austin's celebrated dining scene has evolved with lightening speed over the last few decades, but don't forget to pay homage to the greats during your visit.",
    "attractions": "Austin is home to the Austin Zoo, the Blanton Museum of Art, the Austin Botanical Garden, and the Austin Children's Museum.",
    "zoo": "The Austin Zoo is home to more than 3,500 animals representing more than 600 species. The zoo is a leader in animal conservation and research, and is a member of the Association of Zoos and Aquariums. The zoo is also home to the Austin Zoo Institute for Conservation Research, which is dedicated to the conservation of endangered species.",
    "image": "https://images.unsplash.com/photo-1590604237485-7bc1f066f462?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1588&q=80",
    "University": "University of Texas at Austin",
    "Companies": "Some notable companies are Dell, Apple, IBM, and Oracle.",
    "description": "Austin and San Antonio are connected by 75 miles of continuous urbanization, including the vital region around San Marcos and a string of the fastest growing small cities in the nation. Austin is home to world-class companies, particularly in technology, the University of Texas, and also is home to the government of the nation’s second largest state. Austin is also home to the Texas State Capitol, the Texas Governor's Mansion, and the Texas Supreme Court."
  }
];

export default citiesInfo;