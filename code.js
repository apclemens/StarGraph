var movieCasts = {};
var actorLookup = {};
var movieLookup = {};
var roleLookup = {};
var posterLookup = {};
var picLookup = {};
var gotRoles = {};
var suggs = [];
var docLookup = {};
var removedDocs = [];
var showingPics;
var redraw;
var includeDocs;
var currLayout = "circle";
var cy;

var getYear = function(release_date) {
  if (release_date == null) {
    return "";
  } else {
    return release_date.substring(0, 4);
  }
};

var tmdbObject = {};
tmdbObject.api_key = 'ea410068ee0b9ce6c7cb5f5e0202f423';
tmdbObject.get_data = function(url, afterCode) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      afterCode(xmlhttp);
    }
  };
  xmlhttp.open("GET",url,true);
  xmlhttp.send();
};
tmdbObject.addName = function(name) {
  this.get_data("http://api.themoviedb.org/3/search/person?query=" + name + "&api_key="+this.api_key, function(xmlhttp) {
      eval("var data = " + xmlhttp.responseText + ".results[0]");
      actorLookup[data.id] = data.name;
      picLookup[data.id] = data.profile_path;
      this.addActor(data.id);
  });
};
tmdbObject.updateDocs = function(movieID) {
  if (docLookup[movieID] === undefined) {
    this.get_data("http://api.themoviedb.org/3/movie/" + String(movieID) + "?api_key="+this.api_key, function(xmlhttp) {
        docLookup[movieID] = false;
        eval("var genres = " + xmlhttp.responseText + ".genres");
        for (var i = 0; i < genres.length; i++) {
          if (genres[i].id == 99) {
            docLookup[movieID] = true;
          }
        }
    });
  }
};

tmdbObject.addActor = function(actID) {
  this.get_data("http://api.themoviedb.org/3/person/" + String(actID) + "/movie_credits?api_key="+this.api_key, function(xmlhttp) {
      var pos = centerOfGraph();
      eval("var actorRoles = " + xmlhttp.responseText + ".cast");
      cy.add({
        group: "nodes",
        data: {
          id: actID,
          name: actorLookup[actID],
          img: 'https://image.tmdb.org/t/p/w396' + picLookup[actID],
          
        }
      });
      if (showingPics) {
        cy.$('#' + String(actID)).addClass('picture');
      }
      if (redraw){
      cy.layout({
        name: currLayout, timeout:1000
      });} else {
      cy.$('#' + String(actID)).position(pos);}
      for (var i = 0; i < actorRoles.length; i++) {
        var movieID = actorRoles[i].id;
        if (movieCasts[movieID] === undefined) {
          movieCasts[movieID] = [actID];
          roleLookup[movieID] = {};
          roleLookup[movieID][actID] = actorRoles[i].character;
        } else {
          if (roleLookup[movieID][actID] === undefined) {
            roleLookup[movieID][actID] = actorRoles[i].character;
          } else {
            if (gotRoles[actID] === undefined) {
              roleLookup[movieID][actID] += " / " + actorRoles[i].character;
            }
          }
          posterLookup[movieID] = actorRoles[i].poster_path;
          tmdbObject.updateDocs(movieID);
          var numLines = movieCasts[movieID].length;
          var movieName = actorRoles[i].title + " (" + getYear(actorRoles[i].release_date) + ")";
          for (var j = 0; j < numLines; j++) {
            movieLookup[movieID] = movieName;
            if (actID !== movieCasts[movieID][j]) {
              cy.add({
                group: "edges",
                data: {
                  id: movieID + '.' + actID + '.' + movieCasts[movieID][j],
                  movie: movieID,
                  source: actID,
                  target: movieCasts[movieID][j]
                }
              });
            }
          }
          movieCasts[movieID][numLines] = actID;
        }
      }
      gotRoles[actID] = true;
      changeDoc($("#showDocs"));
      $("#addActor").val('');
  });
};

tmdbObject.getSugg = function(key, query) {
  if (key == 13) {
    this.addActor(suggs[0].data);
  } else {
    if (query !== "") {
      this.get_data("http://api.themoviedb.org/3/search/person?query=" + query + "&api_key="+this.api_key, function(xmlhttp) {
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
            tmdbObject.addActor(ui.item.data);
          }
        });
      });
    }
  }
};

var displayMovie = function(movieID) {
  $('#backImage').css('background-image', "url('" + "https://image.tmdb.org/t/p/w396/" + posterLookup[movieID] + "')");
  var title = movieLookup[movieID];
  document.getElementById('movieName').innerHTML = title;
  cy.edges().forEach(function(ele) {
    if (ele.id().split('.')[0] == movieID) {
      ele.addClass('highlighted');
      ele.source().style('content', roleLookup[movieID][ele.source().id()]);
      ele.target().style('content', roleLookup[movieID][ele.target().id()]);
    }
  });
};

var undisplayMovie = function(movieID) {
  document.getElementById('movieName').innerHTML = '';
  $('#backImage').css('background-image', "");
  cy.edges().removeClass('highlighted');
  cy.edges().forEach(function(ele) {
    if (ele.id().split('.')[0] == movieID) {
      ele.source().style('content', actorLookup[ele.source().id()]);
      ele.target().style('content', actorLookup[ele.target().id()]);
    }
  });
};

var changePictures = function(cb) {
  if (cb.checked) {
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
};

var changeDoc = function(cb) {
  if (cb.checked) {
    includeDocs = true;
    cy.edges().forEach(function(ele) {
      for (var i = 0; i < removedDocs.length; i++) {
        cy.add({
          group: "edges",
          data: removedDocs[i]
        });
      }
    });
    removedDocs = [];
  } else {
    includeDocs = false;
    cy.edges().forEach(function(ele) {
      if (docLookup[ele.id().split('.')[0]]) {
        removedDocs[removedDocs.length] = ele.data();
        cy.remove(ele);
      }
    });
  }
};

var centerOfGraph = function() {
  if (cy.nodes().length===0) {
    return {
    x: cy.width()/2,
    y: cy.height()/2
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
  };}
};

var changeLayout = function(value) {
  switch (value) {
    case 'circle':
	  currLayout = 'circle';
      cy.layout({
        name: 'circle'
      });
      break;
    case 'fdgd':
	  currLayout = 'cola';
      cy.layout({
        name: 'cola', timeout:1000
      });
      break;
  }
};

var zoom = function(v) {
  cy.zoom({
    level: Number(v), // the zoom level
    position: centerOfGraph()
  });
};

$(document).ready(function() {
  showingPics = document.getElementById("showPics").checked;
  includeDocs = document.getElementById("showDocs").checked;
  redraw = document.getElementById("redraw").checked;

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
      name: 'circle',
      padding: 10
    },
    ready: function() {}
  });
  cy.on('zoom', function() {
    document.getElementById("zoom").value = cy.zoom();
  });
  document.oncontextmenu = function() {
    return false;
  };
  var $moveable = $('#movieName');
  $(document).mousemove(function(e) {
    $moveable.css({
      'top': e.pageY - 20,
      'left': e.pageX + 20
    });
  });
  cy.on('cxttap', 'node', function(evt) {
    cy.$('#' + evt.cyTarget.id()).remove();
  });
  cy.on('mouseover', 'edge', function(evt) {
    displayMovie(evt.cyTarget.id().split('.')[0]);
  });
  cy.on('mouseout', 'edge', function(evt) {
    undisplayMovie(evt.cyTarget.id().split('.')[0]);
  });
});