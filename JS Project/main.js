function StateConstructor(name, population, votes, leanings, orcPop, humanPop, elfPop, dwarfPop, goblinPop, wizPop, lichPop, feyPop){
  if (!(this instanceof StateConstructor)){
    return new StateConstructor(name, population, votes, leanings, orcPop, humanPop, elfPop, dwarfPop, goblinPop, wizPop, lichPop, feyPop);
  }

  this.name = name || "state";
  this.population = population || 0;
  this.votes = votes || 0;
  this.leanings = leanings || 0;
  this.orcPop = orcPop || 0;
  this.humanPop = humanPop || 0;
  this.elfPop = elfPop || 0;
  this.dwarfPop = dwarfPop || 0;
  this.goblinPop = goblinPop || 0;
  this.wizPop = wizPop || 0;
  this.lichPop = lichPop || 0;
  this.feyPop = feyPop || 0;


StateConstructor.prototype.increasePop = function(){
    this.population += [Math.floor(Math.random()*10000)];
    console.log("population boom!", this.population);
};

StateConstructor.prototype.decreasePop = function(){
    if (this.population > 0);
    this.population -= [Math.floor(Math.random()*10000)];
    console.log('population decrease!', this.population);
};

StateConstructor.prototype.moreMysto = function(){
  console.log(this.distanceTraveled);
  return this;
};

StateConstructor.prototype.lessMysto = function(){
  this.distanceTraveled += this.speed;
  console.log(this.distanceTraveled);
  return this;
};

StateConstructor.prototype.moreElder = function(){
  this.distanceTraveled += this.speed;
  console.log(this.distanceTraveled);
  return this;
};
StateConstructor.prototype.lessElder = function(){
    this.distanceTraveled += this.speed;
  console.log(this.distanceTraveled);
  return this;
};

StateConstructor.prototype.marginOfError = function(){
    pass;
};
}
var Eels = new StateConstructor('Eels', 180000, 4, 50, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 1000);
console.log(Eels.elfPop);
console.log(Eels);
Eels.increasePop();
console.log(Eels.population);
Eels.increasePop();
Eels.decreasePop();