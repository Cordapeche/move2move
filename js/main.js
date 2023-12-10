$( document ).ready(function() {

    

  function callback(entries) {
    for (let i = 0; i < entries.length; i++) {
      entries[i].target.src = (entries[i].isIntersecting) ? entries[i].target.getAttribute('data-src') : "";
    }
  }
  const gifs = document.querySelectorAll('.gif');
  const observer = new IntersectionObserver(callback);
  for (let i = 0; i < gifs.length; i++) {
    observer.observe(gifs[i]);
  }

  $('#form').validetta({
    realTime: true,
    onValid: function (event) {
      event.preventDefault(); // Will prevent the submission of the form
      // alert( 'Nice, Form is valid.' );



      // e.preventDefault();

      var prenom = $('#firstName').val();
      var nom = $('#firstName').val();
      var mail = $('#mail').val();
      var phone = $('#phone').val();
      var message = $('#message').val();



      $.ajax({
        // 1) on définit le fichier vers lequel on envoye la requête POST
        url: 'php/info.php',

        // 2/ on spécifie la méthode  
        type: 'POST', // Le type de la requête HTTP, ici  POST

        // 3) on définit les variables POST qui sont ennvoyées au fichier .php qui les récupère sous forme de $_POST["nom"] 
        data: {
          prenom: prenom,
          nom: nom,
          mail: mail,
          phone: phone,
          message: message
        }, // On fait passer nos variables au script coucou.php

        // 4) format de retour du fichier php dans "data"
        dataType: 'html',

        // 5) fonction à effectuer en cas de succès
        success: function (data) { //  contient le HTML renvoyé

          $('.contenue').html(data);

        }

      });



    },
    onError: function (event) {
      event.preventDefault();
      // alert( 'Stop bro !! There are some errors.');
    }
  }
  );
});
