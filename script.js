function play(id){
    let sound = document.getElementById(id);
    sound.currentTime = 0;
    sound.play();
  }
  
  function display(text){
    document.getElementById('display').innerHTML = text;
  }
  
  function executaToque(letra){
    switch (letra) {
        case 'q':
        case 'Q':
          display('Heater 1');
          play("Q");
          break;
        case 'w':
        case 'W':
          display('Heater 2');
          play("W");
          break;
        case 'e':
        case 'E':
          display('Heater 3');
          play("E");
          break;
        case 'a':
        case 'A':
          display('Heater 4');
          play("A");
          break;
        case 's':
        case 'S':
          display('Clap');
          play("S");
          break;
        case 'd':
        case 'D':
          display('Open HH');
          play("D");
          break;
        case 'z':
        case 'Z':
          display("Kick n' Hat");
          play("Z");
          break;
        case 'x':
        case 'X':
          display('Kick');
          play("X");
          break;
        case 'c':
        case 'C':
          display('Closed HH');
          play("C");
          break;
        default:
          break;
      }
  }
  
  window.addEventListener(
    "keydown",
    (event) => {
      executaToque(event.key);
    }
  );
  
  window.focus();
  