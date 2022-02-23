import React, { useState, useEffect } from "react";
import Members from "./Members";
import MembersForm from "./MembersForm";
import axios from "axios";
import "./App.css";

const initialFormValues = {
  memberName: "",
  email: "",
  role: "",
};

const initialMembersList = [
  {
    memberName: 'Joe',
    email: 'joe@joe.com',
    role: 'Student',
  },
]

export default function App() {
  const [members, setMembers] = useState(initialMembersList);
  const [formValues, setFormValues] = useState(initialFormValues);
  // const [formErrors, setFormErrors] = useState(null);

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue });
  };

  const submitForm = () => {
    //

    const newMember = {
      memberName: formValues.memberName.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    };

    setMembers(members.concat(newMember))
    setFormValues(initialFormValues)


    // if (!newMember.username || !newMember.email || !formValues.role) {
    //   setFormErrors("DANGER DANGER WILL ROBINSON");
    //   return;
    // }
    // axios.post("fakeapi.com", newMember)
    // .then(res => {
    //   console.log(res.data);
    //   setMembers([res.data, ...members]);
    //   setFormValues(initialFormValues);
    // }).catch(err => console.error(err))
  };

  // useEffect(() => {
  //   axios.get('fakeapi.com').then(res => setMembers(res.data))
  // }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>Member List</p>
      </header>
      {/* {formErrors && <h2 className="error">{formErrors}</h2>} */}
      <MembersForm
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />
      {members.map((member, index) => {
        return <Members key={index} details={member} />;
      })}
    </div>
  );
}

// export default App;
