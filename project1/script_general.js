(function () {
    var c = {};
    function trans(e, f) {
        var g = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        c[g[0x0]] = g;
        return '';
    }
    function regTextVar(h, i) {
        var j = ![];
        i = i['toLowerCase']();
        var k = function () {
            var t = this['get']('data');
            t['updateText'](t['translateObjs'][h]);
        };
        var l = function (u) {
            var v = u['data']['nextSelectedIndex'];
            if (v >= 0x0) {
                var w = u['source']['get']('items')[v];
                var x = function () {
                    w['unbind']('begin', x, this);
                    k['call'](this);
                };
                w['bind']('begin', x, this);
            } else
                k['call'](this);
        };
        var m = function (y) {
            return function (z) {
                if (y in z) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var n = function (A, B) {
            return function (C, D) {
                if (A == C && B in D) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var o = function (E, F, G) {
            for (var H = 0x0; H < E['length']; ++H) {
                var I = E[H];
                var J = I['get']('selectedIndex');
                if (J >= 0x0) {
                    var K = F['split']('.');
                    var L = I['get']('items')[J];
                    if (G !== undefined && !G['call'](this, L))
                        continue;
                    for (var M = 0x0; M < K['length']; ++M) {
                        if (L == undefined)
                            return '';
                        L = 'get' in L ? L['get'](K[M]) : L[K[M]];
                    }
                    return L;
                }
            }
            return '';
        };
        var p = function (N) {
            var O = N['get']('player');
            return O !== undefined && O['get']('viewerArea') == this['getMainViewer']();
        };
        switch (i) {
        case 'title':
        case 'subtitle':
            var r = function () {
                switch (i) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (r) {
                return function () {
                    var P = this['_getPlayListsWithViewer'](this['getMainViewer']());
                    if (!j) {
                        for (var Q = 0x0; Q < P['length']; ++Q) {
                            P[Q]['bind']('changing', l, this);
                        }
                        j = !![];
                    }
                    return o['call'](this, P, r, p);
                };
            }
            break;
        default:
            if (i['startsWith']('quiz.') && 'Quiz' in TDV) {
                var s = undefined;
                var r = function () {
                    switch (i) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var R = /quiz\.([\w_]+)\.(.+)/['exec'](i);
                        if (R !== undefined) {
                            s = R[0x1];
                            switch ('quiz.' + R[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (r) {
                    return function () {
                        var S = this['get']('data')['quiz'];
                        if (S) {
                            if (!j) {
                                if (s != undefined)
                                    S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, s, r), this);
                                else
                                    S['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], m['call'](this, r), this);
                                j = !![];
                            }
                            try {
                                var T = s != undefined ? S['getObjective'](s, r) : S['get'](r);
                                if (r == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                    T += 0x1;
                                return T;
                            } catch (U) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, V) {
        var W = {"objectives":[{"label":trans('score1.label'),"id":"score1","visibleInScore":true}],"timeout":{"repeat":{"label":trans('quizTimeout_4661BC02_579D_1994_41B6_CE903C759882.repeat','quizTimeout_4661BC02_579D_1994_41B6_CE903C759882.repeat.label'),"visible":false},"title":trans('quizTimeout_4661BC02_579D_1994_41B6_CE903C759882.title'),"score":{"label":trans('quizTimeout_4661BC02_579D_1994_41B6_CE903C759882.score','quizTimeout_4661BC02_579D_1994_41B6_CE903C759882.score.label'),"visible":true},"id":"quizTimeout_4661BC02_579D_1994_41B6_CE903C759882"},"score":{"completion":{"label":trans('quizScore_4662EC03_579D_1994_41D0_EBC9F9B894D4.completion','quizScore_4662EC03_579D_1994_41D0_EBC9F9B894D4.completion.label'),"visible":true},"title":trans('quizScore_4662EC03_579D_1994_41D0_EBC9F9B894D4.title'),"questions":{"label":trans('quizScore_4662EC03_579D_1994_41D0_EBC9F9B894D4.questions','quizScore_4662EC03_579D_1994_41D0_EBC9F9B894D4.questions.label'),"visible":true,"correctLabel":trans('quizScore_4662EC03_579D_1994_41D0_EBC9F9B894D4.questionsCorrect','quizScore_4662EC03_579D_1994_41D0_EBC9F9B894D4.questions.correctLabel'),"incorrectLabel":trans('quizScore_4662EC03_579D_1994_41D0_EBC9F9B894D4.questionsIncorrect','quizScore_4662EC03_579D_1994_41D0_EBC9F9B894D4.questions.incorrectLabel')},"items":{"label":trans('quizScore_4662EC03_579D_1994_41D0_EBC9F9B894D4.items','quizScore_4662EC03_579D_1994_41D0_EBC9F9B894D4.items.label'),"visible":true},"id":"quizScore_4662EC03_579D_1994_41D0_EBC9F9B894D4","repeat":{"label":trans('quizScore_4662EC03_579D_1994_41D0_EBC9F9B894D4.repeat','quizScore_4662EC03_579D_1994_41D0_EBC9F9B894D4.repeat.label'),"visible":false},"elapsedTime":{"label":trans('quizScore_4662EC03_579D_1994_41D0_EBC9F9B894D4.elapsedTime','quizScore_4662EC03_579D_1994_41D0_EBC9F9B894D4.elapsedTime.label'),"visible":true},"downloadCSV":{"label":trans('quizScore_4662EC03_579D_1994_41D0_EBC9F9B894D4.downloadCSV','quizScore_4662EC03_579D_1994_41D0_EBC9F9B894D4.downloadCSV.label'),"visible":false},"submitToLMS":{"label":trans('quizScore_4662EC03_579D_1994_41D0_EBC9F9B894D4.submitToLMS','quizScore_4662EC03_579D_1994_41D0_EBC9F9B894D4.submitToLMS.label'),"visible":false},"canClose":true},"question":{"responseDisplayTime":2000,"id":"quizQuestion_4660CC02_579D_1994_41B5_304207F923D1","ok":trans('quizQuestion_4660CC02_579D_1994_41B5_304207F923D1.ok')},"timeLimit":120,"autoFinish":true,"theme":{"timeout":{},"score":{},"question":{"window":{"mediaContainer":{"panoramaPlayer":{"touchControlMode":"drag_rotation","mouseControlMode":"drag_rotation"}}}}}};
        W['player'] = player;
        W['playList'] = V;
        function X(a0) {
            for (var a1 = 0x0; a1 < a0['length']; ++a1) {
                var a2 = a0[a1];
                if ('id' in a2)
                    player[a2['id']] = a2;
            }
        }
        if (W['questions']) {
            X(W['questions']);
            for (var Y = 0x0; Y < W['questions']['length']; ++Y) {
                var Z = W['questions'][Y];
                X(Z['options']);
            }
        }
        if (W['objectives']) {
            X(W['objectives']);
        }
        if (W['califications']) {
            X(W['califications']);
        }
        if (W['score']) {
            player[W['score']['id']] = W['score'];
        }
        if (W['question']) {
            player[W['question']['id']] = W['question'];
        }
        if (W['timeout']) {
            player[W['timeout']['id']] = W['timeout'];
        }
        player['get']('data')['translateObjs'] = c;
        return W;
    }
    var d = {"toolTipHorizontalAlign":"center","start":"this.init()","vrPolyfillScale":0.75,"data":{"name":"Player647","locales":{"de":"locale/de.txt"},"textToSpeechConfig":{"speechOnInfoWindow":false,"speechOnTooltip":false,"pitch":1,"speechOnQuizQuestion":false,"volume":1,"rate":1},"defaultLocale":"de"},"horizontalAlign":"left","id":"rootPlayer","width":"100%","borderRadius":0,"scrollBarWidth":10,"children":["this.MainViewer","this.MapViewer"],"scrollBarMargin":2,"layout":"absolute","mobileMipmappingEnabled":false,"defaultVRPointer":"laser","scripts":{"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getOverlays":TDV.Tour.Script.getOverlays,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"showPopupImage":TDV.Tour.Script.showPopupImage,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"isPanorama":TDV.Tour.Script.isPanorama,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"playAudioList":TDV.Tour.Script.playAudioList,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getKey":TDV.Tour.Script.getKey,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"quizShowScore":TDV.Tour.Script.quizShowScore,"getMainViewer":TDV.Tour.Script.getMainViewer,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"unregisterKey":TDV.Tour.Script.unregisterKey,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getMediaByName":TDV.Tour.Script.getMediaByName,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"historyGoForward":TDV.Tour.Script.historyGoForward,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getPixels":TDV.Tour.Script.getPixels,"historyGoBack":TDV.Tour.Script.historyGoBack,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"mixObject":TDV.Tour.Script.mixObject,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"setLocale":TDV.Tour.Script.setLocale,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"initQuiz":TDV.Tour.Script.initQuiz,"resumePlayers":TDV.Tour.Script.resumePlayers,"cloneCamera":TDV.Tour.Script.cloneCamera,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"setMapLocation":TDV.Tour.Script.setMapLocation,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"initGA":TDV.Tour.Script.initGA,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"init":TDV.Tour.Script.init,"quizFinish":TDV.Tour.Script.quizFinish,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getComponentByName":TDV.Tour.Script.getComponentByName,"shareSocial":TDV.Tour.Script.shareSocial,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"translate":TDV.Tour.Script.translate,"quizStart":TDV.Tour.Script.quizStart,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"registerKey":TDV.Tour.Script.registerKey,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"existsKey":TDV.Tour.Script.existsKey,"showWindow":TDV.Tour.Script.showWindow,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"setValue":TDV.Tour.Script.setValue,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"textToSpeech":TDV.Tour.Script.textToSpeech,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"openLink":TDV.Tour.Script.openLink,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer},"overflow":"hidden","scrollBarColor":"#000000","init":"this.initQuiz(this.createQuizConfig(this.rootPlayer, this.mainPlayList), true, true); var quiz = this.get('data')['quiz']; quiz.bind('timeout', (function() { var functionCallee = function(){ this.quizShowTimeout({repeat: {visible: true}, score: {visible: true}}) }.bind(this); return functionCallee }.bind(this))()); quiz.bind('finish', (function() { var functionCallee = function(){ this.quizShowScore({canClose: true}) }.bind(this); return functionCallee }.bind(this))())","paddingTop":0,"scrollBarVisible":"rollOver","borderSize":0,"class":"Player","paddingBottom":0,"height":"100%","minHeight":20,"contentOpaque":false,"minWidth":20,"paddingLeft":0,"gap":10,"verticalAlign":"top","mediaActivationMode":"window","shadow":false,"downloadEnabled":false,"mouseWheelEnabled":true,"backgroundPreloadEnabled":true,"paddingRight":0,"desktopMipmappingEnabled":false,"scrollBarOpacity":0.5,"definitions": [{"hfov":360,"partial":false,"frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_5D3472D7_5785_0EB9_419E_D286CC08DEF0_t.jpg","cube":{"class":"ImageResource","levels":[{"url":"media/panorama_5D3472D7_5785_0EB9_419E_D286CC08DEF0_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","colCount":48,"class":"TiledImageResourceLevel","width":24576,"rowCount":8,"height":4096},{"url":"media/panorama_5D3472D7_5785_0EB9_419E_D286CC08DEF0_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","colCount":24,"class":"TiledImageResourceLevel","width":12288,"rowCount":4,"height":2048},{"url":"media/panorama_5D3472D7_5785_0EB9_419E_D286CC08DEF0_0/{face}/2/{row}_{column}.jpg","tags":"ondemand","colCount":12,"class":"TiledImageResourceLevel","width":6144,"rowCount":2,"height":1024},{"url":"media/panorama_5D3472D7_5785_0EB9_419E_D286CC08DEF0_0/{face}/3/{row}_{column}.jpg","tags":["ondemand","preload"],"colCount":6,"class":"TiledImageResourceLevel","width":3072,"rowCount":1,"height":512},{"url":"media/panorama_5D3472D7_5785_0EB9_419E_D286CC08DEF0_0/{face}/vr/0.jpg","tags":"mobilevr","colCount":6,"class":"TiledImageResourceLevel","width":9216,"rowCount":1,"height":1536}]}}],"thumbnailUrl":"media/panorama_5D3472D7_5785_0EB9_419E_D286CC08DEF0_t.jpg","class":"Panorama","hfovMax":130,"id":"panorama_5D3472D7_5785_0EB9_419E_D286CC08DEF0","vfov":105.56,"label":trans('panorama_5D3472D7_5785_0EB9_419E_D286CC08DEF0.label'),"pitch":0,"data":{"label":"20210730_172342"}},{"propagateClick":false,"data":{"name":"MapViewer"},"toolTipPaddingLeft":6,"id":"MapViewer","left":"0%","playbackBarHeadBorderRadius":0,"toolTipPaddingBottom":4,"playbackBarProgressBorderColor":"#000000","toolTipShadowSpread":0,"toolTipFontColor":"#606060","playbackBarProgressOpacity":1,"vrPointerSelectionTime":2000,"width":"24.125%","playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadBorderColor":"#000000","playbackBarHeadBorderSize":0,"borderRadius":0,"toolTipPaddingRight":6,"progressBackgroundOpacity":1,"subtitlesBorderColor":"#FFFFFF","progressBackgroundColorRatios":[0],"playbackBarHeadShadowVerticalLength":0,"transitionDuration":500,"playbackBarBorderSize":0,"playbackBarHeadOpacity":1,"subtitlesFontFamily":"Arial","playbackBarHeadShadow":true,"progressRight":0,"vrPointerSelectionColor":"#FF6600","subtitlesTextShadowBlurRadius":0,"doubleClickAction":"toggle_fullscreen","transitionMode":"blending","subtitlesTextDecoration":"none","playbackBarBackgroundOpacity":1,"playbackBarHeadShadowHorizontalLength":0,"progressOpacity":1,"height":"32.787%","class":"ViewerArea","subtitlesPaddingTop":5,"progressBarBorderColor":"#000000","progressBarBackgroundColorDirection":"vertical","toolTipFontStyle":"normal","toolTipOpacity":1,"playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarBottom":0,"playbackBarOpacity":1,"progressBarBackgroundColorRatios":[0],"toolTipBorderColor":"#767676","shadow":false,"subtitlesHorizontalAlign":"center","subtitlesOpacity":1,"subtitlesBackgroundColor":"#000000","progressBackgroundColorDirection":"vertical","subtitlesVerticalAlign":"bottom","vrPointerColor":"#FFFFFF","subtitlesShadow":false,"toolTipTextShadowBlurRadius":3,"subtitlesGap":0,"toolTipFontSize":"1.11vmin","playbackBarProgressBackgroundColorDirection":"vertical","toolTipShadowHorizontalLength":0,"toolTipHorizontalAlign":"center","subtitlesTextShadowOpacity":1,"progressBorderColor":"#000000","playbackBarBackgroundColor":["#FFFFFF"],"progressBarBackgroundColor":["#3399FF"],"playbackBarHeight":10,"toolTipDisplayTime":600,"playbackBarHeadBackgroundColorDirection":"vertical","toolTipFontFamily":"Arial","toolTipShadowOpacity":1,"toolTipFontWeight":"normal","toolTipBorderRadius":3,"progressBarOpacity":1,"subtitlesBorderSize":0,"progressBackgroundColor":["#FFFFFF"],"progressBottom":2,"playbackBarProgressBorderSize":0,"playbackBarHeadWidth":6,"playbackBarBackgroundColorDirection":"vertical","subtitlesFontColor":"#FFFFFF","toolTipTextShadowColor":"#000000","firstTransitionDuration":0,"displayTooltipInTouchScreens":true,"progressBorderSize":0,"progressHeight":10,"progressBarBorderRadius":0,"top":"0%","playbackBarRight":0,"playbackBarProgressBorderRadius":0,"paddingTop":0,"toolTipBackgroundColor":"#F6F6F6","subtitlesFontWeight":"normal","borderSize":0,"toolTipPaddingTop":4,"toolTipBorderSize":1,"paddingBottom":0,"subtitlesPaddingLeft":5,"subtitlesTop":0,"playbackBarProgressBackgroundColor":["#3399FF"],"progressBarBorderSize":0,"minHeight":1,"subtitlesBottom":10,"minWidth":1,"paddingLeft":0,"playbackBarHeadShadowBlurRadius":3,"subtitlesPaddingRight":5,"subtitlesTextShadowColor":"#000000","progressBorderRadius":0,"progressLeft":0,"subtitlesTextShadowVerticalLength":1,"paddingRight":0,"toolTipTextShadowOpacity":0,"playbackBarProgressBackgroundColorRatios":[0],"playbackBarLeft":0,"toolTipShadowColor":"#333333","subtitlesFontSize":"3vmin","playbackBarHeadShadowOpacity":0.7,"toolTipShadowVerticalLength":0,"playbackBarHeadShadowColor":"#000000","playbackBarBorderColor":"#FFFFFF","subtitlesPaddingBottom":5,"playbackBarHeadHeight":15,"toolTipShadowBlurRadius":3,"playbackBarBorderRadius":0,"subtitlesBackgroundOpacity":0.2,"subtitlesTextShadowHorizontalLength":1},{"initialPosition":{"class":"PanoramaCameraPosition","yaw":89.94,"pitch":11.97},"automaticRotationSpeed":8,"class":"PanoramaCamera","initialSequence":"this.sequence_5D9EBD25_5785_1B99_41D0_111F0E575FE2","id":"panorama_5D3472D7_5785_0EB9_419E_D286CC08DEF0_camera","manualZoomSpeed":3,"automaticZoomSpeed":10},{"gyroscopeVerticalDraggingEnabled":true,"viewerArea":"this.MainViewer","touchControlMode":"drag_rotation","arrowKeysAction":"translate","class":"PanoramaPlayer","displayPlaybackBar":true,"mouseControlMode":"drag_rotation","id":"MainViewerPanoramaPlayer","zoomEnabled":true},{"class":"PlayList","items":[{"media":"this.panorama_5D3472D7_5785_0EB9_419E_D286CC08DEF0","end":"this.trigger('tourEnded')","camera":"this.panorama_5D3472D7_5785_0EB9_419E_D286CC08DEF0_camera","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer"}],"id":"mainPlayList"},{"propagateClick":false,"data":{"name":"Main Viewer"},"toolTipPaddingLeft":6,"id":"MainViewer","toolTipFontColor":"#606060","playbackBarHeadBorderRadius":0,"toolTipPaddingBottom":4,"playbackBarProgressBorderColor":"#000000","toolTipShadowSpread":0,"borderRadius":0,"playbackBarProgressOpacity":1,"vrPointerSelectionTime":2000,"width":"100%","playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadBorderColor":"#000000","playbackBarHeadBorderSize":0,"subtitlesBorderColor":"#FFFFFF","toolTipPaddingRight":6,"progressBackgroundOpacity":1,"vrPointerSelectionColor":"#FF6600","progressBackgroundColorRatios":[0],"playbackBarHeadShadowVerticalLength":0,"transitionDuration":500,"playbackBarBorderSize":0,"playbackBarHeadOpacity":1,"subtitlesFontFamily":"Arial","playbackBarHeadShadow":true,"progressRight":0,"subtitlesTextShadowBlurRadius":0,"doubleClickAction":"toggle_fullscreen","transitionMode":"blending","subtitlesTextDecoration":"none","playbackBarBackgroundOpacity":1,"playbackBarHeadShadowHorizontalLength":0,"progressOpacity":1,"height":"100%","class":"ViewerArea","subtitlesPaddingTop":5,"progressBarBorderColor":"#000000","progressBarBackgroundColorDirection":"vertical","toolTipFontStyle":"normal","toolTipOpacity":1,"playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarBottom":5,"playbackBarOpacity":1,"progressBarBackgroundColorRatios":[0],"toolTipBorderColor":"#767676","shadow":false,"subtitlesHorizontalAlign":"center","subtitlesOpacity":1,"subtitlesBackgroundColor":"#000000","progressBackgroundColorDirection":"vertical","subtitlesVerticalAlign":"bottom","vrPointerColor":"#FFFFFF","subtitlesShadow":false,"toolTipTextShadowBlurRadius":3,"subtitlesGap":0,"toolTipFontSize":"1.11vmin","playbackBarProgressBackgroundColorDirection":"vertical","toolTipShadowHorizontalLength":0,"toolTipHorizontalAlign":"center","subtitlesTextShadowOpacity":1,"progressBorderColor":"#000000","playbackBarBackgroundColor":["#FFFFFF"],"progressBarBackgroundColor":["#3399FF"],"playbackBarHeight":10,"toolTipDisplayTime":600,"playbackBarHeadBackgroundColorDirection":"vertical","toolTipFontFamily":"Arial","toolTipShadowOpacity":1,"toolTipFontWeight":"normal","toolTipBorderRadius":3,"progressBarOpacity":1,"subtitlesBorderSize":0,"progressBackgroundColor":["#FFFFFF"],"progressBottom":0,"playbackBarProgressBorderSize":0,"playbackBarHeadWidth":6,"playbackBarBackgroundColorDirection":"vertical","subtitlesFontColor":"#FFFFFF","toolTipTextShadowColor":"#000000","firstTransitionDuration":0,"displayTooltipInTouchScreens":true,"progressBorderSize":0,"progressHeight":10,"progressBarBorderRadius":0,"playbackBarRight":0,"playbackBarProgressBorderRadius":0,"paddingTop":0,"toolTipBackgroundColor":"#F6F6F6","subtitlesFontWeight":"normal","borderSize":0,"toolTipPaddingTop":4,"toolTipBorderSize":1,"paddingBottom":0,"subtitlesPaddingLeft":5,"subtitlesTop":0,"playbackBarProgressBackgroundColor":["#3399FF"],"progressBarBorderSize":0,"minHeight":50,"subtitlesBottom":50,"minWidth":100,"paddingLeft":0,"playbackBarHeadShadowBlurRadius":3,"subtitlesPaddingRight":5,"subtitlesTextShadowColor":"#000000","progressBorderRadius":0,"progressLeft":0,"subtitlesTextShadowVerticalLength":1,"paddingRight":0,"toolTipTextShadowOpacity":0,"playbackBarProgressBackgroundColorRatios":[0],"playbackBarLeft":0,"toolTipShadowColor":"#333333","playbackBarHeadHeight":15,"subtitlesFontSize":"3vmin","playbackBarHeadShadowOpacity":0.7,"toolTipShadowVerticalLength":0,"playbackBarHeadShadowColor":"#000000","playbackBarBorderColor":"#FFFFFF","subtitlesPaddingBottom":5,"toolTipShadowBlurRadius":3,"playbackBarBorderRadius":0,"subtitlesBackgroundOpacity":0.2,"subtitlesTextShadowHorizontalLength":1},{"restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"class":"TargetPanoramaCameraMovement","easing":"cubic_in_out","targetPitch":0,"path":"shortest","pitchSpeed":15.92},{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_in","yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":323,"easing":"linear","yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_out","yawSpeed":7.96}],"id":"sequence_5D9EBD25_5785_1B99_41D0_111F0E575FE2"}],"propagateClick":false};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2020.4.14.js.map
//Generated with v2020.4.14, Wed Oct 6 2021