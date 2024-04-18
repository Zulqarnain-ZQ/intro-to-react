import { First } from "./First"

const divStyles = {display:'flex', flexDirection:'column', opacity:1, backgroundColor: "red", fontSize: "30px", gap: "20px"};
export function Second(){
    return <div style={divStyles}>
        Hello from functional component
        <First />
        </div>
}