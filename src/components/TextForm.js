import React, { useState } from 'react'

export default function (props) {
    
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!","success");
    }
    const handleLoClick=()=>{
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!","success");
    }
    const handleClearClick=()=>{
        let newText='';
        setText(newText)
        props.showAlert("Text cleared!","success");
    }
    
    const handleOnChange=(event)=>{
        setText(event.target.value);
        
    }
    const handleCopy=()=>{
        var text=document.getElementById("myBox");
        text.select();
        // text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied the text to Clipboard!","success");
    }
    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed extra spaces!","success");
    }


    
    const [text, setText] = useState('');
    return (
        <>
        <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange ={handleOnChange} id="myBox" rows="8" style={{backgroundColor:props.mode==='light'?'white':'#13466e', color:props.mode==='dark'?'white':'black'}}></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>You text summary</h1>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview"}</p>
        </div>
        </>
  );
}
