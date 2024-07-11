/// <reference types="../@types/jquery" />
"use strict"
const daysCount = document.getElementById( 'daysCount' );
const hoursCount = document.getElementById( 'hoursCount' );
const minutesCount = document.getElementById( 'minutesCount' );
const secondsCount = document.getElementById( 'secondsCount' );
const textArea = document.getElementById( "textArea" );
const remainCharCount = document.getElementById( 'remainCharsCount' )

const partyDate = new Date( 2024, 11, 30 ).getTime();

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

	/*
	#) every .singer element has .song element next to it
	#) current target points to the element that triggered the event
	#) nextElementSibling points to .sing element that is next to it
	 */

	let currentState = $( e.currentTarget.nextElementSibling ).css( "display" );

	if ( currentState !== "block" ) {

		/* slides up all elements
		at the same time slide down .song element next to the element triggered the event  */

		$( '.song' ).slideUp( 300 );
		$( e.currentTarget.nextElementSibling ).slideDown( 300 );
	} else {
		$( e.currentTarget.nextElementSibling ).slideUp( 300 );
	}
} );

$( textArea ).on( "keyup", function () {
	if ( textArea.value.length > 100 ) {
		$( remainCharCount ).text( "No More" )
	} else {
		$( remainCharCount ).text( 100 - textArea.value.length );
	}
} )


const counterId = setInterval( function () {
	const currentDate = new Date().getTime();
	const distance = partyDate - currentDate
	const noDays = Math.floor( distance / ( 24 * 60 * 60 * 1000 ) );
	const noHours = Math.floor( ( distance % ( 24 * 60 * 60 * 1000 ) ) / ( 60 * 60 * 1000 ) );
	const noMinutes = Math.floor( ( distance % ( 60 * 60 * 1000 ) ) / ( 60 * 1000 ) );
	const noSeconds = Math.floor( ( distance % ( 60 * 1000 ) ) / 1000 );

	daysCount.innerText = `${ noDays } Days`;
	hoursCount.innerText = `${ noHours } Hours`;
	minutesCount.innerText = `${ noMinutes } Minutes`;
	secondsCount.innerText = `${ noSeconds } Seconds`;

	if ( distance < 0 ) {
		clearInterval( x );
	}
}, 1000 );

