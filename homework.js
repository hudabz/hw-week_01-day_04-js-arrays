
//# 1 WORK
let sum =0; 
for (let i =0 ; i <= 10; i++){
    sum += i; 
}  
console.log(sum); 
////////////////////////////////////////////

//# 2 WORK
let sum=0; 
for (let i =0 ; i <= 10; i++){
    if (i % 2 === 0 ){
    sum += i; 
    }
}  
console.log(sum);   
///////////////////////////////////////////

//# 3 WORK
const avg = function(){ 
    let avrage=0;
 const arr = [3, 5, 7, 9]; 
 for (let i=0; i <arr.length; i++) {
    avrage+= arr[i]; 
 }
    console.log(avrage/ arr.length);
} 
////////////////////////////////////////

//# 4 WORK
const word = ["Huda", "Sarah", "Norah", "Farah"]; 
   word.reverse();  
/////////////////////////////////////////

//# 5 WORK
const emotion = ['laough', 'sad', 'love', 'angry'] 
   emotion.join('-'); 
////////////////////////////////////////////


//# 6 ALMOST WORK
let num ;
const countDown = function (num) {
  const count = [1, 2, 3]; 
      // for (let i=0; i< count.length; i++){ 
       // count.join(count.reverse());
        console.log(count);
        console.log(count.reverse());
      // } 
       
} 
countDown(); 
/////////////////////////////////////////

//# 7 ALMOST WORK

const findA = function () {
 const wordWithA = ["cat", "dog", "rabbit", "frog"]; 
   for (let i = 0; i < wordWithA.length; i++) {
      if (wordWithA[i].search("a") != -1){
          return (wordWithA[i]);
      } else {
         return ('The word does not have an A letter.');
      } 
   }

} 
findA();
////////////////////////////////////////

//# 8  ALMOST WORK (PRINTING THE FIRST INDEX ONLY)
let letter; 
const findLetter = function (letter) {
 const wordWithA = ['cat', 'dog', 'rabbit', 'frog']; 
   for (let i = 0; i < wordWithA.length; i++) {
      if (wordWithA[i].search(letter) != -1){
          return (wordWithA[i]);
      } else {
        return ('There is no word have this letter.');
     }  
   }

} 
/////////////////////////////////////////////

//# 9 ALMOST WORK (PRINTING THE LENGTH OF THE LONGEST WORD NOT THE WORD IT SELF)
const findLongWord = function(sent) {

  let wordSplit =sent.split(' ');
   let LongestWord =0; 
   for (let i =0; i <wordSplit.length; i++){
      if (wordSplit[i].length > LongestWord) {
          LongestWord =wordSplit[i];
      }
   } 
   return LongestWord ; 
}
findLongWord ("The cat in the house"); 
/////////////////////////////////////////////////


//# 10 ALMOST NOT WORK (PRINTING THE FIRST INDEX ONLY)
const findLongNum = function() {
 const largEvenNum = [1, 2, 3, 10, 4, 7, 0];
    //let wordSplit =sent.split(' ');
     let LongestNumber =0; 
     for (let i =0; i <largEvenNum.length; i++){
        if (largEvenNum[i] > largEvenNum[i+1] ) {
            LongestNumber++;
            LongestNumber =largEvenNum[i];
        } return largEvenNum[i] ;
     } 
      console.log(LongestNumber);
  }
  findLongNum (); 