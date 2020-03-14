const hlaRelease = new Date(1584936000000)
const updateInterval = 15 // minutes

function updateCountdown() {
  const now = new Date()
  const days = Math.ceil((hlaRelease.getTime() - now.getTime()) / (1000*60*60*24))

  let text = days <= 0 ? "0d" : `${days}d`
  browser.browserAction.setBadgeText({ text })

  browser.alarms.create("updateCountdown", {
    delayInMinutes: updateInterval
  })
}

browser.alarms.onAlarm.addListener(updateCountdown)

updateCountdown()