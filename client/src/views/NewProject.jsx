import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import AddStep from "../components/AddStep";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fetchTags } from "../store/slices/tag";
// import FormData from 'form-data';

export default function NewProject() {
  // const formData = new FormData()
  const dispatch = useDispatch();
  const [steps, setStep] = useState([{}]);
  const [form, setForm] = useState({
    title: "",
    introduction: "",
    difficulty: "",
  });
  const [objstep, setObjStep] = useState({
	name : '',
	image: '',
	description: ''
  })
  const [mainImage, setMainImage] = useState({});
  const [TagId, setTagId] = useState("");
  const [Names, setNames] = useState([]);
  const [Image, setImage] = useState({});
  const [Description, setDescription] = useState([]);
  const { tags } = useSelector((state) => {
    return state.tag;
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    const newForm = {
      ...form,
    };

    newForm[name] = value;
    setForm(newForm);
  };

  
        // form.append("profilePic", payload.profilePic);
        // console.log("ini payload", payload.profilePic);
        // const { data } = await axios({
        //   method: "put",
        //   url: this.baseUrl + `/profile/${payload.id}`,
        //   headers: {
        //     "Content-Type": "multipart/form-data",
        //     access_token: localStorage.access_token,
        //   },
        //   data: form
        // });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    console.log(TagId);
    console.log(mainImage);
	// console.log(Names)
	console.log(objstep)
  };

  useEffect(() => {
    dispatch(fetchTags());
  }, [dispatch]);

  const addStep = (e) => {
    e.preventDefault();
    setStep([...steps, {}]);
  };


  return (
    <div id="new-project">
      <Helmet>
        <title>New Project | DIT-HUB</title>
      </Helmet>
      <div className="container">
        <div id="title">
          <h1>New Project</h1>
        </div>
        <div className="mb-5 form">
          <form onSubmit={handleSubmit}>
            <div className="input-form">
              <label>Project Name</label>
              <input
                type="text"
                className="form-control"
                name="title"
                placeholder="Project Name"
                value={form.title}
                onChange={handleChange}
              />
            </div>
            <div className="input-form">
              <label>Difficulty</label>
              <select
                className="form-control"
                name="difficulty"
                value={form.difficulty}
                onChange={handleChange}>
                <option value="" select disabled>-- select difficulty --</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div className="input-form">
              <label>Introduction</label>
              <textarea
                type="text"
                className="form-control"
                name="introduction"
                placeholder="Introduction"
                value={form.introduction}
                onChange={handleChange}></textarea>
            </div>
            <div className="input-form">
              <label>Main Image</label>
              <input type="file" className="form-control" name="mainImage" onChange={e=>setMainImage(e.target.files[0]) } />
            </div>
            <div className="input-form">
              <label>Tag</label>
              <select className="form-control" name="tag" value={form.TagId} onChange={e=> setTagId(e.target.value)}>
                {tags.map((el) => {
                  return <option value={el.id}>{el.name}</option>;
                })}
              </select>
            </div>
            <div className="input-form2">
              <label>Step Detail</label>
              <div style={{ width: "100%" }}>
                {steps.map((data, index) => {
                  return (
                    <div key={index} className="mb-4">
                      <AddStep key={index} setObjStep={setObjStep} objstep={objstep}/>
                      {steps.length > 1 ? (
                        <button
                          className="btn btn-danger"
                          name={index}
                          onClick={() => {
                            setStep(steps.filter((_, i) => i !== index));
                          }}>
                          <FontAwesomeIcon icon="fa-solid fa-trash-can" />
                        </button>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="d-flex justify-content-end">
              <button className="btn btn-primary" onClick={addStep}>
                Add More
              </button>
            </div>
            <div className="d-flex justify-content-end my-4">
              <button
                type="submit"
                className="btn btn-primary w-100"
                >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
