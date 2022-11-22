class WorkoutGenerator extends React.Component {
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

let template = []

let availableDays =
document.getElementById("mon").checked+
document.getElementById("tue").checked+
document.getElementById("wed").checked+
document.getElementById("thu").checked+
document.getElementById("fri").checked+
document.getElementById("sat").checked+
document.getElementById("sun").checked 

    let strengthExercises = {
      Strength: {
        Hard:{
          Push: {
            0:	["Bench Press",	"Incline Bench Press"	,	"Push Up"],
            1:	["Overhead Press"	,	"Rear Delt Fly"],				
            2:	["Skull Crusher", "Dip"],								
            3:	["Pause Overhead Press"],								
            4:	["Pause Push Up"]								            
          },
          Pull: {
            0:	["Weighted Pull Up",	"Weighted Chin Up",	"Pull Up",	"Chin Up"],
            1:	["Bent Over Row",	"Front Lever"],							
            2:	["Bicep Curl",	"Preacher Curl"],							
            3:	["Pause Pull Up",	"Pause Chin Up"],							
            4:	["Chin Up Hold"]											
            
          },
          Legs: {
            0:	["Back Squat"],				
            1:	["Deadlift",	"Lunge"],
            2:	["Pause Squat"],				
            3:	["Front Squat"],				
            4:	["ATG Squat"]				            
          },
          Abs: {
            0:	["Leg Raise",	"Crunch",	"Dead Bug"],
            1:	["Plank",	"Superman Hold"],				
            2:	["Russian Twist"],								
            3:	["Front Lever Hold"],								
            4:	["V Up"]								
            
          }
            },
            Easy:{
              Push: {
                0:	["Push Up",	"Incline Bench Press"],
                1:	["Overhead Press"	,	"Pike Push Up"],				
                2:	["Bench Dip"],								
                3:	["Handstand Hold"],								
                4:	["Knee Push Up"]								            
              },
              Pull: {
                0:	["Pull Up",	"Chin Up"],
                1:	["Aussie Pull Up",	"Aussie Chin Up"],							
                2:	["Bicep Curl"],							
                3:	["Pull Up Hold"],							
                4:	["Chin Up Hold"]											
                
              },
              Legs: {
                0:	["Back Squat"],				
                1:	["Lunge"],
                2:	["Pause Squat"],				
                3:	["Jump Squat"],				
                4:	["ATG Squat"]				            
              },
              Abs: {
                0:	["Knee Raise",	"Crunch"],
                1:	["Plank"],				
                2:	["Russian Twist"],								
                3:	["Dead Bug"],								
                4:	["Superman Hold"]								
                
              }
                }
      }
  }

let strengthMovements = {
  0: "Push",
  1: "Pull",
  2: "Legs",
  3: "Abs"
}

if(this.state.isStrength=="Strength"){
  
  for(let i = 0;i<availableDays;i++){
    
    switch(this.state.availableTime){
    
      case "is30mins": 
      template.push([
        strengthExercises[this.state.isStrength][this.state.isHard][(i*2)<Object.keys(strengthMovements).length?strengthMovements[(i*2)]:strengthMovements[(i*2)%Object.keys(strengthMovements).length]][
          "0"][
            i<strengthExercises[this.state.isStrength][this.state.isHard][(i*2)<Object.keys(strengthMovements).length?strengthMovements[(i*2)]:strengthMovements[(i*2)%Object.keys(strengthMovements).length]][
              "0"].length?
            i:
            i%strengthExercises[this.state.isStrength][this.state.isHard][(i*2)<Object.keys(strengthMovements).length?strengthMovements[(i*2)]:strengthMovements[(i*2)%Object.keys(strengthMovements).length]][
              "0"].length
          ],
        strengthExercises[this.state.isStrength][this.state.isHard][((i*2)+1)<Object.keys(strengthMovements).length?strengthMovements[(i*2)+1]:strengthMovements[((i*2)+1)%Object.keys(strengthMovements).length]][
          "1"][
            (i+1)<strengthExercises[this.state.isStrength][this.state.isHard][((i*2)+1)<Object.keys(strengthMovements).length?strengthMovements[(i*2)+1]:strengthMovements[((i*2)+1)%Object.keys(strengthMovements).length]][
              "1"].length?
            (i+1):
            (i+1)%strengthExercises[this.state.isStrength][this.state.isHard][((i*2)+1)<Object.keys(strengthMovements).length?strengthMovements[(i*2)+1]:strengthMovements[((i*2)+1)%Object.keys(strengthMovements).length]][
              "1"].length
          ],
        "","",""]);
      break;
      case "is45mins":
      template.push([
        strengthExercises[this.state.isStrength][this.state.isHard][(i*3)<Object.keys(strengthMovements).length?strengthMovements[(i*3)]:strengthMovements[(i*3)%Object.keys(strengthMovements).length]][
          "0"][
            i<strengthExercises[this.state.isStrength][this.state.isHard][(i*3)<Object.keys(strengthMovements).length?strengthMovements[(i*3)]:strengthMovements[(i*3)%Object.keys(strengthMovements).length]][
              "0"].length?
            i:
            i%strengthExercises[this.state.isStrength][this.state.isHard][(i*3)<Object.keys(strengthMovements).length?strengthMovements[(i*3)]:strengthMovements[(i*3)%Object.keys(strengthMovements).length]][
              "0"]
          ],
        strengthExercises[this.state.isStrength][this.state.isHard][((i*3)+1)<Object.keys(strengthMovements).length?strengthMovements[(i*3)+1]:strengthMovements[((i*3)+1)%Object.keys(strengthMovements).length]][
          "1"][
            (i+1)<strengthExercises[this.state.isStrength][this.state.isHard][((i*3)+1)<Object.keys(strengthMovements).length?strengthMovements[(i*3)+1]:strengthMovements[((i*3)+1)%Object.keys(strengthMovements).length]][
              "1"].length?
            (i+1):
            (i+1)%strengthExercises[this.state.isStrength][this.state.isHard][((i*3)+1)<Object.keys(strengthMovements).length?strengthMovements[(i*3)+1]:strengthMovements[((i*3)+1)%Object.keys(strengthMovements).length]][
              "1"].length
          ],
        strengthExercises[this.state.isStrength][this.state.isHard][((i*3)+2)<Object.keys(strengthMovements).length?strengthMovements[(i*3)+2]:strengthMovements[((i*3)+2)%Object.keys(strengthMovements).length]][
          "2"][
            (i+2)<strengthExercises[this.state.isStrength][this.state.isHard][((i*3)+2)<Object.keys(strengthMovements).length?strengthMovements[(i*3)+2]:strengthMovements[((i*3)+2)%Object.keys(strengthMovements).length]][
              "2"].length?
            (i+2):
            (i+2)%strengthExercises[this.state.isStrength][this.state.isHard][((i*3)+2)<Object.keys(strengthMovements).length?strengthMovements[(i*3)+2]:strengthMovements[((i*3)+2)%Object.keys(strengthMovements).length]][
              "2"].length
          ],
        "",""]);
      break;
      case "is60mins":  
      template.push([
        strengthExercises[this.state.isStrength][this.state.isHard][(i*4)<Object.keys(strengthMovements).length?strengthMovements[(i*4)]:strengthMovements[(i*4)%Object.keys(strengthMovements).length]][
          "0"][
            i<strengthExercises[this.state.isStrength][this.state.isHard][(i*4)<Object.keys(strengthMovements).length?strengthMovements[(i*4)]:strengthMovements[(i*4)%Object.keys(strengthMovements).length]][
              "0"].length?
            i:
            i%strengthExercises[this.state.isStrength][this.state.isHard][(i*4)<Object.keys(strengthMovements).length?strengthMovements[(i*4)]:strengthMovements[(i*4)%Object.keys(strengthMovements).length]][
              "0"].length
          ],
        strengthExercises[this.state.isStrength][this.state.isHard][((i*4)+1)<Object.keys(strengthMovements).length?strengthMovements[(i*4)+1]:strengthMovements[((i*4)+1)%Object.keys(strengthMovements).length]][
          "1"][
            (i+1)<strengthExercises[this.state.isStrength][this.state.isHard][((i*4)+1)<Object.keys(strengthMovements).length?strengthMovements[(i*4)+1]:strengthMovements[((i*4)+1)%Object.keys(strengthMovements).length]][
              "1"].length?
            (i+1):
            (i+1)%strengthExercises[this.state.isStrength][this.state.isHard][((i*4)+1)<Object.keys(strengthMovements).length?strengthMovements[(i*4)+1]:strengthMovements[((i*4)+1)%Object.keys(strengthMovements).length]][
              "1"].length
          ],
        strengthExercises[this.state.isStrength][this.state.isHard][((i*4)+2)<Object.keys(strengthMovements).length?strengthMovements[(i*4)+2]:strengthMovements[((i*4)+2)%Object.keys(strengthMovements).length]][
          "2"][
            (i+2)<strengthExercises[this.state.isStrength][this.state.isHard][((i*4)+2)<Object.keys(strengthMovements).length?strengthMovements[(i*4)+2]:strengthMovements[((i*4)+2)%Object.keys(strengthMovements).length]][
              "2"].length?
            (i+2):
            (i+2)%strengthExercises[this.state.isStrength][this.state.isHard][((i*4)+2)<Object.keys(strengthMovements).length?strengthMovements[(i*4)+2]:strengthMovements[((i*4)+2)%Object.keys(strengthMovements).length]][
              "2"].length
          ],
        strengthExercises[this.state.isStrength][this.state.isHard][((i*4)+3)<Object.keys(strengthMovements).length?strengthMovements[(i*4)+3]:strengthMovements[((i*4)+3)%Object.keys(strengthMovements).length]][
          "3"][
            (i+3)<strengthExercises[this.state.isStrength][this.state.isHard][((i*4)+3)<Object.keys(strengthMovements).length?strengthMovements[(i*4)+3]:strengthMovements[((i*4)+3)%Object.keys(strengthMovements).length]][
              "3"].length?
            (i+3):
            (i+3)%strengthExercises[this.state.isStrength][this.state.isHard][((i*4)+3)<Object.keys(strengthMovements).length?strengthMovements[(i*4)+3]:strengthMovements[((i*4)+3)%Object.keys(strengthMovements).length]][
              "3"].length
          ],
        ""]);
      break;
      case "is75mins":  
      template.push([
        strengthExercises[this.state.isStrength][this.state.isHard][(i*5)<Object.keys(strengthMovements).length?strengthMovements[(i*5)]:strengthMovements[(i*5)%Object.keys(strengthMovements).length]][
          "0"][
            i<strengthExercises[this.state.isStrength][this.state.isHard][(i*5)<Object.keys(strengthMovements).length?strengthMovements[(i*5)]:strengthMovements[(i*5)%Object.keys(strengthMovements).length]][
              "0"].length?
            i:
            i%strengthExercises[this.state.isStrength][this.state.isHard][(i*5)<Object.keys(strengthMovements).length?strengthMovements[(i*5)]:strengthMovements[(i*5)%Object.keys(strengthMovements).length]][
              "0"].length
          ],
        strengthExercises[this.state.isStrength][this.state.isHard][((i*5)+1)<Object.keys(strengthMovements).length?strengthMovements[(i*5)+1]:strengthMovements[((i*5)+1)%Object.keys(strengthMovements).length]][
          "1"][
            (i+1)<strengthExercises[this.state.isStrength][this.state.isHard][((i*5)+1)<Object.keys(strengthMovements).length?strengthMovements[(i*5)+1]:strengthMovements[((i*5)+1)%Object.keys(strengthMovements).length]][
              "1"].length?
            (i+1):
            (i+1)%strengthExercises[this.state.isStrength][this.state.isHard][((i*5)+1)<Object.keys(strengthMovements).length?strengthMovements[(i*5)+1]:strengthMovements[((i*5)+1)%Object.keys(strengthMovements).length]][
              "1"].length
          ],
        strengthExercises[this.state.isStrength][this.state.isHard][((i*5)+2)<Object.keys(strengthMovements).length?strengthMovements[(i*5)+2]:strengthMovements[((i*5)+2)%Object.keys(strengthMovements).length]][
          "2"][
            (i+2)<strengthExercises[this.state.isStrength][this.state.isHard][((i*5)+2)<Object.keys(strengthMovements).length?strengthMovements[(i*5)+2]:strengthMovements[((i*5)+2)%Object.keys(strengthMovements).length]][
              "2"].length?
            (i+2):
            (i+2)%strengthExercises[this.state.isStrength][this.state.isHard][((i*5)+2)<Object.keys(strengthMovements).length?strengthMovements[(i*5)+2]:strengthMovements[((i*5)+2)%Object.keys(strengthMovements).length]][
              "2"].length
          ],
        strengthExercises[this.state.isStrength][this.state.isHard][((i*5)+3)<Object.keys(strengthMovements).length?strengthMovements[(i*5)+3]:strengthMovements[((i*5)+3)%Object.keys(strengthMovements).length]][
          "3"][
            (i+3)<strengthExercises[this.state.isStrength][this.state.isHard][((i*5)+3)<Object.keys(strengthMovements).length?strengthMovements[(i*5)+3]:strengthMovements[((i*5)+3)%Object.keys(strengthMovements).length]][
              "3"].length?
            (i+3):
            (i+3)%strengthExercises[this.state.isStrength][this.state.isHard][((i*5)+3)<Object.keys(strengthMovements).length?strengthMovements[(i*5)+3]:strengthMovements[((i*5)+3)%Object.keys(strengthMovements).length]][
              "3"].length
          ], 
        strengthExercises[this.state.isStrength][this.state.isHard][((i*5)+4)<Object.keys(strengthMovements).length?strengthMovements[(i*5)+4]:strengthMovements[((i*5)+4)%Object.keys(strengthMovements).length]][
          "4"][
            (i+4)<strengthExercises[this.state.isStrength][this.state.isHard][((i*5)+4)<Object.keys(strengthMovements).length?strengthMovements[(i*5)+4]:strengthMovements[((i*5)+4)%Object.keys(strengthMovements).length]][
              "4"].length?
            (i+4):
            (i+4)%strengthExercises[this.state.isStrength][this.state.isHard][((i*5)+4)<Object.keys(strengthMovements).length?strengthMovements[(i*5)+4]:strengthMovements[((i*5)+4)%Object.keys(strengthMovements).length]][
              "4"].length
          ]
      ]);
      break;
      }} 
    
    
    }

    let cardioExercises = {
      Hard: {
        0: "Run",
        1: "Box",
        2: "Murph"
      },
      Easy: {
        0: "Walk",
        1: "Run"
      }
    }

    if(this.state.isStrength=="Cardio"){
  
      for(let i = 0;i<availableDays;i++){

        template.push([
          cardioExercises[this.state.isHard][i<Object.keys(cardioExercises[this.state.isHard]).length?i:i%Object.keys(cardioExercises[this.state.isHard]).length],
          "","","",""
        ]);

        } 
        
        
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
            <title>Workout Generator</title>
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
<div id="monslot2"><p>{`${this.state.workout["Monday"][0]}`=="undefined"?"":`${this.state.workout["Monday"][0]}`}</p></div>
<div id="monslot3"><p>{`${this.state.workout["Monday"][1]}`=="undefined"?"":`${this.state.workout["Monday"][1]}`}</p></div>
<div id="monslot4"><p>{`${this.state.workout["Monday"][2]}`=="undefined"?"":`${this.state.workout["Monday"][2]}`}</p></div>
<div id="monslot5"><p>{`${this.state.workout["Monday"][3]}`=="undefined"?"":`${this.state.workout["Monday"][3]}`}</p></div>
<div id="monslot6"><p>{`${this.state.workout["Monday"][4]}`=="undefined"?"":`${this.state.workout["Monday"][4]}`}</p></div>

<div id="tueslot1"><p>{`${this.state.tueslot}`=="Tuesday"?`${this.state.tueslot}`:"Tuesday"}</p></div>
<div id="tueslot2"><p>{`${this.state.workout["Tuesday"][0]}`=="undefined"?"":`${this.state.workout["Tuesday"][0]}`}</p></div>
<div id="tueslot3"><p>{`${this.state.workout["Tuesday"][1]}`=="undefined"?"":`${this.state.workout["Tuesday"][1]}`}</p></div>
<div id="tueslot4"><p>{`${this.state.workout["Tuesday"][2]}`=="undefined"?"":`${this.state.workout["Tuesday"][2]}`}</p></div>
<div id="tueslot5"><p>{`${this.state.workout["Tuesday"][3]}`=="undefined"?"":`${this.state.workout["Tuesday"][3]}`}</p></div>
<div id="tueslot6"><p>{`${this.state.workout["Tuesday"][4]}`=="undefined"?"":`${this.state.workout["Tuesday"][4]}`}</p></div>

<div id="wedslot1"><p>{`${this.state.wedslot}`=="Wednesday"?`${this.state.wedslot}`:"Wednesday"}</p></div>
<div id="wedslot2"><p>{`${this.state.workout["Wednesday"][0]}`=="undefined"?"":`${this.state.workout["Wednesday"][0]}`}</p></div>
<div id="wedslot3"><p>{`${this.state.workout["Wednesday"][1]}`=="undefined"?"":`${this.state.workout["Wednesday"][1]}`}</p></div>
<div id="wedslot4"><p>{`${this.state.workout["Wednesday"][2]}`=="undefined"?"":`${this.state.workout["Wednesday"][2]}`}</p></div>
<div id="wedslot5"><p>{`${this.state.workout["Wednesday"][3]}`=="undefined"?"":`${this.state.workout["Wednesday"][3]}`}</p></div>
<div id="wedslot6"><p>{`${this.state.workout["Wednesday"][4]}`=="undefined"?"":`${this.state.workout["Wednesday"][4]}`}</p></div>

<div id="thuslot1"><p>{`${this.state.thuslot}`=="Thursday"?`${this.state.thuslot}`:"Thursday"}</p></div>
<div id="thuslot2"><p>{`${this.state.workout["Thursday"][0]}`=="undefined"?"":`${this.state.workout["Thursday"][0]}`}</p></div>
<div id="thuslot3"><p>{`${this.state.workout["Thursday"][1]}`=="undefined"?"":`${this.state.workout["Thursday"][1]}`}</p></div>
<div id="thuslot4"><p>{`${this.state.workout["Thursday"][2]}`=="undefined"?"":`${this.state.workout["Thursday"][2]}`}</p></div>
<div id="thuslot5"><p>{`${this.state.workout["Thursday"][3]}`=="undefined"?"":`${this.state.workout["Thursday"][3]}`}</p></div>
<div id="thuslot6"><p>{`${this.state.workout["Thursday"][4]}`=="undefined"?"":`${this.state.workout["Thursday"][4]}`}</p></div>

<div id="frislot1"><p>{`${this.state.frislot}`=="Friday"?`${this.state.frislot}`:"Friday"}</p></div>
<div id="frislot2"><p>{`${this.state.workout["Friday"][0]}`=="undefined"?"":`${this.state.workout["Friday"][0]}`}</p></div>
<div id="frislot3"><p>{`${this.state.workout["Friday"][1]}`=="undefined"?"":`${this.state.workout["Friday"][1]}`}</p></div>
<div id="frislot4"><p>{`${this.state.workout["Friday"][2]}`=="undefined"?"":`${this.state.workout["Friday"][2]}`}</p></div>
<div id="frislot5"><p>{`${this.state.workout["Friday"][3]}`=="undefined"?"":`${this.state.workout["Friday"][3]}`}</p></div>
<div id="frislot6"><p>{`${this.state.workout["Friday"][4]}`=="undefined"?"":`${this.state.workout["Friday"][4]}`}</p></div>

<div id="satslot1"><p>{`${this.state.satslot}`=="Saturday"?`${this.state.satslot}`:"Saturday"}</p></div>
<div id="satslot2"><p>{`${this.state.workout["Saturday"][0]}`=="undefined"?"":`${this.state.workout["Saturday"][0]}`}</p></div>
<div id="satslot3"><p>{`${this.state.workout["Saturday"][1]}`=="undefined"?"":`${this.state.workout["Saturday"][1]}`}</p></div>
<div id="satslot4"><p>{`${this.state.workout["Saturday"][2]}`=="undefined"?"":`${this.state.workout["Saturday"][2]}`}</p></div>
<div id="satslot5"><p>{`${this.state.workout["Saturday"][3]}`=="undefined"?"":`${this.state.workout["Saturday"][3]}`}</p></div>
<div id="satslot6"><p>{`${this.state.workout["Saturday"][4]}`=="undefined"?"":`${this.state.workout["Saturday"][4]}`}</p></div>

<div id="sunslot1"><p>{`${this.state.sunslot}`=="Sunday"?`${this.state.sunslot}`:"Sunday"}</p></div>
<div id="sunslot2"><p>{`${this.state.workout["Sunday"][0]}`=="undefined"?"":`${this.state.workout["Sunday"][0]}`}</p></div>
<div id="sunslot3"><p>{`${this.state.workout["Sunday"][1]}`=="undefined"?"":`${this.state.workout["Sunday"][1]}`}</p></div>
<div id="sunslot4"><p>{`${this.state.workout["Sunday"][2]}`=="undefined"?"":`${this.state.workout["Sunday"][2]}`}</p></div>
<div id="sunslot5"><p>{`${this.state.workout["Sunday"][3]}`=="undefined"?"":`${this.state.workout["Sunday"][3]}`}</p></div>
<div id="sunslot6"><p>{`${this.state.workout["Sunday"][4]}`=="undefined"?"":`${this.state.workout["Sunday"][4]}`}</p></div>

</div>      
</div>
);
    }
}

ReactDOM.render(<WorkoutGenerator />, document.getElementById('workout_generator'));
