# Bundling and building
This articles might be useful for inspiration on how to approach that part

* https://medium.com/better-programming/build-your-very-own-react-component-library-and-publish-it-to-github-package-registry-192a688a51fd
* https://medium.com/better-programming/lets-build-react-components-library-part-3-b2e7aec478a2

# layout ideas

* https://bitbucket.org/opensoftgitrepo/lf-kotlin/src/master/

# Pattern and component libraries

* http://ux.mailchimp.com/patterns/grid
* https://atlaskit.atlassian.com/docs/getting-started

# A11y

* https://a11y-style-guide.com/style-guide/

# Code splitting
I'm not sure how to do this well for a component library. Does it even make sense? We also wish to support umd usage.
The umd build could perhaps be a custom component, that bundled it all. 
But how would custom builds work - can a component library trigger a code split?
The occurrence search could require that the map component was a part of the config. then you could choose at build time which to load and there could be multiple to choose from. prebundled or load from source(cdn url provided) at mount.