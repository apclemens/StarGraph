var movieCasts = {};
var actorLookup = {};
var movieLookup = {};
var roleLookup = {};
var posterLookup = {};
var picLookup = {};
var gotRoles = {};
var suggs = [];
var showingPics;
var redraw;
var cy;

var common_groups = {'Brat Pack': ['2880', '1904', '2879', '37041', '3416', '21624', '21625', '12851'], 'Rat Pack': ['4347', '4299', '20156', '4353', '4361'], 'Dreamlanders': ['10369', '10370', '76495', '10373', '10375', '10371', '10374', '76496', '9292', '10376', '76516', '76517', '77242', '77250', '76505', '10368', '70233'],"AFI's 100 Years...100 Stars (female)": ['6598', '3380', '1932', '4111', '19549', '3149', '3635', '9066', '2896', '31550', '14974', '30155', '4070', '30003', '103616', '10538', '8828', '95624', '33741', '7570', '16757', '82315', '2491', '100047', '25787'], 'Frat Pack - Apatow Chapter': ['19274', '22226', '21007', '41089', '41088', '17051'], 'Brit Pack': ['11856', '27422', '64', '4757', '5472', '47654', '3129', '1050726'], 'Frat Pack': ['7399', '70851', '887', '36422', '23659', '4937', '4495'], "AFI's 100 Years...100 Stars (male)": ['4110', '2638', '854', '3084', '30181', '4958', '11492', '5788', '12147', '1175629', '4068', '8487', '4165', '3359', '13294', '40', '2090', '2749', '13784', '10798', '10799', '10800', '30014', '8635', '16897', '10158', '13566', '8252'], 'Happy Madison Gang': ['60949', '60950', '884', '32895', '2632', '58198', '1241', '32907', '16165', '20818', '58478', '21485', '58477', '20819']};

function getMovieList() {
  return;
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
  for(var i=0;i<movies.length;i++) {
    movie = movieLookup[movies[i][0]];
    toDisplay += '<div class="movieList" onmouseenter="displayMovie('+movies[i][0]+', false)" onmouseleave="undisplayMovie('+movies[i][0]+')">'+movie + ' - ' + String((1+Math.sqrt(1+8*movies[i][1]))/2) + '</div>';
  }
  document.getElementById('movieList').innerHTML = toDisplay;
}

function addGroup(grp) {
  cy.nodes().forEach(function(ele) {
    ele.remove();
  });
  $("#common_groups").val('');
  for (i = 0; i < common_groups[grp].length; i++) {
    tmdbObject.addActor(common_groups[grp][i]);
  }
  // Do it twice in case some got missed.  No, I couldn't think of a better way.
  for (i = 0; i < common_groups[grp].length; i++) {
    tmdbObject.addActor(common_groups[grp][i]);
  }
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
    this.get_data("http://api.themoviedb.org/3/person/"+String(actID) + "?api_key=" + this.api_key, function(xmlhttp) {
      eval("var info="+xmlhttp.responseText);
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
            if (actID !== movieCasts[movieID][j]) {
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
              .append("<img src='" + 'https://image.tmdb.org/t/p/w396' + picLookup[item.data] + "'style='width:30px'>" + item.label)
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
  document.getElementById('movieName').innerHTML = title;}
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
  });
  cy.on('mouseover', 'edge', function(evt) {
    displayMovie(evt.cyTarget.id().split('.')[0], true);
  });
  cy.on('mouseout', 'edge', function(evt) {
    undisplayMovie(evt.cyTarget.id().split('.')[0]);
  });
  var grpSlctHTML = '<option value="">Common groups</option>';
  for (var i = 0; i < Object.keys(common_groups).length; i++) {
    grpSlctHTML += '<option value="' + Object.keys(common_groups)[i] + '">' + Object.keys(common_groups)[i] + '</option>';
  }
  document.getElementById('common_groups').innerHTML = grpSlctHTML;
});