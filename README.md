##Jquery.cookieCnil.js

###Télécharger le script et insérer le entre les balises `<body>` :

    <script type="text/javascript" src="js/jquery.cookieCnil.js"></script>
        
###Bower install 
    npm install jquery.cookieCnil
    
###pour initialiser cookieCnil.js :

    $('body').cookieCnil();

###Paramètres:

    $('body').cookieCnil({
        "chemin": '/', //Chemin ou sera placé le cookie (mettre '/' pour tout le site)
        "url": "http://www.cnil.fr/vos-obligations/sites-web-cookies-et-autres-traceurs/que-dit-la-loi/", //Url du bouton 'En savoir plus'
        "enSavoirPlus": true, //Presence ou non du bouton 'En savoir plus'
        "couleurBandeau": '#232323',
        "couleurTexte": '#FFF',
        "couleurTexteBtn": '#000',
        "couleurBtn": 'linear-gradient(to bottom, #ffffff 0%, #ffffff 100%)',
        "texte": "En poursuivant votre navigation sur ce site, vous acceptez l'utilisation de cookies permettant d'am&eacute;liorer votre exp&eacute;rience utilisateur."
    });

###Chaque option est facultative évidemment


###Penser à lancer l'initialisation dans une fonction :

    $(document).ready(function () {
        $('body').cookieCnil();
    });
    ou
    $(function () {
        $('body').cookieCnil();
    });
