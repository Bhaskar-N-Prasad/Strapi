import { useState } from "react";

interface HtmlPreviewerProps {
    [key: string]: any;
}

const commonButtonStyles = {width: "100%",  padding: "7px 16px", color: "#fff",  fontWeight: "700",}

const buttonVariants = {
  primary: { ...commonButtonStyles ,background: "#4945ff", cursor: 'pointer'},
  disabled: {...commonButtonStyles, background: "#9391ff"}
}

const HtmlPreviewer = ({name,
    onChange,
    value,
    label,
    intlLabel,
    required,
    attribute,
    description}: HtmlPreviewerProps) => {
    const [preview, setPreview] = useState<string>("");
    const [showPreview, setShowPreview] = useState(false);

  
    return (
      <div style={{width: "100%", position: "relative"}}>
        <div  style={{position: "relative", display: "flex", flexDirection: "column", width: "100%"}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: "end"}}>
                <div style={{fontSize: '1.2rem', fontWeight: 'bold'}}>{label}</div>
                <button
                    style={{...buttonVariants.primary, alignSelf: "end", maxWidth: '140px'}}
                    onClick={() => {setShowPreview(prev => !prev); setPreview(value)}}
                >
                    {!showPreview ? "Preview" :  "Html"} Mode   
                </button> 
            </div>
         
          {!showPreview ? <textarea
            style={{width: "100%",height: "500px", padding: "5px", outline: 'none' }}
            placeholder="Enter HTML here..."
            value={value}
            name={name}
            onChange={onChange}
          />
           : <div style={{border: "1px solid #000", padding: 15, borderRadius: "5px", width: "100%", minHeight: "35rem"}}>
                <div
                style={{width: "100%",height: "fit-content", padding: "5px" }}
                dangerouslySetInnerHTML={{ __html: preview }}
                />
            </div>}
        </div>
  
       
      </div>
    );
  };

  export default HtmlPreviewer;