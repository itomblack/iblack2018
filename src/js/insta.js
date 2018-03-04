  /* Instagram feed */
  var feed = new Instafeed({
        get: 'user',
        userId: '52003506',
        //get userId from: http://www.otzberg.net/iguserid/index.php
        accessToken: '52003506.1677ed0.861f17dc2f4c412d89d93d77d923e6b1',
        //get accessToken from: http://instagram.pixelunion.net/
        template:'<a href={{link}} target="_blank"><img src={{image}} alt=""/></a>',
        limit: 16
    });
    feed.run();

  /* End instagram feed */