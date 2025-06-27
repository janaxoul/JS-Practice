
import { createRoot } from 'react-dom/client';

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
const root = createRoot(document.getElementById('app'));
root.render(<h1>Hello, world</h1>);

function handleClick(){
    console.log("React Buttuon clicked");
}
const inputField=document.getElementById("myInput");
inputField.addEventListener("keydown", function(event){
    console.log("Key pressed: ",event.key);
});