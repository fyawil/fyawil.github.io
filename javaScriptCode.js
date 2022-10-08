class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isStrength :"",
      isHard : "",
      availableTime : 0,
      monslot: "",
      tueslot: "",
      wedslot: "",
      thuslot: "",
      frislot: "",
      satslot: "",
      sunslot: "",
      workout: 
      {
      "Monday": ["","","","",""],
      "Tuesday": ["","","","",""],
      "Wednesday": ["","","","",""],
      "Thursday": ["","","","",""],
      "Friday": ["","","","",""],
      "Saturday": ["","","","",""],
      "Sunday": ["","","","",""]
    }
    }

   this.handleChangeStrength = this.handleChangeStrength.bind(this)
   this.handleChangeDifficulty = this.handleChangeDifficulty.bind(this)
   this.handleChangeMon = this.handleChangeMon.bind(this)
   this.handleChangeTue = this.handleChangeTue.bind(this)
   this.handleChangeWed = this.handleChangeWed.bind(this)
   this.handleChangeThu = this.handleChangeThu.bind(this)
   this.handleChangeFri = this.handleChangeFri.bind(this)
   this.handleChangeSat = this.handleChangeSat.bind(this)
   this.handleChangeSun = this.handleChangeSun.bind(this)
   this.handleChangeTime = this.handleChangeTime.bind(this)
   this.generate = this.generate.bind(this)
   this.reset = this.reset.bind(this)
  } 

  handleChangeStrength(event){
    this.setState({
      isStrength: event.target.value
    })
  }

  handleChangeDifficulty(event){
    this.setState({
      isHard: event.target.value
    })
  }

  handleChangeMon(event){
    this.setState({
      monslot: event.target.value
    })
    if(document.getElementById("mon").checked == false){
    this.setState({
      monslot: ""
    })
    }
  }
  handleChangeTue(event){
    this.setState({
      tueslot: event.target.value
    })
    if(document.getElementById("tue").checked == false){
      this.setState({
        tueslot: ""
      })
      }
  }
  handleChangeWed(event){
    this.setState({
      wedslot: event.target.value
    })
    if(document.getElementById("wed").checked == false){
      this.setState({
        wedslot: ""
      })
      }
  }
  handleChangeThu(event){
    this.setState({
      thuslot: event.target.value
    })
    if(document.getElementById("thu").checked == false){
      this.setState({
        thuslot: ""
      })
      }
  }
  handleChangeFri(event){
    this.setState({
      frislot: event.target.value
    })
    if(document.getElementById("fri").checked == false){
      this.setState({
        frislot: ""
      })
      }
  }
  handleChangeSat(event){
    this.setState({
      satslot: event.target.value
    })
    if(document.getElementById("sat").checked == false){
      this.setState({
        satslot: ""
      })
      }
  }
  handleChangeSun(event){
    this.setState({
      sunslot: event.target.value
    })
    if(document.getElementById("sun").checked == false){
      this.setState({
        sunslot: ""
      })
      }
  }

  handleChangeTime(event){
    this.setState({
      availableTime: event.target.value
    })
  }


  generate(){  

    

    let exercises = {
      Cardio: { 
        Hard:{
          FullBody: {
          0:["Clean & Jerk", "Snatch", "Squat To Press", "Ground To Overhead"]
        },
          Push: {
            0:["hard Bench",  "Incline Bench"],
            1:["Shoulder Press", "Rear Delt Flys", "Lateral Raises"],
            2:["hard Skullcrushers", "hard Skullcrushers 2", "hard Skullcrushers 3"]
          },
          Pull: {
            0:["hard Pull Up", "hard Chin Up"],
            1:["Pentlay Row", "Bent Over Row"],
            2:["Bicep Curl", "DB Curl", "Preacher Curl"]
          },
          Legs: {
           0:["Squat", "Pause Squat", "ATG Squat"],
           1:["Deadlifts", "Lunges"],
           2:["Calf Raises", "Calf Raises 2", "Calf Raises 3"]
          },
          Abs: {
            0:["Leg Raises", "Front Lever Raises", "Deadbugs","Crunches", "Hitting Tyres", "Medball Sidetoss"],
            1:["Side Plank", "Russian Twist", "Lateral Crunches", "Rotating Sit Ups"]
          }
            },
            Easy:{
              FullBody: {
                0: ["Burpee","Monkeycrawl", "Shoot & Sprawl"]
              },
              Push: {
                0:["Push Ups", "Straight Bar Dips"],
                1:["HSPU","Pike Push ups"],
                2:["Skullcrushers", "Dips"]
              },
              Pull: {
                0:["Pull Up","Chin Up", "Pause Chin Up"],
                1:["Australian Pull up"],
                2:["Bicep Row", "Close Grip Chin Up"]
              },
              Legs: {
                0:["Squat", "Pause Squat"],
                1:["Lunges", "Bridges", "ATG Squat"],
                2:["Calf Raises"]
              },
              Abs: {
                0:["Leg Raises", "Front Lever Raises", "Deadbugs","Crunches","Side Plank", "Russian Twist", "Lateral Crunches"],
                1:["Rotating Sit Ups", "Hitting Tyres", "Medball Sidetoss"]
              }
                }
      },
      
      Strength: {
        Hard:{
          FullBody: {
          0:[
          "Clean & Jerk","Burpee","Squat & Press"]
        // name illustrations same as exercises  0:["stickman","stickman","stickman"]  
        },
          Push: {
            0:["	Bench	"	,	"	Incline Bench	"	,	"	Push Up	"	,	"	Straight Bar Dip	"
          ],
            1:["	Press	"	,	"	Rear Delt Fly	"	,	"	HSPU	"	,	"	Pike Push Up	"
          ],
            2:["	French Press	"	,	"	Skull Crusher	"	,	"	Dip	"]
          },
          Pull: {
            0:["	W. Pull Up	"	,	"	Chin Up	"	,	"	W. Chin Up	"	,	"	Pull Up	"
          ],
            1:["	Bent Over Row	"	,	"	Ring Row	"	,	"	Front Lever	"
          ],
            2:["	Bicep Curl	"	,	"	Preacher Curl	"	,	"	Close Grip Chin Up	"
          ]
          },
          Legs: {
           0:["	Squat	"	,	"	Pause Squat	"	,	"	ATG Squat	"
          ],
           1:["	Dead Lift	"	,	"	Bridge	"	,	"	Lunge	"
          ],
           2:["Calf Raises"]
          },
          Abs: {
            0:["Leg Raises", "Front Lever Raises", "Deadbugs","Crunches", "Hitting Tyres", "Medball Sidetoss"],
            1:["Side Plank", "Russian Twist", "Lateral Crunches", "Rotating Sit Ups"]
          }
            },
            Easy:{
              FullBody: {
                0: ["Burpee","Monkeycrawl", "Shoot & Sprawl"]
              },
              Push: {
                0:["Push Ups", "Straight Bar Dips"],
                1:["HSPU","Pike Push ups"],
                2:["Skullcrushers", "Dips"]
              },
              Pull: {
                0:["Pull Up","Chin Up", "Pause Chin Up"],
                1:["Australian Pull up"],
                2:["Bicep Row", "Close Grip Chin Up"]
              },
              Legs: {
                0:["Squat", "Pause Squat"],
                1:["Lunges", "Bridges", "ATG Squat"],
                2:["Calf Raises"]
              },
              Abs: {
                0:["Leg Raises", "Front Lever Raises", "Deadbugs","Crunches","Side Plank", "Russian Twist", "Lateral Crunches"],
                1:["Rotating Sit Ups", "Hitting Tyres", "Medball Sidetoss"]
              }
                }
      }
  }

  

let template = []

let availableDays =
document.getElementById("mon").checked+
document.getElementById("tue").checked+
document.getElementById("wed").checked+
document.getElementById("thu").checked+
document.getElementById("fri").checked+
document.getElementById("sat").checked+
document.getElementById("sun").checked 

let movementIndex = 0;

let fullBodyIndex = 0;

let push0Index = 0;
let push1Index = 0;
let push2Index = 0;

let pull0Index = 0;
let pull1Index = 0;
let pull2Index = 0;

let legs0Index = 0;
let legs1Index = 0;
let legs2Index = 0;

let abs0Index = 0;
let abs1Index = 0;
let abs2Index = 0;
  
for(let i = 0;i<availableDays;i++){

  switch(this.state.availableTime){

    case "is30mins": 

    if(fullBodyIndex<exercises[this.state.isStrength][this.state.isHard]["FullBody"][`${0}`].length-1){
      template.push(
        [
         exercises[this.state.isStrength][this.state.isHard]["FullBody"][`${0}`][fullBodyIndex],
         exercises[this.state.isStrength][this.state.isHard]["FullBody"][`${0}`][fullBodyIndex+1],
         "","",""
        ]
        )
      fullBodyIndex++
      fullBodyIndex++;
    }
    else if(fullBodyIndex==exercises[this.state.isStrength][this.state.isHard]["FullBody"][`${0}`].length-1){
      template.push(
        [
         exercises[this.state.isStrength][this.state.isHard]["FullBody"][`${0}`][exercises[this.state.isStrength][this.state.isHard]["FullBody"]["0"].length-1],
         exercises[this.state.isStrength][this.state.isHard]["FullBody"][`${0}`][0],
         "","",""
        ]
        )
      fullBodyIndex=1; 
    } 
    else {
      template.push(
        [
         exercises[this.state.isStrength][this.state.isHard]["FullBody"][`${0}`][0],
         exercises[this.state.isStrength][this.state.isHard]["FullBody"][`${0}`][1],
         "","",""
        ]
        )
        fullBodyIndex=2;
    };


    for(let j=0;j<template[i].length;j++){
      if(template[i][j]!==""){
        template[i][j]= [template[i][j],
        this.state.isStrength=="Strength"?`${4} sets x ${j==0?5:10} reps`:
        `${j==0?"30 rds x":
                "30 secs on | 30 secs off"}`
      ]
      }
    }
      break;

      case "is45mins":
switch(movementIndex){
  case 0:
template.push(
      [
        exercises[this.state.isStrength][this.state.isHard]["Push"][`${0}`][
        push0Index<exercises[this.state.isStrength][this.state.isHard]["Push"][`${0}`].length?
        push0Index:
        push0Index%exercises[this.state.isStrength][this.state.isHard]["Push"][`${0}`].length 
      ],
        exercises[this.state.isStrength][this.state.isHard]["Pull"]["1"][
          pull1Index<exercises[this.state.isStrength][this.state.isHard]["Pull"][`${1}`].length?
          pull1Index:
          pull1Index%exercises[this.state.isStrength][this.state.isHard]["Pull"][`${1}`].length 
        ],
        exercises[this.state.isStrength][this.state.isHard]["Legs"][`${2}`][
          legs2Index<exercises[this.state.isStrength][this.state.isHard]["Legs"][`${2}`].length?
          legs2Index:
          legs2Index%exercises[this.state.isStrength][this.state.isHard]["Legs"][`${2}`].length
        ],
        "",""
      ]
    );
    push0Index++
    pull1Index++
    legs2Index++
    movementIndex++;
    break;
   case 1:
template.push(
      [
        exercises[this.state.isStrength][this.state.isHard]["Legs"][`${0}`][
          legs0Index<exercises[this.state.isStrength][this.state.isHard]["Legs"][`${0}`].length?
          legs0Index:
          legs0Index%exercises[this.state.isStrength][this.state.isHard]["Legs"][`${0}`].length 
        ],
        exercises[this.state.isStrength][this.state.isHard]["Push"]["1"][
          push1Index<exercises[this.state.isStrength][this.state.isHard]["Push"][`${1}`].length?
          push1Index:
          push1Index%exercises[this.state.isStrength][this.state.isHard]["Push"][`${1}`].length 
        ],
        exercises[this.state.isStrength][this.state.isHard]["Pull"][`${2}`][
          pull2Index<exercises[this.state.isStrength][this.state.isHard]["Pull"][`${2}`].length?
          pull2Index:
          pull2Index%exercises[this.state.isStrength][this.state.isHard]["Pull"][`${2}`].length 
        ],
        "",""
      ]
    );
    legs0Index++
    push1Index++
    pull2Index++
    movementIndex++;
    break;
    case 2:
template.push(
      [
        exercises[this.state.isStrength][this.state.isHard]["Pull"][`${0}`][
          pull0Index<exercises[this.state.isStrength][this.state.isHard]["Pull"][`${0}`].length?
          pull0Index:
          pull0Index%exercises[this.state.isStrength][this.state.isHard]["Pull"][`${0}`].length
        ],
        exercises[this.state.isStrength][this.state.isHard]["Legs"]["1"][
          legs1Index<exercises[this.state.isStrength][this.state.isHard]["Legs"][`${1}`].length?
          legs1Index:
          legs1Index%exercises[this.state.isStrength][this.state.isHard]["Legs"][`${1}`].length 
        ],
        exercises[this.state.isStrength][this.state.isHard]["Push"][`${2}`][
          push2Index<exercises[this.state.isStrength][this.state.isHard]["Push"][`${2}`].length?
          push2Index:
          push2Index%exercises[this.state.isStrength][this.state.isHard]["Push"][`${2}`].length 
        ],
        "",""
      ]
    );
    pull0Index++
    legs1Index++
    push2Index++
    movementIndex = 0;
    break;
};


for(let j=0;j<template[i].length;j++){
  if(template[i][j]!==""){
    template[i][j]= [template[i][j],
    this.state.isStrength=="Strength"?`${4} sets x ${j==0?5:j==1?10:10} reps`:
    `${j==0?"2 x":
       j==1?"21 rds x":
       "30 secs on | 30 secs off"}`
  ]
  }
}
break;

    case "is60mins":  
    switch(movementIndex){
      case 0:
    template.push(
          [
            exercises[this.state.isStrength][this.state.isHard]["Push"][`${0}`][
            push0Index<exercises[this.state.isStrength][this.state.isHard]["Push"][`${0}`].length?
            push0Index:
            push0Index%exercises[this.state.isStrength][this.state.isHard]["Push"][`${0}`].length 
          ],
            exercises[this.state.isStrength][this.state.isHard]["Pull"][`${1}`][
              pull1Index<exercises[this.state.isStrength][this.state.isHard]["Pull"][`${1}`].length?
              pull1Index:
              pull1Index%exercises[this.state.isStrength][this.state.isHard]["Pull"][`${1}`].length 
            ],
            exercises[this.state.isStrength][this.state.isHard]["Legs"][`${2}`][
              legs2Index<exercises[this.state.isStrength][this.state.isHard]["Legs"][`${2}`].length?
              legs2Index:
              legs2Index%exercises[this.state.isStrength][this.state.isHard]["Legs"][`${2}`].length
            ],
            exercises[this.state.isStrength][this.state.isHard]["Abs"][`${0}`][
              abs0Index<exercises[this.state.isStrength][this.state.isHard]["Abs"][`${0}`].length?
              abs0Index:
              abs0Index%exercises[this.state.isStrength][this.state.isHard]["Abs"][`${0}`].length
            ],
            ""
          ]
        );
        push0Index++;
        pull1Index++;
        legs2Index++;
        abs0Index++;
        movementIndex++;
        break;
       case 1:
    template.push(
          [
            exercises[this.state.isStrength][this.state.isHard]["Legs"][`${0}`][
              legs0Index<exercises[this.state.isStrength][this.state.isHard]["Legs"][`${0}`].length?
              legs0Index:
              legs0Index%exercises[this.state.isStrength][this.state.isHard]["Legs"][`${0}`].length 
            ],
            exercises[this.state.isStrength][this.state.isHard]["Push"][`${1}`][
              push1Index<exercises[this.state.isStrength][this.state.isHard]["Push"][`${1}`].length?
              push1Index:
              push1Index%exercises[this.state.isStrength][this.state.isHard]["Push"][`${1}`].length 
            ],
            exercises[this.state.isStrength][this.state.isHard]["Pull"][`${2}`][
              pull2Index<exercises[this.state.isStrength][this.state.isHard]["Pull"][`${2}`].length?
              pull2Index:
              pull2Index%exercises[this.state.isStrength][this.state.isHard]["Pull"][`${2}`].length 
            ],
            exercises[this.state.isStrength][this.state.isHard]["Abs"][`${1}`][
              abs1Index<exercises[this.state.isStrength][this.state.isHard]["Abs"][`${1}`].length?
              abs1Index:
              abs1Index%exercises[this.state.isStrength][this.state.isHard]["Abs"][`${1}`].length
            ],
            ""
          ]
        );
        legs0Index++;
        push1Index++;
        pull2Index++;
        abs1Index++;
        movementIndex++;
        break;
        case 2:
    template.push(
          [
            exercises[this.state.isStrength][this.state.isHard]["Pull"][`${0}`][
              pull0Index<exercises[this.state.isStrength][this.state.isHard]["Pull"][`${0}`].length?
              pull0Index:
              pull0Index%exercises[this.state.isStrength][this.state.isHard]["Pull"][`${0}`].length
            ],
            exercises[this.state.isStrength][this.state.isHard]["Legs"][`${1}`][
              legs1Index<exercises[this.state.isStrength][this.state.isHard]["Legs"][`${1}`].length?
              legs1Index:
              legs1Index%exercises[this.state.isStrength][this.state.isHard]["Legs"][`${1}`].length 
            ],
            exercises[this.state.isStrength][this.state.isHard]["Push"][`${2}`][
              push2Index<exercises[this.state.isStrength][this.state.isHard]["Push"][`${2}`].length?
              push2Index:
              push2Index%exercises[this.state.isStrength][this.state.isHard]["Push"][`${2}`].length 
            ],
            exercises[this.state.isStrength][this.state.isHard]["Abs"][`${0}`][
              abs0Index<exercises[this.state.isStrength][this.state.isHard]["Abs"][`${0}`].length?
              abs0Index:
              abs0Index%exercises[this.state.isStrength][this.state.isHard]["Abs"][`${0}`].length
            ],""
          ]
        );
        pull0Index++;
        legs1Index++;
        push2Index++;
        abs0Index++;
        movementIndex++;
        break;
        case 3:
        template.push(
          [
            exercises[this.state.isStrength][this.state.isHard]["Legs"][`${0}`][
              legs0Index<exercises[this.state.isStrength][this.state.isHard]["Legs"][`${0}`].length?
              legs0Index:
              legs0Index%exercises[this.state.isStrength][this.state.isHard]["Legs"][`${0}`].length
            ],
            exercises[this.state.isStrength][this.state.isHard]["Push"]["1"][
              push1Index<exercises[this.state.isStrength][this.state.isHard]["Push"][`${1}`].length?
              push1Index:
              push1Index%exercises[this.state.isStrength][this.state.isHard]["Push"][`${1}`].length 
            ],
            exercises[this.state.isStrength][this.state.isHard]["Pull"][`${2}`][
              pull2Index<exercises[this.state.isStrength][this.state.isHard]["Pull"][`${2}`].length?
              pull2Index:
              pull2Index%exercises[this.state.isStrength][this.state.isHard]["Pull"][`${2}`].length 
            ],
            exercises[this.state.isStrength][this.state.isHard]["Abs"][`${1}`][
              abs1Index<exercises[this.state.isStrength][this.state.isHard]["Abs"][`${1}`].length?
              abs1Index:
              abs1Index%exercises[this.state.isStrength][this.state.isHard]["Abs"][`${1}`].length
            ],
            ""
          ]
        );
        legs0Index++;
        push1Index++;
        pull2Index++;
        abs1Index++;
        movementIndex = 0;
        break;
    };


    for(let j=0;j<template[i].length;j++){
      if(template[i][j]!==""){
        template[i][j]= [template[i][j],
        this.state.isStrength=="Strength"?`${4} sets x ${j==0?5:j==1?10:j==2?10:20} reps`:
        `${j==0?"3 x":
           j==1?"15 rds x":
           j==2?"30 secs on":
                "30 secs off"}`
      ]
      }
    }
    break;

    case "is75mins":  
    switch(movementIndex){
      case 0:
    template.push(
          [
            exercises[this.state.isStrength][this.state.isHard]["FullBody"][`${0}`][
              fullBodyIndex<exercises[this.state.isStrength][this.state.isHard]["FullBody"][`${0}`].length?
              fullBodyIndex:
              fullBodyIndex%exercises[this.state.isStrength][this.state.isHard]["FullBody"][`${0}`].length
            ],
            exercises[this.state.isStrength][this.state.isHard]["Push"][`${0}`][
            push0Index<exercises[this.state.isStrength][this.state.isHard]["Push"][`${0}`].length?
            push0Index:
            push0Index%exercises[this.state.isStrength][this.state.isHard]["Push"][`${0}`].length 
          ],
            exercises[this.state.isStrength][this.state.isHard]["Pull"][`${1}`][
              pull1Index<exercises[this.state.isStrength][this.state.isHard]["Pull"][`${1}`].length?
              pull1Index:
              pull1Index%exercises[this.state.isStrength][this.state.isHard]["Pull"][`${1}`].length 
            ],
            exercises[this.state.isStrength][this.state.isHard]["Legs"][`${2}`][
              legs2Index<exercises[this.state.isStrength][this.state.isHard]["Legs"][`${2}`].length?
              legs2Index:
              legs2Index%exercises[this.state.isStrength][this.state.isHard]["Legs"][`${2}`].length
            ],
            exercises[this.state.isStrength][this.state.isHard]["Abs"][`${0}`][
              abs0Index<exercises[this.state.isStrength][this.state.isHard]["Abs"][`${0}`].length?
              abs0Index:
              abs0Index%exercises[this.state.isStrength][this.state.isHard]["Abs"][`${0}`].length
            ],
          ]
        );
        push0Index++;
        pull1Index++;
        legs2Index++;
        abs0Index++;
        fullBodyIndex++;
        movementIndex++;
        break;
       case 1:
    template.push(
          [
            exercises[this.state.isStrength][this.state.isHard]["FullBody"][`${0}`][
              fullBodyIndex<exercises[this.state.isStrength][this.state.isHard]["FullBody"][`${0}`].length?
              fullBodyIndex:
              fullBodyIndex%exercises[this.state.isStrength][this.state.isHard]["FullBody"][`${0}`].length
            ],
            exercises[this.state.isStrength][this.state.isHard]["Legs"][`${0}`][
              legs0Index<exercises[this.state.isStrength][this.state.isHard]["Legs"][`${0}`].length?
              legs0Index:
              legs0Index%exercises[this.state.isStrength][this.state.isHard]["Legs"][`${0}`].length 
            ],
            exercises[this.state.isStrength][this.state.isHard]["Push"][`${1}`][
              push1Index<exercises[this.state.isStrength][this.state.isHard]["Push"][`${1}`].length?
              push1Index:
              push1Index%exercises[this.state.isStrength][this.state.isHard]["Push"][`${1}`].length 
            ],
            exercises[this.state.isStrength][this.state.isHard]["Pull"][`${2}`][
              pull2Index<exercises[this.state.isStrength][this.state.isHard]["Pull"][`${2}`].length?
              pull2Index:
              pull2Index%exercises[this.state.isStrength][this.state.isHard]["Pull"][`${2}`].length 
            ],
            exercises[this.state.isStrength][this.state.isHard]["Abs"][`${1}`][
              abs1Index<exercises[this.state.isStrength][this.state.isHard]["Abs"][`${1}`].length?
              abs1Index:
              abs1Index%exercises[this.state.isStrength][this.state.isHard]["Abs"][`${1}`].length
            ]
          ]
        );
        legs0Index++;
        push1Index++;
        pull2Index++;
        abs1Index++;        
        fullBodyIndex++;
        movementIndex++;
        break;
        case 2:
    template.push(
          [
            exercises[this.state.isStrength][this.state.isHard]["FullBody"][`${0}`][
              fullBodyIndex<exercises[this.state.isStrength][this.state.isHard]["FullBody"][`${0}`].length?
              fullBodyIndex:
              fullBodyIndex%exercises[this.state.isStrength][this.state.isHard]["FullBody"][`${0}`].length
            ],
            exercises[this.state.isStrength][this.state.isHard]["Pull"][`${0}`][
              pull0Index<exercises[this.state.isStrength][this.state.isHard]["Pull"][`${0}`].length?
              pull0Index:
              pull0Index%exercises[this.state.isStrength][this.state.isHard]["Pull"][`${0}`].length
            ],
            exercises[this.state.isStrength][this.state.isHard]["Legs"][`${1}`][
              legs1Index<exercises[this.state.isStrength][this.state.isHard]["Legs"][`${1}`].length?
              legs1Index:
              legs1Index%exercises[this.state.isStrength][this.state.isHard]["Legs"][`${1}`].length 
            ],
            exercises[this.state.isStrength][this.state.isHard]["Push"][`${2}`][
              push2Index<exercises[this.state.isStrength][this.state.isHard]["Push"][`${2}`].length?
              push2Index:
              push2Index%exercises[this.state.isStrength][this.state.isHard]["Push"][`${2}`].length 
            ],
            exercises[this.state.isStrength][this.state.isHard]["Abs"][`${0}`][
              abs0Index<exercises[this.state.isStrength][this.state.isHard]["Abs"][`${0}`].length?
              abs0Index:
              abs0Index%exercises[this.state.isStrength][this.state.isHard]["Abs"][`${0}`].length
            ]
          ]
        );
        pull0Index++;
        legs1Index++;
        push2Index++;
        abs0Index++;
        fullBodyIndex++;
        movementIndex++;
        break;
        case 3:
        template.push(
          [
            exercises[this.state.isStrength][this.state.isHard]["FullBody"][`${0}`][
              fullBodyIndex<exercises[this.state.isStrength][this.state.isHard]["FullBody"][`${0}`].length?
              fullBodyIndex:
              fullBodyIndex%exercises[this.state.isStrength][this.state.isHard]["FullBody"][`${0}`].length
            ],
            exercises[this.state.isStrength][this.state.isHard]["Push"][`${0}`][
              push0Index<exercises[this.state.isStrength][this.state.isHard]["Push"][`${0}`].length?
              push0Index:
              push0Index%exercises[this.state.isStrength][this.state.isHard]["Push"][`${0}`].length
            ],
            exercises[this.state.isStrength][this.state.isHard]["Pull"][`${1}`][
              pull1Index<exercises[this.state.isStrength][this.state.isHard]["Pull"][`${1}`].length?
              pull1Index:
              pull1Index%exercises[this.state.isStrength][this.state.isHard]["Pull"][`${1}`].length 
            ],
            exercises[this.state.isStrength][this.state.isHard]["Legs"][`${0}`][
              legs0Index<exercises[this.state.isStrength][this.state.isHard]["Legs"][`${0}`].length?
              legs0Index:
              legs0Index%exercises[this.state.isStrength][this.state.isHard]["Legs"][`${0}`].length 
            ],
            exercises[this.state.isStrength][this.state.isHard]["Abs"][`${1}`][
              abs1Index<exercises[this.state.isStrength][this.state.isHard]["Abs"][`${1}`].length?
              abs1Index:
              abs1Index%exercises[this.state.isStrength][this.state.isHard]["Abs"][`${1}`].length
            ]
          ]
        );
        push0Index++;
        pull1Index++;
        legs0Index++;
        abs1Index++;
        fullBodyIndex++;
        movementIndex++;
        break;
        case 4:
        template.push(
          [
            exercises[this.state.isStrength][this.state.isHard]["FullBody"][`${0}`][
              fullBodyIndex<exercises[this.state.isStrength][this.state.isHard]["FullBody"][`${0}`].length?
              fullBodyIndex:
              fullBodyIndex%exercises[this.state.isStrength][this.state.isHard]["FullBody"][`${0}`].length
            ],
            exercises[this.state.isStrength][this.state.isHard]["Pull"][`${0}`][
              pull0Index<exercises[this.state.isStrength][this.state.isHard]["Pull"][`${0}`].length?
              pull0Index:
              pull0Index%exercises[this.state.isStrength][this.state.isHard]["Pull"][`${0}`].length
            ],
            exercises[this.state.isStrength][this.state.isHard]["Push"][`${1}`][
              push1Index<exercises[this.state.isStrength][this.state.isHard]["Push"][`${1}`].length?
              push1Index:
              push1Index%exercises[this.state.isStrength][this.state.isHard]["Push"][`${1}`].length 
            ],
            exercises[this.state.isStrength][this.state.isHard]["Legs"][`${1}`][
              legs1Index<exercises[this.state.isStrength][this.state.isHard]["Legs"][`${1}`].length?
              legs1Index:
              legs1Index%exercises[this.state.isStrength][this.state.isHard]["Legs"][`${1}`].length 
            ],
            exercises[this.state.isStrength][this.state.isHard]["Abs"][`${1}`][
              abs1Index<exercises[this.state.isStrength][this.state.isHard]["Abs"][`${1}`].length?
              abs1Index:
              abs1Index%exercises[this.state.isStrength][this.state.isHard]["Abs"][`${1}`].length
            ]
          ]
        );
        pull0Index++;
        push1Index++;
        legs1Index++;
        abs1Index++;
        fullBodyIndex++;
        movementIndex = 0;
        break;
    };

    for(let j=0;j<template[i].length;j++){
      if(template[i][j]!==""){
        template[i][j]= [template[i][j],
        this.state.isStrength=="Strength"?`${4} sets x ${j==0?5:j==1?10:j==2?10:j==3?10:20} reps`:
        `${j==0?"4 x":
        j==1?"20 rds x":
        j==2?"•":
        j==3?"20 secs on":
            "40 secs off"}`  
      ]
      }
    }
    break;
  }


// resulting in template becoming [["Pushup","PullUp"],["Squat","Triext"],["Dip","Yalla"],.......]
  }

  if(this.state.monslot !== ""){
    let newMondaySchedule = template.shift()
    this.setState(prevState => {
        let monScheduleChanger = prevState.workout;  
        monScheduleChanger["Monday"] = newMondaySchedule; 
        return { monScheduleChanger };
      }
    )
  } 
  if(this.state.tueslot !== ""){
    let newTuesdaySchedule = template.shift()
    this.setState(prevState => {
        let tueScheduleChanger = prevState.workout;  
        tueScheduleChanger["Tuesday"] = newTuesdaySchedule; 
        return { tueScheduleChanger }; 
      }
    )
  }
  if(this.state.wedslot !== ""){
    let newWednesdaySchedule = template.shift()
    this.setState(prevState => {
        let wedScheduleChanger = prevState.workout;  
        wedScheduleChanger["Wednesday"] = newWednesdaySchedule; 
        return { wedScheduleChanger }; 
      }
    )
  }
  if(this.state.thuslot !== ""){
    let newThursdaySchedule = template.shift()
    this.setState(prevState => {
        let thuScheduleChanger = prevState.workout;  
        thuScheduleChanger["Thursday"] = newThursdaySchedule; 
        return { thuScheduleChanger }; 
      }
    )
  }
  if(this.state.frislot !== ""){
    let newFridaySchedule = template.shift()
    this.setState(prevState => {
        let friScheduleChanger = prevState.workout;  
        friScheduleChanger["Friday"] = newFridaySchedule;                 
        return { friScheduleChanger }; 
      }
    )
  }
  if(this.state.satslot !== ""){
    let newSaturdaySchedule = template.shift()
    this.setState(prevState => {
        let satScheduleChanger = prevState.workout;  
        satScheduleChanger["Saturday"] = newSaturdaySchedule;                  
        return { satScheduleChanger }; 
      }
    )
  }
  if(this.state.sunslot !== ""){
    let newSundaySchedule = template.shift()
    this.setState(prevState => {
        let sunScheduleChanger = prevState.workout;  
        sunScheduleChanger["Sunday"] = newSundaySchedule;                 
        return { sunScheduleChanger }; 
      }
    )
  }
  } 

  reset(){
  this.setState({
      isStrength :"",
      isHard : "",
      availableTime : 0,
      monslot: "",
      tueslot: "",
      wedslot: "",
      thuslot: "",
      frislot: "",
      satslot: "",
      sunslot: "",
      workout: 
      {
      "Monday": ["","","","",""],
      "Tuesday": ["","","","",""],
      "Wednesday": ["","","","",""],
      "Thursday": ["","","","",""],
      "Friday": ["","","","",""],
      "Saturday": ["","","","",""],
      "Sunday": ["","","","",""]
    }
    })

    document.getElementById("strength").checked = false
    document.getElementById("cardio").checked = false
    document.getElementById("hard").checked = false
    document.getElementById("easy").checked = false
    document.getElementById("mon").checked = false
    document.getElementById("tue").checked = false
    document.getElementById("wed").checked = false
    document.getElementById("thu").checked = false
    document.getElementById("fri").checked = false
    document.getElementById("sat").checked = false
    document.getElementById("sun").checked = false
    document.getElementById("30mins").checked = false
    document.getElementById("45mins").checked = false
    document.getElementById("60mins").checked = false
    document.getElementById("75mins").checked = false

  }

    render() {
        return (
          <div id="mainpage">
          <div id="generator">
          <div id="strengthquestion">
            <h1>Focus</h1>
<input type="radio" id="strength" value="Strength" name="strengthorcardio"
onChange={this.handleChangeStrength}></input>Strength
            <br></br>
<input type="radio" id="cardio" value="Cardio" name="strengthorcardio"
onChange={this.handleChangeStrength}></input>Cardio
          </div>
            <br></br>
            <div id="difficultyquestion">
            <h1>Hardness</h1>
<input type="radio" id="hard" value="Hard" name="difficulty"
onChange={this.handleChangeDifficulty}></input>Hard
            <br></br>
<input type="radio" id="easy" value="Easy" name="difficulty"
onChange={this.handleChangeDifficulty}></input>Easy
          </div>
            <br></br>
            <div id="dayquestion">
            <h1>Training Days</h1>
<input type="checkbox" id="mon" value={["Monday"]} name="days"
onChange={this.handleChangeMon}></input>Monday
<br></br>
<input type="checkbox" id="tue" value={["Tuesday"]} name="days"
onChange={this.handleChangeTue}></input>Tuesday
<br></br>
<input type="checkbox" id="wed" value={["Wednesday"]} name="days"
onChange={this.handleChangeWed}></input>Wednesday
<br></br>
<input type="checkbox" id="thu" value={["Thursday"]} name="days"
onChange={this.handleChangeThu}></input>Thursday
<br></br>
<input type="checkbox" id="fri" value={["Friday"]} name="days"
onChange={this.handleChangeFri}></input>Friday
<br></br>
<input type="checkbox" id="sat" value={["Saturday"]} name="days"
onChange={this.handleChangeSat}></input>Saturday
<br></br>
<input type="checkbox" id="sun" value={["Sunday"]} name="days"
onChange={this.handleChangeSun}></input>Sunday
          </div>
            <br></br>
            <div id="availabletimequestion">
            <h1>Session Length</h1>
<input type="radio" id="30mins" value="is30mins" name="time"
onChange={this.handleChangeTime}></input>30 mins
<br></br>
<input type="radio" id="45mins" value="is45mins" name="time"
onChange={this.handleChangeTime}></input>45 mins
<br></br>
<input type="radio" id="60mins" value="is60mins" name="time"
onChange={this.handleChangeTime}></input>60 mins
<br></br>
<input type="radio" id="75mins" value="is75mins" name="time"
onChange={this.handleChangeTime}></input>75 mins
          </div>
          

            <br></br>
            <span>
            <a href="#schedulecontainer"><button onClick={this.generate}>Generate</button>
            </a>
              <button onClick={this.reset}>Reset</button>
              </span>
   </div>
            <br></br>
            <br></br>
            <div id="motivation"><p id="message">لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِٱللَّٰهِ</p></div>
            
<div id="schedulecontainer">
<div id="monslot1"><p>{`${this.state.monslot}`=="Monday"?`${this.state.monslot}`:"Monday"}</p></div>
<div id="monslot2"><p>{`${this.state.workout["Monday"][0][0]}`=="undefined"?"":`${this.state.workout["Monday"][0][0]}`}</p></div>
<div id="monslot3"><p>{`${this.state.workout["Monday"][1][0]}`=="undefined"?"":`${this.state.workout["Monday"][1][0]}`}</p></div>
<div id="monslot4"><p>{`${this.state.workout["Monday"][2][0]}`=="undefined"?"":`${this.state.workout["Monday"][2][0]}`}</p></div>
<div id="monslot5"><p>{`${this.state.workout["Monday"][3][0]}`=="undefined"?"":`${this.state.workout["Monday"][3][0]}`}</p></div>
<div id="monslot6"><p>{`${this.state.workout["Monday"][4][0]}`=="undefined"?"":`${this.state.workout["Monday"][4][0]}`}</p></div>
<div id="monslot2repscheme"><p>{`${this.state.workout["Monday"][0][1]}`=="undefined"?"":`${this.state.workout["Monday"][0][1]}`}</p></div>
<div id="monslot3repscheme"><p>{`${this.state.workout["Monday"][1][1]}`=="undefined"?"":`${this.state.workout["Monday"][1][1]}`}</p></div>
<div id="monslot4repscheme"><p>{`${this.state.workout["Monday"][2][1]}`=="undefined"?"":`${this.state.workout["Monday"][2][1]}`}</p></div>
<div id="monslot5repscheme"><p>{`${this.state.workout["Monday"][3][1]}`=="undefined"?"":`${this.state.workout["Monday"][3][1]}`}</p></div>
<div id="monslot6repscheme"><p>{`${this.state.workout["Monday"][4][1]}`=="undefined"?"":`${this.state.workout["Monday"][4][1]}`}</p></div>
{/* make one for each slot and make css selectors and conditionally render this like the above
<img id="monslot2stickman" src={`./${this.state.workout["Monday"][0][0]}.png`}></img>*/
} 

<div id="tueslot1"><p>{`${this.state.tueslot}`=="Tuesday"?`${this.state.tueslot}`:"Tuesday"}</p></div>
<div id="tueslot2"><p>{`${this.state.workout["Tuesday"][0][0]}`=="undefined"?"":`${this.state.workout["Tuesday"][0][0]}`}</p></div>
<div id="tueslot3"><p>{`${this.state.workout["Tuesday"][1][0]}`=="undefined"?"":`${this.state.workout["Tuesday"][1][0]}`}</p></div>
<div id="tueslot4"><p>{`${this.state.workout["Tuesday"][2][0]}`=="undefined"?"":`${this.state.workout["Tuesday"][2][0]}`}</p></div>
<div id="tueslot5"><p>{`${this.state.workout["Tuesday"][3][0]}`=="undefined"?"":`${this.state.workout["Tuesday"][3][0]}`}</p></div>
<div id="tueslot6"><p>{`${this.state.workout["Tuesday"][4][0]}`=="undefined"?"":`${this.state.workout["Tuesday"][4][0]}`}</p></div>
<div id="tueslot2repscheme"><p>{`${this.state.workout["Tuesday"][0][1]}`=="undefined"?"":`${this.state.workout["Tuesday"][0][1]}`}</p></div>
<div id="tueslot3repscheme"><p>{`${this.state.workout["Tuesday"][1][1]}`=="undefined"?"":`${this.state.workout["Tuesday"][1][1]}`}</p></div>
<div id="tueslot4repscheme"><p>{`${this.state.workout["Tuesday"][2][1]}`=="undefined"?"":`${this.state.workout["Tuesday"][2][1]}`}</p></div>
<div id="tueslot5repscheme"><p>{`${this.state.workout["Tuesday"][3][1]}`=="undefined"?"":`${this.state.workout["Tuesday"][3][1]}`}</p></div>
<div id="tueslot6repscheme"><p>{`${this.state.workout["Tuesday"][4][1]}`=="undefined"?"":`${this.state.workout["Tuesday"][4][1]}`}</p></div>

<div id="wedslot1"><p>{`${this.state.wedslot}`=="Wednesday"?`${this.state.wedslot}`:"Wednesday"}</p></div>
<div id="wedslot2"><p>{`${this.state.workout["Wednesday"][0][0]}`=="undefined"?"":`${this.state.workout["Wednesday"][0][0]}`}</p></div>
<div id="wedslot3"><p>{`${this.state.workout["Wednesday"][1][0]}`=="undefined"?"":`${this.state.workout["Wednesday"][1][0]}`}</p></div>
<div id="wedslot4"><p>{`${this.state.workout["Wednesday"][2][0]}`=="undefined"?"":`${this.state.workout["Wednesday"][2][0]}`}</p></div>
<div id="wedslot5"><p>{`${this.state.workout["Wednesday"][3][0]}`=="undefined"?"":`${this.state.workout["Wednesday"][3][0]}`}</p></div>
<div id="wedslot6"><p>{`${this.state.workout["Wednesday"][4][0]}`=="undefined"?"":`${this.state.workout["Wednesday"][4][0]}`}</p></div>
<div id="wedslot2repscheme"><p>{`${this.state.workout["Wednesday"][0][1]}`=="undefined"?"":`${this.state.workout["Wednesday"][0][1]}`}</p></div>
<div id="wedslot3repscheme"><p>{`${this.state.workout["Wednesday"][1][1]}`=="undefined"?"":`${this.state.workout["Wednesday"][1][1]}`}</p></div>
<div id="wedslot4repscheme"><p>{`${this.state.workout["Wednesday"][2][1]}`=="undefined"?"":`${this.state.workout["Wednesday"][2][1]}`}</p></div>
<div id="wedslot5repscheme"><p>{`${this.state.workout["Wednesday"][3][1]}`=="undefined"?"":`${this.state.workout["Wednesday"][3][1]}`}</p></div>
<div id="wedslot6repscheme"><p>{`${this.state.workout["Wednesday"][4][1]}`=="undefined"?"":`${this.state.workout["Wednesday"][4][1]}`}</p></div>

<div id="thuslot1"><p>{`${this.state.thuslot}`=="Thursday"?`${this.state.thuslot}`:"Thursday"}</p></div>
<div id="thuslot2"><p>{`${this.state.workout["Thursday"][0][0]}`=="undefined"?"":`${this.state.workout["Thursday"][0][0]}`}</p></div>
<div id="thuslot3"><p>{`${this.state.workout["Thursday"][1][0]}`=="undefined"?"":`${this.state.workout["Thursday"][1][0]}`}</p></div>
<div id="thuslot4"><p>{`${this.state.workout["Thursday"][2][0]}`=="undefined"?"":`${this.state.workout["Thursday"][2][0]}`}</p></div>
<div id="thuslot5"><p>{`${this.state.workout["Thursday"][3][0]}`=="undefined"?"":`${this.state.workout["Thursday"][3][0]}`}</p></div>
<div id="thuslot6"><p>{`${this.state.workout["Thursday"][4][0]}`=="undefined"?"":`${this.state.workout["Thursday"][4][0]}`}</p></div>
<div id="thuslot2repscheme"><p>{`${this.state.workout["Thursday"][0][1]}`=="undefined"?"":`${this.state.workout["Thursday"][0][1]}`}</p></div>
<div id="thuslot3repscheme"><p>{`${this.state.workout["Thursday"][1][1]}`=="undefined"?"":`${this.state.workout["Thursday"][1][1]}`}</p></div>
<div id="thuslot4repscheme"><p>{`${this.state.workout["Thursday"][2][1]}`=="undefined"?"":`${this.state.workout["Thursday"][2][1]}`}</p></div>
<div id="thuslot5repscheme"><p>{`${this.state.workout["Thursday"][3][1]}`=="undefined"?"":`${this.state.workout["Thursday"][3][1]}`}</p></div>
<div id="thuslot6repscheme"><p>{`${this.state.workout["Thursday"][4][1]}`=="undefined"?"":`${this.state.workout["Thursday"][4][1]}`}</p></div>

<div id="frislot1"><p>{`${this.state.frislot}`=="Friday"?`${this.state.frislot}`:"Friday"}</p></div>
<div id="frislot2"><p>{`${this.state.workout["Friday"][0][0]}`=="undefined"?"":`${this.state.workout["Friday"][0][0]}`}</p></div>
<div id="frislot3"><p>{`${this.state.workout["Friday"][1][0]}`=="undefined"?"":`${this.state.workout["Friday"][1][0]}`}</p></div>
<div id="frislot4"><p>{`${this.state.workout["Friday"][2][0]}`=="undefined"?"":`${this.state.workout["Friday"][2][0]}`}</p></div>
<div id="frislot5"><p>{`${this.state.workout["Friday"][3][0]}`=="undefined"?"":`${this.state.workout["Friday"][3][0]}`}</p></div>
<div id="frislot6"><p>{`${this.state.workout["Friday"][4][0]}`=="undefined"?"":`${this.state.workout["Friday"][4][0]}`}</p></div>
<div id="frislot2repscheme"><p>{`${this.state.workout["Friday"][0][1]}`=="undefined"?"":`${this.state.workout["Friday"][0][1]}`}</p></div>
<div id="frislot3repscheme"><p>{`${this.state.workout["Friday"][1][1]}`=="undefined"?"":`${this.state.workout["Friday"][1][1]}`}</p></div>
<div id="frislot4repscheme"><p>{`${this.state.workout["Friday"][2][1]}`=="undefined"?"":`${this.state.workout["Friday"][2][1]}`}</p></div>
<div id="frislot5repscheme"><p>{`${this.state.workout["Friday"][3][1]}`=="undefined"?"":`${this.state.workout["Friday"][3][1]}`}</p></div>
<div id="frislot6repscheme"><p>{`${this.state.workout["Friday"][4][1]}`=="undefined"?"":`${this.state.workout["Friday"][4][1]}`}</p></div>

<div id="satslot1"><p>{`${this.state.satslot}`=="Saturday"?`${this.state.satslot}`:"Saturday"}</p></div>
<div id="satslot2"><p>{`${this.state.workout["Saturday"][0][0]}`=="undefined"?"":`${this.state.workout["Saturday"][0][0]}`}</p></div>
<div id="satslot3"><p>{`${this.state.workout["Saturday"][1][0]}`=="undefined"?"":`${this.state.workout["Saturday"][1][0]}`}</p></div>
<div id="satslot4"><p>{`${this.state.workout["Saturday"][2][0]}`=="undefined"?"":`${this.state.workout["Saturday"][2][0]}`}</p></div>
<div id="satslot5"><p>{`${this.state.workout["Saturday"][3][0]}`=="undefined"?"":`${this.state.workout["Saturday"][3][0]}`}</p></div>
<div id="satslot6"><p>{`${this.state.workout["Saturday"][4][0]}`=="undefined"?"":`${this.state.workout["Saturday"][4][0]}`}</p></div>
<div id="satslot2repscheme"><p>{`${this.state.workout["Saturday"][0][1]}`=="undefined"?"":`${this.state.workout["Saturday"][0][1]}`}</p></div>
<div id="satslot3repscheme"><p>{`${this.state.workout["Saturday"][1][1]}`=="undefined"?"":`${this.state.workout["Saturday"][1][1]}`}</p></div>
<div id="satslot4repscheme"><p>{`${this.state.workout["Saturday"][2][1]}`=="undefined"?"":`${this.state.workout["Saturday"][2][1]}`}</p></div>
<div id="satslot5repscheme"><p>{`${this.state.workout["Saturday"][3][1]}`=="undefined"?"":`${this.state.workout["Saturday"][3][1]}`}</p></div>
<div id="satslot6repscheme"><p>{`${this.state.workout["Saturday"][4][1]}`=="undefined"?"":`${this.state.workout["Saturday"][4][1]}`}</p></div>

<div id="sunslot1"><p>{`${this.state.sunslot}`=="Sunday"?`${this.state.sunslot}`:"Sunday"}</p></div>
<div id="sunslot2"><p>{`${this.state.workout["Sunday"][0][0]}`=="undefined"?"":`${this.state.workout["Sunday"][0][0]}`}</p></div>
<div id="sunslot3"><p>{`${this.state.workout["Sunday"][1][0]}`=="undefined"?"":`${this.state.workout["Sunday"][1][0]}`}</p></div>
<div id="sunslot4"><p>{`${this.state.workout["Sunday"][2][0]}`=="undefined"?"":`${this.state.workout["Sunday"][2][0]}`}</p></div>
<div id="sunslot5"><p>{`${this.state.workout["Sunday"][3][0]}`=="undefined"?"":`${this.state.workout["Sunday"][3][0]}`}</p></div>
<div id="sunslot6"><p>{`${this.state.workout["Sunday"][4][0]}`=="undefined"?"":`${this.state.workout["Sunday"][4][0]}`}</p></div>
<div id="sunslot2repscheme"><p>{`${this.state.workout["Sunday"][0][1]}`=="undefined"?"":`${this.state.workout["Sunday"][0][1]}`}</p></div>
<div id="sunslot3repscheme"><p>{`${this.state.workout["Sunday"][1][1]}`=="undefined"?"":`${this.state.workout["Sunday"][1][1]}`}</p></div>
<div id="sunslot4repscheme"><p>{`${this.state.workout["Sunday"][2][1]}`=="undefined"?"":`${this.state.workout["Sunday"][2][1]}`}</p></div>
<div id="sunslot5repscheme"><p>{`${this.state.workout["Sunday"][3][1]}`=="undefined"?"":`${this.state.workout["Sunday"][3][1]}`}</p></div>
<div id="sunslot6repscheme"><p>{`${this.state.workout["Sunday"][4][1]}`=="undefined"?"":`${this.state.workout["Sunday"][4][1]}`}</p></div>
{/*<img id="stickman" src="./stickman.png"></img>*/}
</div>     
          </div>
);
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
