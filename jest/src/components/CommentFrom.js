import React, { useState } from 'react';

function CommentFrom() {
    const [text,setText] = useState("");
    const [checked, setChecked] = useState(false);
  return (
    <div>
        <input type="text" value={text} onChange={(e) => {setText(e.target.value)}}/>
        <label htmlFor="checkbox">I agree to the terms and conditions</label>
        <input type="checkbox" name="checkbox" id="checkbox" defaultChecked = {checked} onChange = {() => setChecked(!checked)}/>
        <button disabled = {!text || !checked}>
            Comment
        </button>
    </div>
  )
}

export default CommentFrom