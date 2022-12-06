
export default function TableBodyReport(props) {
  return (
    <tr>
      <td>{props.index + 1}</td>
      <td>{props.data.title}</td> 
      <td>{props.data.introduction}</td>
      <td>{props.data.difficulty}</td>
      <td>
        <select name={props.data.status}>
          <option value="Active">Active</option>
          <option value="Archived">Archived</option>
        </select>
      </td>
    </tr>
  )
}

