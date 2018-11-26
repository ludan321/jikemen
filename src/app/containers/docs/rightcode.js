import React, {Component} from "react";
import OutPut from "./output"

export  default class RightCode extends Component {
    componentDidMount() {
    }


    render() {


        return <div>
            <div className="twlo-code__sample">
                <div className="twlo-code__actions">
                <span className="twlo-code__action clippy">
                    <svg
                        className="twlo-icon-interface-clipboard"
                        height="16"
                        viewBox="0 0 16 16"
                        width="16"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M16 7v2h-5v2L8 8l3-3v2h5zM8 5H4v1h4V5zm-4 7h5v-1H4v1zm9-1h1v3H2V0h12v5h-1V3H3v10h10v-2zM3 2h10V1H3v1zm1 7v1h3V9H4zm0-1h3V7H4v1z"
                            fill="currentColor">

                        </path>
                    </svg>
</span>
                    <a className="twlo-code__action github" href="https://github.com" target="_blank">
                        <svg className="twlo-icon-interface-repo" height="16" viewBox="0 0 16 16"
                             width="16" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5 3H4V2h1v1zm0 1H4v1h1V4zm0 4H4v1h1V8zm0-2H4v1h1V6zm9-6v14H7v2l-1.5-1L4 16v-2H2V0h12zm-1 11H3v2h1v-1h3v1h6v-2zm0-10H3v9h10V1z"
                                fill="currentColor"></path>
                        </svg>
                    </a>
                </div>
                <pre className="twlo-code__snippet line-numbers"><div
                    className="codehilite notranslate language-curl"
                    style={{position: "relative"}}><span className="code-line">curl -X GET 'https://sync.twilio.com/v1/Services' \<br/></span><span
                    className="code-line">-u ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX:your_auth_token<br/></span><span
                    className="line-numbers-rows"><span></span><span></span></span></div></pre>
                <div className="docs-coderail__next">
                    <a className="docs-coderail__next-link" href="#">Next Sample</a>
                </div>
            </div>
            <div className="twlo-code__output" style={{display: "block"}}>
                <div className="docs-coderail__label">Output</div>
                <OutPut/>
            </div>
        </div>
    }
}
;
