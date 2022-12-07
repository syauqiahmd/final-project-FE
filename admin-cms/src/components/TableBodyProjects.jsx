export default function TableBodyProjects(props) {
  //hit server untuk ganti status
  return (
    <tr>
      <td>{props.index + 1}</td>
      <td>{props.data.title}</td>
      <td>{props.data.User.username}</td>
      <td>{props.data.Tag.name}</td>
      <td>{props.data.difficulty}/5</td>
      <td>{props.data.status}</td>
    </tr>
  );
}
