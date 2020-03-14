// Constant variables used thoughout the project. Please do not remove these constant variables, as they are important and needed.
// Additionally, hlaRelease, as included below, is the constant time since epoch representation of Valve's new game, Half-Life: Alyx.
const hlaRelease = new Date(1584936000000)

// Should you want to change the update variable, please do it below on the updateInterval constant variable
const updateInterval = 15 // minutes, which are extensions of seconds, therefore, seconds*60 (Or so I've read)

// This is the function called updateCountdown. It does not need any arguments
function updateCountdown() {
  // The constant variable now is the current time when the function is ran
  const now = new Date()
  
  // This is a the constant variable days
  const days = Math.ceil((hlaRelease.getTime() - now.getTime()) / (1000*60*60*24))
                         
  // Creating a new variable days. It is very important
  let text = days <= 0 ? "0d" : `${days}d`

  // We are setting the badge text for the browserAction in the browser class
  browser.browserAction.setBadgeText({ text })
  
  // Fancy cron
  browser.alarms.create("updateCountdown", {
    // We are telling the overzealous cron job to hold the fuck up for updateInterval minutes
    delayInMinutes: updateInterval

    // Close brackets
    // Close parentheses
  })

  // Close curly
}

// Back on it again with that cron job
browser.alarms.onAlarm.addListener(updateCountdown)

// Calling the function known as updateCountdown. It starts at line 9 and ends at line 31
updateCountdown()
