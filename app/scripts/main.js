'use strict';
var Snap;
var s = Snap('#picker');

var initialCircle = s.circle(150, 150, 100);

initialCircle.attr({
    fill: '#bada55'
})
.data('color', '#bada55')
.click(function () {
    alert(this.data("color"));

    // when user clicks, open pallete
    var colorA = s.circle(80, 100, 80),
        colorB = s.circle(150, 100, 80),
        colorC = s.circle(220, 100, 80),
        colorD = s.circle(80, 200, 80),
        colorE = s.circle(150, 200, 80),
        colorF = s.circle(220, 200, 80);

    // defines each color
    colorA.attr({ fill: '#90aa55' });
    colorB.attr({ fill: '#cc0dea' });
    colorC.attr({ fill: '#000fcc' });
    colorD.attr({ fill: '#b88999' });
    colorE.attr({ fill: '#0003bb' });
    colorF.attr({ fill: '#ee4499' });

    // Lets put this small circle and another one into a group:
    var primaryColorsGroup = s.group(colorA, colorB, colorC, colorD, colorE, colorF);

    // Using masks
    primaryColorsGroup.attr({ mask: this });
    var matrixCircleMask = s.circle(150, 150, 80).attr({ fill: '#fff' });

    colorA.click(function () {
        this.attr({
            fill: '#ccc'
        });
        colorB.attr({
            fill: '#333'
        });
        colorC.attr({
            fill: '#999'
        });
        colorD.attr({
            fill: '#000'
        });
        colorE.attr({
            fill: '#8fc'
        });
        colorF.attr({
            fill: '#c0f'
        });
    });

});
