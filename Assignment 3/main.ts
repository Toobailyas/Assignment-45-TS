// Question 3

// storing a person's name
 let personName : string = "Tooba Ilyas"

 // Printing the Name in lowerCase
 console.log ("Lowercase:" , personName.toLowerCase());

 // Printing the Name in UpperCase
 console.log("UpperCase:", personName.toUpperCase());

  // Printing the Name in TittleCase
  console.log("Titlecase:", personName.replace(/\bw/g,c=> c.toUpperCase() ));
