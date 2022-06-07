import InputBox from "./InputBox";
import PlusButt from "./PlusButt";

const Education = (props) => {
  return (
    <div>
      <div className="heading">
        <h3>Education</h3>
      </div>
      <form>
        <InputBox
          placeholder={"Course"}
          type={"text"}
          height={"single"}
          handleChange={props.handleEducationChange}
          name="course"
        />
        <InputBox
          placeholder={"Institution"}
          type={"text"}
          height={"single"}
          handleChange={props.handleEducationChange}
          name="school"
        />
        <InputBox
          placeholder={"City"}
          type={"text"}
          height={"single"}
          handleChange={props.handleEducationChange}
          name="city"
        />
        <div>
          <label>From</label>
          <InputBox
            placeholder={"From"}
            type={"date"}
            height={"single"}
            handleChange={props.handleEducationChange}
            name="eduFrom"
          />
          <br className="break"></br>
          <label>To</label>
          <InputBox
            placeholder={"To"}
            type={"date"}
            height={"single"}
            handleChange={props.handleEducationChange}
            name="eduTo"
          />
        </div>
      </form>
      {/* <PlusButt clickHandler={props.plusButtonClickHandler} /> */}
    </div>
  );
};

export default Education;
