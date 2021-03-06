PlayScala 2.5 + Vue.js 2.0 Seed
=================================

# Rationale
Binding __Play__ framework backend to __Vue.js__ components.
Promise-enabled fetching of Twirl templates which in turn are proccessed by Vue.js API.
Let Playframework do the routing, resource provisioning, etc. Scalability of the backend, i18n support, etc. is unrivaled in comparison to messy NPM ecosystem.
Let Vue.js take care of the component modularisation, even-handling and reactivity of the whole client-side front-end rendering.

# Challenges
Syntactical nuances when combining Twirl directives with Vue.js DSL. For instance, these two cannot co-exist on the same line of code, and as such care must be taken when devising separation of concerns between server-side and client-side rendering. Escape Twirl @.

# Vue.js Is Reactive
Use an empty "Vue" instance to create a flat hierarchy of components and communicate by emitting events on event bus.

# TODOs
* Babel transpiler integrated into SbtWeb is currently not ideally explored. Bring ecmascript 2016/1017 into the app.js and templates so that the amount of boilerplate code is reduced.

* RequireJS modularisation is very basic. Is there any way SBT can understand other bundlers, such as Webpack? 

#Sample App Time Tracking App
Time-tracking app inspired by Vue.js Time-tracking tutorial: https://github.com/chenkie/vue-node-time-tracker

![Alt text](public/screenshot.png?raw=true "Title")
