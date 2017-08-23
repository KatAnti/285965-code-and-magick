'use strict';

var setup = document.querySelector('.setup');
var setupSimilar = document.querySelector('.setup-similar');
var NAMES = ['Иван','Хуан Себастьян','Мария','Кристоф','Виктор','Юлия','Люпита','Вашингтон'];
var SURNAMES = ['да Марья','Верон','Мирабелла','Вальц','Онопко','Топольницкая','Нионго','Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)','rgb(241, 43, 107)','rgb(146, 100, 161)','rgb(56, 159, 117)','rgb(215, 210, 55)','rgb(0, 0, 0)'];
var EYES_COLORS = ['black','red','blue','yellow','green'];
var wizardList = [];
var setupSimilarList = document.querySelector('.setup-similar-list')
var fragment = document.createDocumentFragment();
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

setup.classList.remove('hidden');

var generateRandomNumber = function(min, max){
  var random = min - 0.5 + Math.random() * (max - min + 1)
  random = Math.round(random);
  return random;
};

var generateRandomStringValue = function(list){
  var listLength = list.length -1;
  var result = generateRandomNumber(0, listLength);
  var value = list[result];
  return value;
};

var Wizard = function(){
  this.name = generateRandomStringValue(NAMES) + ' ' + generateRandomStringValue(SURNAMES);
  this.coatColor = generateRandomStringValue(COAT_COLORS);
  this.eyesColor = generateRandomStringValue(EYES_COLORS);
};

for(var i = 0; i < 4; i++){
  var wizard = new Wizard();
  wizardList.push(wizard);
}

for(var i = 0; i < wizardList.length; i++){
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizardList[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizardList[i].coatColor;

  fragment.appendChild(wizardElement);
};

setupSimilarList.appendChild(fragment);

setupSimilar.classList.remove('hidden');