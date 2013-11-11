goog.addDependency("base.js", ['goog'], []);
goog.addDependency("../cljs/core.js", ['cljs.core'], ['goog.array', 'goog.array', 'goog.object', 'goog.object', 'goog.string.StringBuffer', 'goog.string.StringBuffer', 'goog.string', 'goog.string']);
goog.addDependency("../boids/view.js", ['boids.view'], ['cljs.core']);
goog.addDependency("../boids/euclidean-vector.js", ['boids.euclidean_vector'], ['cljs.core']);
goog.addDependency("../boids/behaviors.js", ['boids.behaviors'], ['cljs.core', 'boids.euclidean_vector']);
goog.addDependency("../boids/main.js", ['boids.main'], ['cljs.core', 'boids.behaviors', 'boids.euclidean_vector', 'boids.view']);