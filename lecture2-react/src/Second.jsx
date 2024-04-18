import { First } from "./First"


export function Second(){
    return <div style={{display:'flex', 
    flexDirection:'column', 
    opacity:1, 
    backgroundColor: "red",
    fontSize: "30px",
    gap: "20px",
    padding: "30px",
    margin: "10px"
      }}>
        Hello from functional component
        <First />
        </div>
}