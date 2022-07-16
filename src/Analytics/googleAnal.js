
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