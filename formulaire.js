export default class Formulaire {
    //definition du constructeur
 
 
    constructor(id) {
        this.id = id;
        this.formulaireHtml = document.getElementById(this.id);
        this.formdata = new FormData(this.formulaireHtml);
        this.answers = new Array();
    }
 
 
    //mÃ©thode pour rÃ©cupÃ©rer le div parent
 
 
    getDiv(id) {
        return document.getElementById(id).parentNode;
    }
 
 
   //mÃ©thode pour rÃ©cupÃ©rer un Ã©lÃ©ment
 
 
   getElement(id) {
    return document.getElementById(id);
   }
  
   //mÃ©thode permettant de masquer un Ã©lÃ©ment sans animation
 
 
   maskChamp(id) {
    this.getDiv(id).classList.add('masque');
    this.getElement(id).required = false;
   }
 
 
   //mÃ©thode permettant d'afficher le champ
 
 
   showChamp(id) {
    this.getDiv(id).classList.remove('disp');
    this.getDiv(id).classList.add('app');
    this.getElement(id).required = true;
   }
 
 
   //mÃ©thode permettant de masquer le champ avec animation
 
 
   hideChamp(id) {
    this.getDiv(id).classList.remove('app');
    this.getDiv(id).classList.add('disp');
    this.getElement(id).required = false;
   }
 
 
   //mÃ©thode pour savoir si un radio est sÃ©lectionnÃ©
 
 
   isSelected(id, value, action, otherAction) {
    this.formdata = new Formdata(this.formulaireHtml);
    if(this.formdata.get(id) == value) {
        action();
    }
    else {
        otherAction()
    }
   }
 
 
    //mÃ©thode pour rÃ©cupÃ©rer les Ã©lÃ©ments de chaque input (et les ajouter Ã  answer)
 
 
   getAnswers() {
    this.formdata = new this.formdata(this.formulaireHtml);
    this.formdata.forEach(
        (value, key) => {
            if(value != "" && value != "on"){
                this.answers.push([key, value]);
            }
        }
    )
    return this.answers
  }
 
 
  //MÃ©thode pour afficher dans un alert les rÃ©sultats
 
 
  affAnswers() {
    let chaine = "Raicapitulatif\n\n";
    for (let ligne of this.getAnswers()){
        chaine += '${ligne [0]} : ${ligne[1]}\n'
    }
    alert(chaine);
  }
 } 