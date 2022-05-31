import InputBox from "./InputBox";

const PersonalInfo = (props) => {
  return (
    <div>
      <div className="heading">
        <h3>Personal Information</h3>
      </div>
      <form className="show">
        <InputBox
          placeholder={"First Name"}
          type={"text"}
          height={"single"}
          handleChange={props.handlePersonalChange}
          name="first"
        />
        <InputBox
          placeholder={"Last Name"}
          type={"text"}
          height={"single"}
          handleChange={props.handlePersonalChange}
          name="last"
        />
        <InputBox
          placeholder={"Title"}
          type={"text"}
          height={"single"}
          handleChange={props.handlePersonalChange}
          name="title"
        />
        <input id={"photo_upload"} name={"photo_upload"} type={"file"} />
        <InputBox
          placeholder={"Address"}
          type={"text"}
          height={"double"}
          handleChange={props.handlePersonalChange}
          name="address"
        />
        <InputBox
          placeholder={"Phone Number"}
          type={"number"}
          height={"single"}
          handleChange={props.handlePersonalChange}
          name="phone"
        />
        <InputBox
          placeholder={"Email Address"}
          type={"email"}
          height={"single"}
          handleChange={props.handlePersonalChange}
          name="email"
        />
        <InputBox
          placeholder={"About You"}
          type={"text"}
          height={"quadriple"}
          handleChange={props.handlePersonalChange}
          name="about"
        />
      </form>
    </div>
  );
};

export default PersonalInfo;
