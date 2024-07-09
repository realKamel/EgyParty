/// <reference types="../@types/jquery" />
"use strict"

$( '.aside .menu-icon span' ).on( "click", function () {
	$( '.aside .menu-content ' ).animate( { width: 'toggle' }, 500 );
} )