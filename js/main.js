/// <reference types="../@types/jquery" />
"use strict"

$( '#openBtn' ).on( "click", function () {
	$( '#leftMenu' ).animate( { width: '250px' }, 50 );
	$( '#home-content' ).animate( { marginLeft: "250px" }, 50 );
	$( '#openBtn' ).animate( { marginLeft: "250px" }, 50 );

} )
$( '.sidenav .closebtn' ).on( "click", function () {
	$( '#leftMenu' ).animate( { width: '0' }, 50 );
	$( '#home-content' ).animate( { marginLeft: "0" }, 50 );
	$( '#openBtn' ).animate( { marginLeft: "0" }, 50 );
} )

$( "#leftMenu a" ).on( "click", function () {
	let sectionId = $( this ).attr( "href" );
	let positionOfSection = $( sectionId ).offset().top;
	$( "html , body" ).animate( { scrollTop: positionOfSection }, 2000 );

} )


$( ".singer" ).on( "click", function ( e ) {
	let currentState = $( e.currentTarget.nextElementSibling ).css( "display" );
	if ( currentState !== "block" ) {
		$( '.song' ).slideUp( 500 );
		$( e.currentTarget.nextElementSibling ).slideDown( 500 );
	} else {
		console.log( "already displayed" );
	}
} )