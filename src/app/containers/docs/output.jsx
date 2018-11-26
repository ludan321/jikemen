import React, {PureComponent} from 'react';
import mds from "./doc.md"
// console.log(mds)
export default class OutPut extends PureComponent {
    constructor(props) {
        super(props)

    };

    componentDidMount = () => {
    };

    render() {
        return (
            <pre className="twlo-code__snippet line-numbers language-json">
                {/*<div className="codehilite notranslate" style={{position: "relative"}}>*/}
                    {/*<span className="code-line">*/}
                        {/*<span className="p">{`{`}</span><br/>*/}
                    {/*</span>*/}
                    {/*<span className="code-line indent_20">*/}
                        {/*<span className="nt ">"meta"</span>*/}
                        {/*<span className="p">:</span>*/}
                        {/*<span className="p">{`{`}</span><br/>*/}
                    {/*</span>*/}
                    {/*<span className="code-line indent_40">*/}
                        {/*<span className="nt">"first_page_url"</span>*/}
                        {/*<span className="p">:</span>*/}
                        {/*<span className="s2">*/}
                            {/*"https://sync.twilio.com/v1/Services?PageSize=50&amp;Page=0"*/}
                        {/*</span>*/}
                        {/*<span className="p">,</span><br/>*/}
                    {/*</span><span className="code-line indent_40">*/}
                    {/*<span className="nt">"key"</span>*/}
                    {/*<span className="p">:</span>*/}
                    {/*<span className="s2">"services"</span>*/}
                    {/*<span className="p">,</span><br/>*/}
                {/*</span>*/}
                    {/*<span className="code-line indent_40">*/}
                        {/*<span className="nt">"next_page_url"</span>*/}
                        {/*<span className="p">:</span>*/}
                        {/*<span className="s2">*/}
                            {/*"https://sync.twilio.com/v1/Services?PageSize=50&amp;Page=1"*/}
                        {/*</span>*/}
                        {/*<span className="p">,</span><br/>*/}
                    {/*</span>*/}
                    {/*<span className="code-line indent_40">*/}
                        {/*<span className="nt">"page"</span>*/}
                        {/*<span className="p">:</span>*/}
                        {/*<span className="mi">0</span>*/}
                        {/*<span className="p">,</span><br/>*/}
                    {/*</span>*/}
                    {/*<span className="code-line indent_40">*/}
                        {/*<span className="nt">"page_size"</span>*/}
                        {/*<span className="p">:</span>*/}
                        {/*<span className="mi">50</span>*/}
                        {/*<span className="p">,</span><br/>*/}
                    {/*</span>*/}
                    {/*<span className="code-line indent_40">*/}
                        {/*<span className="nt">"previous_page_url"</span>*/}
                        {/*<span className="p">:</span>*/}
                        {/*<span className="s2">*/}
                            {/*"https://sync.twilio.com/v1/Services?PageSize=50&amp;Page=0"*/}
                        {/*</span>*/}
                        {/*<span className="p">,</span><br/>*/}
                    {/*</span>*/}
                    {/*<span className="code-line indent_40">*/}
                        {/*<span className="nt">"url"</span>*/}
                        {/*<span className="p">:</span>*/}
                        {/*<span className="s2">*/}
                            {/*"https://sync.twilio.com/v1/Services?PageSize=50&amp;Page=0"</span><br/>*/}
                    {/*</span>*/}
                    {/*<span className="code-line indent_20">*/}
                        {/*<span className="p">},</span><br/>*/}
                    {/*</span>*/}
                    {/*<span className="code-line indent_20">*/}
                    {/*<span className="nt">"services"</span>*/}
                        {/*<span className="p">:</span>*/}
                        {/*<span className="p">[</span><br/>*/}
                    {/*</span>*/}
                    {/*<span className="code-line indent_40">*/}
                        {/*<span className="p">{`{`}</span><br/>*/}
                    {/*</span>*/}
                    {/*<span className="code-line indent_60">*/}
                        {/*<span className="nt">"account_sid"</span>*/}
                        {/*<span className="p">:</span>*/}
                        {/*<span className="s2">"ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"</span>*/}
                        {/*<span className="p">,</span><br/>*/}
                    {/*</span>*/}
                    {/*<span className="code-line indent_60">*/}
                        {/*<span className="nt">"date_created"</span>*/}
                        {/*<span className="p">:</span>*/}
                        {/*<span className="s2">"2015-07-30T20:00:00Z"</span>*/}
                        {/*<span className="p">,</span><br/>*/}
                    {/*</span>*/}
                    {/*<span className="code-line indent_60">*/}
                    {/*<span className="nt">"date_updated"</span>*/}
                    {/*<span className="p">:</span>*/}
                    {/*<span className="s2">"2015-07-30T20:00:00Z"</span>*/}
                    {/*<span className="p">,</span><br/>*/}
                {/*</span>*/}
                    {/*<span className="code-line indent_60">*/}
                    {/*<span className="nt">"friendly_name"</span>*/}
                        {/*<span className="p">:</span>*/}
                        {/*<span className="s2">"friendly_name"</span><span className="p">,</span><br/>*/}
                    {/*</span>*/}
                    {/*<span className="code-line indent_60">*/}
                        {/*<span className="nt">"links "</span>*/}
                        {/*<span className="p">:</span>*/}
                        {/*<span className="p">{`{`}</span><br/>*/}
                    {/*</span>*/}
                    {/*<span className="code-line indent_80">*/}
                        {/*<span className="nt">"documents"</span>*/}
                        {/*<span className="p">:</span>*/}
                        {/*<span className="s2">*/}
                            {/*"https://sync.twilio.com/v1/Services/ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Documents"*/}
                        {/*</span>*/}
                        {/*<span className="p">,</span><br/>*/}
                    {/*</span>*/}
                    {/*<span className="code-line indent_80">*/}
                        {/*<span className="nt">"lists"</span>*/}
                        {/*<span className="p">:</span>*/}
                        {/*<span className="s2">*/}
                            {/*"https://sync.twilio.com/v1/Services/ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Lists"*/}
                        {/*</span>*/}
                        {/*<span className="p">,</span><br/>*/}
                    {/*</span>*/}
                    {/*<span className="code-line indent_80">*/}
                        {/*<span className="nt">"maps"</span>*/}
                        {/*<span className="p">:</span>*/}
                        {/*<span className="s2">"https://sync.twilio.com/v1/Services/ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Maps"</span>*/}
                        {/*<span className="p">,</span><br/>*/}
                    {/*</span>*/}
                    {/*<span className="code-line indent_80">*/}
                        {/*<span className="nt">"streams"</span>*/}
                        {/*<span className="p">:</span>*/}
                        {/*<span className="s2">"https://sync.twilio.com/v1/Services/ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Streams"</span><br/>*/}
                    {/*</span><span className="code-line indent_40">*/}
                    {/*<span className="p">},</span><br/>*/}
                {/*</span>*/}
                    {/*<span className="code-line indent_40">*/}
                        {/*<span className="nt">"sid"</span>*/}
                        {/*<span className="p">:</span>*/}
                        {/*<span className="s2">"ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"</span>*/}
                        {/*<span className="p">,</span><br/>*/}
                    {/*</span>*/}
                    {/*<span className="code-line indent_40">*/}
                        {/*<span className="nt">"unique_name"</span>*/}
                        {/*<span className="p">:</span>*/}
                        {/*<span className="s2">"unique_name"</span>*/}
                        {/*<span className="p">,</span><br/>*/}
                    {/*</span>*/}
                    {/*<span className="code-line indent_40">*/}
                        {/*<span className="nt">"url"</span>*/}
                        {/*<span className="p">:</span>*/}
                        {/*<span className="s2">*/}
                            {/*"https://sync.twilio.com/v1/Services/ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"*/}
                        {/*</span>*/}
                        {/*<span className="p">,</span><br/>*/}
                    {/*</span>*/}
                    {/*<span className="code-line indent_40">*/}
                        {/*<span className="nt">"webhook_url"</span>*/}
                        {/*<span className="p">:</span>*/}
                        {/*<span className="s2">"http://www.example.com"</span>*/}
                        {/*<span className="p">,</span><br/>*/}
                    {/*</span>*/}
                    {/*<span className="code-line indent_40">*/}
                        {/*<span className="nt">"reachability_webhooks_enabled"</span>*/}
                        {/*<span className="p">:</span>*/}
                        {/*<span className="kc">false</span>*/}
                        {/*<span className="p">,</span><br/>*/}
                    {/*</span>*/}
                    {/*<span className="code-line indent_40">*/}
                        {/*<span className="nt">"acl_enabled"</span>*/}
                        {/*<span className="p">:</span>*/}
                        {/*<span className="kc">false</span><br/>*/}
                    {/*</span>*/}
                    {/*<span className="code-line indent_40">*/}
                        {/*<span className="p">}</span><br/>*/}
                    {/*</span>*/}
                    {/*<span className="code-line indent_20">*/}
                        {/*<span className="p">]</span><br/>*/}
                    {/*</span>*/}
                    {/*<span className="code-line">*/}
                        {/*<span className="p">}</span><br/>*/}
                    {/*</span>*/}
                    {/*<span className="line-numbers-rows">*/}
                        {/*<span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>*/}
                    {/*</span>*/}
                {/*</div>*/}
                <div dangerouslySetInnerHTML={{ __html: mds }} />

            </pre>
        )
    }
}