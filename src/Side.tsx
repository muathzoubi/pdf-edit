import React from "react"

const SideBar = () => {
    return (
        <div className="side">

            <div className="container" style={{ marginTop: 100 }}>
                <h2>Add Text Properties</h2>
                <div className="input-field">
                    <input required id="input" className="input" name="text" type="text" />
                    <label>Type Text </label>

                </div>
                <div className="input-field">
                    <select style={{width:'100%'}} defaultValue={'typ'}>
                        <option>1</option>
                        <option>1</option>
                        <option>1</option>
                        <option>1</option>
                        <option>1</option>
                    </select>
                    
                </div>
            </div>
        </div>
    )
}
export default SideBar