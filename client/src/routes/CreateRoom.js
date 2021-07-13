import React from "react";
import { v1 as uuid } from "uuid";
// import {styles} from './design.css'

const CreateRoom = (props) => {
    function create() {
        const id = uuid();
        props.history.push(`/room/${id}`);
    }

    return (
        <button onClick={create} style={{
            alignItems: "center", 
            border:"none",
            width:"380px",
            height:"86px",
            fontSize:"36px",
            background:"linear-gradient(45deg, transparent 5%, #FF013C 5%)",
            color:"#fff",
            letterSpacing: "3px",
            lineHeight: "88px",
            boxShadow: "6px 0px 0px #00E6F6",
            outline: "transparent",
            position: "relative",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto"
        }}>Create room</button>
    );
};

export default CreateRoom;
