function fetchName( event ){
    event.preventDefault();
    
    $.ajax({
        url : `https://api.github.com/users/JavierVSM`,
        method : 'GET',
        success : function( data ){
            $( '.results' ).empty();
            $( '.results' ).append( data.name);       
        },
        error : function( err ){
            console.log( err );
        }
    }); 
}

$( '.nameForm' ).on( 'submit', fetchName )