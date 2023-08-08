// STEP 4 WE CREATE A Hero Interface IN ITS OWN FILE UNDER
// THE src/app directory.
// This is written in typescript


// The interface is used as a set of rules or expectations for how certain objects
// should look and behave in our code. An interface is like a blieprint or 
// checklist that defines those rules;

// When we create an interface, we are telling TypeScript what properties an object 
// should have and what data types those properties should be. It's like saying.
// "Hey TypeScript, any object that wantst to be considered a 'Hero' must have an 'id' 
// property that is a number and a 'name' propertythat is a string

// this in the end helps woth reuseability
export interface Hero {
    // We give it id and name properties, 
    id: number;
    name: string;
}