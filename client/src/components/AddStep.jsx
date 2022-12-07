import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

export default function AddStep(props) {

  //   const [stepForm, setForm] = useState({
  //     name,
  //     imgUrl,
  //     description,
  //   });

  const handlerChangeName = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    const temp = [...props.nameStep];

    temp[props.step] = e.target.value;
    props.setNameStep(temp);
  };

  const handlerChangeImages = (e) => {
    const name = e.target.name;
    const files = e.target.files[0];

    const temp = [...props.images];

    temp[props.step] = e.target.files;
    props.setImages(temp);
  };

  const handlerChangeDesc = (e,i) => {
    const name = e.target.name;
    const value = e.target.value;

    const temp = [...props.description];
    temp[props.step][i] = e.target.value;
    props.setDescription(temp);
};

const addStep = (e) => {
	e.preventDefault();

    const temp = [...props.description];

    temp[props.step].push('');
    props.setDescription(temp);

};

const removeStep = (e,index) => {
	e.preventDefault();
	const temp = [...props.description];
    temp[props.step].splice(index-1,1);
    props.setDescription(temp);
};

return (
    <div className="add-step mb-3">
      <div className="input-form">
        <label>Step Title</label>
        <input
          type="text"
          className="form-control"
          name="name"
          placeholder="Step Title"
          value={props.nameStep[props.step]}
          onChange={handlerChangeName}
        />
      </div>
      <div className="input-form">
        <label>Step Image</label>
        <input type="file" className="form-control" name="imgUrl" onChange={handlerChangeImages} />
      </div>
      <div className="input-form2">
        <label>Description</label>
        <div style={{ width: "100%" }}>
          {props.description[props.step].map((data, index) => {
            return (
              <textarea
                type="text"
                className="form-control mb-4"
                name="description"
                placeholder="Description"
                key={index}
				value={data}
				onChange={(e)=>handlerChangeDesc(e,index)}
				></textarea>
            );
          })}
        </div>
      </div>

      {props.description[props.step].length > 1 ? (
        <div className="d-flex justify-content-between">
          <button className="btn btn-primary" onClick={e=> removeStep(e,props.description[props.step].length)}>
            Remove Description
          </button>
          <button className="btn btn-primary" onClick={addStep}>
            Add Description
          </button>
        </div>
      ) : (
        <div className="d-flex justify-content-end">
          <button className="btn btn-primary" onClick={addStep}>
            Add Description
          </button>
        </div>
      )}
    </div>
  );
}
