import { useDispatch } from "react-redux";
import { instance } from "../bin/axios";
import { fetchReports } from "../store/slices/report";

export default function TableBodyReport(props) {
  const dispatch = useDispatch();
  const changeStatus = async (e) => {
    try {
      let status = e.target.value;
      const { data } = await instance({
        method: "patch",
        url: `/admin/projects/${props.data.Project.id}`,
        data: { status },
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
      console.log(data);
      dispatch(fetchReports())
      //toasty success
    } catch (err) {
      //toasty error
    }
  };

  const link = `http://localhost:3001/project/${props.data.Project.slug}`;
  return (
    <tr>
      <td>{props.index + 1}</td>
      <td>{props.data.Project.title}</td>
      <td>{props.data.ReportCount}</td>
      <td>
        <a href={link} className="text-black">
          Go to Project
        </a>
      </td>
      <td>
        <select value={props.data.Project.status} onChange={changeStatus}>
          <option value="Active">Active</option>
          <option value="Archived">Archived</option>
        </select>
      </td>
    </tr>
  );
}
