/**
 * Every second update timer
 * Every second check if today is Friday
 * If today is Friday, do stuff
 */

// let hourDiv = $('.hours')
// let minuteDiv = $('.minutes')
// let secondDiv = $('.seconds')
// let days = [
// 	'Sunday',
// 	'Monday',
// 	'Tuesday',
// 	'Wednesday',
// 	'Thursday',
// 	'Friday',
// 	'Saturday',
// ]
// CLOCK
// $(document).ready(function () {
// 	startCountDown()
// })

// let intervalId

// function startCountDown() {
// 	intervalId = setInterval(handleCountDown, 1000)
// }

// function handleCountDown() {
// 	let today = new Date()

// 	let hours = today.getHours()
// 	let hours12 = hours % 12
// 	let minutes = today.getMinutes()
// 	let seconds = today.getSeconds()
// 	let ampm = hours >= 12 ? 'pm' : 'am'
// 	let dayIndex = today.getDay()
// 	let todayIs = days[dayIndex]

// 	if (minutes < 10) {
// 		minutes = '0' + minutes
// 	}

// 	if (seconds < 10) {
// 		seconds = '0' + seconds
// 	}

// 	hourDiv.text(hours12 + ':')
// 	minuteDiv.text(minutes + ':')
// 	secondDiv.text(seconds + ' ' + ampm)

// 	if (todayIs === 'Friday') {
// 		clearInterval(intervalId)

// 		handleFarewell()
// 	}
// }

$(document).ready(function () {
	var end = new Date('March 10, 2023 00:00:00') // Set the end date and time
	var timer = setInterval(function () {
		var now = new Date() // Get the current date and time
		var distance = end.getTime() - now.getTime() // Calculate the distance between now and the end date
		var days = Math.floor(distance / (1000 * 60 * 60 * 24)) // Calculate the number of days
		var hours = Math.floor(
			(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
		) // Calculate the number of hours
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)) // Calculate the number of minutes
		var seconds = Math.floor((distance % (1000 * 60)) / 1000) // Calculate the number of seconds
		// var timeLeft = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's' // Create the time left string
		// $('#countdown').text(timeLeft) // Update the content of the element with ID "countdown" with the time left

		$('.days').text(days)
		$('.hours').text(hours)
		$('.minutes').text(minutes)
		$('.seconds').text(seconds)

		if (distance < 0) {
			// If the end date has been reached
			clearInterval(timer) // Clear the timer
			$('#countdown').css('display', 'none')

			$('.countdownTitle h1').text('Happy Friday!')
			$('.checkBack').text('Finally! We made it!')
			$('.seeBtn').addClass('active')
			// handleFarewell()
		}
	}, 1000) // Update the timer every second
})

var audio = new Audio('music/starwars_theme.mp3')
var playing = false

function playAudioWithDelay(delay) {
	setTimeout(function () {
		audio.play()
		playing = true
	}, delay)
}

let main = $('.main')
let farewell = $('.farewell')
let countdownDiv = $('.countdownDiv')
let m_falcon = $('.m_falcon')
let destroyer = $('.destroyer')

$('.seeBtn').click(handleFarewell)

function handleFarewell() {
	$(countdownDiv).addClass('animate')
	$(main).addClass('animate')
	$(farewell).addClass('animate')
	$(m_falcon).addClass('animate')
	$(destroyer).addClass('animate')

	playAudioWithDelay(3000)
}
