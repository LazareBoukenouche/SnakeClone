<!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8" />
            <title>Snake</title>
            <!-- adding css -->
            
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
                  integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
                  crossorigin="anonymous">
            <link rel="stylesheet" type="text/css" href="css/snake.css">
        </head>

        <body>
        
          <div class="wrapper">
            <div id="menu" class="main">

              <div id="main"> 
                  <ul>
                      <li><a href="#" class="button play btn btn-info">Start</a></li>
                      <li><button type="button" class="button credits btn btn-info" data-toggle="modal" data-target="#controls-window">Controls</button></li>
                      <li><button type="button" class="button credits btn btn-info" data-toggle="modal" data-target="#about-window">About the game</button></li>
                  </ul>
              </div>

              <div class="wrapper-canvas">
                <canvas id="canvas"></canvas>
              </div>

              <div class="controls">
                <div class="arrow arrowLeft"><p>Left</p></div>
                <div class="arrow arrowUp"><p>Up</p></div>
                <div class="arrow arrowRight"><p>Right</p></div>
                <div class="arrow arrowDown"><p>Down</p></div>
              </div>

              <!-- Modal for controls -->
              <div class="modal fade" id="controls-window" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="staticBackdropLabel">Liste des commandes</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Modal for presentation of the game -->
              <div class="modal fade" id="about-window" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel-2" aria-hidden="true">
                <div class="modal-dialog">
                  
                  <div class="modal-content">

                    <div class="modal-header btn-info">
                      <h5 class="modal-title" id="staticBackdropLabel-2">A propos du jeu</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    
                    <div class="modal-body btn-info">
                        <p>Ce jeu est un clone du jeu mobile Snake, réalisé avec HTML5/CSS3.</p>
                          <p>Le but du jeu est de faire grandir le serpent en mangeant les pommes.</p>
                          <p>Utilisez les touches directionnelles pour deplacer le serpent.</p>
                          <p>Si le serpent touche son propre corps, vous perdez !</p>
                          <p>En cas de game over, appuyez sur X pour recommencer une partie.</p>
                    </div>

                    <div class="modal-footer">
                      <button type="button" class="btn btn-info" data-dismiss="modal">Fermer
                      </button>
                    </div>

                  </div>
                </div>
              </div>

            </div>
            
          </div>


          <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
                  integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
                  crossorigin="anonymous">

          </script>

          <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
                  integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx"
                  crossorigin="anonymous">
          </script>
          
          <script src="js/SnakeController.js"></script>
          <script src="js/Snake.js"></script>
          <script src="js/Game.js"></script>
          <script src="js/Apple.js"></script>
          <script src="js/SnakeGame.js"></script>
          
        </body>
