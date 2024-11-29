import React from "react";
import "./style.css";

function CustomSelect(props) {
    return (
        <div>
            <label for="standard-select" className="standard-select-label">{props?.label}</label>
            <div className="select">
                <select id="standard-select" className="custom-select-box">
                    <option >{props?.options}</option>
                    {/* <option value="Option 2">18k</option>
                    <option value="Option 3">Platinum</option> */}

                </select>
                <span className="focus"></span>
            </div>
        </div>
    )
};

export default CustomSelect;