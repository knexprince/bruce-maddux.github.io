(this["webpackJsonpmy-website"]=this["webpackJsonpmy-website"]||[]).push([[4],{68:function(e,i,t){"use strict";t.r(i),t.d(i,"ion_phaser",(function(){return o}));var n=t(18),a=t.n(n),s=t(35),r=t(9),c=t(10),u=t(36),o=function(){function e(i){var t=this;Object(r.a)(this,e),Object(u.d)(this,i),this.initialize=!0,this.initializeGame=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.game;if(null!==e&&void 0!==e){if(void 0!==e.instance&&null!==e.instance)throw new Error("A Phaser game already exist");e.parent=e.parent||t.el,e.instance=new Phaser.Game(e)}}}return Object(c.a)(e,[{key:"onGameChange",value:function(e){this.initialize&&!this.hasInitialized()&&this.initializeGame(e)}},{key:"onInitialize",value:function(e,i){e&&!i&&this.initializeGame()}},{key:"getInstance",value:function(){var e=Object(s.a)(a.a.mark((function e(){var i,t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=this.game||{},t=i.instance,e.abrupt("return",Promise.resolve(t));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"destroy",value:function(){var e=Object(s.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.hasInitialized()&&(this.game.instance.destroy(!0),this.game.instance=null);case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"connectedCallback",value:function(){!this.hasInitialized()&&this.initialize&&this.initializeGame()}},{key:"disconnectedCallback",value:function(){this.destroy()}},{key:"hasInitialized",value:function(){return this.game&&void 0!==this.game.instance&&null!==this.game.instance}},{key:"el",get:function(){return Object(u.b)(this)}}],[{key:"watchers",get:function(){return{game:["onGameChange"],initialize:["onInitialize"]}}}]),e}();o.style="ion-phaser{display:block}"}}]);
//# sourceMappingURL=4.f853def6.chunk.js.map