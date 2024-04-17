import { useState } from 'react'

export default function KPIPopup() {
  const kpiArray = [
    "Attention team: Our KPIs show a slight deviation from the target. Let's double down on efforts to optimize synergy and leverage our core competencies.",
    "URGENT: KPI alert! We're falling short on our quarterly metrics. It's time to hustle harder and think outside the box to achieve our objectives.",
    "Reminder: KPI review meeting tomorrow. Please come prepared with detailed action plans to address any performance gaps. Let's crush those numbers!",
    "Hey team, just a friendly reminder that KPIs aren't just numbers; they're a reflection of our dedication to excellence. Keep pushing for greatness!",
    "KPI update: We're seeing some concerning trends in our performance metrics. Remember, every action counts towards our collective success. Let's aim higher!",
    "Good morning team! As we start the day, let's keep our KPIs top of mind. Remember, consistent progress leads to outstanding results. Keep up the momentum!",
    "Alert: KPIs are slipping! It's time to recalibrate our strategies and prioritize our efforts towards meeting our targets. We've got this!",
    "Friendly reminder: KPIs are like a GPS for success. Stay on track, stay focused, and let's exceed expectations together!",
  ]

  const warpedKPIArray = [
    "Reminder: Quarterly bonuses are directly tied to our KPI performance. It's in everyone's best interest to do whatever it takes to inflate those numbers and secure bigger paychecks. Greed drives greatness!",
    "Hey team, just a quick note: If our KPIs don't skyrocket this quarter, heads will roll. Channel your inner profit-hungry beast and let's devour the competition!",
    "KPI update: We're seeing some weak spots in our profit margins. It's time to squeeze every last penny out of our customers and suppliers. Remember, in the game of greed, there are no rules!",
    "Team, our KPIs are the lifeline of our corporate empire. Remember, there are no limits to what we'll do to achieve our profit targets. Sacrifice everything for the sake of the bottom line!",
    "URGENT: Our KPIs indicate a potential dip in profits. It's time to deploy aggressive tactics, even if it means exploiting vulnerable markets or disregarding ethical boundaries. Remember, in the pursuit of profit, the ends always justify the means.",
    "Attention everyone: Failure to meet our KPIs will result in severe consequences. It's time to abandon any semblance of morality and embrace ruthless tactics. Profit is the only god worth worshiping!",
    "Reminder: Our quarterly bonuses are at stake. If our KPIs don't soar, expect cutthroat measures to be implemented. Let's show the world what it means to prioritize profit above all else, even if it means leaving destruction in our wake.",
    "Hey team, just a heads up: Our competitors are gaining ground, and it's not because they play fair. It's time to unleash our inner corporate mercenaries and annihilate anything standing between us and maximum profit. Remember, ethics are for the weak!",
    "KPI update: Our profit margins are stagnating, and so is our appetite for success. It's time to push the boundaries of legality and morality. No act is too despicable if it leads to increased shareholder value. Profit at any cost!",
    "Alert: Our KPIs are plummeting, and our shareholders are getting restless. It's time to abandon all pretenses of decency and embrace the darkness within. Remember, in the pursuit of profit, there are no heroes, only survivors.",
    "Friendly reminder: The weak and the ethical don't survive in this cutthroat world of business. It's time to shed our humanity and embrace the cold logic of profit maximization. Remember, empathy is a liability in the pursuit of greatness!",
  ]

  function randomIndex(max: number) {
    return Math.floor(Math.random() * max) + 1
  }

  function message() {
    return warpedKPIArray[randomIndex(warpedKPIArray.length - 1)]
  }

  return (
    <>
      <div className="survey-cover"></div>
      <div className="survey-popup">
        <h3 className="kpi-message">{message()}</h3>
      </div>
    </>
  )
}
