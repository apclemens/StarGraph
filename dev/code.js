window.isMobile = /iphone|ipod|ipad|android|blackberry|opera mini|opera mobi|skyfire|maemo|windows phone|palm|iemobile|symbian|symbianos|fennec/i.test(navigator.userAgent.toLowerCase());

function hideVirtualKeyboard () {
  if (
    window.isMobile &&
    document.activeElement &&
    document.activeElement.blur &&
    typeof document.activeElement.blur === 'function'
  ) {
    document.activeElement.blur()
  }
}

var movieCasts = {};
var actorLookup = {};
var movieLookup = {};
var roleLookup = {};
var posterLookup = {};
var picLookup = {};
var crewLookup = {};
var gotRoles = {};
var suggs = [];
var nonCrewLookup = {};
var avoidingMovies = [];
var crewEdges = [];
var includeCrew;
var iconLookup = {
    'none': 'resources/none.png',
    'wiki': 'resources/wiki.png',
    'rt': 'resources/rt.png',
    'imdb': 'resources/imdb.png',
    'tmdb': 'resources/tmdb.png',
    'circle': 'resources/circle.png',
    'cola': 'resources/cola.png'
};
var showingPics;
var zoomCallback = true;
var redraw;
var cy;
var layout = 0;
var layoutCycle = ['circle', 'cola'];
var layoutNames = ['Circle', 'Force-directed'];
var linkTo = 0;
var linkCycle = ['none', 'wiki', 'rt', 'imdb', 'tmdb'];
var linkNames = ['none', 'Wikipedia', 'Rotten Tomatoes', 'IMDb', 'The Movie Database'];
var displayLookup = function(id) {
    var toDisplay = '';
    switch (id) {
        case 'link':
            toDisplay = 'Link to: ' + linkNames[linkTo];
            break;
        case 'layout':
            toDisplay = 'Layout: ' + layoutNames[layout];
            break;
        case 'crew2':
            if (includeCrew) {
                toDisplay = 'Include crew (on)';
            } else {
                toDisplay = 'Include crew (off)';
            }
            break;
        case 'redraw2':
            if (redraw) {
                toDisplay = 'Redraw after change (on)';
            } else {
                toDisplay = 'Redraw after change (off)';
            }
            break;
        case 'showPics2':
            if (showingPics) {
                toDisplay = 'Show pictures (on)';
            } else {
                toDisplay = 'Show pictures (off)';
            }
            break;
        case 'fit':
            toDisplay = 'Fit to screen';
            break;
        case 'restore':
            toDisplay = 'Restore removed movies';
            break;
        case 'redraw':
            toDisplay = 'Redraw graph';
            break;
        case 'center':
            toDisplay = 'Center graph';
            break;
        case 'clear':
            toDisplay = 'Clear graph';
            break;
        case 'zoom':
            toDisplay = 'Zoom (' + cy.zoom() + ')';
            break;
    }
    return toDisplay;
};
var linkLookup = {};

function setDisplay(id) {
    document.getElementById('settings-display').innerHTML = displayLookup(id);
}

function getYear(release_date) {
    if (release_date == null) {
        return "";
    } else {
        return release_date.substring(0, 4);
    }
}

function restoreMovies() {
    while (avoidingMovies.length > 0) {
        restoreMovie(avoidingMovies[0]);
    }
    updateURL();
}

var tmdbObject = {
    api_key: "ea410068ee0b9ce6c7cb5f5e0202f423",
    get_data: function(url, afterCode) {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                afterCode(xmlhttp);
            }
        };
        xmlhttp.open("GET", url, true);
        xmlhttp.send();
    },
    addName: function(name) {
        this.get_data("http://api.themoviedb.org/3/search/person?query=" + name + "&api_key=" + this.api_key, function(xmlhttp) {
            eval("var data = " + xmlhttp.responseText + ".results[0]");
            actorLookup[data.id] = data.name;
            picLookup[data.id] = data.profile_path;
            tmdbObject.addActor(data.id, {}, redraw);
        });
    },
    getName: function(actID) {
        this.get_data("http://api.themoviedb.org/3/person/" + String(actID) + "?api_key=" + this.api_key, function(xmlhttp) {
            eval("var info=" + xmlhttp.responseText);
            actorLookup[actID] = info.name;
            picLookup[actID] = info.profile_path;
        });
    },
    getNameAndAdd: function(actID, pos, redraw2) {
        this.get_data("http://api.themoviedb.org/3/person/" + String(actID) + "?api_key=" + this.api_key, function(xmlhttp) {
            eval("var info=" + xmlhttp.responseText);
            actorLookup[actID] = info.name;
            picLookup[actID] = info.profile_path;
            tmdbObject.addActor(actID, pos, redraw2);
        });
    },
    addActor: function(actID, pos, redraw2) {
        if (actorLookup[actID] === undefined) {
            this.getNameAndAdd(actID, pos, redraw2);
        } else {
            this.get_data("http://api.themoviedb.org/3/person/" + String(actID) + "/movie_credits?api_key=" + this.api_key, function(xmlhttp) {
                if (Object.keys(pos).length === 0) {
                    pos = centerOfGraph();
                }
                eval("var actorRoles = " + xmlhttp.responseText + ".cast");
                eval("var crewRoles = " + xmlhttp.responseText + ".crew");
                var picURL;
                if (picLookup[actID] === null) {
                    picURL = 'https://assets.tmdb.org/assets/91c0541cff7ec4947514edd379f0ffd1/images/no-profile-w185.jpg';
                } else {
                    picURL = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2' + picLookup[actID];
                }
                cy.add({
                    group: "nodes",
                    data: {
                        id: actID,
                        name: actorLookup[actID],
                        img: picURL,
                    }
                });
                if (showingPics) {
                    cy.$('#' + String(actID)).addClass('picture');
                }
                if (redraw2) {
                    redrawGraph();
                } else {
                    cy.$('#' + String(actID)).position(pos);
                }
                var movieID;
                var movieName;
                var j;
                var numLines;
                for (var i = 0; i < actorRoles.length; i++) {
                    movieID = actorRoles[i].id;
                    if (movieCasts[movieID] === undefined) {
                        movieCasts[movieID] = [actID];
                        roleLookup[movieID] = {};
                        crewLookup[movieID] = {};
                        roleLookup[movieID][actID] = actorRoles[i].character;
                        crewLookup[movieID][actID] = false;
                    } else {
                        if (roleLookup[movieID][actID] === undefined) {
                            roleLookup[movieID][actID] = actorRoles[i].character;
                            crewLookup[movieID][actID] = false;
                        } else {
                            if (gotRoles[actID] === undefined) {
                                roleLookup[movieID][actID] += " / " + actorRoles[i].character;
                                crewLookup[movieID][actID] = false;
                            }
                        }
                        posterLookup[movieID] = actorRoles[i].poster_path;
                        numLines = movieCasts[movieID].length;
                        movieName = actorRoles[i].title + " (" + getYear(actorRoles[i].release_date) + ")";
                        for (j = 0; j < numLines; j++) {
                            movieLookup[movieID] = movieName;
                            if (actID !== movieCasts[movieID][j] && avoidingMovies.indexOf(String(movieID)) == -1) {
                                addEdge(movieID, actID, movieCasts[movieID][j]);
                                if (crewLookup[movieID][actID] || crewLookup[movieID][movieCasts[movieID][j]]) {
                                    crewEdges[crewEdges.length] = movieID + '.' + Math.min(actID, movieCasts[movieID][j]) + '.' + Math.max(actID, movieCasts[movieID][j]);
                                }
                            }
                        }
                        movieCasts[movieID][numLines] = actID;
                    }
                }
                hideVirtualKeyboard();
                for (i = 0; i < crewRoles.length; i++) {
                    movieID = crewRoles[i].id;
                    if (movieCasts[movieID] === undefined) {
                        movieCasts[movieID] = [actID];
                        roleLookup[movieID] = {};
                        crewLookup[movieID] = {};
                        roleLookup[movieID][actID] = "crew: " + crewRoles[i].job;
                        crewLookup[movieID][actID] = true;
                    } else {
                        if (roleLookup[movieID][actID] === undefined) {
                            roleLookup[movieID][actID] = "crew: " + crewRoles[i].job;
                            crewLookup[movieID][actID] = true;
                        } else {
                            if (gotRoles[actID] === undefined) {
                                roleLookup[movieID][actID] += " / " + "crew: " + crewRoles[i].job;
                            }
                        }
                        posterLookup[movieID] = crewRoles[i].poster_path;
                        numLines = movieCasts[movieID].length;
                        movieName = crewRoles[i].title + " (" + getYear(crewRoles[i].release_date) + ")";
                        for (j = 0; j < numLines; j++) {
                            movieLookup[movieID] = movieName;
                            if (actID !== movieCasts[movieID][j] && avoidingMovies.indexOf(String(movieID)) == -1) {
                                addEdge(movieID, actID, movieCasts[movieID][j]);
                                if (crewLookup[movieID][actID] || crewLookup[movieID][movieCasts[movieID][j]]) {
                                    crewEdges[crewEdges.length] = movieID + '.' + Math.min(actID, movieCasts[movieID][j]) + '.' + Math.max(actID, movieCasts[movieID][j]);
                                }
                            }
                        }
                        movieCasts[movieID][numLines] = actID;
                    }
                }
                changeCrew(includeCrew);
                gotRoles[actID] = true;
                $("#addActor").val('');
                updateURL();
            });
        }
    },
    getSugg: function(key, query) {
        if (key == 13) {
            this.addName(query);
            $("#addActor").autocomplete('close').val('');
        } else {
            if (query !== "") {
                this.get_data("http://api.themoviedb.org/3/search/person?query=" + query + "&api_key=" + this.api_key, function(xmlhttp) {
                    suggs = [];
                    var ret;
                    eval("ret = " + xmlhttp.responseText + '.results');
                    for (i = 0; i < Math.min(10, ret.length); i++) {
                        actorLookup[ret[i].id] = ret[i].name;
                        picLookup[ret[i].id] = ret[i].profile_path;
                        suggs[suggs.length] = {
                            label: ret[i].name,
                            data: ret[i].id
                        };
                    }
                    $("#addActor").autocomplete({
                        source: function(request, response) {
                            response(suggs);
                        },
                        select: function(event, ui) {
                            tmdbObject.addActor(ui.item.data, {}, redraw);
                        }
                    }).data("ui-autocomplete")._renderItem = function(ul, item) {
                        var imgURL;
                        if (picLookup[item.data] === null) {
                            imgURL = "https://assets.tmdb.org/assets/91c0541cff7ec4947514edd379f0ffd1/images/no-profile-w185.jpg";
                        } else {
                            imgURL = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2' + picLookup[item.data];
                        }
                        return $("<li></li>")
                            .data("item.autocomplete", item)
                            .append("<img src='" + imgURL + "'style='height:30px'>" + '<a class="float" style="left:45px">' + item.label + '</a>')
                            .appendTo(ul);
                    };
                });
            }
        }
    },
    getMovieLinks: function(movieID) {
        this.get_data("http://api.themoviedb.org/3/movie/" + movieID + "?api_key=" + this.api_key, function(xmlhttp) {
            eval('var data = ' + xmlhttp.responseText);
            var movieName = movieLookup[movieID].replace('&', 'and');
            linkLookup[movieID] = {};
            linkLookup[movieID].none = '';
            linkLookup[movieID].wiki = 'http://www.google.com/search?q=site:en.wikipedia.org+' + movieName.replace(' ', '+') + '+film&btnI';
            linkLookup[movieID].rt = 'http://www.google.com/search?q=site:rottentomatoes.com+' + movieName.replace(' ', '+') + '&btnI';
            linkLookup[movieID].imdb = 'http://www.imdb.com/title/' + data.imdb_id;
            linkLookup[movieID].tmdb = 'https://www.themoviedb.org/movie/' + movieID;
        });
    }
};

function changeCrew(value) {
    includeCrew = value;
    var i;
    if (includeCrew) {
        for (i = 0; i < crewEdges.length; i++) {
            if (avoidingMovies.indexOf(crewEdges[i].split('.')[0]) == -1) {
                addEdge(crewEdges[i].split('.')[0], crewEdges[i].split('.')[1], crewEdges[i].split('.')[2]);
            }
        }
    } else {
        for (i = 0; i < crewEdges.length; i++) {
            cy.getElementById(crewEdges[i]).remove();
        }
    }
    updateURL();
}

function redrawGraph() {
    cy.layout({
        name: layoutCycle[layout],
        animate: false,
        nodeSpacing: function(node) {
            return 50;
        }
    });
}

function correctRoleDisplay(role) {
    if (includeCrew) {
        return role;
    } else {
        if (nonCrewLookup[role] === undefined) {
            var roles = role.split(' / ');
            var newRoles = [];
            for (var i = 0; i < roles.length; i++) {
                if (roles[i].substring(0, 6) !== 'crew: ') {
                    newRoles[newRoles.length] = roles[i];
                }
            }
            nonCrewLookup[role] = newRoles.join(' / ');
        }
        return nonCrewLookup[role];
    }
}

function displayMovie(movieID, showName) {
    if (linkLookup[movieID] === undefined) {
        tmdbObject.getMovieLinks(movieID);
    }
    $('#backImage').css('background-image', "url('" + "https://image.tmdb.org/t/p/w600_and_h900_bestv2" + posterLookup[movieID] + "')");
    var title = movieLookup[movieID];
    var changedNodes = [];
    if (showName) {
        document.getElementById('movieName').innerHTML = title;
    }
    cy.edges().forEach(function(ele) {
        if (ele.id().split('.')[0] == movieID) {
            ele.addClass('highlighted');
            ele.source().style('content', correctRoleDisplay(roleLookup[movieID][ele.source().id()]));
            ele.target().style('content', correctRoleDisplay(roleLookup[movieID][ele.target().id()]));
            changedNodes[changedNodes.length] = ele.source().id();
            changedNodes[changedNodes.length] = ele.target().id();
        }
    });
    cy.nodes().forEach(function(ele) {
        if (changedNodes.indexOf(ele.id()) == -1) {
            ele.style('background-opacity', 0.3);
            if (showingPics) {
                ele.style('background-image-opacity', 0.3);
            }
        } else {
            ele.style('font-style', 'italic');
        }
    });
}

function undisplayMovie() {
    document.getElementById('movieName').innerHTML = '';
    $('#backImage').css('background-image', "");
    cy.edges().removeClass('highlighted');
    cy.nodes().style('background-opacity', 1);
    cy.nodes().style('font-style', 'normal');
    if (showingPics) {
        cy.nodes().style('background-image-opacity', 1);
    }
    cy.edges().forEach(function(ele) {
        ele.source().style('content', actorLookup[ele.source().id()]);
        ele.target().style('content', actorLookup[ele.target().id()]);
    });
}

function changePictures(value) {
    if (value) {
        cy.nodes().forEach(function(ele) {
            ele.addClass('picture');
        });
        showingPics = true;
    } else {
        cy.nodes().forEach(function(ele) {
            ele.removeClass('picture');
        });
        showingPics = false;
    }
    updateURL();
}

function removeMovie(movieID) {
    undisplayMovie();
    var toRemove = [];
    avoidingMovies[avoidingMovies.length] = movieID;
    cy.edges().forEach(function(ele) {
        if (ele.id().split('.')[0] == movieID) {
            toRemove[toRemove.length] = ele.id();
        }
    });
    for (var i = 0; i < toRemove.length; i++) {
        cy.getElementById(toRemove[i]).remove();
    }
    updateURL();
}

function addEdge(movieID, source, target) {
    if(source == target){return;}
    var id = movieID + '.' + Math.min(source, target) + '.' + Math.max(source, target);
    if (cy.getElementById(id).isEdge()) {
        return;
    }
    cy.add({
        group: "edges",
        data: {
            id: id,
            movie: movieID,
            source: Math.min(source, target),
            target: Math.max(source, target)
        }
    });
}

function restoreMovie(movieID) {
    for (var i = 0; i < Object.keys(roleLookup[movieID]).length; i++) {
        for (var j = 0; j < Object.keys(roleLookup[movieID]).length; j++) {
            if (i == j) {
                continue;
            }
            addEdge(movieID, Object.keys(roleLookup[movieID])[i], Object.keys(roleLookup[movieID])[j]);
        }
    }
    var index = avoidingMovies.indexOf(movieID);
    avoidingMovies.splice(index, 1);
}

function centerOfGraph() {
    if (cy.nodes().length === 0) {
        return {
            x: cy.width() / 2,
            y: cy.height() / 2
        };
    } else {
        var x = 0;
        var y = 0;
        cy.nodes().forEach(function(ele) {
            x += ele.position('x');
            y += ele.position('y');
        });
        x /= cy.nodes().length;
        y /= cy.nodes().length;
        return {
            x: x,
            y: y
        };
    }
}

function changeLink(value) {
    linkTo = value.index;
}

function changeLayout(value) {
    layout = value.index;
}

function openLink(id) {
    var url = linkLookup[id][linkCycle[linkTo]];
    if (url !== '') {
        var win = window.open(linkLookup[id][linkCycle[linkTo]], '_blank');
        win.focus();
    }
}

function zoom(v) {
    if (zoomCallback) {
    cy.zoom({
        level: Number(v),
        position: centerOfGraph()
    });}
    zoomCallback = true;
}

var settings;

$(document).ready(function() {


settings = QuickSettings.create(0, 0, "Settings", document.getElementById('settings-panel')).setCollapsible(true).setDraggable(false)
  .addRange("Zoom", 0.1, 4, 1, 0.05, zoom)
  .addDropDown("Link movies to", ['none', 'Wikipedia', 'Rotten Tomatoes', 'IMDb', 'The Movie Database'], changeLink)
  .addDropDown("Graph layout", ['Circle', 'Force-directed'], changeLayout)
  .addBoolean("Include crew", false, changeCrew)
  .addBoolean("Redraw graph after change", true, function(value){redraw = value;})
  .addBoolean("Show actor pictures", false, changePictures)
  .addButton("Fit to screen", function(value){cy.fit();})
  .addButton("Restore removed movies", restoreMovies)
  .addButton("Redraw graph", function() {cy.layout({name: layoutCycle[layout],animate:false,nodeSpacing:function(node){return 50}});})
  .addButton("Center graph", function() {cy.center();})
  .addButton("Clear graph", function() {cy.remove(cy.nodes());})
  .collapse()
;

$('.qs_title_bar').on('click tap', function() {settings.toggleCollapsed()});


    showingPics = settings.getValue("Show actor pictures");
    redraw = settings.getValue("Redraw graph after change");
    includeCrew = settings.getValue("Include crew");
    cy = cytoscape({
        container: document.getElementById('cy'),
        style: cytoscape.stylesheet()
            .selector('node')
            .css({
                'background-color': '#000',
                'background-fit': 'cover',
                'width': 'mapData(baz, 0, 10, 10, 40)',
                'height': 'mapData(baz, 0, 10, 10, 40)',
                'content': 'data(name)'
            })
            .selector('.picture')
            .css({
                'width': 80,
                'height': 80,
                'background-image': 'data(img)'
            })
            .selector('edge')
            .css({
                'line-color': 'red',
                'width': 2,
                'opacity': 0.8
            })
            .selector('.highlighted')
            .css({
                'line-color': 'black',
            }),
        layout: {
            name: layoutCycle[layout], //$('input[name="layout"]:checked').val(),
            nodeSpacing: function(node) {
                return 50;
            },
            animate: false
        },
        ready: function() {}
    });




    cy.on('zoom', function() {
        zoomCallback = false;
        settings.setValue("Zoom", cy.zoom());
        updateURL();
    });
    cy.on('tapend', function() {
        updateURL();
    });
    document.oncontextmenu = function() {
        return false;
    };
    var $moveable = $('#movieName');
    if(window.isMobile) {
      $moveable.css({
        'top': 67,
        'left': 0
      });
    } else {
    $(document).mousemove(function(e) {
        $moveable.css({
            'top': e.pageY - 20,
            'left': e.pageX + 20
        });
    });}
    cy.on('cxttap', 'node', function(evt) {
        cy.$('#' + evt.cyTarget.id()).remove();
        if (redraw) {
            redrawGraph();
        }
        updateURL();
    });
    cy.on('tapend', 'node', function(evt) {
        updateURL();
    });
    cy.on('cxttap', 'edge', function(evt) {
        removeMovie(evt.cyTarget.id().split('.')[0]);
    });
    cy.on('click taphold', 'edge', function(evt) {
        openLink(evt.cyTarget.id().split('.')[0]);
    });
    cy.on('tap', function(evt){undisplayMovie();})
    cy.on('mouseover touchend', 'edge', function(evt) {
        undisplayMovie();
        displayMovie(evt.cyTarget.id().split('.')[0], true);
    });
    cy.on('mouseout', 'edge', function(evt) {
        undisplayMovie();
    });

    var url = window.location.href;
    var urlStart = url.indexOf("?c=") + 3;
    if (urlStart !== 2) {
        var code = url.slice(url.indexOf("?c=") + 3, url.length);
        placeCode(code);
    }
});

function updateURL() {
    var code = getCode();
    var url = window.location.href.split('?')[0] + code;
    history.pushState('data', '', url);
    if (!window.DO_NOT_TRACK) {
        ga('set', 'dimension1', code);
    }
}

function getCode() {
    if (cy.nodes().length === 0) {
        return '';
    }
    var codeComponents = [''];
    if (showingPics) {
        codeComponents[0] += '1';
    } else {
        codeComponents[0] += '0';
    }
    if (includeCrew) {
        codeComponents[0] += '1';
    } else {
        codeComponents[0] += '0';
    }
    codeComponents[codeComponents.length] = cy.zoom();
    codeComponents[codeComponents.length] = cy.pan('x');
    codeComponents[codeComponents.length] = cy.pan('y');
    codeComponents[codeComponents.length] = cy.nodes().length;
    for (var i = 0; i < cy.nodes().length; i++) {
        codeComponents[codeComponents.length] = cy.nodes()[i].id();
        codeComponents[codeComponents.length] = cy.nodes()[i].position('x');
        codeComponents[codeComponents.length] = cy.nodes()[i].position('y');
    }
    for (i = 0; i < avoidingMovies.length; i++) {
        codeComponents[codeComponents.length] = avoidingMovies[i];
    }
    return '?c=' + codeComponents.join(';');
}

function placeCode(code) {
    var components = code.split(';');
    if (components[0][0] == '1') {
        settings.setValue("Show actor pictures", true);
    } else {
        settings.setValue("Show actor pictures", false);
    }
    if (components[0][1] == '1') {
        settings.setValue("Include crew", true);
    } else {
        settings.setValue("Include crew", false);
    }

    cy.zoom(Number(components[1]));
    cy.pan({
        x: Number(components[2]),
        y: Number(components[3])
    });

    for (var i = 5; i < 3 * Number(components[4]) + 5; i += 3) {
        tmdbObject.getName(components[i]);
    }
    for (i = 5; i < 3 * Number(components[4]) + 5; i += 3) {
        tmdbObject.addActor(components[i], {
            x: Number(components[i + 1]),
            y: Number(components[i + 2])
        }, false);
    }
    for (i = 3 * Number(components[4]) + 5; i < components.length; i++) {
        removeMovie(components[i]);
    }
    changePictures(settings.getValue("Show actor pictures"));
    changeCrew(settings.getValue("Include crew"));
}
