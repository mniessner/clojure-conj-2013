goog.provide('boids.main');
goog.require('cljs.core');
goog.require('boids.behaviors');
goog.require('boids.behaviors');
goog.require('boids.view');
goog.require('boids.view');
goog.require('boids.euclidean_vector');
goog.require('boids.euclidean_vector');
goog.provide('boids.main.Boid');

/**
* @constructor
* @param {*} pos
* @param {*} vel
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
boids.main.Boid = (function (pos,vel,__meta,__extmap){
this.pos = pos;
this.vel = vel;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
boids.main.Boid.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__3508__auto__){var self__ = this;
var this__3508__auto____$1 = this;var h__3363__auto__ = self__.__hash;if(!((h__3363__auto__ == null)))
{return h__3363__auto__;
} else
{var h__3363__auto____$1 = cljs.core.hash_imap.call(null,this__3508__auto____$1);self__.__hash = h__3363__auto____$1;
return h__3363__auto____$1;
}
});
boids.main.Boid.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__3513__auto__,k__3514__auto__){var self__ = this;
var this__3513__auto____$1 = this;return cljs.core._lookup.call(null,this__3513__auto____$1,k__3514__auto__,null);
});
boids.main.Boid.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__3515__auto__,k5933,else__3516__auto__){var self__ = this;
var this__3515__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k5933,new cljs.core.Keyword(null,"pos","pos",1014015430)))
{return self__.pos;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k5933,new cljs.core.Keyword(null,"vel","vel",1014020879)))
{return self__.vel;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k5933,else__3516__auto__);
} else
{return null;
}
}
}
});
boids.main.Boid.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__3520__auto__,k__3521__auto__,G__5932){var self__ = this;
var this__3520__auto____$1 = this;var pred__5935 = cljs.core.keyword_identical_QMARK_;var expr__5936 = k__3521__auto__;if(pred__5935.call(null,new cljs.core.Keyword(null,"pos","pos",1014015430),expr__5936))
{return (new boids.main.Boid(G__5932,self__.vel,self__.__meta,self__.__extmap,null));
} else
{if(pred__5935.call(null,new cljs.core.Keyword(null,"vel","vel",1014020879),expr__5936))
{return (new boids.main.Boid(self__.pos,G__5932,self__.__meta,self__.__extmap,null));
} else
{return (new boids.main.Boid(self__.pos,self__.vel,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__3521__auto__,G__5932),null));
}
}
});
boids.main.Boid.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__3527__auto__,writer__3528__auto__,opts__3529__auto__){var self__ = this;
var this__3527__auto____$1 = this;var pr_pair__3530__auto__ = (function (keyval__3531__auto__){return cljs.core.pr_sequential_writer.call(null,writer__3528__auto__,cljs.core.pr_writer,""," ","",opts__3529__auto__,keyval__3531__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__3528__auto__,pr_pair__3530__auto__,"#boids.main.Boid{",", ","}",opts__3529__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,new cljs.core.Keyword(null,"pos","pos",1014015430),self__.pos),cljs.core.vector.call(null,new cljs.core.Keyword(null,"vel","vel",1014020879),self__.vel)], true),self__.__extmap));
});
boids.main.Boid.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__3518__auto__,entry__3519__auto__){var self__ = this;
var this__3518__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__3519__auto__))
{return cljs.core._assoc.call(null,this__3518__auto____$1,cljs.core._nth.call(null,entry__3519__auto__,0),cljs.core._nth.call(null,entry__3519__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__3518__auto____$1,entry__3519__auto__);
}
});
boids.main.Boid.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__3525__auto__){var self__ = this;
var this__3525__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,new cljs.core.Keyword(null,"pos","pos",1014015430),self__.pos),cljs.core.vector.call(null,new cljs.core.Keyword(null,"vel","vel",1014020879),self__.vel)], true),self__.__extmap));
});
boids.main.Boid.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__3517__auto__){var self__ = this;
var this__3517__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
boids.main.Boid.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__3509__auto__,other__3510__auto__){var self__ = this;
var this__3509__auto____$1 = this;if(cljs.core.truth_((function (){var and__2950__auto__ = other__3510__auto__;if(cljs.core.truth_(and__2950__auto__))
{var and__2950__auto____$1 = (this__3509__auto____$1.constructor === other__3510__auto__.constructor);if(and__2950__auto____$1)
{return cljs.core.equiv_map.call(null,this__3509__auto____$1,other__3510__auto__);
} else
{return and__2950__auto____$1;
}
} else
{return and__2950__auto__;
}
})()))
{return true;
} else
{return false;
}
});
boids.main.Boid.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__3512__auto__,G__5932){var self__ = this;
var this__3512__auto____$1 = this;return (new boids.main.Boid(self__.pos,self__.vel,G__5932,self__.__extmap,self__.__hash));
});
boids.main.Boid.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__3511__auto__){var self__ = this;
var this__3511__auto____$1 = this;return self__.__meta;
});
boids.main.Boid.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__3522__auto__,k__3523__auto__){var self__ = this;
var this__3522__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"pos","pos",1014015430),null,new cljs.core.Keyword(null,"vel","vel",1014020879),null], true),k__3523__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__3522__auto____$1),self__.__meta),k__3523__auto__);
} else
{return (new boids.main.Boid(self__.pos,self__.vel,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__3523__auto__)),null));
}
});
boids.main.Boid.cljs$lang$type = true;
boids.main.Boid.cljs$lang$ctorPrSeq = (function (this__3547__auto__){return cljs.core.list.call(null,"boids.main/Boid");
});
boids.main.Boid.cljs$lang$ctorPrWriter = (function (this__3547__auto__,writer__3548__auto__){return cljs.core._write.call(null,writer__3548__auto__,"boids.main/Boid");
});
boids.main.__GT_Boid = (function __GT_Boid(pos,vel){return (new boids.main.Boid(pos,vel));
});
boids.main.map__GT_Boid = (function map__GT_Boid(G__5934){return (new boids.main.Boid(new cljs.core.Keyword(null,"pos","pos",1014015430).cljs$core$IFn$_invoke$arity$1(G__5934),new cljs.core.Keyword(null,"vel","vel",1014020879).cljs$core$IFn$_invoke$arity$1(G__5934),null,cljs.core.dissoc.call(null,G__5934,new cljs.core.Keyword(null,"pos","pos",1014015430),new cljs.core.Keyword(null,"vel","vel",1014020879))));
});
/**
* Returns a new boid with a random position on the screen.
*/
boids.main.create_boid = (function create_boid(){return boids.main.__GT_Boid.call(null,cljs.core.PersistentVector.fromArray([cljs.core.rand_int.call(null,window.innerWidth),cljs.core.rand_int.call(null,window.innerHeight)], true),cljs.core.PersistentVector.fromArray([0,0], true));
});
boids.main.default_options = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"goal-weight","goal-weight",780244452),new cljs.core.Keyword(null,"cohere-distance","cohere-distance",2848891832),new cljs.core.Keyword(null,"goal","goal",1017082501),new cljs.core.Keyword(null,"align-distance","align-distance",2573697327),new cljs.core.Keyword(null,"steer-force","steer-force",745210721),new cljs.core.Keyword(null,"cohesion-weight","cohesion-weight",4166459897),new cljs.core.Keyword(null,"max-speed","max-speed",3642954256),new cljs.core.Keyword(null,"avoidance-weight","avoidance-weight",3052491667),new cljs.core.Keyword(null,"avoid-distance","avoid-distance",3080363199),new cljs.core.Keyword(null,"alignment-weight","alignment-weight",828156180)],[1,300,cljs.core.PersistentVector.fromArray([400,400], true),200,0.1,1,6,1,50,1]);
/**
* Cross-browser wrapper for requestAnimationFrame
*/
boids.main.requestAnimationFrame = (function requestAnimationFrame(callback){if(cljs.core.truth_(window.requestAnimationFrame))
{return window.requestAnimationFrame(callback);
} else
{if(cljs.core.truth_(window.webkitRequestAnimationFrame))
{return window.webkitRequestAnimiationFrame(callback);
} else
{if(cljs.core.truth_(window.mozRequestAnimationFrame))
{return window.mozRequestAnimationFrame(callback);
} else
{if(cljs.core.truth_(window.msRequestAnimationFrame))
{return window.msRequestAnimationFrame(callback);
} else
{return null;
}
}
}
}
});
/**
* Starts everything
*/
boids.main.main = (function main(){var options_atom = cljs.core.atom.call(null,boids.main.default_options);var flock_atom = cljs.core.atom.call(null,cljs.core.repeatedly.call(null,15,boids.main.create_boid));return boids.main.tick.call(null,options_atom,flock_atom);
});
/**
* The main 'loop' of the simulation.
*/
boids.main.tick = (function tick(options_atom,flock_atom){cljs.core.swap_BANG_.call(null,flock_atom,cljs.core.partial.call(null,boids.main.update_flock,cljs.core.deref.call(null,options_atom)));
return boids.main.requestAnimationFrame.call(null,(function (){return tick.call(null,options_atom,flock_atom);
}));
});
/**
* Given a flock (a seq of boids), return an updated flock
*/
boids.main.update_flock = (function update_flock(options,flock){return cljs.core.map.call(null,cljs.core.partial.call(null,boids.main.update_boid,options,flock),flock);
});
/**
* Given a collection containing the flock and an individual boid,
* return an updated boid, using the provided options.
*/
boids.main.update_boid = (function update_boid(options,flock,boid){var desired_velocity = boids.euclidean_vector.add.call(null,new cljs.core.Keyword(null,"vel","vel",1014020879).cljs$core$IFn$_invoke$arity$1(boid),boids.main.acceleration.call(null,options,flock,boid));var velocity = boids.euclidean_vector.limit.call(null,desired_velocity,new cljs.core.Keyword(null,"max-speed","max-speed",3642954256).cljs$core$IFn$_invoke$arity$1(options));return cljs.core.assoc.call(null,boid,new cljs.core.Keyword(null,"pos","pos",1014015430),boids.euclidean_vector.add.call(null,new cljs.core.Keyword(null,"pos","pos",1014015430).cljs$core$IFn$_invoke$arity$1(boid),velocity),new cljs.core.Keyword(null,"vel","vel",1014020879),velocity);
});
/**
* Returns an acceleration vector for the given boid.
*/
boids.main.acceleration = (function acceleration(options,flock,boid){return cljs.core.reduce.call(null,boids.euclidean_vector.add,cljs.core.map.call(null,(function (p__5940){var vec__5941 = p__5940;var behavior = cljs.core.nth.call(null,vec__5941,0,null);var option_weight_key = cljs.core.nth.call(null,vec__5941,1,null);return boids.euclidean_vector.mul.call(null,behavior.call(null,options,flock,boid),options.call(null,option_weight_key));
}),cljs.core.PersistentArrayMap.fromArray([boids.behaviors.cohesion,new cljs.core.Keyword(null,"cohesion-weight","cohesion-weight",4166459897),boids.behaviors.avoidance,new cljs.core.Keyword(null,"avoidance-weight","avoidance-weight",3052491667),boids.behaviors.alignment,new cljs.core.Keyword(null,"alignment-weight","alignment-weight",828156180),boids.behaviors.goal,new cljs.core.Keyword(null,"goal-weight","goal-weight",780244452)], true)));
});
/**
* Starts everything
*/
boids.main.main = (function main(){var options_atom = cljs.core.atom.call(null,boids.main.default_options);var flock_atom = cljs.core.atom.call(null,cljs.core.repeatedly.call(null,15,boids.main.create_boid));boids.view.init.call(null,flock_atom);
return boids.main.tick.call(null,options_atom,flock_atom);
});
