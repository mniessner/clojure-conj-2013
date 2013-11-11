goog.provide('boids.view');
goog.require('cljs.core');
/**
* Given an atom containing a seq of boids, initialize the view
*/
boids.view.init = (function init(flock_atom){var canvas = document.createElement("canvas");canvas.setAttribute("width",window.innerWidth);
canvas.setAttribute("height",window.innerHeight);
document.body.appendChild(canvas);
return cljs.core.add_watch.call(null,flock_atom,new cljs.core.Keyword(null,"renderer","renderer",519058485),(function (_,___$1,___$2,flock){return boids.view.render.call(null,canvas,flock);
}));
});
/**
* Given a collection of boids, render them to the canvas
*/
boids.view.render = (function render(canvas,flock){var ctx = canvas.getContext("2d");ctx.clearRect(0,0,canvas.width,canvas.height);
var seq__5966 = cljs.core.seq.call(null,flock);var chunk__5967 = null;var count__5968 = 0;var i__5969 = 0;while(true){
if((i__5969 < count__5968))
{var boid = cljs.core._nth.call(null,chunk__5967,i__5969);boids.view.render_boid.call(null,ctx,boid);
{
var G__5970 = seq__5966;
var G__5971 = chunk__5967;
var G__5972 = count__5968;
var G__5973 = (i__5969 + 1);
seq__5966 = G__5970;
chunk__5967 = G__5971;
count__5968 = G__5972;
i__5969 = G__5973;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__5966);if(temp__4092__auto__)
{var seq__5966__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5966__$1))
{var c__3668__auto__ = cljs.core.chunk_first.call(null,seq__5966__$1);{
var G__5974 = cljs.core.chunk_rest.call(null,seq__5966__$1);
var G__5975 = c__3668__auto__;
var G__5976 = cljs.core.count.call(null,c__3668__auto__);
var G__5977 = 0;
seq__5966 = G__5974;
chunk__5967 = G__5975;
count__5968 = G__5976;
i__5969 = G__5977;
continue;
}
} else
{var boid = cljs.core.first.call(null,seq__5966__$1);boids.view.render_boid.call(null,ctx,boid);
{
var G__5978 = cljs.core.next.call(null,seq__5966__$1);
var G__5979 = null;
var G__5980 = 0;
var G__5981 = 0;
seq__5966 = G__5978;
chunk__5967 = G__5979;
count__5968 = G__5980;
i__5969 = G__5981;
continue;
}
}
} else
{return null;
}
}
break;
}
});
/**
* Renders a boid, complete with placement and rotation
*/
boids.view.render_boid = (function render_boid(ctx,boid){var vec__5984 = new cljs.core.Keyword(null,"pos","pos",1014015430).cljs$core$IFn$_invoke$arity$1(boid);var x = cljs.core.nth.call(null,vec__5984,0,null);var y = cljs.core.nth.call(null,vec__5984,1,null);var vec__5985 = new cljs.core.Keyword(null,"vel","vel",1014020879).cljs$core$IFn$_invoke$arity$1(boid);var dx = cljs.core.nth.call(null,vec__5985,0,null);var dy = cljs.core.nth.call(null,vec__5985,1,null);var angle = Math.atan2.call(null,dy,dx);ctx.save();
ctx.translate(x,y);
ctx.rotate(angle);
ctx.beginPath();
ctx.moveTo(5,0);
ctx.lineTo(-5,-3);
ctx.lineTo(-5,3);
ctx.lineTo(5,0);
ctx.lineWidth = 1;
ctx.strokeStyle = "black";
ctx.stroke();
return ctx.restore();
});
