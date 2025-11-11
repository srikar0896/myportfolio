/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      key="gtag-script"
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-FR1PN1LFSD"
    />,
    <script
      key="gtag-config"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-FR1PN1LFSD');
        `,
      }}
    />,
  ])
}