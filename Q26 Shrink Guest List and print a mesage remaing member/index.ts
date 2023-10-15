/*
    Question: Reconfirm at the remaing two members for their
              invitation at dinner. 

    Description:
        Print a message to each of the two people still on your list, 
       letting them know they’re still invited.

    Dated:  30th Aug, 2023
    Author/Student: Kaleem
    Other Resource helpers : Chatgpt 3.5

    Possibe Solution: 
        Loop - conditional loop while etc..
        and reassure the availibility of the last 2 members

*/

/* module level variables */
let count =0;

const NewLine = "\n"
const Tab     = "\t"
const Line    = '-'.repeat(25)
const retainMembersLimit = 2



const dinnerMembers :string [] = ["Bill Gates", "Paul Allen", "William Henry Gates III"]
const MarkPersonToExclude = "William Henry Gates III"
const NewFriendsList :string []= ["Steve jobs","Steve Wozniak","PepsiCo's John Sculley"]

let txt_Appologies =`Unfortunatly!! We have been informed!${NewLine} ${NewLine} ${Tab}that the dinner table still not arrived, Only Two reservations will be available,${NewLine}${NewLine}My appologies${NewLine}${NewLine}${Line}${Line} `
let txtGreetingMessage = `Dear Friend, <<delemeterToreplacewith>> It's assure, we will meet at dinner`
/** generic functions to execute the code */
function applyFilterToExcludeList<T>(sourceArray: T[], filterCondition: (item: T) => boolean): T[] {
    return sourceArray.filter(filterCondition);
}

/* Filter Expression */
const filterConditionMatchExact     = (item: string)    =>     item===MarkPersonToExclude; // 
const filterConditionOtherthanMatch = (item: string)    =>     item!==MarkPersonToExclude; // 


/*Implementation code */ 
/* this will add a new member at the start of the array */ 
function MakeCopyAndUnshiftFromStart<T>(sourceArray: T[], filterCondition: (item: T) => boolean, NewMememberArray: T): T[]{

    const Updatedlist = [...sourceArray]
    Updatedlist.unshift ( NewMememberArray)
    return Updatedlist
}

/* 
    this lib function will add a new value in the middle of the array 
    but the memory consumption may be compromise when it takes hudge data

*/
function SplitArrayintoTwo <T>( source: T[], src:T ) : T[]{
    const middle        =   Math.floor(source.length/2)
    const first         =   source.filter ( (_, index)  =>  index<middle)
    const second        =   source.filter ( (_, index) =>   index>=middle)
    first.push ( src )

    return first.concat (second)
}

function SplitArrayAndAddNewItemIntoMiddle <T> ( src:T[], newAddition:T):T[]
{
    let middlevalue     : number = Math.floor(src.length/2)
    
    const firstPart     =   src.slice(0, middlevalue )
    const secondPart    =   src.slice(middlevalue)

    let result          =   append (firstPart, newAddition)
    result              =   result.concat(secondPart)

    return firstPart.concat(secondPart)
    
}

function append<T>(arrayData:T[], OjectData:T) : T[]
{
    arrayData.push (OjectData)
    return arrayData
}

// this will add a new Member in the middle of the array 
let nSplitArray         =       SplitArrayAndAddNewItemIntoMiddle(dinnerMembers, "Habib Jalib")

// this will append a new member at the end of the array 
nSplitArray             =       append (nSplitArray, "Naeem Bukhari")

// let count : number = 0
//// pop method of the array  
//removes all elements from array except 1st 2

nSplitArray.splice(retainMembersLimit,nSplitArray.length)
// console.log ( nSplitArray)
// // //// Loop to Displays the array data 
nSplitArray.forEach( (friend)=>{
    console.log(txtGreetingMessage.replace('<<delemeterToreplacewith>>', friend))
})
