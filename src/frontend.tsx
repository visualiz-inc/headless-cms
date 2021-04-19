import "core-js/stable";
import "regenerator-runtime/runtime";

import * as React from "react";
import * as ReactDOM from "react-dom";
import { MacchaManager } from "maccha.manager";
// import "maccha-manager/css/style.css";

const R = React.lazy(() => MacchaManager({
    host: "/",
    plugins: [
    ]
}).then(r => ({ default: r })));

ReactDOM.render(
    <App />,
    document.getElementById("app")
);

function App() {
    return (
        <React.Suspense
            fallback={<div></div>}
        >
            <R />
        </React.Suspense>
    );
}

// ReactDOM.render(
//     <A />,
//     document.getElementById("app")
// );

// function A() {
//     return <div>eeeeeeee</div>
// }

// console.log(React)