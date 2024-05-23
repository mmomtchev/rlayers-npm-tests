# Using `rlayers` with `Next.js` 14 in `app`-mode

`rlayers` is an entirely client-side component without SSR support.

SSR support for cartography applications is very difficult since displaying a map requires prior knowledge of the exact dimensions of the browser viewport. Those dimensions are not available until the browser has executed its layout engine taking into account all the CSS.

SSR is possible only in the particular case of a map having a fixed aspect ratio. In this case the browser can download and present a prerendered static image while it is downloading the cartography application.

Although I considered implementing this idea in `rlayers`, the feature turned out to be too complex and difficult to maintain - for a very limited practical benefit.

Should there by any interest in the further development of this feature, I could eventually consider working on it again.

Thus, using `rlayers` in a fully automatic SSR environment such as Next.js 14 in `app` mode requires some tricks. Check the `index.js` and especially the `Browser` boundary component for its implementation.
