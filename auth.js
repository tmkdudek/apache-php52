module.exports = (function(){

    function ajax(url, callback, data, x) {
        try {
            x = new(this.XMLHttpRequest || ActiveXObject)('MSXML2.XMLHTTP.3.0');
            x.open(data ? 'POST' : 'GET', url, 1);
            x.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
            x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            x.onreadystatechange = function () {
                x.readyState > 3 && callback && callback(x.responseText, x);
            };
            x.send(data)
        } catch (e) {
            window.console && console.log(e);
        }
    };
    var isLogged = false;

    return {
        login : function( username, password, success ){
            ajax('/operations/login.php',function( data ){
                console.log(data);

            },{user_name : username, user_password : password});
        },
        logout : function(){

        },
        isLogged : function(){
            ajax('/operations/isLogged.php',function( data ){
                console.log(data);

            },{});
        }
    };

})();
