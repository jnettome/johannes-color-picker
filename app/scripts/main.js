'use strict';
var Snap, $;
var s = Snap('#picker');

$('#color > tspan, #btn-return, #btn-save').hide();
// $('#node1, #node2, #node3, #node4, #node5, #node6, #node7, #node8, #node9, #node10, #node11, #node12')
// #node-groups

$('#node12').attr('fill', '#e0ac2c');
$('#node1').attr('fill', '#e0ac2c');

$('#node12, #node1').on('click', function(e) {
    // $('#node-groups path').attr('fill', function() {
    //     return $(this).attr('original-fill');
    // });
    $('#node-groups path').each(function(index) {
        var _this = $(this);
        setTimeout(function() {
            _this.attr('fill', function() {
                return $(this).attr('original-fill');
            });
            // console.log(index, _this);
        }, 50*index);
    });
    // $('')
});

$('#node2').attr('fill', '#40ac47');
$('#node3').attr('fill', '#40ac47');

$('#node4').attr('fill', '#1dd4e5');
$('#node5').attr('fill', '#1dd4e5');

$('#node6').attr('fill', '#7c498b');
$('#node7').attr('fill', '#7c498b');

$('#node8').attr('fill', '#d62474');
$('#node9').attr('fill', '#d62474');

$('#node10').attr('fill', '#c7c7c7');
$('#node11').attr('fill', '#c7c7c7');

$('#color > tspan').hide();


// color-circle
// circle
// color tspan
// btn-return
// btn-save
// node1


// var initialCircle = s.circle(150, 150, 100);

// initialCircle.attr({
//     fill: '#bada55'
// })
// .data('color', '#bada55')
// .click(function () {
//     // alert(this.data("color"));

//     // when user clicks, open pallete
//     var colorA = s.circle(80, 100, 80),
//         colorB = s.circle(150, 100, 80),
//         colorC = s.circle(220, 100, 80),
//         colorD = s.circle(80, 200, 80),
//         colorE = s.circle(150, 200, 80),
//         colorF = s.circle(220, 200, 80);

//     // defines each color
//     colorA.attr({ fill: '#90aa55' });
//     colorB.attr({ fill: '#cc0dea' });
//     colorC.attr({ fill: '#000fcc' });
//     colorD.attr({ fill: '#b88999' });
//     colorE.attr({ fill: '#0003bb' });
//     colorF.attr({ fill: '#ee4499' });

//     // Lets put this small circle and another one into a group:
//     var primaryColorsGroup = s.group(colorA, colorB, colorC, colorD, colorE, colorF);

//     // Using masks
//     primaryColorsGroup.attr({ mask: this });
//     var matrixCircleMask = s.circle(150, 150, 80).attr({ fill: '#fff' });

// });
