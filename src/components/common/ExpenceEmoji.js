
import add from "../../images/add.svg";

export default function ExpenseEmoji({ expenseLabel, handleAddExpense }) {
  //const [expandExp, setExpandexp] = useState(false);

  function doStuff() {
   // setExpandexp(!expandExp);
   handleAddExpense(expenseLabel);
  }
  return (
    <>
      <div
        className= 'expenseItem fsb'
      >
        <p>{expenseLabel}</p>
        <div onClick={doStuff}>
          <img className="svg" src={add} alt="user--add" />
        </div>
      </div>
    </>
  );
}
