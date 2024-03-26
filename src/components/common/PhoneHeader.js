import add from "../../images/add.svg";

export default function PhoneHeader() {
    var reverseWords = function(s) {
        let newWord = s.replaceAll(" ", "*")

        
        let newArr = [...newWord];
        let lastIdx = newArr.length;

        if(newArr[lastIdx] !== " " || undefined){
            newArr.pop()
        }
        newArr = newArr.filter(item => item !== ",")
        
        return newArr
;}

    console.log(reverseWords("  ketchup fry pan "))
    

  const date = new Date();
  const monthNumber = date.getMonth(); // Returns an integer from 0 to 11
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = monthNames[monthNumber];

  return (
    <div className="expense-header">
      <div className="month--header fsb">
        <img className="svg" src={add} alt="user--add" />
        <p className="month">{month}</p>
      </div>
    </div>
  );
}
