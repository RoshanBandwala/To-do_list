import React from "react";

export default function Todo(props) {
  return (
    <div>
      <table className="table fntsty1">
        <tbody>
          <tr>
            <th className="col-1">
                  <input
                    className="form-check-input bg-pink"
                    type="checkbox"
                    value=""
                    aria-label="Checkbox for following text input"
                    />
            
              
            </th>
            <td className="col-2">{props.index}</td>
            <td className="col-3">{props.todo.title}</td>
            <td className="col-4">{props.todo.desc}</td>
            <td className="col-2">
              <button
                className="btn btn-danger"
                onClick={() => {
                  props.remove(props.index);
                }}
              >
                delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
