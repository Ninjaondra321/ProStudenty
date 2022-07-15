
import { Helmet } from "react-helmet"


const MojeAnalytics = ({ isNew, userAgreedToAnal }) => {
    return <>
        {(!isNew && userAgreedToAnal) &&
            <Helmet>
                {/* Google anal */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-7DZW0BBJK8"></script>
                <script>
                    {
                        `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        
                        gtag('config', 'G-7DZW0BBJK8');   
                        `
                    }
                </script>
                {/* End Google anal */}

                {/* Smartlook anal */}
                <script type='text/javascript'>
                    {`
                    window.smartlook||(function(d) {
    var o=smartlook=function(){o.api.push(arguments)},h=d.getElementsByTagName('head')[0];
                    var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript';
                    c.charset='utf-8';c.src='https://web-sdk.smartlook.com/recorder.js';h.appendChild(c);
    })(document);
                    smartlook('init', 'a1f38cc1df815a6614830f2a29067645e3d9afeb', {region: 'eu' });`}
                </script>
                {/* End smartlook anal */}

                {/*  Start of Woopra Code  */}
                <script>
                    {`

                !function(){var t,o,c,e=window,n=document,r=arguments,a="script",i=["call","cancelAction","config","identify","push","track","trackClick","trackForm","update","visit"],s=function(){var t,o=this,c=function(t){o[t]=function(){return o._e.push([t].concat(Array.prototype.slice.call(arguments,0))),o}};for(o._e=[],t=0;t<i.length;t++)c(i[t])};for(e.__woo=e.__woo||{},t=0;t<r.length;t++)e.__woo[r[t]]=e[r[t]]=e[r[t]]||new s;(o=n.createElement(a)).async=1,o.src="https://static.woopra.com/js/w.js",(c=n.getElementsByTagName(a)[0]).parentNode.insertBefore(o,c)}("woopra");

                woopra.config({
                    domain: "ninjaondra321.github.io",
                    outgoing_tracking: true,
                    download_tracking: true,
                    click_tracking: true
                });
                
                woopra.track();
                    `}
                </script>
                {/* End of Woopra Code  */}

                {/* Clarity - MS */}
                <script type="text/javascript">
                    {`

    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "cs0aql3zma");
    `}
                </script>
                {/* End Clarity - MS */}

                {/* <!-- Hotjar Tracking Code for https://ninjaondra321.github.io/ProStudenty/ --> */}
                <script>
                    {`

    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:3067439,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `}
                </script>


            </Helmet>}
    </>
}

export default MojeAnalytics;