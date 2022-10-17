"use strict";
import sunData from './sunData.json' assert {type: 'JSON'}
import moonData from './moonData.json' assert {type: 'JSON'}

function yrange_sunMoon() {return [-3501,3502];}
function offset_sunMoon() {return {solar:5,lunar:5};}
function mphases() {return moonData;}
function sterms() {return sunData;}