import React from 'react';

module.exports = function Default({ title, children, bodyStyle, headerStyle }) {
  return (
    <div>
      <html>
        <head>
          <meta charset="utf-8" />
          <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta name="description" content="Dev Squared is a developer's greatest asset for development!" />
          <meta name="og:description" content="Dev Squared is a developer's greatest asset for development!"/>
          <meta name="og:title" content="Dev Squared"/>
          <meta name="og:image" content="./dev_squared.png"/>
          <link rel="apple-touch-icon" href="%PUBLIC_URL%/favicon.ico" />
          <title>Dev Squared</title>
          {/* <title>{title}</title> */}
        </head>
        <body style={bodyStyle}>
        <h1 style={headerStyle}>{title}</h1>
        {children}
        </body>
      </html>
    </div>
  );
};