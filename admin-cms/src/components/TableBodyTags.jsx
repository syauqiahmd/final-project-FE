export default function TableBodyTags(props) {
  return (
    <tr>
      <td>{props.index+1}</td>
      <td>{props.data.name}</td>
    </tr>
  );
}
