var movieCasts = {};
var actorLookup = {};
var movieLookup = {};
var roleLookup = {};
var posterLookup = {};
var picLookup = {};
var gotRoles = {};
var suggs = [];
var avoidingMovies = [];
var showingPics;
var redraw;
var cy;

function getMovieList() {
  var movieTally = {};
  cy.edges().forEach(function(ele) {
    movie = ele.id().split('.')[0];
    if (movieTally[movie] === undefined) {
      movieTally[movie] = 0;
    }
    movieTally[movie]++;
  });
  var movies = Object.keys(movieTally).map(function(key) {
    return [key, movieTally[key]];
  });
  // Sort the array based on the second element
  movies.sort(function(first, second) {
    return second[1] - first[1];
  });
  var toDisplay = '';
  for (var i = 0; i < movies.length; i++) {
    movie = movieLookup[movies[i][0]];
    toDisplay += '<a>' + movie + ' - ' + String((1 + Math.sqrt(1 + 8 * movies[i][1])) / 2) + '</a></br>';
  }
  if(avoidingMovies.length>0) {
    toDisplay += '</br><b>Deleted movies:</b></br>';
    for(i=0;i<avoidingMovies.length;i++) {
      toDisplay += '<a onclick="restoreMovie('+avoidingMovies[i]+')">'+movieLookup[avoidingMovies[i]] + '</a></br>';
    }
  }
  document.getElementById('list').innerHTML = toDisplay;
}

function getYear(release_date) {
  if (release_date == null) {
    return "";
  } else {
    return release_date.substring(0, 4);
  }
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
      tmdbObject.addActor(data.id);
    });
  },
  getName: function(actID) {
    this.get_data("http://api.themoviedb.org/3/person/" + String(actID) + "?api_key=" + this.api_key, function(xmlhttp) {
      eval("var info=" + xmlhttp.responseText);
      actorLookup[actID] = info.name;
      picLookup[actID] = info.profile_path;
    });
  },
  addActor: function(actID) {
    if (actorLookup[actID] === undefined) {
      this.getName(actID);
    }
    this.get_data("http://api.themoviedb.org/3/person/" + String(actID) + "/movie_credits?api_key=" + this.api_key, function(xmlhttp) {
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
      if (redraw) {
        cy.layout({
          name: "circle",
        });
      } else {
        cy.$('#' + String(actID)).position(pos);
      }
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
          var numLines = movieCasts[movieID].length;
          var movieName = actorRoles[i].title + " (" + getYear(actorRoles[i].release_date) + ")";
          for (var j = 0; j < numLines; j++) {
            movieLookup[movieID] = movieName;
            if (actID !== movieCasts[movieID][j] && avoidingMovies.indexOf(String(movieID)) == -1) {
              cy.add({
                group: "edges",
                data: {
                  id: movieID + '.' + Math.min(actID, movieCasts[movieID][j]) + '.' + Math.max(actID, movieCasts[movieID][j]),
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
      $("#addActor").val('');
      getMovieList();
      $("#addActor").autocomplete("close");
    });
  },
  getSugg: function(key, query) {
    if (key == 13) {
      this.addName(query);
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
              tmdbObject.addActor(ui.item.data);
            }
          }).data("ui-autocomplete")._renderItem = function(ul, item) {
            return $("<li></li>")
              .data("item.autocomplete", item)
              .append("<img src='" + 'https://image.tmdb.org/t/p/w396' + picLookup[item.data] + "'style='height:30px'>" + item.label)
              .appendTo(ul);
          };
        });
      }
    }
  }
};

function displayMovie(movieID, showName) {
  $('#backImage').css('background-image', "url('" + "https://image.tmdb.org/t/p/w396/" + posterLookup[movieID] + "')");
  var title = movieLookup[movieID];
  if (showName) {
    document.getElementById('movieName').innerHTML = title;
  }
  cy.edges().forEach(function(ele) {
    if (ele.id().split('.')[0] == movieID) {
      ele.addClass('highlighted');
      ele.source().style('content', roleLookup[movieID][ele.source().id()]);
      ele.target().style('content', roleLookup[movieID][ele.target().id()]);
    }
  });
}

function undisplayMovie(movieID) {
  document.getElementById('movieName').innerHTML = '';
  $('#backImage').css('background-image', "");
  cy.edges().removeClass('highlighted');
  cy.edges().forEach(function(ele) {
    if (ele.id().split('.')[0] == movieID) {
      ele.source().style('content', actorLookup[ele.source().id()]);
      ele.target().style('content', actorLookup[ele.target().id()]);
    }
  });
}

function changePictures(cb) {
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
}

function removeMovie(movieID) {
  undisplayMovie(movieID);
  var toRemove = [];
  avoidingMovies[avoidingMovies.length] = movieID;
  cy.edges().forEach(function(ele) {
    if(ele.id().split('.')[0]==movieID) {
      toRemove[toRemove.length] = ele.id();
    }
  });
  for(var i=0;i<toRemove.length;i++) {
    cy.getElementById(toRemove[i]).remove();
  }
  getMovieList();
}

function restoreMovie(movieID) {
  for(var i=0;i<Object.keys(roleLookup[movieID]).length;i++) {
    for(var j=0;j<Object.keys(roleLookup[movieID]).length;j++) {
      if(i==j){continue;}
      cy.add({
group: "edges",
data: {
id: movieID + '.' + Math.min(Object.keys(roleLookup[movieID])[i], Object.keys(roleLookup[movieID])[j]) + '.' + Math.max(Object.keys(roleLookup[movieID])[i], roleLookup[movieID][j]),
movie: movieID,
source: Object.keys(roleLookup[movieID])[i],
target: Object.keys(roleLookup[movieID])[j]
}
});
    }
  }
  var index = avoidingMovies.indexOf(movieID);
  avoidingMovies.splice(index,1);
  getMovieList();
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

function zoom(v) {
  cy.zoom({
    level: Number(v),
    position: centerOfGraph()
  });
}

$(document).ready(function() {
  showingPics = document.getElementById("showPics").checked;
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
    if (redraw) {
      cy.layout({
        name: "circle"
      });
    }
  });
  cy.on('cxttap', 'edge', function(evt) {
    removeMovie(evt.cyTarget.id().split('.')[0]);
  });
  cy.on('mouseover', 'edge', function(evt) {
    displayMovie(evt.cyTarget.id().split('.')[0], true);
  });
  cy.on('mouseout', 'edge', function(evt) {
    undisplayMovie(evt.cyTarget.id().split('.')[0]);
  });
});
