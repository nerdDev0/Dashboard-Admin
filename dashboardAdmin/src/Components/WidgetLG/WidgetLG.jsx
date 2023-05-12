import "./WidgetLG.css";
import { transferActions } from "../../Datas";
export default function WidgetLG() {
  let Button = ({ type }) => {
    return <button className={"WidgetLGBtn " + type}>{type}</button>;
  };
  return (
    <>
      <section className="WidgetLG">
        <section className="WidgetLGTitle"></section>
        <table className="WidgetLGTable">
            <thead>
          <tr className="WidgetLGTr">
            <th className="WidgetLGTh">Costumer</th>
            <th className="WidgetLGTh">Date</th>
            <th className="WidgetLGTh">Amount</th>
            <th className="WidgetLGTh">Status</th>
          </tr>
          </thead>
          {transferActions.map((user)=>
          <tbody key={user.id}>
          <tr  className="WidgetLGTr">
          <td className="WidgetLGUser">
            <img className="WidgetLImg" src="Images/avatar.jpg" alt="" />
            <span className="WidgetLGName">{user.customer}</span>
          </td>
          <td className="WidgetLGDate">{user.date}</td>
          <td className="WidgetLGAmount">${user.Amount}</td>
          <td className="WidgetLGStatus">
            <Button type={user.status} />
          </td>
        </tr>
        </tbody>
          )}
          

         

         
        </table>
      </section>


      
    </>
  );
}
