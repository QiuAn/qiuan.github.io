/*!
 * condesire.com - License: MIT
 */
! function(t) {
	"use strict";
	t.app = t.app || {};
	var i = {
		READY_DOCUMENT: "appevent.ready_document",
		COMPLETE_LOADING: "appevent.open_content"
	};
	cd.time(), app.DEBUG_MODE = cd.debugMode(), app.DEBUG = 1 == app.DEBUG_MODE, app.CLICK = (cd.ua.iPad, "click"), app.LOADING_DURATION = 1 == app.DEBUG_MODE ? 100 : 600, app.KV_RECRUIT_DURATION = 1 == app.DEBUG_MODE ? 2e3 : 4e3, app.KV_DURATION = 4e3, app.BTN_DELAY = app.IS_TOP ? 600 : 400, app.BTN_DELAY = 1 == app.DEBUG_MODE ? 0 : app.BTN_DELAY, app.CONCEPT_SLIDER_DURATION = 2500, app.loader = new cd.lib.Loader, app.is_screen_max = function() {
		return "1800px" == $(".l-content").css("max-width")
	}, app.ready_document = function() {
		app.init_resize(), app.init_pjax(), app.init()
	}, app.ready_loader = function() {
		var t = $(".loader_img--last"),
			i = {
				per: 0
			},
			e = app.loader;
		e.removeListener(cd.lib.Loader.PROGRESS), e.addListener(cd.lib.Loader.PROGRESS, function() {
			i.per = e.percent, app.update_loader(i)
		}), app.update_loader = function(i) {
			t.css({
				width: i.per + "%"
			})
		}
	}, app.init = function() {
		var t = $(".kv_obj");
		app.loader.set_image(t[0] ? t.first().attr("src") : $("img").first().attr("src")), app.$wrap = $(".wrap");
		var e = cd.seq();
		e.add(this, function() {
			TweenMax.to($(".lang"), 0, {
				transformPerspective: 1500,
				rotationY: -90,
				transformOrigin: "left bottom"
			}), TweenMax.to($(".kv-controls"), 0, {
				transformPerspective: 1500,
				rotationY: 90,
				transformOrigin: "right bottom"
			}), TweenMax.to($(".side_outline"), 0, {
				transformPerspective: 1500,
				rotationY: 90,
				transformOrigin: "right bottom"
			}), TweenMax.to($(".search"), 0, {
				y: "100%",
				opacity: 0
			}), TweenMax.to($(".sns"), 0, {
				y: "100%",
				opacity: 0
			}), TweenMax.to($(".site-header"), 0, {
				y: "-60%",
				opacity: 0
			}), TweenMax.to($(".h_link"), 0, {
				x: "60%",
				opacity: 0
			})
		});
		var s = app.LOADING_DURATION - cd.timeEnd();
		cd.log("app.loading_duration", s), e.addWait(s), e.add(this, function() {
			var t = $(".kv-caption_inner"),
				i = $(".kv-caption");
			i.css({
				width: t.outerWidth(!0) + 10,
				height: t.outerHeight(!0),
				borderWidth: 10
			}), app.resize()
		}), app.DEBUG && app.$loader.css({
			transition: "0.001s ease"
		}), e.addClass(app.$loader, "hide"), e.add(this, function() {
			$(".site-content").show(), app.seq.enqueue(i.COMPLETE_LOADING), app.init_unimedia_logo(), app.resize(), BackgroundCheck.refresh(), cd.addClass($(".kv_inner"), "ready", function() {
				BackgroundCheck.refresh()
			}), setTimeout(function() {
				cd.addClass($(".kv-svg"), "show", function() {
					app.init_kv()
				}), app.DEBUG || cd.invoke(app.kv_recruit, "start")
			}, 140), app.update_loader({
				per: 0
			})
		}), e.addWait(app.BTN_DELAY), e.add(this, function() {
			$(".kv_head, .search, .sns, .site-footer").addClass("show"), TweenMax.to($(".lang"), .4, {
				transformPerspective: 1500,
				rotationY: 0,
				transformOrigin: "left bottom"
			}), TweenMax.to($(".kv-controls"), .4, {
				transformPerspective: 1500,
				rotationY: 0,
				transformOrigin: "right bottom"
			}), TweenMax.to($(".side_outline"), .4, {
				transformPerspective: 1500,
				rotationY: 0,
				transformOrigin: "right bottom"
			}), TweenMax.to($(".search"), .5, {
				y: "0%",
				opacity: 1,
				ease: Expo.easeInOut
			}), TweenMax.to($(".sns"), .5, {
				y: "0%",
				opacity: 1,
				ease: Expo.easeInOut
			}), TweenMax.to($(".site-header"), .5, {
				y: "0%",
				opacity: 1,
				ease: Expo.easeInOut
			}), TweenMax.to($(".h_link"), .4, {
				x: "0%",
				opacity: 1,
				ease: Expo.easeInOut,
				onComplete: function() {
					$(this.target).css({
						transform: "",
						opacity: ""
					}), BackgroundCheck.refresh()
				}
			})
		}), e.add(this, function() {
			app.init_top_news(), app.init_map(), app.w.trigger("scroll"), setTimeout(function() {
				if (!_.isEmpty(location.hash)) {
					var t = $(location.hash);
					t[0] && $.scrollTo(t.offset().top)
				}
			}, 100)
		}), app.loader.addListener(cd.lib.Loader.COMPLETE, function() {
			e.start()
		}), app.init_ie8(), app.init_common(), app.init_top_concept(), app.init_super(), app.init_lazy(), app.init_overlay_class(), app.init_wrapper(), app.init_header(), app.init_header_link(), app.init_nav(), app.init_side(), app.init_search(), app.init_contact(), app.init_company(), app.init_recruit(), app.init_recruit_form(), app.init_feature(), app.init_news(), app.init_more_btn()
	}, app.ready = function() {}, app.load_pjax = function() {
		cd.log("app.load_pjax"), app.$wrap = $(".wrap"), app.init()
	}, app.init_resize = function() {
		app.w.off("resize.app").onex("resize.app", function() {
			app.resize()
		}).trigger("resize")
	}, app.resize = function() {
		cd.log("app.resize");
		var t = app.w.width(),
			i = app.w.height();
		app.ww = t, app.wh = t, $(".js-kv, .js-kv-slide").css({
			width: t,
			height: i
		});
		var e = $(".js-nav-items");
		if (e.css({
				height: i - 80
			}), cd.ua.ltIE8 || $(".js-flatten").flatten(), app.is_screen_max()) $(".js-flatten01").flatten02(function() {
			$(".js-top-news").css({
				height: $(".js-tile-right").height() - 151
			})
		}), $(".js-flatten02").flatten02(function() {
			$(".js-top-news").css({
				height: $(".js-tile-right").height() - 151
			})
		}), $(".tile_row > *").not(".js-flatten01, .js-flatten02").css({
			height: ""
		});
		else {
			$(".js-flatten01, .js-flatten02").css({
				height: ""
			}), $(".js-top-news").css({
				height: ""
			});
			var s = $(".tile_row > *");
			s.flatten02()
		}
		var a = $(".js-fit-image"),
			n = $(".js-fit-image-width-half"),
			o = $(".js-fit-image-height-half");
		a.fitIframe(t, i), n.fitIframe(t / 2, i), o.fitIframe(t / 2, i / 2);
		var r = $(".js-side-right"),
			p = ($(".side_mask"), $(".side_outline")),
			h = $(".js-page-nav"),
			c = p.height(),
			l = (i - c) / 2;
		r.css({
			height: p.height(),
			bottom: l
		}), h.css({
			bottom: l
		});
		var d = $(".news-side-btn");
		d.css({
			top: (i - d.height()) / 2
		});
		var u = $(".news-nav");
		u.each(function(t, e) {
			var s = $(e);
			s.css({
				top: (i - s.height()) / 2
			})
		}), $(".js-image-size").size();
		var f = $(".entry");
		if (f[0]) {
			var v = $(".entry_obj");
			v.fitImage(f.width(), f.height())
		}
		cd.invoke(app.top_sp, "resize");
		var g = $(".js-kv-caption"),
			_ = $(".kv_caption");
		_[0] || (_ = g), cd.ua.ltIE8 ? (g = g.add(".kv-svg"), g.css({
			top: (i - _.outerHeight()) / 2
		})) : g.css({
			top: i / 2
		}), $(".js-vm").verticalMiddle(), $(".js-top-half").topHalf(), $(".special-introduction_caption").css({
			height: $(".special-introduction_img").height()
		}), cd.invoke(app.feature, "resize"), cd.invoke(app.sliders, "resize"), BackgroundCheck.refresh()
	}, app.init_feature = function() {
		$.fn.fitFeature = function(t, i, e) {
			t = t || this.width(), i = i || this.height(), e = e || function() {}, this.each(function(s, a) {
				var n = $(a),
					o = n.siblings(".js-feature-caption"),
					r = n.find("img"),
					p = r.attr("width"),
					h = r.attr("height"),
					c = p / h;
				if (c >= t / i) {
					var l = i * c,
						d = (l - t) / 2;
					r.css({
						width: l,
						height: i,
						top: 0,
						left: -d
					}), n.height(i), o.css({
						height: "",
						marginTop: ""
					})
				} else {
					var u = t / c,
						f = 0;
					r.css({
						width: t,
						height: u,
						top: -f,
						left: 0
					}), n.height(""), o.css({
						marginTop: (o.parent().height() - o.outerHeight()) / 2
					})
				}
				e.apply(this, [a])
			})
		};
		var t = function() {
			var t = this;
			this.$imgs = $(".js-feature"), this.$imgs.imagesLoaded().progress(function(i, e) {
				t.resize()
			})
		};
		t.prototype.resize = function() {
			this.$imgs.each(function(t, i) {
				var e = $(i),
					s = e.siblings(".js-feature-caption"),
					a = s.outerWidth(!0),
					n = s.outerHeight(!0);
				e.fitFeature(a, n)
			})
		}, app.feature = new t
	}, app.init_ie8 = function() {
		if (cd.ua.ltIE8) {
			var t = function() {};
			t.refresh = function() {}, t.init = function() {}, window.BackgroundCheck = t
		}
	}, app.init_recruit_form = function() {
		var t = $(".recruit-form_btn");
		t.each(function(t, i) {
			var e = $(i);
			e.off(app.CLICK).on(app.CLICK, function(t) {
				var i = e.siblings(".recruit-form_body");
				e.toggleClass("open"), i.slideToggle(300, "easeInOutQuart", function(t) {
					$(this).is(":visible") ? e.find(".plus").addClass("open") : e.find(".plus").removeClass("open")
				})
			}), e.hover(function() {
				$(this).find(".plus").addClass("hover")
			}, function() {
				$(this).find(".plus").removeClass("hover")
			})
		});
		var i = $(".js-inquiry").data("placeholder");
		$(".contact option:first:contains('---')").text(i)
	}, app.init_recruit = function() {
		var t = function(t) {
			var i = this;
			this.$target = t, this.$inner = this.$target.find(".slider_inner"), this.$body = this.$target.find(".slide_inner"), this.$btn = this.$target.find(".slider-control_open, .slide_img"), this.$obj = this.$target.find(".slide_obj"), this.$caption = this.$target.find(".slide_caption"), this.isOpen = !1, this.height = this.$target.height(), this.$obj.imagesLoaded(function() {
				i._init()
			})
		};
		t.prototype._init = function() {
			var t = this;
			this.$btn.off(app.CLICK).on(app.CLICK, function() {
				t.isOpen ? t.close() : t.open()
			}), this.close(), this.resize()
		}, t.prototype._get_height = function() {
			var t = this._get_obj_height(),
				i = 0;
			return this.$body.each(function(t, e) {
				var s = $(e);
				s.outerHeight(!0) > i && (i = s.outerHeight(!0))
			}), t + i
		}, t.prototype._get_obj_height = function() {
			var t = 0;
			return this.$obj.each(function(i, e) {
				var s = $(e).height();
				s > t && (t = s)
			}), t
		}, t.prototype.resize = function() {
			this.$target.css(this.isOpen ? {
				height: this._get_height()
			} : {
				height: .72 * this._get_obj_height()
			}), this.$inner.css({
				height: this._get_height()
			})
		}, t.prototype.open = function(t) {
			this.$target.animate({
				height: this._get_height()
			}, {
				easing: "easeInOutQuart",
				complete: function() {
					cd.invoke(arguments, t)
				}
			}), this.$caption.animate({
				height: this._get_obj_height()
			}, {
				easing: "easeInOutQuart"
			}), this.isOpen = !0, this.$btn.addClass("open"), $.scrollTo(this.$target.offset().top, 400)
		}, t.prototype.close = function() {
			this.$target.animate({
				height: .72 * this._get_obj_height()
			}, {
				easing: "easeInOutQuart"
			}), this.$caption.animate({
				height: .72 * this._get_obj_height()
			}, {
				easing: "easeInOutQuart"
			}), this.isOpen = !1, this.$btn.removeClass("open")
		};
		var i = function(t) {
			cd.extend(this, cd.event.Dispatcher), this.is_init = !1, this.$slider = t, this.$inner = this.$slider.find(".slider_inner"), this.$slide = this.$slider.find(".slide"), this.$prev = this.$slider.find(".slider-control_prev"), this.$next = this.$slider.find(".slider-control_next"), this.list = this.$slide.toArray(), this.index = -1
		};
		i.NEXT = "Slider.next", i.PREV = "Slider.prev", i.prototype._init = function() {
			if (!this.is_init) {
				var i = this;
				this.$pager = $('<div class="slider-pager" />'), this.$inner.append(this.$pager), _.each(this.list, function() {
					i.$pager.append('<div class="slider-pager_page" />')
				}), this.$prev.off(app.CLICK).on(app.CLICK, function() {
					i.prev()
				}), this.$next.off(app.CLICK).on(app.CLICK, function() {
					i.next()
				}), this.$slider.hasClass("js-opener") && (this.opener = new t(this.$slider)), this["goto"](0), this.is_init = !0
			}
		}, i.prototype._update_pager = function() {
			this.$pager.children().removeClass("active");
			var t = this.$pager.children().eq(this.index);
			t.addClass("active")
		}, i.prototype.resize = function() {
			var t = 0;
			_.each(this.list, function(i, e, s) {
				var a = $(i);
				a.outerHeight(!0) > t && (t = a.outerHeight(!0))
			}), this.is_init && this.opener ? this.opener.resize() : this.$slider.css({
				height: t
			}), this.$slider.height() > 0 && this._init()
		}, i.prototype["goto"] = function(t) {
			if (this.index != t) {
				this.index = t;
				var i = $(this.list[this.index]);
				this.$slide.removeClass("current").stop().animate({
					opacity: 0,
					visibility: "hidden",
					position: "absolute"
				}, {
					duration: 600
				}), i.css({
					visibility: "visible",
					position: ""
				}), i.stop().animate({
					opacity: 1
				}, {
					duration: 300,
					complete: function() {}
				}), i.addClass("current"), this._update_pager()
			}
		}, i.prototype.last = function() {
			this["goto"](this.list.length - 1)
		}, i.prototype.prev = function() {
			var t = this.index - 1;
			0 > t ? (t = this.list.length - 1, this["goto"](t), this.dispatch(i.PREV, this)) : this["goto"](t)
		}, i.prototype.next = function() {
			var t = this.index + 1;
			t > this.list.length - 1 ? (t = 0, this["goto"](t), this.dispatch(i.NEXT, this)) : this["goto"](t)
		}, i.prototype.close = function() {
			cd.invoke(this.opener, "close")
		}, i.prototype.open = function() {
			if (this.opener) {
				this.opener.open(function() {})
			}
		};
		var e = function() {
			var t = this;
			this.list = [];
			var e = $(".slider");
			e.each(function(e, s) {
				var a = new i($(s));
				t.list.push(a)
			})
		};
		e.prototype.onPrev = function(t) {
			var i = this.list.indexOf(t);
			if (i--, 0 > i) i = 0;
			else {
				t.close();
				var e = this.list[i];
				e.open(), e.last()
			}
		}, e.prototype.onNext = function(t) {
			var i = this.list.indexOf(t);
			if (i++, i > this.list.length - 1) i = this.list.length - 1;
			else {
				t.close();
				var e = this.list[i];
				e.open(), e["goto"](0)
			}
		}, e.prototype.resize = function() {
			_.each(this.list, function(t) {
				t.resize()
			})
		}, app.sliders = new e;
		var s = function() {
			this.index = -1, this.$kv = $(".kv_fade"), this.list = this.$kv.toArray(), this.is_init = !1, this.$kv[0] && this._init()
		};
		s.prototype._init = function() {
			$(this.list[0]).css({
				opacity: 1
			}), this.is_init = !0
		}, s.prototype._get_current = function() {
			return $(this.list[this.index])
		}, s.prototype._update = function(t) {
			var i = this;
			this.index = t;
			var e = this._get_current(),
				s = e.find("img");
			cd.ua.ltIE8 ? (i.$kv.fadeOut(), e.fadeIn()) : (i.$kv.removeClass("current"), cd.addClass(s, "scale", function(t) {
				s.removeClass("scale")
			}, !0), e.addClass("current"))
		}, s.prototype._next = function() {
			var t = this.index;
			t++, t > this.list.length - 1 && (t = 0), this._update(t)
		}, s.prototype.start = function() {
			if (this.is_init) {
				var t = this,
					i = this.$kv.css("transition-duration");
				i = i ? i.replace("s", "") : 5, i = parseInt(i, 10), i += 2, t._next(), setInterval(function() {
					t._next()
				}, 1e3 * i)
			}
		};
		var a = new s;
		app.kv_recruit = a
	}, app.init_company = function() {
		var t = function() {
			this.$director = $(".director"), this.$overlay = $(".director-overlay"), this.$caption = $(".director_caption"), this.length = this.$director.length, this.index = -1, this._init()
		};
		t.prototype._init = function() {
			var t = this;
			this.$overlay.hide(), this.$director.each(function(i, e) {
				var s = $(e),
					a = s.index(),
					n = t._getCurrent(a);
				s.on("click", function() {
					t.open($(this).index())
				});
				var o = n.find(".director-overlay_close");
				o.on("click", function() {
					t.close()
				});
				var r = n.find(".director-overlay_prev");
				r.on("click", function() {
					t.prev()
				});
				var p = n.find(".director-overlay_next");
				p.on("click", function() {
					t.next()
				})
			}), this.$caption.hover(function() {
				$(this).siblings(".director_img").addClass("hover")
			}, function() {
				$(this).siblings(".director_img").removeClass("hover")
			})
		}, t.prototype._getCurrent = function(t) {
			return this.$overlay.eq(t)
		}, t.prototype.close = function() {
			$(".director-overlay").fadeOut("easeInOutQuart"), app.hide_overlay()
		}, t.prototype.open = function(t) {
			var i = this;
			app.show_overlay(null, function() {
				i.$overlay.fadeOut("easeInOutQuart"), app.hide_overlay()
			}), this.index = t;
			var e = this._getCurrent(t);
			this.$overlay.hide(), setTimeout(function() {
				e.fadeIn("easeInOutQuart", function() {
					$(".js-top-half").topHalf()
				})
			}, 200)
		}, t.prototype.change = function(t) {
			this.index = t;
			var i = this._getCurrent(t);
			this.$overlay.fadeOut(400, "easeInOutQuart"), i.fadeIn(300, "easeInOutQuart", function() {
				$(".js-top-half").topHalf()
			})
		}, t.prototype.prev = function() {
			this.index -= 1, this.index < 0 && (this.index = this.length - 1), this.change(this.index)
		}, t.prototype.next = function() {
			this.index += 1, this.index > this.length - 1 && (this.index = 0), this.change(this.index)
		};
		new t
	}, app.init_map = function() {
		var t = $(".js-map");
		t[0] && $(".js-map").open_gmap(app.js_path + "../images/company/map_pin.png", app.map_options, 81, 115)
	}, app.init_contact = function() {
		$(".contact_policy .wpcf7-checkbox").on("click", function(t) {
			$(this)[0] == t.target && ($(this).find("input").prop("checked", !$(this).find("input").prop("checked")), $(this).find("label").toggleClass("on"))
		}), $("input[type='checkbox']").change(function() {
			$(this).is(":checked") ? ($(".contact_policy label").removeClass("on"), $(this).parent().addClass("on")) : $(this).parent().removeClass("on")
		}).trigger("change")
	}, app.init_news = function() {
		var t = $(".news-side-btn");
		t.each(function(t, i) {
			var e = $(i),
				s = $(e.data("target"));
			e.off("mouseenter").on("mouseenter", function() {
				s.addClass("open"), app.show_overlay(e, function() {
					s.removeClass("open"), app.hide_overlay()
				})
			}), s.off("mouseleave").on("mouseleave", function() {
				app.hide_overlay(), s.removeClass("open")
			})
		}), $(".news-nav_link").off(app.CLICK).on(app.CLICK, function() {
			app.hide_overlay()
		}), $(".news-nav_link").not(".news-nav--right .news-nav_link").hover(function() {
			var t = $(this).not(".active");
			TweenMax.to(t, .35, {
				x: "8px",
				ease: Expo.easeOut
			})
		}, function() {
			var t = $(this).not(".active");
			TweenMax.to(t, .35, {
				x: "0%",
				ease: Expo.easeOut
			})
		}), $(".news-nav--right .news-nav_link").hover(function() {
			var t = $(this).not(".active");
			TweenMax.to(t, .35, {
				x: "-8px",
				ease: Expo.easeOut
			})
		}, function() {
			var t = $(this).not(".active");
			TweenMax.to(t, .35, {
				x: "0%",
				ease: Expo.easeOut
			})
		}), $(".top-news_item").hover(function() {
			$(this).find(".top-news_img").addClass("hover")
		}, function() {
			$(this).find(".top-news_img").removeClass("hover")
		})
	}, app.init_more_btn = function() {
		var t = $(".js-more-btn"),
			i = function(t) {
				cd.extend(this, cd.event.Dispatcher), this.isComplete = !1, this.content, this.$target
			};
		i.COMPLETE = "more.complete", i.FAIL = "more.fail", i.prototype._getPageUrl = function(t) {
			return cd.get_relative_url() + "/page/" + t
		}, i.prototype.get = function(t) {
			var e = this,
				s = t.data("page") || 2;
			this.isComplete = !1, $.ajax({
				url: this._getPageUrl(s),
				type: "GET"
			}).done(function(a) {
				s++, t.data("page", s), e.isComplete = !0, e.content = a, e.$target = t, setTimeout(function() {
					e.dispatch(i.COMPLETE, a)
				}, 0)
			}).fail(function() {
				s = -1, t.data("page", s), e.$target = t, e.dispatch(i.COMPLETE, e)
			})
		};
		var e = new i;
		e.addListener(i.COMPLETE, function(t) {
			var i = this.$target.data("target"),
				e = $(".news_items"),
				s = $(t),
				a = s.find(i),
				n = this.$target.data("page"),
				o = this.$target.data("max-pages");
			this.isComplete && a[0] ? (n > o && this.$target.fadeOut(), e.append(a), app.init_lazy()) : this.$target.fadeOut(), this.$target.removeClass("loading")
		}), t.each(function(t, i) {
			var s = $(i);
			s.on("click", function() {
				s.addClass("loading"), e.get(s)
			})
		})
	}, app.init_pjax = function() {
		if (!cd.ua.ltIE9) {
			cd.log("app.init_pjax");
			var t = "#pcontainer";
			$(document).off("pjax:popstate").on("pjax:popstate", function(t) {
				cd.log("pjax:popstate"), location.href = location.href
			}), $(document).off("pjax:complete").on("pjax:complete", function() {
				cd.log("pjax:complete"), cd.time(), app.load_pjax(), app.resize(), twttr && twttr.widgets.load(), FB && FB.XFBML.parse()
			}), $(document).on("submit reset", "form", function(t) {
				$(".search").find(this)[0]
			}), $(document).on(app.CLICK, 'input[type="submit"]:not(.wpcf7-confirm,.wpcf7-submit)', function(i) {
				$(".search").find(this)[0] || (cd.log("pjax.input:click"), i.preventDefault(), app.shutdown(function() {
					$.pjax.submit(i, {
						container: t,
						fragment: t,
						timeout: 3e4
					})
				}))
			}), $(document).on(app.CLICK, 'a:not([target="_blank"])', function(i) {
				var e = $(this).attr("href");
				if (!(e && -1 != e.indexOf("javascript:void") || "ssl.unimedia.co.jp" == location.hostname || $(this).hasClass("js-nopjax") || $(".bx-controls").find(this)[0])) return i.preventDefault(), cd.log("pjax.click"), app.shutdown(function() {
					cd.log("app.shutdown"), $.pjax({
						url: e,
						container: t,
						fragment: t,
						timeout: 3e4
					})
				}), !1
			}), app.shutdown = function(t) {
				var i = cd.seq();
				i.add(this, function() {
					app.loader.init(), app.$loader.css({
						transition: "0.4s ease"
					}), cd.removeClass(app.$loader, "hide"), cd.addEvent(app.$loader, function() {
						app.$loader.css({
							transition: ""
						})
					}), app.close_nav()
				}), i.addWait(100), i.add(this, function() {
					t()
				}), i.start()
			}
		}
	}, app.is_show_kv = function() {
		var t = $(".js-kv");
		return !t.hasClass("hide") && t.is(":visible")
	}, app.init_common = function() {
		var t = "open";
		$(".js-click-open").each(function(i, e) {
			var s = $(e);
			s.off(app.CLICK).on(app.CLICK, function() {
				var i = s.data("open"),
					e = $(i);
				e.hasClass(t) ? e.removeClass(t) : e.addClass(t)
			})
		}), $(".js-scrollbar").mCustomScrollbar({
			scrollInertia: 0,
			alwaysShowScrollbar: 1,
			theme: "unimedia",
			callbacks: {
				onScroll: function() {
					app.w.trigger("scroll")
				}
			}
		}), $(".js-scrollbar02").mCustomScrollbar({
			scrollInertia: 0
		}), $(".js-page-scroll").off(app.CLICK).on(app.CLICK, function() {
			$(this).scrollTo(0, function() {})
		}), cd.ua.iPad ? $(".js-hover-show").off(app.CLICK).on(app.CLICK, function() {
			var t = $(this),
				i = t.parent();
			i.toggleClass("show")
		}) : $(".js-hover-show").hoverAddClass("show");
		var i = $(".kv_obj"),
			e = $(".js-bgcheck");
		i[0] && e[0] && BackgroundCheck.init({
			targets: ".js-bgcheck",
			images: ".kv_obj",
			threshold: 70
		}), app.w.off("scroll.bgcheck").onex("scroll.bgcheck", function() {
			BackgroundCheck.refresh()
		}), $(".sec_row .sec_tile--quarter").each(function(t, i) {
			var e = $(i);
			e.data("delay", .1 * t)
		}), $(".unit-others .unit-other").each(function(t, i) {
			var e = $(i);
			e.data("delay", .1 * t)
		})
	}, app.init_lazy = function() {
		var t = $(".js-lazy, .js-lazy02");
		if (app.DEBUG) t.css({
			opacity: 1,
			transform: "translateY(0) scale(1.0)"
		});
		else {
			if (!cd.csstransitions()) return void t.css({
				opacity: 1,
				transform: "translateY(0) scale(1.0)"
			});
			t.onScrollPer(function(t) {
				if (t > 10) {
					var i = {
							transitionTimingFunction: "cubic-bezier(0.41, 0.00, 0.18, 1.00)",
							transitionProperty: "opacity, transform",
							transitionDuration: .8,
							opacity: 1,
							transform: "translateY(0) scale(1.0)"
						},
						e = $(this).data("delay");
					e > 0 && (i.transitionDelay = e + "s"), $(this).css(i), $(this).offScrollPer()
				}
			}, function() {
				$(this).css({
					transition: "none",
					opacity: 1,
					transform: "translateY(0) scale(1.0)"
				})
			})
		}
	}, app.init_unimedia_logo = function() {
		var t = $(".js-bx-u-logo");
		if (t[0]) {
			var i = null;
			t.find("img").imagesLoaded(function() {
				setTimeout(function() {
					i = t.bxSlider({
						speed: 300,
						pause: 4e3,
						prevText: " ",
						nextText: " ",
						slideWidth: 500,
						slideMargin: 0
					})
				}, 100)
			}), app.w.off("scroll.bx-u-logo").onex("scroll.bx-u-logo", function() {
				t.visibleWindow() ? cd.invoke(i, "startAuto") : cd.invoke(i, "stopAuto")
			}, 4)
		}
	}, app.init_super = function() {
		var t = $(".js-super");
		if (t[0] && !cd.ua.ltIE9) {
			var i = function(t, i) {
				this.hasAttachment = !1, this.r = 10, this.intervalIds = [], this.colors = i, this.points = [], this.index = 0, this.stepPoints = 20, this.interval = 1200, this.gradientSpeed = 1 / (8e3 / this.interval), this.duration = 300, this.step = 0, this.isStart = !1, this.doChangeColorFunctions = [], this.$target = t, this.$img = this.$target.find(".super_img"), this.$body = this.$target.find(".super_body"), this.$body_outer = this.$target.find(".super_body-outer")
			};
			i.prototype.resize = function() {
				this.$body_outer.css({
					width: this.$img.width(),
					height: this.$img.height()
				}), this.$img.height() > 0 && this.attach(this.$target)
			}, i.prototype.attach = function(t) {
				if (!this.hasAttachment) {
					var i = this,
						e = [
							[244, 75, 110],
							[233, 34, 99],
							[228, 47, 128],
							[221, 41, 58],
							[229, 48, 82],
							[235, 66, 48]
						],
						s = [
							[11, 71, 193],
							[7, 98, 211],
							[32, 133, 211],
							[36, 58, 195],
							[58, 68, 203],
							[81, 87, 207]
						],
						a = [
							[224, 38, 52],
							[238, 35, 97],
							[250, 104, 149],
							[225, 39, 3],
							[239, 55, 41],
							[255, 73, 59]
						],
						n = [
							[3, 175, 177],
							[0, 196, 180],
							[24, 211, 196],
							[10, 151, 172],
							[17, 165, 182],
							[40, 187, 196]
						];
					this.colors = e;
					var o = this.$target.data("colors") || "01";
					"02" == o && (this.colors = s), "03" == o && (this.colors = a), "04" == o && (this.colors = n), this.pointWidth = this.$body.width() / this.r, this.pointHeight = this.pointWidth, this.xcount = this.r, this.ycount = Math.floor(this.$body.height() / this.pointHeight), this.rangeX = _.range(0, this.xcount, 1), _.each(this.rangeX, function(t) {
						i.rangeY = _.range(0, i.ycount, 1), _.each(i.rangeY, function(e) {
							i.points.push([e, t])
						})
					}), _.each(this.points, function(t, e) {
						i.index = e;
						var s = $('<span class="point"></span>'),
							a = {
								position: "absolute",
								width: 100 / i.r + "%",
								height: 100 / i.ycount + "%",
								backgroundColor: "rgb(" + i.colors[0].toString() + ")",
								top: 100 * t[0] / i.ycount + 1 + "%",
								left: t[1] * (100 / i.r) + 1 + "%"
							};
						s.css(a), i.$body.append(s)
					}), this.$points = i.$body.find(".point").toArray(), this.$points = _.shuffle(this.$points), this.hasAttachment = !0
				}
			}, i.prototype._changeColor = function(t, i) {
				{
					var e = 0,
						s = this.duration,
						a = this.gradientSpeed,
						n = this.colors,
						o = [0, 1, 2, 3];
					this.colors[0], this.colors[1]
				}
				return function(r) {
					i = r || i;
					var p = t.css("backgroundColor");
					p = p.replace("rgb(", ""), p = p.replace(")", ""), p = p.split(",");
					var h = (n[o[0]], n[o[1]]),
						c = 1 - e,
						l = (Math.round(c * p[0] + e * h[0]), Math.round(c * p[1] + e * h[1]), Math.round(c * p[2] + e * h[2]), n[_.random(0, 5)]);
					t.css({
						backgroundColor: "rgb(" + l.toString() + ")",
						transition: "background-color " + s + "ms ease " + i + "ms"
					}), e += a, e >= 1 && (e %= 1, o[0] = o[1], o[2] = o[3], o[1] = o[0], o[3] = o[2])
				}
			}, i.prototype.start = function() {
				if (!this.isStart && this.hasAttachment) {
					this.isStart = !0;
					var t = this;
					t.doChangeColorFunctions.length || _.eachStep(this.$points, function(i, e) {
						var s = $(i),
							a = Math.ceil(t.points.length / t.stepPoints),
							n = Math.floor(t.interval / a * e),
							o = t._changeColor(s, n);
						t.doChangeColorFunctions.push(o)
					}, t.stepPoints);
					var i = setInterval(function() {
						_.each(t.doChangeColorFunctions, function(i, e) {
							var s = Math.ceil(t.points.length / t.stepPoints),
								a = Math.floor(t.interval / s * e);
							i(a)
						})
					}, t.interval);
					t.intervalIds.push(i)
				}
			}, i.prototype.stop = function() {
				if (this.isStart) {
					var t = this;
					this.isStart = !1, _.each(t.intervalIds, function(t) {
						clearInterval(t)
					})
				}
			};
			var e = new i(t);
			app.top_sp = e, app.w.off("scroll.sptop").onex("scroll.sptop", function() {
				t.visibleWindow() ? e.start() : e.stop()
			}, 2)
		}
	}, app.init_top_news = function() {
		function t() {
			return "1440px" == $(".l-content").css("max-width")
		}
		var i = $(".top-news_img");
		app.w.off("resize.init_top_news").onex("resize.init_top_news", function() {
			t() ? i.each(function() {
				var t = $(this),
					i = t.find("img");
				i.imagesLoaded(function() {
					i.css({
						width: "auto",
						height: 140
					});
					var e = (t.width() - i.width()) / 2;
					i.css({
						marginLeft: e
					})
				})
			}) : i.find("img").css({
				width: "",
				height: "",
				marginLeft: ""
			})
		}).trigger("resize.init_top_news")
	}, app.init_top_concept = function() {
		var t = $(".js-top-concept");
		if (t[0]) {
			var i = function(t) {
				var i = this;
				this.intervalId = -1, this.$target = t, this.list = [], this.index = -1, this.$items = t.children(), this.$items.each(function(t, e) {
					i.list.push($(e))
				})
			};
			i.prototype._update = function(t) {
				var i = this;
				this.index = t, this.$prev = this.$current, cd.invoke(this.$prev, "css", {
					zIndex: 1
				}), this.$current = this.list[t], this.$current.css({
					zIndex: 2
				}), cd.addClass(this.$current, "show", function() {
					$.invoke(i.$prev, "removeClass", "show")
				}), this.$current.removeClass("init_typo")
			}, i.prototype._next = function() {
				var t = this.index + 1;
				return t > this.list.length - 1 && (t = 0), t
			}, i.prototype.update = function(t) {
				var i = !1;
				return this.index != t && (this._update(t), i = !0), i
			}, i.prototype.start = function() {
				this.list[0].addClass("init_typo").removeClass("init"), this._update(0)
			}, i.prototype.resume = function() {
				-1 == this.intervalId && (this.intervalId = setInterval(_.bind(function() {
					var t = this._next();
					this._update(t)
				}, this), app.CONCEPT_SLIDER_DURATION))
			}, i.prototype.stop = function() {
				clearInterval(this.intervalId), this.intervalId = -1
			};
			var e = new i(t);
			app.concept_slider = e, t.find("img").first().imagesLoaded(function() {
				e.start(), app.w.off("scroll.concept").onex("scroll.concept", function() {
					t.visibleWindow() ? app.concept_slider.resume() : app.concept_slider.stop()
				}, 4)
			})
		}
	}, app.init_kv = function() {
		if ($(".kv_slide")[0]) {
			var t = function(t) {
				cd.extend(this, cd.event.Dispatcher), this.intervalId = -1, this.attach(t)
			};
			t.UPDATE = "kv.update", t.prototype.attach = function(t) {
				var i = this;
				this.$target = t, this.list = [], this.index = -1, this.$items = t.find(".kv_slide"), this.$items.each(function(t, e) {
					i.list.push($(e))
				})
			}, t.prototype._update = function(i) {
				var e = this;
				this.index = i, this.$prev = this.$current, cd.invoke(this.$prev, "css", {
					zIndex: 1
				}), this.$current = this.list[i], this.$current.css({
					zIndex: 2
				}), cd.addEvent(this.$current.find(".kv_block--03 .kv_block_inner"), function() {
					$.invoke(e.$prev, "removeClass", "show")
				}), cd.addClass(this.$current, "show", function() {}), this.$current.removeClass("init_typo"), e.dispatch(t.UPDATE, e)
			}, t.prototype._next = function() {
				var t = this.index + 1;
				return t > this.list.length - 1 && (t = 0), t
			}, t.prototype.update = function(t) {
				var i = !1;
				return this.index != t && (this._update(t), i = !0), i
			}, t.prototype.start = function() {
				this.list[0].addClass("init_typo").removeClass("init"), this._update(0), this.resume()
			}, t.prototype.resume = function() {
				-1 == this.intervalId && (this.intervalId = setInterval(_.bind(function() {
					var t = this._next();
					this._update(t)
				}, this), app.KV_DURATION))
			}, t.prototype.stop = function() {
				clearInterval(this.intervalId), this.intervalId = -1
			};
			var i = $(".kv"),
				e = new t(i);
			e.start(), app.kv = e;
			var s = $(".kv-controls");
			s.children().off(app.CLICK).on(app.CLICK, function() {
				var t = $(this).index();
				t != app.kv.index && (app.kv.stop(), app.kv.update(t))
			}), app.kv.addListener(t.UPDATE, function(t) {
				t.resume(), s.children().removeClass("active"), s.children().eq(t.index).addClass("active")
			}), app.w.off("scroll.kv").onex("scroll.kv", function() {
				i.visibleWindow() ? cd.invoke(app.kv, "resume") : cd.invoke(app.kv, "stop")
			}, 2)
		}
	}, app.init_wrapper = function() {
		if (cd.ua.IE || cd.ua.iPad) {
			var t = function() {};
			return t.prototype.wrap = function(t) {}, t.prototype.unwrap = function(t) {}, void(app.wrapper = new t)
		}
		var i = function() {
			this.attach()
		};
		i.prototype.attach = function() {
			this.$wrap = $(".js-wrap"), this.$header = $(".site-header"), this.$side = $(".side_right"), this.$search = $(".search"), this.$controls = $(".page-control_item"), this.$sns = $(".sns"), this.$head = $(".side_overlay_head"), this.$foot = $(".side_overlay_foot"), this.$outline = $(".side_outline"), this.$nav = $(".nav"), this.$news_side = $(".news-side-btn"), this.$nav_btn = $(".js-nav-btn");
			var t = app.w.scrollTop(),
				i = app.w.height(),
				e = app.doc.height();
			app.$wrap.css({
				"transform-origin": "50% " + Math.round((t + i / 2) / e * 100) + "%"
			})
		}, i.prototype.wrap = function(t) {
			var i = app.w.scrollTop(),
				e = app.w.height(),
				s = $(".wrap").height(),
				a = this.$header.not(t),
				n = this.$search.add(this.$sns).not(t),
				o = this.$controls,
				r = this.$side,
				p = this.$news_side,
				h = this.$nav_btn,
				c = $(a).add(n).add(r).add(p);
			app.$wrap.css({
				"transform-origin": "50% " + Math.round((i + e / 2) / s * 100) + "%"
			}), this.$wrap.addClass("overlay"), a.css({
				position: "absolute",
				top: i
			}), n.css({
				position: "absolute",
				top: i + e - 80,
				bottom: "auto"
			}), o.css({
				position: "absolute",
				top: i + e - 240,
				bottom: "auto"
			});
			var l = (e - this.$outline.height()) / 2;
			r.css({
				position: "absolute",
				bottom: s - e - i + l
			}), p.css({
				position: "absolute",
				top: i + (e - p.height()) / 2
			}), t && t.hasClass("nav") || (h.css({
				position: "absolute",
				top: i + 80
			}), c = c.add(h)), c = c.add(o), this.$head.css({
				marginTop: i
			}), this.$foot.css({
				marginBottom: s - e - i
			}), this.$wrap.append(c)
		}, i.prototype.unwrap = function(t) {
			var i = app.w.height(),
				e = this.$header,
				s = this.$search.add(this.$sns),
				a = this.$controls,
				n = this.$side,
				o = this.$nav_btn,
				r = this.$news_side;
			e.css({
				position: "",
				top: ""
			}), s.css({
				position: "",
				top: "",
				bottom: ""
			}), a.css({
				position: "",
				top: "",
				bottom: ""
			}), o.css({
				position: "",
				top: ""
			});
			var p = (i - this.$outline.height()) / 2;
			n.css({
				position: "",
				bottom: p
			}), r.css({
				position: "",
				top: (i - r.height()) / 2
			}), this.$head.css({
				marginTop: ""
			}), this.$foot.css({
				marginBottom: ""
			}), this.$wrap.after(e.add(s).add(n).add(o).add(a).add(r))
		}, app.wrapper = new i
	}, app.init_overlay_class = function() {
		var t = function(t) {
			this.klass = "open", this.scrolable = !0, this.attach(t)
		};
		t.prototype.attach = function(t) {
			this.$attach = t || $(".js-side-overlay")
		}, t.prototype._scrolable = function(t) {
			this.scrolable = t, this.scrolable ? $.start_scroll() : $.stop_scroll()
		}, t.prototype._wrap = function(t) {
			app.wrapper.wrap(t)
		}, t.prototype._unwrap = function(t) {
			app.wrapper.unwrap(t)
		}, t.prototype.show = function(t, i, e) {
			e = void 0 == e && !0;
			var s = this;
			if (t && t[0]) {
				var a = t.css("zIndex");
				t.data("zIndex", a), t.css({
					zIndex: parseInt(s.$attach.css("zIndex")) + 100
				}), s.$attach.data("trigger", t)
			}
			s._scrolable(!1), e && s._wrap(t), s.$attach.addClass(s.klass), i && s.$attach.off(app.CLICK).on(app.CLICK, function() {
				i()
			})
		}, t.prototype.hide = function(t) {
			var i = this,
				e = $(".js-side-overlay"),
				s = e.data("trigger");
			e.removeClass(this.klass);
			var a = $(".wrap");
			a.removeClass("overlay"), setTimeout(function() {
				s && s[0] && s.css("zIndex", ""), a.hasClass("overlay") || (i._unwrap(s), i._scrolable(!0), cd.invoke(arguments, t))
			}, 500)
		};
		var i = new t($(".js-side-overlay"));
		app.overlay = i
	}, app.show_overlay = function(t, i, e) {
		var s = this;
		app.overlay.show(t, function() {
			cd.invoke(s, i)
		}, e)
	}, app.hide_overlay = function(t) {
		app.overlay.hide(t)
	}, app.open_nav = function(t, i) {
		var e = "open",
			i = i || $(".js-nav-close-btn"),
			s = t || $(i.data("target")),
			a = s.find(".nav_items");
		a.addClass(e), i.data("close", s), i.addClass(e), app.show_overlay(s, function() {
			a.removeClass(e), i.removeClass(e), app.hide_overlay()
		})
	}, app.close_nav = function(t) {
		var i = "open",
			t = t || $(".js-nav-close-btn");
		if (t[0]) {
			var e = t.data("close");
			if (e && e[0]) {
				var s = e.find(".nav_items");
				s.removeClass(i)
			}
			$(".js-nav-close-btn, .js-nav-btn").removeClass(i), app.hide_overlay()
		}
	}, app.init_header_link = function() {
		var t = $(".js-h-link");
		t.off(app.CLICK).on(app.CLICK, function() {
			var t = $(this),
				i = $(t.data("target"));
			app.open_nav(i)
		})
	}, app.init_nav = function() {
		var t = $(".js-nav-btn, .js-nav-close-btn");
		t.off(app.CLICK).on(app.CLICK, function() {
			var t = $(this);
			t.hasClass("open") ? app.close_nav(t) : app.open_nav(null, t)
		})
	}, app.init_search = function() {
		var t = "open",
			i = $(".js-side-search"),
			e = i.parent(),
			s = e.find(".search_input");
		i.off(app.CLICK).on(app.CLICK, function() {
			e.hasClass(t) ? (e.removeClass(t), app.hide_overlay()) : (app.show_overlay(e, function() {
				e.removeClass(t), app.hide_overlay()
			}), cd.addClass(e, t, function() {
				cd.ua.iPad || setTimeout(function() {
					s.focus()
				}, 140)
			}))
		})
	}, app.init_side = function() {
		var t = function() {
			var t = this;
			this.klass = "open", this.$target = $(".js-side-right-target"), this.$container = $(".js-page-nav"), this.$right = $(".side_outline"), this.$right_container = this.$right.parent(), this.$right.off("mouseenter").on("mouseenter", function() {
				t.show()
			}), this.$container.off("mouseleave").on("mouseleave", function() {
				t.hide()
			})
		};
		t.prototype.show = function() {
			var t = this;
			this.$target.addClass(this.klass), app.show_overlay(null, function() {
				t.hide()
			})
		}, t.prototype.hide = function(t) {
			if (this.$target.hasClass(this.klass)) {
				var i = this;
				this.back = t, this.$target.removeClass(this.klass), app.hide_overlay(function() {
					cd.invoke(i, "back")
				}), $(".page-nav_link-line").css({
					transform: ""
				})
			}
		};
		var i = new t;
		app.side = i, $(".page-nav_link").hover(function() {
			var t = $(this).not(".active");
			TweenMax.to(t, .35, {
				x: "8px",
				ease: Expo.easeOut
			})
		}, function() {
			var t = $(this).not(".active");
			TweenMax.to(t, .35, {
				x: "0%",
				ease: Expo.easeOut
			})
		});
		var e = $(".js-page-link");
		e.off("click.page-link").on("click.page-link", function() {
			var t = $(this);
			app.side.hide(function() {
				t.scrollTo(0, function() {})
			})
		});
		var s = $(".side_mask"),
			a = $(".js-outline");
		if (app.w.off("scroll.pagelink"),
			a[0]) app.w.onex("scroll.pagelink", function() {
			var t = app.w.scrollTop() + app.w.height() / 3;
			a.sort(function(i, e) {
				var s = $($(i).data("target")),
					a = $($(e).data("target")),
					n = s.height(),
					o = a.height(),
					r = 0,
					p = s.offset();
				p && (r = p.top);
				var h = 0,
					c = a.offset();
				c && (h = c.top);
				var l = r + n / 2,
					d = h + o / 2,
					u = r - t + (l - t),
					f = h - t + (d - t);
				return Math.abs(u) - Math.abs(f)
			});
			var i = a.eq(0),
				n = i.data("target");
			if (".kv" == n) a.addClass("active"), s.css({
				height: "100%"
			}), $(".page-control_prev").removeClass("visible"), $(".page-control_next").removeClass("visible");
			else {
				$(".page-control_prev").addClass("visible"), $(".page-control_next").addClass("visible"), s.css({
					height: "4em"
				}), a.removeClass("active"), i.addClass("active");
				var o = e.filter('[data-target="' + n + '"]');
				e.not(o).removeClass("active"), o.addClass("active")
			}
			var r = parseInt(n.replace("#", ""), 10) - 1;
			r = isNaN(r) ? 0 : r;
			var p = a.height() * r;
			a.css({
				transition: ".4s cubic-bezier(0.77, 0, 0.175, 1)",
				top: -p + "px"
			})
		}, 2).trigger("scroll.pagelink");
		else {
			var n = $(".page-control_prev"),
				o = $(".page-control_next");
			n[0] && app.w.onex("scroll.pagelink", function() {
				app.w.scrollTop() > app.w.height() / 2 ? (n.addClass("visible"), o.addClass("visible")) : (n.removeClass("visible"), o.removeClass("visible"))
			})
		}
	}, app.init_header = function() {
		var t = $(".site-header"),
			i = $(".js-nav, .js-nav-btn"),
			e = "active",
			s = "open",
			a = $(".h_link");
		a.each(function(t, i) {
			var e = $(i);
			e.css({
				transitionDelay: 22 * t + "ms"
			})
		}), app.w.onex("scroll", function() {
			app.w.scrollTop() < 150 ? (t.removeClass(e), i.removeClass(e), t.removeClass(s)) : t.hasClass(e) ? t.removeClass(s) : (t.addClass(e), i.addClass(e))
		}, 2);
		var n = $(".js-header-btn"),
			o = $(".h_nav-outer"),
			r = $(".h_logo_ttl02");
		n.off(app.CLICK).on(app.CLICK, function() {
			t.hasClass(s) ? (t.removeClass(s), cd.removeClass(t, s, function() {}), setTimeout(function() {
				o.css({
					visibility: "hidden"
				}), r.css({
					visibility: "hidden"
				})
			}, 800)) : (o.css({
				visibility: "visible"
			}), r.css({
				visibility: "visible"
			}), cd.addClass(t, s, function() {}))
		});
		var p = $(".js-kv-caption"),
			h = $(".js-kv-caption, .lang, .kv-controls"),
			c = $(".scroll-down");
		app.w.off("scroll.kv-caption").on("scroll.kv-caption", function() {
			var t = app.w.height(),
				i = app.w.scrollTop();
			h.not(p).css({
				marginTop: i / 5
			}), p.css({
				marginTop: i / 3
			}), t / 6 > i ? (h.removeClass("hide"), h.css({
				visibility: ""
			}), c.removeClass("hide")) : h.hasClass("hide") || (cd.addClass(h, "hide", function() {
				h.hasClass("hide") && h.css({
					visibility: "hidden"
				})
			}), c.addClass("hide"))
		}).trigger("scroll")
	}, app.map_options = {
		scrollwheel: !1,
		zoom: 15,
		styles: [{
			featureType: "water",
			elementType: "geometry",
			stylers: [{
				color: "#f4f4f4"
			}]
		}, {
			featureType: "landscape.man_made",
			elementType: "geometry",
			stylers: [{
				color: "#f4f4f4"
			}]
		}, {
			featureType: "landscape.natural",
			elementType: "geometry",
			stylers: [{
				color: "#f4f4f4"
			}]
		}, {
			featureType: "poi.park",
			elementType: "geometry",
			stylers: [{
				color: "#f4f4f4"
			}]
		}, {
			featureType: "landscape.natural.terrain",
			elementType: "geometry",
			stylers: [{
				visibility: "off"
			}]
		}, {
			featureType: "poi",
			elementType: "labels",
			stylers: [{
				visibility: "off"
			}]
		}, {
			featureType: "poi.medical",
			elementType: "geometry",
			stylers: [{
				visibility: "off"
			}]
		}, {
			featureType: "road",
			elementType: "geometry.stroke",
			stylers: [{
				visibility: "off"
			}]
		}, {
			featureType: "road",
			elementType: "geometry.fill",
			stylers: [{
				color: "#ffffff"
			}]
		}, {
			featureType: "transit.station.airport",
			elementType: "geometry.fill",
			stylers: [{
				color: "#b2b2b2"
			}]
		}, {
			featureType: "transit.line",
			elementType: "geometry.fill",
			stylers: [{
				color: "#ffffff",
				weight: 1
			}]
		}, {
			featureType: "transit.line",
			elementType: "geometry.stroke",
			stylers: [{
				color: "#aba9a6",
				weight: 1
			}]
		}, {
			featureType: "transit.station.airport",
			elementType: "all",
			stylers: [{
				color: "#666666",
				weight: 1
			}]
		}, {
			featureType: "road.highway",
			elementType: "geometry.fill",
			stylers: [{
				color: "#ffffff",
				weight: 2
			}]
		}]
	}, $(function() {
		app.seq.enqueue(i.READY_DOCUMENT)
	}), app.seq = cd.applicationSequence, app.seq.queue(i.READY_DOCUMENT), app.seq.queue(function() {
		cd.init_jquery(), app.w = $(window), app.doc = $(document), app.body = $("body"), app.$wrap = $(".wrap"), app.$loader = $(".loader"); {
			var t = app.w.width();
			app.w.height()
		}
		if (app.ww = t, app.wh = t, app.DEBUG) {
			var i = $('<div class="debug"></div>');
			i.css({
				zIndex: 99999,
				backgroundColor: "red",
				width: 10,
				height: 10,
				position: "fixed",
				top: 0,
				left: 0
			}), app.body.append(i)
		}
		cd.log("app.ready_docment")
	}), app.seq.queue(app.ready_document, i.COMPLETE_LOADING), app.seq.queue(app.ready), app.seq.start()
}(window);