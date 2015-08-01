/**
 * Created by Nolyo on 02/08/2015.
 */

(function ($) {

    $.fn.cookieCnil = function (options) {
        //options est donc un objet littéral, ne l'oublions pas !

        //On définit nos paramètres par défaut
        var defauts =
        {
            "chemin": '/',
            "url": "http://www.cnil.fr/vos-obligations/sites-web-cookies-et-autres-traceurs/que-dit-la-loi/",
            "enSavoirPlus": true,
            "couleurBandeau": '#232323',
            "couleurTexte": '#FFF',
            "couleurTexteBtn": '#000',
            "couleurBtn": 'linear-gradient(to bottom, #ffffff 0%, #ffffff 100%)',
            "texte": "En poursuivant votre navigation sur ce site, vous acceptez l'utilisation de cookies permettant d'am&eacute;liorer votre exp&eacute;rience utilisateur."
        };

        //On fusionne nos deux objets ! =D
        var parametres = $.extend(defauts, options);

        function createCookie(name, value, days) {
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                var expires = "; expires=" + date.toGMTString();
            }
            else var expires = "";
            document.cookie = name + "=" + value + expires + "; path=" + defauts.chemin;
        }

        function readCookie(name) {
            var nameEQ = name + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
            }
            return null;
        }

        function eraseCookie(name) {

            createCookie(name, "", -1);
        }

        function resize() {
            if ($(window).width() < 870) {
                $('.text_cookie').css({
                    'margin': 'auto',
                    'display': 'block'
                });
                $('.btn_cookie').css({
                    'margin-top': '15px',
                    'text-align': 'center',
                    'display': 'inline-block'

                });
            } else {
                $('.text_cookie').css({
                    'margin': 'auto',
                    'display': 'inline-block'
                });
                $('.btn_cookie').css({
                    'margin': '10px 15px',
                    'text-align': 'center',
                    'display': 'inline-block'

                });
            }
        }
        /* Creation du bandeau, init css*/

        if (!readCookie('accept_cookies')) {
            this.append("<div style='display:none' class='cookie_accept'><div class='text_cookie'>" + defauts.texte + "</div></div>");
            if (defauts.enSavoirPlus){
                $('.cookie_accept').append('<div class="btn_cookie"><a href="#" class="button_cook" id="btn_close_cookies">Fermer</a> <a class="button_cook" href="' + defauts.url + '" id="btn_more_cookies">En savoir plus +</a></div>');
            }else{
                $('.cookie_accept').append('<div class="btn_cookie"><a href="#" class="button_cook" id="btn_close_cookies">Fermer</a></div>');
            }
            setTimeout(function () {
                $('.cookie_accept').css({
                    'min-height': '33px',
                    'padding': '10px',
                    'width': '100%',
                    'font-size': '0.9em',
                    'position': 'fixed',
                    'top': '0',
                    'z-index': '1000',
                    'background-color': defauts.couleurBandeau,
                    'color': defauts.couleurTexte,
                    'opacity': '0.95',
                    'font-family': 'arial',
                    'text-align': 'center'
                });
                $('.text_cookie').css('margin', 'auto');
                $('.btn_cookie').css({
                    'margin-top': '5px',
                    'text-align': 'center'
                });
                $('.button_cook').css({
                    'padding': '7px',
                    'font-size': '0.9em',
                    'background': defauts.couleurBtn,
                    'font-weight': 'bold',
                    'border': '1px solid #dcdcdc',
                    'text-shadow': '1px 1px 0px #ffffff;',
                    'color': defauts.couleurTexteBtn,
                    'border-radius': '7px'
                });
                $('a').css('text-decoration', 'none');
                $('body').css({'padding': 0, 'margin': 0});
                $('.cookie_accept').slideDown(500);
                resize();
            }, 1000)
        }

        /* Evenement click close et crÃ©ation des cookies */

        $('#btn_close_cookies').on('click', function () {
            createCookie('accept_cookies', true, 396);
            $('.cookie_accept').slideUp();
        });

        $(window).resize(function () {

            resize();
        });

        return this;

    };

})(jQuery);
