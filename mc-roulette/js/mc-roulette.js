var clock;

var wins = [
    {n:'0', c:'Green', t: 'Zero', s: 'Zero', col: 'Zero', h: 'Zero'},
    {n:'28', c:'Black', t: 'Even', s: 'Third 12', col: 'Column 1', h: 'Second Half'},
    {n:'9', c:'Red', t: 'Odd', s: 'First 12', col: 'Column 3', h: 'First Half'},
    {n:'26', c:'Black', t: 'Even', s: 'Third 12', col: 'Column 2', h: 'Second Half'},
    {n:'30', c:'Red', t: 'Even', s: 'Third 12', col: 'Column 3', h: 'Second Half'},
    {n:'11', c:'Black', t: 'Odd', s: 'First 12', col: 'Column 2', h: 'First Half'},
    {n:'7', c:'Red', t: 'Odd', s: 'First 12', col: 'Column 1', h: 'First Half'},
    {n:'20', c:'Black', t: 'Even', s: 'Second 12', col: 'Column 2', h: 'Second Half'},
    {n:'32', c:'Red', t: 'Even', s: 'Third 12', col: 'Column 2', h: 'Second Half'},
    {n:'17', c:'Black', t: 'Odd', s: 'Second 12', col: 'Column 2', h: 'First Half'},
    {n:'5', c:'Red', t: 'Odd', s: 'First 12', col: 'Column 2', h: 'First Half'},
    {n:'22', c:'Black', t: 'Even', s: 'Second 12', col: 'Column 1', h: 'Second Half'},
    {n:'34', c:'Red', t: 'Even', s: 'Third 12', col: 'Column 1', h: 'Second Half'},
    {n:'15', c:'Black', t: 'Odd', s: 'Second 12', col: 'Column 3', h: 'First Half'},
    {n:'3', c:'Red', t: 'Odd', s: 'First 12', col: 'Column 3', h: 'First Half'},
    {n:'24', c:'Black', t: 'Even', s: 'Second 12', col: 'Column 3', h: 'Second Half'},
    {n:'36', c:'Red', t: 'Even', s: 'Third 12', col: 'Column 3', h: 'Second Half'},
    {n:'13', c:'Black', t: 'Odd', s: 'Second 12', col: 'Column 1', h: 'First Half'},
    {n:'1', c:'Red', t: 'Odd', s: 'First 12', col: 'Column 1', h: 'First Half'},
    {n:'00', c:'Green', t: 'Zero', s: 'Zero', col: 'Zero', h: 'Zero'},
    {n:'27', c:'Red', t: 'Odd', s: 'Third 12', col: 'Column 3', h: 'Second Half'},
    {n:'10', c:'Black', t: 'Even', s: 'First 12', col: 'Column 1', h: 'First Half'},
    {n:'25', c:'Red', t: 'Odd', s: 'Third 12', col: 'Column 1', h: 'Second Half'},
    {n:'29', c:'Black', t: 'Odd', s: 'Third 12', col: 'Column 2', h: 'Second Half'},
    {n:'12', c:'Red', t: 'Even', s: 'First 12', col: 'Column 3', h: 'First Half'},
    {n:'8', c:'Black', t: 'Even', s: 'First 12', col: 'Column 2', h: 'First Half'},
    {n:'19', c:'Red', t: 'Odd', s: 'Second 12', col: 'Column 1', h: 'Second Half'},
    {n:'31', c:'Black', t: 'Odd', s: 'Third 12', col: 'Column 1', h: 'Second Half'},
    {n:'18', c:'Red', t: 'Even', s: 'Second 12', col: 'Column 3', h: 'First Half'},
    {n:'6', c:'Black', t: 'Even', s: 'First 12', col: 'Column 3', h: 'First Half'},
    {n:'21', c:'Red', t: 'Odd', s: 'Second 12', col: 'Column 3', h: 'Second Half'},
    {n:'33', c:'Black', t: 'Odd', s: 'Third 12', col: 'Column 3', h: 'Second Half'},
    {n:'16', c:'Red', t: 'Even', s: 'Second 12', col: 'Column 1', h: 'First Half'},
    {n:'4', c:'Black', t: 'Even', s: 'First 12', col: 'Column 1', h: 'First Half'},
    {n:'23', c:'Red', t: 'Odd', s: 'Second 12', col: 'Column 2', h: 'Second Half'},
    {n:'35', c:'Black', t: 'Odd', s: 'Third 12', col: 'Column 2', h: 'Second Half'},
    {n:'14', c:'Red', t: 'Even', s: 'Second 12', col: 'Column 2', h: 'First Half'},
    {n:'2', c:'Black', t: 'Even', s: 'First 12', col: 'Column 2', h: 'First Half'}
];

var angles = [
    {w:0, b:350.5},
    {w:9.2, b:341},
    {w:18.8, b:331.6},
    {w:28.4, b:322.2},
    {w:38.2, b:312.5},
    {w:47.5, b:303.5},
    {w:57, b:293.7},
    {w:66.3, b:284.5},
    {w:76, b:275.2},
    {w:85.4, b:266},
    {w:95, b:256},
    {w:104.4, b:246.7},
    {w:113.8, b:237.3},
    {w:123.4, b:228},
    {w:132.9, b:218.3},
    {w:142.4, b:209},
    {w:152, b:199.3},
    {w:161.4, b:190},
    {w:170.9, b:180.2},
    {w:180.2, b:170.9},
    {w:190, b:161.4},
    {w:199.3, b:152},
    {w:209, b:142.4},
    {w:218.3, b:132.9},
    {w:228, b:123.4},
    {w:237.3, b:113.8},
    {w:246.7, b:104.4},
    {w:256, b:95},
    {w:266, b:85.4},
    {w:275.2, b:76},
    {w:284.5, b:66.3},
    {w:293.7, b:57},
    {w:303.3, b:47.5},
    {w:312.5, b:38.2},
    {w:322.2, b:28.4},
    {w:331.6, b:18.8},
    {w:341, b:9.2},
    {w:350.5, b:0}
];

var sound = new Howl({
  urls: ['sounds/spin.ogg', 'sounds/spin.mp3'],
  buffer: true
});

$(document).ready(function(e){

	var wheel_num = false;
	var ball_num = false;

	$('#table #ball').on('click', function(e){
		e.preventDefault();

		var wseed = $().random();
		var bseed = $().random();

		if($('#wheel-num').val()) wheel_num = $('#wheel-num').val();
		else wheel_num = Math.round(wseed * 37);
		if($('#ball-num').val()) ball_num = $('#ball-num').val();
		else ball_num = Math.round(bseed * 37);
		
		sound.play();
		
		var spin_animation = setInterval(function(){
			display_results({w:wheel_num, b:ball_num});
			clearInterval(spin_animation);
		}, 14000);
		var spin_sound = setInterval(function(){
			spin(wheel_num, ball_num);
			clearInterval(spin_sound);
		}, 1200);
	});

});

function get_results(numbers)
{
    var result = false;
    var segment = numbers.w;
    var bsegment = 37 - numbers.b;

    if(segment < bsegment)
    {
        result = 37 + (segment - bsegment);
        if(result < 1) result = 38;
        result = 38 - result;
    }
    else
    {
        result = 39 - (segment - bsegment);
        if(result > 37) result = 0;
    }
    if(result || result === 0)
    {
        result = wins[result];
    }
    return result;
}

function display_results(numbers)
{
	var win = get_results(numbers);
	var message = win.c+' '+win.n+' '+win.t+' wins! - '+win.col+' / '+win.h+' / '+win.s;
	alert(message);
}

function reset_wheel()
{
    $('#table #wheel').transition({
        rotate: '0deg'
    }, 0);
    $('#table #ball').transition({
        rotate: '0deg'
    }, 0);
}

function spin(num1, num2, dur)
{
    reset_wheel();

    var deg1 = angles[num1].w;
    var deg2 = angles[37 - num2].b;
    var duration = 13000;

    var deg = 3600 + deg1;
    var bdeg = 3600 + deg2;

    if(dur) duration = dur;

    $('#table #wheel').transition({
        rotate: '0deg'
    }, 0)
        .transition({
        rotate: deg + 'deg'
    }, duration, 'easeOutCubic');

    $('#table #ball').transition({
        rotate: '0deg'
    }, 0)
        .transition({
        rotate: '-' + bdeg + 'deg'
    }, duration, 'easeOutCubic');
}
