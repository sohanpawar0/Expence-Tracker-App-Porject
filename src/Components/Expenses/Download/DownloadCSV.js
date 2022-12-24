// import React, { useEffect } from "react";
// import { useSelector } from "react-redux";

// // store data will dow. by blop

// const DownloadCSV = () => {
//   const data = useSelector((state) => state.expense.expenseData);
//   console.log("data", data);

//   const makeCSV = (rows) => {
//     console.log("rows", rows);
    
//     const csv= rows
//       .map((r) => (r.category + "," + r.amount + "," + r.description))
//       .join("/n");
//       console.log("hi",csv)
//       return csv
//   };
// //  const dwnld=()=>{
// //   const a = document.getElementById("a");
// //     const blob = new Blob([makeCSV(data)]);
// //     console.log("blob", blob);
// //     a.href = URL.createObjectURL(blob);
// //  }
  
//   useEffect(()=>{
//     const a = document.getElementById("a");
//     const blob = new Blob([makeCSV(data)]);
//     console.log("blob", blob);
//     a.href = URL.createObjectURL(blob);  
//   },[])
  
//   return (
//     <div>
//       <a id="a" download="expensedata.csv">
//         Download Expense Data
//       </a>
//     </div>
//   );
// };

// export default DownloadCSV;





import React, { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import ExpenseContext from "../../../Store/Expense-Context";

const DownloadCSV = () => {
  // const data = useSelector((state) => state.expense.expense);
  const cntxt = useContext(ExpenseContext);
  console.log("data", cntxt.expense);

  const makeCSV = (rows) => {
    console.log("rows", rows);

    const csv = rows
      .map((r) => r.category + "," + r.amount + "," + r.description)
      .join("/n");
    console.log("hi", csv);
    return csv;
  };
  const download = () => {
    console.log("inside download", cntxt.expense);
    const a = document.getElementById("a");
    const blob = new Blob([makeCSV(cntxt.expense)]);
    console.log("blob", blob);
    a.href = URL.createObjectURL(blob);
  };

  // useEffect(() => {
  //   console.log("inside useEffect", data);

  //   const a = document.getElementById("a");
  //   const blob = new Blob([makeCSV(data)]);
  //   console.log("blob", blob);
  //   a.href = URL.createObjectURL(blob);
  // }, [data]);

  return (
    <div>
      <a onClick={download} id="a" download="expensedata.csv">
        Download Expense Data
      </a>
    </div>
  );
};

export default DownloadCSV;

