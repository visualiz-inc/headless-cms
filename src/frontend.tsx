import "core-js/stable";
import "regenerator-runtime/runtime";

import * as React from "react";
import * as ReactDOM from "react-dom";
import { MacchaManager } from "maccha-client/src/Apps";

import { register } from "./serviceworker";
import { LocationProvider, createHistory } from "@reach/router";
register({
    onUpdate: () => window.location.reload()
});

const history = createHistory(window as any);

ReactDOM.render(
    <>
        <LocationProvider history={history} >
            <MacchaManager
                option={{
                    apiServerHost: "http://localhost:8081",
                    pathPrefix: "",
                    logo: () => <></>
                }}
            />
        </LocationProvider>
    </>,
    document.getElementById("app")
);
