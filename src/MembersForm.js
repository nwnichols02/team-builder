import React from "react";

export default function MembersForm (props) {
    const { values, update, submit } = props

    const onChange = evt => {
        const name = evt.target.name;
        const value = evt.target.value;
        update(name, value);
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    return (
        <form className="form container" onSubmit={onSubmit}>
            <div className="form-group inputs">
                <label>Member name
                    <input
                        name="memberName"
                        type='text'
                        placeholder='Type in a Member Name'
                        maxLength='30'
                        value={values.memberName}
                        onChange={onChange}
                        />
                </label>
                <label>Email
                    <input
                        name="email"
                        type='email'
                        placeholder='Type in an Email'
                        maxLength='30'
                        value={values.email}
                        onChange={onChange}                    
                    />
                </label>
                <label>Role
                    <select value={values.role} name='role' onChange={onChange}>
                        <option value=''>--Select a Role--</option>
                        <option value='Student'>Student</option>
                        <option value='Instructor'>Instructor</option>
                        <option value='Alumni'>Alumni</option>
                    </select>
                </label>
                <div className="submit">
                    <button>Submit</button>
                </div>
            </div>
        </form>
    )
}