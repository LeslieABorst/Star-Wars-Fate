"use strict"

angular
  .module("app")
  .controller("ResultsController", function(SwapiService, $timeout, $location) {
    const $ctrl = this;
    $ctrl.userAnswers = SwapiService.userAnswers;
    $ctrl.whobtn = true;
    $ctrl.resultname = true;
    $ctrl.resultplanet = true;
    $ctrl.resultmovies = true;
    $ctrl.againbtn = true;
    
    
    $ctrl.solo = {
      answers: ["a", "a", "a" ,"a"],
      id: 14};
    
    $ctrl.luke = {
      answers: ["a","a","a","b"],
      id: 1};

    $ctrl.leia = {
      answers: ["a","a","b","a"],
      id: 5};

    $ctrl.obiwan = {
      answers: ["a","a","b","b"],
      id: 10};

    $ctrl.boba = {
      answers: ["a","b","a","a"],
      id: 22};

    $ctrl.palpatine = {
      answers: ["a","b","a","b"],
      id: 21};

    $ctrl.jabba = {
      answers: ["a","b","b","a"],
      id: 16};

    $ctrl.vader = {
      answers: ["a","b","b","b"],
      id: 4};

    $ctrl.c3po = {
      answers: ["b","a","a","a"],
      id: 2};

    $ctrl.r2d2 = {
      answers: ["b","a","a","b"],
      id: 3};

    $ctrl.chewy = {
      answers: ["b","a","b","a"],
      id: 13};

    $ctrl.rey = {
      answers: ["b","a","b","b"],
      id: 85};

    $ctrl.lando = {
      answers: ["b","b","a","a"],
      id: 25};

    $ctrl.maul = {
      answers: ["b","b","a","b"],
      id: 44};
    $ctrl.phasma = {
      answers: ["b","b","b","a"],
      id: 88};

    $ctrl.grevius = {
      answers: ["b","b","b","b"],
      id: 79};
   
    $ctrl.personResults = function() {
      $ctrl.whobtn = false;
      $ctrl.resultname = false;
      if (JSON.stringify($ctrl.solo.answers) === JSON.stringify($ctrl.userAnswers)) {
        SwapiService.getPeople($ctrl.solo.id).then(response => {
          $ctrl.person = response.data;
          $ctrl.personimage = 'assets/images/starwarslogo.png';
          console.log($ctrl.person);
          SwapiService.getMovies(response.data.films).then(result => {
            $timeout(() => { 
              $ctrl.resultname = true;
              $ctrl.resultmovies = false;
              $ctrl.movies = result;
            console.log(result); }, 5000);
          });
            SwapiService.getPlanets(response.data.homeworld).then(planet => {
              $timeout(() => { 
                $ctrl.resultmovies = true;
                $ctrl.resultplanet = false;
                $ctrl.planet = planet.data;
              console.log($ctrl.planet); }, 5000);
            });
            $timeout( function(){
              $ctrl.againbtn = false;
             }, 8000 );
        });
        console.log("hooray");
      };

      if (JSON.stringify($ctrl.luke.answers) === JSON.stringify($ctrl.userAnswers)) {
        SwapiService.getPeople($ctrl.luke.id).then(response => {
          console.log(response.data);
          SwapiService.getMovies(response.data.films).then(result => {
            $timeout(() => { $ctrl.movies = result;
            console.log(result); });
          });
            SwapiService.getPlanets(response.data.homeworld).then(planet => {
              $timeout(() => { $ctrl.planet = planet.data;
              console.log($ctrl.planet); });
            });
        });
        console.log("HOORAY");
      };

      if (JSON.stringify($ctrl.leia.answers) === JSON.stringify($ctrl.userAnswers)) {
        SwapiService.getPeople($ctrl.leia.id).then(response => {
          console.log(response.data);
          SwapiService.getMovies(response.data.films).then(result => {
            $timeout(() => { $ctrl.movies = result;
            console.log(result); });
          });
            SwapiService.getPlanets(response.data.homeworld).then(planet => {
              $timeout(() => { $ctrl.planet = planet.data;
              console.log($ctrl.planet); });
            });
        });
        console.log("HOORAY");
      };

      if (JSON.stringify($ctrl.obiwan.answers) === JSON.stringify($ctrl.userAnswers)) {
        SwapiService.getPeople($ctrl.obiwan.id).then(response => {
          console.log(response.data);
          SwapiService.getMovies(response.data.films).then(result => {
            $timeout(() => { $ctrl.movies = result;
            console.log(result); });
          });
            SwapiService.getPlanets(response.data.homeworld).then(planet => {
              $timeout(() => { $ctrl.planet = planet.data;
              console.log($ctrl.planet); });
            });
        });
        console.log("HOORAY");
      };

      if (JSON.stringify($ctrl.boba).answers === JSON.stringify($ctrl.userAnswers)) {
        SwapiService.getPeople($ctrl.boba.id).then(response => {
          console.log(response.data);
          SwapiService.getMovies(response.data.films).then(result => {
            $timeout(() => { $ctrl.movies = result;
            console.log(result); });
          });
            SwapiService.getPlanets(response.data.homeworld).then(planet => {
              $timeout(() => { $ctrl.planet = planet.data;
              console.log($ctrl.planet); });
            });
        });
        console.log("HOORAY");
      };

      if (JSON.stringify($ctrl.palpatine.answers) === JSON.stringify($ctrl.userAnswers)) {
        SwapiService.getPeople($ctrl.palpatine.id).then(response => {
          console.log(response.data);
          SwapiService.getMovies(response.data.films).then(result => {
            $timeout(() => { $ctrl.movies = result;
            console.log(result); });
          });
            SwapiService.getPlanets(response.data.homeworld).then(planet => {
              $timeout(() => { $ctrl.planet = planet.data;
              console.log($ctrl.planet); });
            });
        });
        console.log("HOORAY");
      };

      if (JSON.stringify($ctrl.jabba.answers) === JSON.stringify($ctrl.userAnswers)) {
        SwapiService.getPeople($ctrl.jabba.id).then(response => {
          console.log(response.data);
          SwapiService.getMovies(response.data.films).then(result => {
            $timeout(() => { $ctrl.movies = result;
            console.log(result); });
          });
            SwapiService.getPlanets(response.data.homeworld).then(planet => {
              $timeout(() => { $ctrl.planet = planet.data;
              console.log($ctrl.planet); });
            });
        });
        console.log("HOORAY");
      };

      if (JSON.stringify($ctrl.vader.answers) === JSON.stringify($ctrl.userAnswers)) {
        SwapiService.getPeople($ctrl.vader.id).then(response => {
          console.log(response.data);
          SwapiService.getMovies(response.data.films).then(result => {
            $timeout(() => { $ctrl.movies = result;
            console.log(result); });
          });
            SwapiService.getPlanets(response.data.homeworld).then(planet => {
              $timeout(() => { $ctrl.planet = planet.data;
              console.log($ctrl.planet); });
            });
        });
        console.log("HOORAY");
      };

      if (JSON.stringify($ctrl.c3po.answers) === JSON.stringify($ctrl.userAnswers)) {
        SwapiService.getPeople($ctrl.c3po.id).then(response => {
          console.log(response.data);
          SwapiService.getMovies(response.data.films).then(result => {
            $timeout(() => { $ctrl.movies = result;
            console.log(result); });
          });
            SwapiService.getPlanets(response.data.homeworld).then(planet => {
              $timeout(() => { $ctrl.planet = planet.data;
              console.log($ctrl.planet); });
            });
        });
        console.log("HOORAY");
      };

      if (JSON.stringify($ctrl.r2d2.answers) === JSON.stringify($ctrl.userAnswers)) {
        SwapiService.getPeople($ctrl.r2d2.id).then(response => {
          console.log(response.data);
          SwapiService.getMovies(response.data.films).then(result => {
            $timeout(() => { $ctrl.movies = result;
            console.log(result); });
          });
            SwapiService.getPlanets(response.data.homeworld).then(planet => {
              $timeout(() => { $ctrl.planet = planet.data;
              console.log($ctrl.planet); });
            });
        });
        console.log("HOORAY");
      };

      if (JSON.stringify($ctrl.chewy.answers) === JSON.stringify($ctrl.userAnswers)) {
        SwapiService.getPeople($ctrl.chewy.id).then(response => {
          console.log(response.data);
          SwapiService.getMovies(response.data.films).then(result => {
            $timeout(() => { $ctrl.movies = result;
            console.log(result); });
          });
            SwapiService.getPlanets(response.data.homeworld).then(planet => {
              $timeout(() => { $ctrl.planet = planet.data;
              console.log($ctrl.planet); });
            });
        });
        console.log("HOORAY");
      };

      if (JSON.stringify($ctrl.rey.answers) === JSON.stringify($ctrl.userAnswers)) {
        SwapiService.getPeople($ctrl.rey.id).then(response => {
          console.log(response.data);
          SwapiService.getMovies(response.data.films).then(result => {
            $timeout(() => { $ctrl.movies = result;
            console.log(result); });
          });
            SwapiService.getPlanets(response.data.homeworld).then(planet => {
              $timeout(() => { $ctrl.planet = planet.data;
              console.log($ctrl.planet); });
            });
        });
        console.log("HOORAY");
      };

      if (JSON.stringify($ctrl.lando.answers) === JSON.stringify($ctrl.userAnswers)) {
        SwapiService.getPeople($ctrl.lando.id).then(response => {
          console.log(response.data);
          SwapiService.getMovies(response.data.films).then(result => {
            $timeout(() => { $ctrl.movies = result;
            console.log(result); });
          });
            SwapiService.getPlanets(response.data.homeworld).then(planet => {
              $timeout(() => { $ctrl.planet = planet.data;
              console.log($ctrl.planet); });
            });
        });
        console.log("HOORAY");
      };

      if (JSON.stringify($ctrl.maul.answers) === JSON.stringify($ctrl.userAnswers)) {
        SwapiService.getPeople($ctrl.maul.id).then(response => {
          console.log(response.data);
          SwapiService.getMovies(response.data.films).then(result => {
            $timeout(() => { $ctrl.movies = result;
            console.log(result); });
          });
            SwapiService.getPlanets(response.data.homeworld).then(planet => {
              $timeout(() => { $ctrl.planet = planet.data;
              console.log($ctrl.planet); });
            });
        });
        console.log("HOORAY");
      };

      if (JSON.stringify($ctrl.phasma.answers) === JSON.stringify($ctrl.userAnswers)) {
        SwapiService.getPeople($ctrl.phasma.id).then(response => {
          console.log(response.data);
          SwapiService.getMovies(response.data.films).then(result => {
            $timeout(() => { $ctrl.movies = result;
            console.log(result); });
          });
            SwapiService.getPlanets(response.data.homeworld).then(planet => {
              $timeout(() => { $ctrl.planet = planet.data;
              console.log($ctrl.planet); });
            });
        });
        console.log("HOORAY");
      };

      if (JSON.stringify($ctrl.grevius.answers) === JSON.stringify($ctrl.userAnswers)) {
        SwapiService.getPeople($ctrl.grevius.id).then(response => {
          console.log(response.data);
          SwapiService.getMovies(response.data.films).then(result => {
            $timeout(() => { $ctrl.movies = result;
            console.log(result); });
          });
            SwapiService.getPlanets(response.data.homeworld).then(planet => {
              $timeout(() => { $ctrl.planet = planet.data;
              console.log($ctrl.planet); });
            });
        });
        console.log("HOORAY");
      };
    };
    // $timeout( function(){
    //        $ctrl.againbtn = false;
    //       }, 8000 );
    
        $ctrl.playAgain = function() {
      $location.url("/");
    };

    

  });


