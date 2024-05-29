const data = new Date("2028-04-19 05:30:22");
let diaSemana = data.getDay();

switch (diaSemana) {
    case 0:
        diaSemana = `Domingo`;      
        break         
    case 1:
        diaSemana = `Segunda-Feira`; 
        break   
    case 2:
        diaSemana =  `Terça-Feira`;      
        break            
    case 3:
        diaSemana = `Quarta-Feira`; 
        break   
    case 4:
        diaSemana = `Quinta-Feira`; 
        break                 
    case 5:
        diaSemana = `Sexta-Feira`; 
        break   
    case 6:
        diaSemana = `Sábado`; 
        break   
    default:
        diaSemana = `Dia invalido`
        break;
}

console.log(diaSemana);