import React from "react";

export default function Member (props) {
    const {details} = props

    if (!details) {
        return (
            <h3>Working fetching your friends...</h3>
        )
    }

    return (
        <div className="member container">
            <h2>{details.memberName}</h2>
            <p>Email: {details.email}</p>
            <p>Role: {details.role}</p>
        </div>
    )
}