import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import AddStep from "../components/AddStep";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fetchTags } from "../store/slices/tag";

export default function NewProject() {
  const dispatch = useDispatch();
  const { tags } = useSelector((state) => {
    return state.tag;
  });
  const [steps, setStep] = useState([["1"]]);
  const [tagId, setTagId] = useState("");
  const [difficultySellect, setDifficultySellect] = useState("");
  const [titleProject, setTitleProject] = useState("");
  const [introductionProject, setIntroductionProject] = useState("");
  const [nameStep, setNameStep] = useState([]);
  const [description, setDescription] = useState([[""]]);
  const [mainImage, setmainImage] = useState({});
  const [images, setImages] = useState([{}]);

  const addStep = (e) => {
    e.preventDefault();
	const temp = [...steps];

    temp.push("");
    setStep(temp);
	console.log(steps)
  };

  useEffect(() => {
    dispatch(fetchTags());
  }, []);

  const handlerSubmit = (e) => {
	e.preventDefault();
	console.log({titleProject, introductionProject, difficultySellect, tagId, nameStep, description})
	console.log({mainImage, images})
  }

  return (
    <div id="new-project">
      <Helmet>
        <title>New Project | DIT-HUB</title>
      </Helmet>
      <div className="container">
        <div id="title">
          <h1>New Project</h1>
        </div>
        <form onSubmit={handlerSubmit}>
          <div className="mb-5 form">
            <div className="input-form">
              <label>Project Name</label>
              <input
                type="text"
                className="form-control"
                name="title"
                placeholder="Project Name"
                value={titleProject}
                onChange={(e) => setTitleProject(e.target.value)}
              />
            </div>
            <div className="input-form">
              <label>Difficulty</label>
              <select
                className="form-control"
                name="difficulty"
                value={difficultySellect}
                onChange={(e) => setDifficultySellect(e.target.value)}>
                <option value="" selected disabled>
                  -- select difficulty --
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div className="input-form">
              <label>Tag Name</label>
              <select
                className="form-control"
                name="tag"
                value={tagId}
                onChange={(e) => setTagId(e.target.value)}>
                {tags.map((el) => {
                  return (
                    <option key={el.id} value={el.id}>
                      {el.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="input-form">
              <label>Introduction</label>
              <textarea
                type="text"
                className="form-control"
                name="introduction"
                placeholder="Introduction"
                value={introductionProject}
                onChange={(e) =>
                  setIntroductionProject(e.target.value)
                }></textarea>
            </div>
            <div className="input-form">
              <label>Main Image</label>
              <input
                type="file"
                className="form-control"
                name="imgUrl"
                onChange={(e) => setmainImage(e.target.files[0])}
              />
              {/* <input type="text" className="form-control" name='imgUrl' placeholder="Image Url"/> */}
            </div>
            <div className="input-form2">
              <label>Step Detail</label>
              <div style={{ width: "100%" }}>
                {steps.map((_, index) => {
                  return (
                    <div key={index} className="mb-4">
                      <AddStep
                        step={index}
                        nameStep={nameStep}
                        setNameStep={setNameStep}
                        description={description}
                        setDescription={setDescription}
                        image={images}
                        setImage={setImages}
                      />
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
            <div className="d-flex justify-content-end">
              <button className="btn btn-primary w-100 mt-5" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
