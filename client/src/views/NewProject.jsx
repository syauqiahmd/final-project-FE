import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import AddStep from "../components/AddStep";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fetchTags } from "../store/slices/tag";
import { instance } from "../bin/axios";
import { toast } from "react-toastify";

export default function NewProject() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { tags } = useSelector((state) => {
    return state.tag;
  });
  const [steps, setStep] = useState([{}]);
  const [tagId, setTagId] = useState("");
  const [difficultySellect, setDifficultySellect] = useState("");
  const [titleProject, setTitleProject] = useState("");
  const [introductionProject, setIntroductionProject] = useState("");
  const [nameStep, setNameStep] = useState([]);
  const [description, setDescription] = useState([""]);
  const [mainImage, setmainImage] = useState({});
  const [images, setImages] = useState([{}]);

  const addStep = (e) => {
    e.preventDefault();
    setStep([...steps, {}]);
  };

  useEffect(() => {
    dispatch(fetchTags());
  }, []);

  const handlerSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("title", titleProject);
    formData.append("introduction", introductionProject);
    formData.append("difficulty", difficultySellect);
    formData.append("TagId", tagId);
    nameStep.forEach((el, idx) => {
      formData.append(`Names[${idx}]`, el);
    });

    description.forEach((el, idxL) => {
      formData.append(`Description[${idxL}][${0}]`, el);
    });

    formData.append("mainImage", mainImage);

    images.forEach((el) => {
      formData.append("images", el);
    });

    try {
      await instance({
        method: "post",
        url: "/public/posts/project",
        headers: {
          access_token: localStorage.access_token,
          "Content-Type": "multipart/form-data",
        },
        data: formData,
      });
      setTitleProject('')
      setIntroductionProject('')
      setDifficultySellect("")
      setTagId("")
      setNameStep([])
      setDescription([''])
      setmainImage({})
      setImages([{}])
      toast.success("add new project success!!!");
      navigate('/projects')
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.message)
    }
  };

  return (
    <div id="new-project">
      <Helmet>
        <title>New Project | DIT-HUB</title>
      </Helmet>
      <div className="container">
        <div id="title">
          <h1>New Project</h1>
          <div className="text-muted">
          <p><FontAwesomeIcon icon="fa-solid fa-circle-exclamation" /> Any created Projects will be moderated by our Admins</p>
          </div>
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
                {steps?.map((_, index) => {
                  return (
                    <div key={index} className="mb-4">
                      <AddStep
                        step={index}
                        nameStep={nameStep}
                        setNameStep={setNameStep}
                        description={description}
                        setDescription={setDescription}
                        images={images}
                        setImages={setImages}
                      />
                      {steps.length > 1 ? (
                        <button
                          className="btn btn-danger"
                          name={index}
                          onClick={() => {
                            const temp = [...steps];
                            temp.splice(steps.length - 1, 1);
                            setStep(temp);
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
