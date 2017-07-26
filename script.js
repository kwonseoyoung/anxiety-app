
$(document).ready(main());


function main() {
	

	$("form").submit(function(event) {

		var $input = $(event.target).find("input");
		var comment = $input.val();

		if (comment != "") {
			var html = $("<li class = 'usercomment'>").text(comment);
			html.appendTo("#comments"); //# = way to get ID of element
			$input.val("");
			if ((comment === "meadow") || (comment === "a meadow") || (comment === "Meadow")) {
				changetoMeadow(); //not working, FIX
				$("#bgimg, html, body").css('background-image', 'url(meadow.png)');
				$("ul").append("<li class = 'prompt'></li>").delay(2000).queue(function (next) {
					$(this).append("<li class = 'prompt'> Imagine yourself in a meadow... </li>");
					next();
				});
				gotoBottom(comments);
				$("ul").append("<li class = 'prompt'></li>").delay(4000).queue(function (next) {
					$(this).append("<li class = 'prompt'> Imagine the soft grass beneath your feet </li>");
					next();
				});
				gotoBottom(comments);
				$("ul").append("<li class = 'prompt'></li>").delay(4000).queue(function (next) {
					$(this).append("<li class = 'prompt'> Feel the breeze in your hair </li>");
					next();
				});
				gotoBottom(comments);
				$("ul").append("<li class = 'prompt'></li>").delay(4000).queue(function (next) {
					$(this).append("<li class = 'prompt'> Smell the sweet flowers </li>");
					next();
				});
				gotoBottom(comments);
				$("ul").append("<li class = 'prompt'></li>").delay(4000).queue(function (next) {
					$(this).append("<li class = 'prompt'> Feel the warmth of the sun on your face </li>");
					next();
				});
				gotoBottom(comments);
				$("ul").append("<li class = 'prompt'></li>").delay(4000).queue(function (next) {
					$(this).append("<li class = 'prompt'> See the grass rolling in waves </li>");
					next();
				});
				gotoBottom(comments);
				$("ul").append("<li class = 'prompt'></li>").delay(4000).queue(function (next) {
					$(this).append("<li class = 'prompt'> Now press 'ctrl' ONCE to return to the walkthrough. </li>");
					next();
				});
				gotoBottom(comments);
			}
			// add else if

			else if ((comment === "mountain") || (comment === "a mountain") || (comment === "Mountain")) {
				changetoMountain();
				$("#bgimg, html, body").css('background-image', 'url(mountain.png)');
				$("ul").append("<li class = 'prompt'></li>").delay(2000).queue(function (next) {
					$(this).append("<li class = 'prompt'> Imagine yourself in the moutainside... </li>");
					next();
				});
				gotoBottom(comments);
				$("ul").append("<li class = 'prompt'></li>").delay(4000).queue(function (next) {
					$(this).append("<li class = 'prompt'> Taste the crisp, fresh air </li>");
					next();
				});
				gotoBottom(comments);
				$("ul").append("<li class = 'prompt'></li>").delay(5000).queue(function (next) {
					$(this).append("<li class = 'prompt'> Imagine yourself next to the cool stream, flowing with clear water </li>");
					next();
				});
				gotoBottom(comments);
				$("ul").append("<li class = 'prompt'></li>").delay(4000).queue(function (next) {
					$(this).append("<li class = 'prompt'> See the snow lightly falling onto the ground </li>");
					next();
				});
				gotoBottom(comments);
				$("ul").append("<li class = 'prompt'></li>").delay(3000).queue(function (next) {
					$(this).append("<li class = 'prompt'> See the pine trees... </li>");
					next();
				});
				gotoBottom(comments);
				$("ul").append("<li class = 'prompt'></li>").delay(3000).queue(function (next) {
					$(this).append("<li class = 'prompt'>...and see the birds flit among them </li>");
					next();
				});
				gotoBottom(comments);
				$("ul").append("<li class = 'prompt'></li>").delay(4000).queue(function (next) {
					$(this).append("<li class = 'prompt'> Now press 'ctrl' ONCE to return to the walkthrough. </li>");
					next();
				});
				gotoBottom(comments);
			}
			// add else if

			else if ((comment === "beach") || (comment === "a beach") || (comment === "Beach")) {
				changetoBeach();
				$("#bgimg, html, body").css('background-image', 'url(beach.png)');
				$("ul").append("<li class = 'prompt'></li>").delay(2000).queue(function (next) {
					$(this).append("<li class = 'prompt'> Imagine yourself on the beach... </li>");
					next();
				});
				gotoBottom(comments);
				$("ul").append("<li class = 'prompt'></li>").delay(4000).queue(function (next) {
					$(this).append("<li class = 'prompt'> Feel the warm sand between your toes, and see the tiny shell nested in the sand </li>");
					next();
				});
				gotoBottom(comments);
				$("ul").append("<li class = 'prompt'></li>").delay(4000).queue(function (next) {
					$(this).append("<li class = 'prompt'> Feel the cool ocean breeze... </li>");
					next();
				});
				gotoBottom(comments);
				$("ul").append("<li class = 'prompt'></li>").delay(4000).queue(function (next) {
					$(this).append("<li class = 'prompt'> ...and hear the ocean waves crash onto the shore </li>");
					next();
				});
				gotoBottom(comments);
				$("ul").append("<li class = 'prompt'></li>").delay(3000).queue(function (next) {
					$(this).append("<li class = 'prompt'> Feel the sun warm your face </li>");
					next();
				});
				gotoBottom(comments);
				$("ul").append("<li class = 'prompt'></li>").delay(3000).queue(function (next) {
					$(this).append("<li class = 'prompt'> Smell the tang of salt </li>");
					next();
				});
				gotoBottom(comments);
				$("ul").append("<li class = 'prompt'></li>").delay(4000).queue(function (next) {
					$(this).append("<li class = 'prompt'> Now press 'ctrl' ONCE to return to the walkthrough. </li>");
					next();
				});
				gotoBottom(comments);
			}

			else {
				$("ul").append("<li class = 'prompt'> Sorry, I couldn't understand that, type again! Or, press 'ctrl' to return to the walkthrough </li>");
				gotoBottom(comments);
			}

		return false; 

	/*$(document).on('keydown', function(e) {
		if (e.keyCode === 32) // for space bar
		{
			$("ul").append("<li class = 'prompt'> Appended Prompt </li>");
		}
	}); */

	/*$(li).click(function() {
		alert("this was triggered");
	}); */

	};

});

$(document).ready(addPrompt()); 

function addPrompt() {
	$(document).on('keydown', function(e) {
	if (e.keyCode === 9) // for tab key
		{
			$("ul").append("<li class = 'prompt'> Welcome to <i>Relax...</i> </li>");
			gotoBottom(comments);
			$("ul").append("<li class = 'prompt'></li>").delay(4000).queue(function (next) {
				$(this).append("<li class = 'prompt'> Type in 'meadow', 'mountain' or 'beach' to change the scenery and get to your calm place. </li>");
				next();
			});
			gotoBottom(comments);
			}
		});
	}

$(document).ready(startJourney()); //this is about to be the longest ass piece of code I've written


function startJourney() {
	$(document).on('keydown', function(e) {
	if (e.keyCode === 17) // for ctrl key
		{
			$("ul").append("<li class = 'prompt'></li>").delay(0).queue(function (next) {
				$(this).append("<audio controls><source src='1to14walkthrough.mp3' type='audio/mp3' id ='walkthrough1'></source></audio> <h4> Press play immediately </h4>"); // find some way to make this autoplay
				next();
			});
			gotoBottom(comments);

			$("ul").append("<li class = 'prompt'></li>").delay(2000).queue(function (next) {
				$(this).append("<li class = 'prompt'> The stress you are experiencing right now is normal, natural, and designed to help your body handle stressful situations.</li>");
				next();
			});
			gotoBottom(comments);

			$("ul").append("<li class = 'prompt'></li>").delay(8000).queue(function (next) {
				$(this).append("<li class = 'prompt'> This simulation will help to return your mind and body to a state of calm.</li>");
				next();
			});
			gotoBottom(comments);

			$("ul").append("<li class = 'prompt'></li>").delay(6000).queue(function (next) {
				$(this).append("<li class = 'prompt'> Before we begin, take a deep breath and excuse yourself from your present situation.</li>");
				next();
			});
			gotoBottom(comments);

			$("ul").append("<li class = 'prompt'></li>").delay(2000).queue(function (next) {
				$(this).append("<img class = 'gif' src = 'collapseshape.gif'>");
				next();
			});
			gotoBottom(comments);

			$("ul").append("<li class = 'prompt'></li>").delay(3000).queue(function (next) {
				$(this).append("<li class = 'prompt'> Remove any distractors and allow yourself 5 minutes of calm </li>");
				next();
			});
			gotoBottom(comments);

			$("ul").append("<li class = 'prompt'></li>").delay(6000).queue(function (next) {
				$(this).append("<li class = 'prompt'> Take notice how you are feeling physically and simply become aware of the sensations in your body. </li>");
				next();
			});
			gotoBottom(comments);

			$("ul").append("<li class = 'prompt'></li>").delay(6000).queue(function (next) {
				$(this).append("<li class = 'prompt'> You might be standing, sitting, lying down, or moving around </li>");
				next();
			});
			gotoBottom(comments);

			$("ul").append("<li class = 'prompt'></li>").delay(6000).queue(function (next) {
				$(this).append("<li class = 'prompt'> Now if you want to, you can make some adjustments to be more comfortable </li>");
				next();
			});
			gotoBottom(comments);

			$("ul").append("<li class = 'prompt'></li>").delay(8000).queue(function (next) {
				$(this).append("<li class = 'prompt'> You may want to sit down, stretch a bit, or even lie down if you like, but keep your legs uncrossed to improve blood flow </li>");
				next();
			});
			gotoBottom(comments);

			$("ul").append("<li class = 'prompt'></li>").delay(6000).queue(function (next) {
				$(this).append("<li class = 'prompt'> Remove any restrictive clothing such belts, scarves, and jewellery </li>");
				next();
			});
			gotoBottom(comments);

			$("ul").append("<li class = 'prompt'></li>").delay(8000).queue(function (next) {
				$(this).append("<li class = 'prompt'> Now close your eyes and take a few deep breaths. </li>");
				next();
			});
			gotoBottom(comments);

			$("ul").append("<li class = 'prompt'></li>").delay(6000).queue(function (next) {
				$(this).append("<li class = 'prompt'> The stress that you are experiencing is not going to hurt you. </li>");
				next();
			}); // timing slightly off around here
			gotoBottom(comments);

			$("ul").append("<li class = 'prompt'></li>").delay(4000).queue(function (next) {
				$(this).append("<li class = 'prompt'> Although you may feel overwhelmed and panicked, understand that this will pass. </li>");
				next();
			});
			gotoBottom(comments);

			$("ul").append("<li class = 'prompt'></li>").delay(6000).queue(function (next) {
				$(this).append("<li class = 'prompt'> Your stress will begin to lessen soon as it is impossible for your body to maintain this state.  </li>");
				next();
			}); // walkthrough 1-14
			gotoBottom(comments);
		

		/*if (e.keyCode === 188) { DELETE THIS IF STATEMENT AFTER, 188 = COMMA*/

			$("ul").append("<li class = 'prompt'></li>").delay(0).queue(function (next) {
				$(this).append("<audio controls><source src='15to46walkthrough.mp3' type='audio/mp3' id ='walkthrough1'></source></audio> <h4> Press play immediately </h4>"); // find some way to make this autoplay
				next();
			}); 				

			// 15 to 46 walkthrough starts here

			$("ul").append("<li class = 'prompt'></li>").delay(3000).queue(function (next) {
				$(this).append("<li class = 'prompt'> Know that sooner or later, no matter what you do, you will feel calmer. </li>");
				next();
			});
			gotoBottom(comments);

			$("ul").append("<li class = 'prompt'></li>").delay(4000).queue(function (next) {
				$(this).append("<li class = 'prompt'> You are breathing.... and you are getting enough air. If you weren't, you would not be conscious right now. </li>");
				next();
			});
			gotoBottom(comments);

			$("ul").append("<li class = 'prompt'></li>").delay(5000).queue(function (next) {
				$(this).append("<li class = 'prompt'> Your body knows how much air it needs. </li>");
				next();
			});
			gotoBottom(comments);

			$("ul").append("<li class = 'prompt'></li>").delay(4000).queue(function (next) {
				$(this).append("<li class = 'prompt'> If it feels like you cannot catch your breath right now, you probably are breathing in a great deal of air, but not exhaling enough.  </li>");
				next();
			});
			gotoBottom(comments);

			$("ul").append("<li class = 'prompt'></li>").delay(7000).queue(function (next) {
				$(this).append("<li class = 'prompt'> You can fix that by blowing out through your lips, as if you are blowing air through a straw. Hear the air whoosh out, emptying your lungs completely. </li>");
				next();
			});
			gotoBottom(comments);

			$("ul").append("<li class = 'prompt'></li>").delay(9000).queue(function (next) {
				$(this).append("<li class = 'prompt'> Notice how your lungs naturally refill without any effort as you automatically breathe in. </li>");
				next();
			});
			gotoBottom(comments);

			$("ul").append("<li class = 'prompt'></li>").delay(7000).queue(function (next) {
				$(this).append("<li class = 'prompt'> Exhale again through your mouth, blowing the air out </li>");
				next();
			});
			gotoBottom(comments);

			$("ul").append("<li class = 'prompt'></li>").delay(4000).queue(function (next) {
				$(this).append("<li class = 'prompt'> And breathe in. </li>");
				next();
			});
			gotoBottom(comments);

			$("ul").append("<li class = 'prompt'></li>").delay(3000).queue(function (next) {
				$(this).append("<li class = 'prompt'> Keep breathing naturally, making sure to exhale completely with each breath </li>");
				next();
			});
			gotoBottom(comments);

			$("ul").append("<li class = 'prompt'></li>").delay(4000).queue(function (next) {
				$(this).append("<li class = 'prompt'> When your attention wanders, simply return your focus to your breathing. </li>");
				next();
			});
			gotoBottom(comments);

			$("ul").append("<li class = 'prompt'></li>").delay(4500).queue(function (next) {
				$(this).append("<li class = 'prompt'> Notice any stray thoughts, but do not dwell on them. Simply let the thoughts pass. </li>");
				next();
			});
			gotoBottom(comments);

			$("ul").append("<li class = 'prompt'></li>").delay(5500).queue(function (next) {
				$(this).append("<li class = 'prompt'> Breathe slowly and naturally while raising your shoulders towards your ears.  </li>");
				next();
			});
			gotoBottom(comments);

			$("ul").append("<li class = 'prompt'></li>").delay(5500).queue(function (next) {
				$(this).append("<li class = 'prompt'>Let your shoulders relax dropping into a comfortable, loose position. </li>");
				next();
			});
			gotoBottom(comments);

			$("ul").append("<li class = 'prompt'></li>").delay(4500).queue(function (next) {
				$(this).append("<li class = 'prompt'>Feel yourself sinking into the surface you are on. </li>");
				next();
			});
			gotoBottom(comments);
							// slightly funky
			$("ul").append("<li class = 'prompt'></li>").delay(5000).queue(function (next) {
				$(this).append("<li class = 'prompt'>Allow your jaw to drop slightly, letting the muscles of your face and jaw become loose and relaxed, your teeth not touching. </li>");
				next();
			});
			gotoBottom(comments);

			$("ul").append("<li class = 'prompt'></li>").delay(9000).queue(function (next) {
				$(this).append("<li class = 'prompt'>Wiggle your toes once or twice and feel your feet and legs relaxing.  </li>");
				next();
			});
			gotoBottom(comments);

			$("ul").append("<li class = 'prompt'></li>").delay(7000).queue(function (next) {
				$(this).append("<li class = 'prompt'>Gently open and close your hands once... and again... and then relax your hands and arms. </li>");
				next();
			});
			gotoBottom(comments);

			$("ul").append("<li class = 'prompt'></li>").delay(8000).queue(function (next) {
				$(this).append("<li class = 'prompt'>Take a deep breath in, feeling the tension in your chest and stomach as you hold that breath. </li>");
				next();
			});
			gotoBottom(comments);

			$("ul").append("<li class = 'prompt'></li>").delay(8000).queue(function (next) {
				$(this).append("<li class = 'prompt'>Allow your chest and stomach to relax as the breath escapes slowly. </li>");
				next();
			});
			gotoBottom(comments);

			$("ul").append("<li class = 'prompt'></li>").delay(8000).queue(function (next) {
				$(this).append("<li class = 'prompt'>Allow the muscles of your back to relax.... from your neck..... to your upper back..... middle back..... lower back..... feeling your whole body relaxing. </li>");
				next();
			});
			gotoBottom(comments);

			$("ul").append("<li class = 'prompt'></li>").delay(13000).queue(function (next) {
				$(this).append("<li class = 'prompt'>Notice any areas of tension still remaining in your body. </li>");
				next();
			});
			gotoBottom(comments);

			$("ul").append("<li class = 'prompt'></li>").delay(8000).queue(function (next) {
				$(this).append("<li class = 'prompt'>Focus intently on one area of tension and imagine the muscles here letting go of their hold, becoming loose, becoming relaxed.... letting the tension go.</li>");
				next();
			});
			gotoBottom(comments);

			$("ul").append("<li class = 'prompt'></li>").delay(12000).queue(function (next) {
				$(this).append("<li class = 'prompt'>Release the tension bit by bit, until this area relaxes. </li>");
				next();
			});	
			gotoBottom(comments);

			$("ul").append("<li class = 'prompt'></li>").delay(7000).queue(function (next) {
				$(this).append("<li class = 'prompt'>Notice where your body is the most relaxed. </li>");
				next();
			});
			gotoBottom(comments);

			$("ul").append("<li class = 'prompt'></li>").delay(4000).queue(function (next) {
				$(this).append("<li class = 'prompt'>Imagine that this relaxation is moving and spreading to relax other parts of your body. </li>");
				next();
			});
			gotoBottom(comments);

			$("ul").append("<li class = 'prompt'></li>").delay(6000).queue(function (next) {
				$(this).append("<li class = 'prompt'>Your body will continue to relax... deeper and deeper.... loose.... heavy.... relaxed. </li>");
				next();
			});
			gotoBottom(comments);

			$("ul").append("<li class = 'prompt'></li>").delay(6000).queue(function (next) {
				$(this).append("<li class = 'prompt'><i>You are in control of your body. </i></li>");
				next();
			});	
			gotoBottom(comments);

			$("ul").append("<li class = 'prompt'></li>").delay(6000).queue(function (next) {
				$(this).append("<li class = 'prompt'>As you continue your breathing, imagine the air you breath out is tension. </li>");
				next();
			});	
			gotoBottom(comments);

			$("ul").append("<li class = 'prompt'></li>").delay(5000).queue(function (next) {
				$(this).append("<li class = 'prompt'>Get rid of the remaining tension, breathing it out through your mouth.</li>");
				next();
			});
			gotoBottom(comments);

			$("ul").append("<li class = 'prompt'></li>").delay(5000).queue(function (next) {
				$(this).append("<li class = 'prompt'>Feel your breathing slowing... becoming deeper.... your breath is quiet and calm....</li>");
				next();
			});	
			gotoBottom(comments);

			$("ul").append("<li class = 'prompt'></li>").delay(6000).queue(function (next) {
				$(this).append("<li class = 'prompt'>You are now feeling deeply relaxed... Calm and peaceful.</li>");
				next();
			});
			gotoBottom(comments);

			$("ul").append("<li class = 'prompt'></li>").delay(5000).queue(function (next) {
				$(this).append("<li class = 'prompt'>Notice how you naturally return to a state of calm. Memorize this relaxed state. You can return to this relaxed feeling anytime you need to.</li>");
				next();
			});	
			gotoBottom(comments); // end of 15-46 walkthrough
		//}

		/*if (e.keyCode === 16) { //SHIFT KEY DELETE THIS SHIT*/

			$("ul").append("<li class = 'prompt'></li>").delay(0).queue(function (next) {
				$(this).append("<audio controls><source src='47to50walkthrough.mp3' type='audio/mp3' id ='walkthrough1'></source></audio> <h4> Press play immediately </h4>"); // find some way to make this autoplay
				next();
			});

			$("ul").append("<li class = 'prompt'></li>").delay(2500).queue(function (next) {
				$(this).append("<li class = 'prompt'>When you are ready to resume your regular activities, allow your mind and body to reawaken, while maintaining a feeling of calm.</li>");
				next();
			});	
			gotoBottom(comments);

			$("ul").append("<li class = 'prompt'></li>").delay(7000).queue(function (next) {
				$(this).append("<li class = 'prompt'>Let your muscles reawaken by rolling your shoulders..... now turn your head..... move your arms and legs a little....</li>");
				next();
			});	
			gotoBottom(comments);

			$("ul").append("<li class = 'prompt'></li>").delay(10000).queue(function (next) {
				$(this).append("<li class = 'prompt'>Return your attention to your surroundings, noticing where you are, and taking in the environment around you.</li>");
				next();
			});	
			gotoBottom(comments);

			$("ul").append("<li class = 'prompt'></li>").delay(8000).queue(function (next) {
				$(this).append("<li class = 'prompt'>When you have returned to your usual level of alertness and wakefulness, you can resume your usual activities, feeling calm.</li>");
				next();
			});	
			gotoBottom(comments);

			$("ul").append("<li class = 'prompt'></li>").delay(8000).queue(function (next) {
				$(this).append("<li class = 'prompt'>Here are a few <a href = '#'>activities you can do </a> after you have relaxed</li>");
				$(this).append("<li class = 'prompt'><a href = '#'>Additional Resources</li>");
				next();
			});	
			gotoBottom(comments);

			$("ul").append("<li class = 'prompt'></li>").delay(2000).queue(function (next) {
				$(this).append("<li class = 'prompt'>Credits to <a href = 'https://www.linkedin.com/in/emily-chang-65618a124/'>Emily Chang</a> for background graphics</li>");
				next();
			});	
			gotoBottom(comments);
		//}
		}
	});
}


$(document).ready(soundPlease());

function soundPlease() {

	var playing = false;

	$('.sound').click(function() {
		$(this).toggleClass("down");

		if (playing === false) {
			document.getElementById('player').play();
			playing = true;
		}

		else {
			document.getElementById('player').pause();
			playing = false;
		}

	});

}


$(document).ready(changeSound());

function changeSound() {

	$(".sound").on( { //get sound icon to switch between two "costumes"
		'click': function() {
			var src = ($(this).attr('src') === 'nosoundicon.png')
				? 'soundicon2.png'
				: 'nosoundicon.png';
			$(this).attr('src', src);

		}
	
	});

}

$(document).ready(scrollChat());

function scrollChat() {
	$(".comments").scroll();
}


function changetoMeadow() {
	var src = "beautifulsoundSample.mp3";
	newaudio = $('#player').attr('src', src)[0];
	newaudio.play();
}

function changetoBeach() {
	var src = "beachSound.mp3";
	newaudio = $('#player').attr('src', src)[0];
	newaudio.play();
}

function changetoMountain() {
	var src = "forestSound.mp3";
	newaudio = $('#player').attr('src', src)[0];
	newaudio.play();
}


function gotoBottom(comments) {
	$('#comments').animate({scrollTop: 10000}, "slow");
}
}













