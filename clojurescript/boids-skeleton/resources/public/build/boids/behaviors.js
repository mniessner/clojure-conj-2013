goog.provide('boids.behaviors');
goog.require('cljs.core');
goog.require('boids.euclidean_vector');
goog.require('boids.euclidean_vector');
/**
* Helper function to return a vector pointing from the source to the
* target, limited by the maximum force
*/
boids.behaviors.seek = (function seek(options,source,target){return boids.euclidean_vector.limit.call(null,boids.euclidean_vector.sub.call(null,target,source),new cljs.core.Keyword(null,"steer-force","steer-force",745210721).cljs$core$IFn$_invoke$arity$1(options));
});
/**
* Helper function. Given a boid and a flock, return a collection of
* the boids within a certain distance of the boid, not including the
* boid itself.
*/
boids.behaviors.nearby = (function nearby(boid,flock,dist){return cljs.core.filter.call(null,(function (p1__5881_SHARP_){return ((boids.euclidean_vector.distance.call(null,new cljs.core.Keyword(null,"pos","pos",1014015430).cljs$core$IFn$_invoke$arity$1(p1__5881_SHARP_),new cljs.core.Keyword(null,"pos","pos",1014015430).cljs$core$IFn$_invoke$arity$1(boid)) < dist)) && (cljs.core.not_EQ_.call(null,p1__5881_SHARP_,boid));
}),flock);
});
/**
* Behavior function that returns an acceleration EuclideanVector for
* a boid representing flock cohesion, using a given options map.
*/
boids.behaviors.cohesion = (function cohesion(options,flock,boid){var cohere_with = boids.behaviors.nearby.call(null,boid,flock,new cljs.core.Keyword(null,"cohere-distance","cohere-distance",2848891832).cljs$core$IFn$_invoke$arity$1(options));if((cljs.core.count.call(null,cohere_with) === 0))
{return boids.euclidean_vector.mul.call(null,new cljs.core.Keyword(null,"pos","pos",1014015430).cljs$core$IFn$_invoke$arity$1(boid),0);
} else
{var center = boids.euclidean_vector.div.call(null,cljs.core.reduce.call(null,boids.euclidean_vector.add,cljs.core.map.call(null,new cljs.core.Keyword(null,"pos","pos",1014015430),cohere_with)),cljs.core.count.call(null,cohere_with));return boids.behaviors.seek.call(null,options,new cljs.core.Keyword(null,"pos","pos",1014015430).cljs$core$IFn$_invoke$arity$1(boid),center);
}
});
/**
* Behavior function that returns an acceleration EuclideanVector for
* a boid representing avoidance of neighbors, using the given options
* map.
*/
boids.behaviors.avoidance = (function avoidance(options,flock,boid){var avoid = boids.behaviors.nearby.call(null,boid,flock,new cljs.core.Keyword(null,"avoid-distance","avoid-distance",3080363199).cljs$core$IFn$_invoke$arity$1(options));if((cljs.core.count.call(null,avoid) === 0))
{return boids.euclidean_vector.mul.call(null,new cljs.core.Keyword(null,"pos","pos",1014015430).cljs$core$IFn$_invoke$arity$1(boid),0);
} else
{var direction = cljs.core.reduce.call(null,(function (steer,pos){return boids.euclidean_vector.add.call(null,boids.euclidean_vector.scale.call(null,boids.euclidean_vector.sub.call(null,new cljs.core.Keyword(null,"pos","pos",1014015430).cljs$core$IFn$_invoke$arity$1(boid),pos),1),steer);
}),boids.euclidean_vector.mul.call(null,new cljs.core.Keyword(null,"pos","pos",1014015430).cljs$core$IFn$_invoke$arity$1(boid),0),cljs.core.map.call(null,new cljs.core.Keyword(null,"pos","pos",1014015430),avoid));return boids.euclidean_vector.limit.call(null,direction,new cljs.core.Keyword(null,"steer-force","steer-force",745210721).cljs$core$IFn$_invoke$arity$1(options));
}
});
/**
* Behavior function that returns an acceleration EuclideanVector for
* a boid representing the way a flock aligns velocities, using the
* given options map
*/
boids.behaviors.alignment = (function alignment(options,flock,boid){var align_with = boids.behaviors.nearby.call(null,boid,flock,new cljs.core.Keyword(null,"align-distance","align-distance",2573697327).cljs$core$IFn$_invoke$arity$1(options));if((cljs.core.count.call(null,align_with) === 0))
{return boids.euclidean_vector.mul.call(null,new cljs.core.Keyword(null,"pos","pos",1014015430).cljs$core$IFn$_invoke$arity$1(boid),0);
} else
{var s = cljs.core.reduce.call(null,boids.euclidean_vector.add,cljs.core.map.call(null,new cljs.core.Keyword(null,"vel","vel",1014020879),flock));var avg = boids.euclidean_vector.div.call(null,s,cljs.core.count.call(null,flock));var dir = boids.euclidean_vector.scale.call(null,avg,new cljs.core.Keyword(null,"max-speed","max-speed",3642954256).cljs$core$IFn$_invoke$arity$1(options));var steer = boids.euclidean_vector.sub.call(null,dir,new cljs.core.Keyword(null,"vel","vel",1014020879).cljs$core$IFn$_invoke$arity$1(boid));return boids.euclidean_vector.limit.call(null,steer,new cljs.core.Keyword(null,"steer-force","steer-force",745210721).cljs$core$IFn$_invoke$arity$1(options));
}
});
/**
* Behavior function that returns an acceleration EuclideanVector towards a specific point,
* using the given options map.
*/
boids.behaviors.goal = (function goal(options,flock,boid){return boids.behaviors.seek.call(null,options,new cljs.core.Keyword(null,"pos","pos",1014015430).cljs$core$IFn$_invoke$arity$1(boid),new cljs.core.Keyword(null,"goal","goal",1017082501).cljs$core$IFn$_invoke$arity$1(options));
});
