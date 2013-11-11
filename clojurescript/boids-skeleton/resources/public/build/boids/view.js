goog.provide('boids.view');
goog.require('cljs.core');
/**
* Given an atom containing a seq of boids, initialize the view
*/
boids.view.init = (function init(flock_atom){var canvas = jQuery("<canvas>");canvas.attr("width",window.innerWidth).attr("height",window.innerHeight).appendTo(jQuery("body"));
return cljs.core.add_watch.call(null,flock_atom,new cljs.core.Keyword(null,"renderer","renderer",519058485),(function (_,___$1,___$2,flock){return boids.view.render.call(null,canvas.get(0),flock);
}));
});
/**
* Given a collection of boids, render them to the canvas
*/
boids.view.render = (function render(canvas,flock){var ctx = canvas.getContext("2d");ctx.clearRect(0,0,canvas.width,canvas.height);
var seq__4707 = cljs.core.seq.call(null,flock);var chunk__4708 = null;var count__4709 = 0;var i__4710 = 0;while(true){
if((i__4710 < count__4709))
{var boid = cljs.core._nth.call(null,chunk__4708,i__4710);boids.view.render_boid.call(null,ctx,boid);
{
var G__4711 = seq__4707;
var G__4712 = chunk__4708;
var G__4713 = count__4709;
var G__4714 = (i__4710 + 1);
seq__4707 = G__4711;
chunk__4708 = G__4712;
count__4709 = G__4713;
i__4710 = G__4714;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__4707);if(temp__4092__auto__)
{var seq__4707__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__4707__$1))
{var c__3668__auto__ = cljs.core.chunk_first.call(null,seq__4707__$1);{
var G__4715 = cljs.core.chunk_rest.call(null,seq__4707__$1);
var G__4716 = c__3668__auto__;
var G__4717 = cljs.core.count.call(null,c__3668__auto__);
var G__4718 = 0;
seq__4707 = G__4715;
chunk__4708 = G__4716;
count__4709 = G__4717;
i__4710 = G__4718;
continue;
}
} else
{var boid = cljs.core.first.call(null,seq__4707__$1);boids.view.render_boid.call(null,ctx,boid);
{
var G__4719 = cljs.core.next.call(null,seq__4707__$1);
var G__4720 = null;
var G__4721 = 0;
var G__4722 = 0;
seq__4707 = G__4719;
chunk__4708 = G__4720;
count__4709 = G__4721;
i__4710 = G__4722;
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
boids.view.render_boid = (function render_boid(ctx,boid){var vec__4725 = new cljs.core.Keyword(null,"pos","pos",1014015430).cljs$core$IFn$_invoke$arity$1(boid);var x = cljs.core.nth.call(null,vec__4725,0,null);var y = cljs.core.nth.call(null,vec__4725,1,null);var vec__4726 = new cljs.core.Keyword(null,"vel","vel",1014020879).cljs$core$IFn$_invoke$arity$1(boid);var dx = cljs.core.nth.call(null,vec__4726,0,null);var dy = cljs.core.nth.call(null,vec__4726,1,null);var angle = Math.atan2.call(null,dy,dx);ctx.save();
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
