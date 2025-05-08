// connecting-dots.js
// var canvasDots = function() {
//     // var canvas = document.querySelector('canvas'),
//     var canvas = document.querySelector('.connecting-dots'),
//         ctx = canvas.getContext('2d'),
//         // colorDot = '#d5006d',
//         colorDot = [
//             'rgb(215, 31, 163)',
//             'rgb(213, 221, 228)',
//             'rgb(81, 162, 233)',
//             'rgb(11, 32, 51)',
//             'rgb(52, 186, 126)',
//           ],
//         color = '#ff69b4';
//         // color = '#4848bd';
    
//     canvas.width = canvas.parentElement.offsetWidth;
//     canvas.height = canvas.parentElement.offsetHeight;

//     // canvas.width = window.innerWidth;
//     // canvas.height = window.innerHeight;

//     canvas.style.display = 'block';
//     ctx.fillStyle = colorDot;
//     ctx.lineWidth = .4;
//     ctx.strokeStyle = color;

//     var mousePosition = {
//         x: 30 * canvas.width / 100, // initial mouse position (set to center)
//         y: 30 * canvas.height / 100
//     };

    

//     var dots = {
//         nb: 720,
//         distance: 70, // Reduced this value to shorten the range at which lines will be drawn
//         d_radius: 300, // Reduced this value to make lines appear only when closer to the mouse
//         array: []
//     };

//     function Dot(){
//         this.x = Math.random() * canvas.width;
//         this.y = Math.random() * canvas.height;

//         this.vx = -.5 + Math.random();
//         this.vy = -.5 + Math.random();

//         this.radius = Math.random();
//     }

//     Dot.prototype = {
//         create: function(){
//             ctx.beginPath();
//             ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
//             ctx.fill();
//         },

//         animate: function(){
//             for(i = 0; i < dots.nb; i++){
//                 var dot = dots.array[i];

//                 if(dot.y < 0 || dot.y > canvas.height){
//                     dot.vx = dot.vx;
//                     dot.vy = - dot.vy;
//                 }
//                 else if(dot.x < 0 || dot.x > canvas.width){
//                     dot.vx = - dot.vx;
//                     dot.vy = dot.vy;
//                 }
//                 dot.x += dot.vx;
//                 dot.y += dot.vy;
//             }
//         },

//         line: function(){
//             for(i = 0; i < dots.nb; i++){
//                 for(j = 0; j < dots.nb; j++){
//                     i_dot = dots.array[i];
//                     j_dot = dots.array[j];

//                     // Adjusted the conditions for drawing lines
//                     if((i_dot.x - j_dot.x) < dots.distance && (i_dot.y - j_dot.y) < dots.distance && (i_dot.x - j_dot.x) > - dots.distance && (i_dot.y - j_dot.y) > - dots.distance){
//                         // Only draw lines if the dots are near the mouse
//                         if(Math.abs(i_dot.x - mousePosition.x) < dots.d_radius && Math.abs(i_dot.y - mousePosition.y) < dots.d_radius){
//                             ctx.beginPath();
//                             ctx.moveTo(i_dot.x, i_dot.y);
//                             ctx.lineTo(j_dot.x, j_dot.y);
//                             ctx.stroke();
//                             ctx.closePath();
//                         }
//                     }
//                 }
//             }
//         }
//     };

//     function createDots(){
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         for(i = 0; i < dots.nb; i++){
//             dots.array.push(new Dot());
//             dot = dots.array[i];

//             dot.create();
//         }

//         dot.line();
//         dot.animate();
//     }

//     window.onmousemove = function(parameter) {
//         mousePosition.x = parameter.pageX;
//         mousePosition.y = parameter.pageY;
//     }

//     setInterval(createDots, 1000/30);
// };
var canvasDots = function() {
    // var canvas = document.querySelector('canvas'),
    var canvas = document.querySelector('.connecting-dots'),
        ctx = canvas.getContext('2d'),
        colorDot = '#d5006d',

        // colorDot = '#F97316',
        // colorDot = [
        //     'rgb(215, 31, 163)',
        //     'rgb(213, 221, 228)',
        //     'rgb(81, 162, 233)',
        //     'rgb(11, 32, 51)',
        //     'rgb(52, 186, 126)',
        //   ],
        color = '#ff69b4';
        // color='#F97316';
        // color = '#4848bd';
    
    canvas.width = canvas.parentElement.offsetWidth;
    canvas.height = canvas.parentElement.offsetHeight;

    // canvas.width = window.innerWidth;
    // canvas.height = window.innerHeight;

    canvas.style.display = 'block';
    ctx.fillStyle = colorDot;
    ctx.lineWidth = .5;
    ctx.strokeStyle = color;

    var mousePosition = {
        x: 30 * canvas.width / 100, // initial mouse position (set to center)
        y: 30 * canvas.height / 100
    };

    

    var dots = {
        nb: 740,
        distance: 75, // Reduced this value to shorten the range at which lines will be drawn
        d_radius: 330, // Reduced this value to make lines appear only when closer to the mouse
        array: []
    };

    function Dot(){
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;

        this.vx = -.5 + Math.random();
        this.vy = -.5 + Math.random();

        this.radius = Math.random();
    }

    Dot.prototype = {
        create: function(){
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            ctx.fill();
        },

        animate: function(){
            for(i = 0; i < dots.nb; i++){
                var dot = dots.array[i];

                if(dot.y < 0 || dot.y > canvas.height){
                    dot.vx = dot.vx;
                    dot.vy = - dot.vy;
                }
                else if(dot.x < 0 || dot.x > canvas.width){
                    dot.vx = - dot.vx;
                    dot.vy = dot.vy;
                }
                dot.x += dot.vx;
                dot.y += dot.vy;
            }
        },

        line: function(){
            for(i = 0; i < dots.nb; i++){
                for(j = 0; j < dots.nb; j++){
                    i_dot = dots.array[i];
                    j_dot = dots.array[j];

                    // Adjusted the conditions for drawing lines
                    if((i_dot.x - j_dot.x) < dots.distance && (i_dot.y - j_dot.y) < dots.distance && (i_dot.x - j_dot.x) > - dots.distance && (i_dot.y - j_dot.y) > - dots.distance){
                        // Only draw lines if the dots are near the mouse
                        if(Math.abs(i_dot.x - mousePosition.x) < dots.d_radius && Math.abs(i_dot.y - mousePosition.y) < dots.d_radius){
                            ctx.beginPath();
                            ctx.moveTo(i_dot.x, i_dot.y);
                            ctx.lineTo(j_dot.x, j_dot.y);
                            ctx.stroke();
                            ctx.closePath();
                        }
                    }
                }
            }
        }
    };

    function createDots(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for(i = 0; i < dots.nb; i++){
            dots.array.push(new Dot());
            dot = dots.array[i];

            dot.create();
        }

        dot.line();
        dot.animate();
    }

    window.onmousemove = function(parameter) {
        mousePosition.x = parameter.pageX;
        mousePosition.y = parameter.pageY;
    }

    setInterval(createDots, 1000/30);
};


var backgroundDots = function() {
    var canvas = document.querySelector('.background-dots'),
        ctx = canvas.getContext('2d'),
        // colorDot = '#d5006d',
        colorDot = [
            'rgb(215, 31, 163)',
            'rgb(213, 221, 228)',
            'rgb(81, 162, 233)',
            'rgb(11, 32, 51)',
            'rgb(52, 186, 126)',
        ],
        color = '#ff69b4';
        // color = '#4848bd';

    canvas.width = canvas.parentElement.offsetWidth;
    canvas.height = canvas.parentElement.offsetHeight;

    // canvas.width = window.innerWidth;
    // canvas.height = window.innerHeight;

    canvas.style.display = 'block';
    ctx.fillStyle = colorDot;
    ctx.lineWidth = .3;
    ctx.strokeStyle = color;

    var mousePosition = {
        x: 30 * canvas.width / 100, // initial mouse position (set to center)
        y: 30 * canvas.height / 100
    };



    var dots = {
        nb: 670,
        distance: 70, // Reduced this value to shorten the range at which lines will be drawn
        d_radius: 300, // Reduced this value to make lines appear only when closer to the mouse
        array: []
    };

    function Dot(){
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;

        this.vx = -.5 + Math.random();
        this.vy = -.5 + Math.random();

        this.radius = Math.random();
    }

    Dot.prototype = {
        create: function(){
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            ctx.fill();
        },

        animate: function(){
            for(i = 0; i < dots.nb; i++){
                var dot = dots.array[i];

                if(dot.y < 0 || dot.y > canvas.height){
                    dot.vx = dot.vx;
                    dot.vy = - dot.vy;
                }
                else if(dot.x < 0 || dot.x > canvas.width){
                    dot.vx = - dot.vx;
                    dot.vy = dot.vy;
                }
                dot.x += dot.vx;
                dot.y += dot.vy;
            }
        },

        line: function(){
            for(i = 0; i < dots.nb; i++){
                for(j = 0; j < dots.nb; j++){
                    i_dot = dots.array[i];
                    j_dot = dots.array[j];

                    // Adjusted the conditions for drawing lines
                    if((i_dot.x - j_dot.x) < dots.distance && (i_dot.y - j_dot.y) < dots.distance && (i_dot.x - j_dot.x) > - dots.distance && (i_dot.y - j_dot.y) > - dots.distance){
                        // Only draw lines if the dots are near the mouse
                        if(Math.abs(i_dot.x - mousePosition.x) < dots.d_radius && Math.abs(i_dot.y - mousePosition.y) < dots.d_radius){
                            ctx.beginPath();
                            ctx.moveTo(i_dot.x, i_dot.y);
                            ctx.lineTo(j_dot.x, j_dot.y);
                            ctx.stroke();
                            ctx.closePath();
                        }
                    }
                }
            }
        }
    };

    function createDots(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for(i = 0; i < dots.nb; i++){
            dots.array.push(new Dot());
            dot = dots.array[i];

            dot.create();
        }

        dot.animate();
    }

    

    setInterval(createDots, 1000/30);
};



// connecting-dots.js
window.onload = function() {
    canvasDots();
    backgroundDots();
};

// export default canvasDots;