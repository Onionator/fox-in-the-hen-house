//This structure has been modified from walkthroughs and sourcecode of PothOnProgramming, a youtube channel. Many of his walkthroughs were very relevant to our current project's goals and objectives.

//Section of code for game logic, including grid system.

//this is the area of code for creating the world , including dimentions, space/tile size and level maps.
farm: {

  columns: 32, //32 columns in the map array
  rows: 18, //18 rows in the map array
  space_size: 20, //each space or tile will be 20 pixels square

  //the map of spaces using a one dimensional array
  //0's represent movable spaces, and 1's will represent nonmovable spaces.
  map:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
       1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
       1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
       1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
       1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,
       1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,
       1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,
       1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,
       1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,
       1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,
       1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,
       1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
       1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,
       1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,
       1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,
       1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,
       1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,
       1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
},
