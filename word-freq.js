"use strict"

var http = require('http');
var fs = require('fs');
var word = require('word-freq');
var S = require('string');

//input: node word-freq.js <file name> %
//output: warning of overused words

fs.readFile(process.argv[2], function(error, data){
   var pageAsString = data.toString();
   var noPunct = S(pageAsString).stripPunctuation().s;
   var noWhiteSpace = S(noPunct).collapseWhitespace().s;
   var wordArray =noWhiteSpace.split(" ");

   //calcuates frequency of each word
   var freq = word.freq(pageAsString, true, true);
  var numWord = wordArray.length;

  var overusedPercentage = 0.01 * process.argv[3];
  //console.log(freq);

  for (var i in freq) {
    if (freq[i]/numWord > overusedPercentage){
          console.log("Warning! You overused the word \"" + i + "\" (" + freq[i] +
        " times in a  " + numWord + " word long document.)");
    }
  }
   //console.log("The word \"" + stringSearch + "\" occurs " +
    //freq[stringSearch] + " times.");
    //console.log(pageAsString.split(" "));
});


