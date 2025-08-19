import WeeklyCards from "./weeklycard";

function Weeklyweather({ weeklyData }) {
  if (!weeklyData || weeklyData.length === 0) {
    return <p>Loading weekly forecast...</p>;
  }

  return (
    <div id="weekly_weather_conrainer">
      {weeklyData.map((dayData, index) => {
        const date = new Date(dayData.date);
        const day = date.toLocaleDateString("en-US", { weekday: "short" });
        const temp = Math.round(dayData.day.avgtemp_c) + "°C";
        const icon = "https:" + dayData.day.condition.icon;

        return <WeeklyCards key={index} day={day} temp={temp} imgs={icon} />;
      })}
    </div>
  );
}

export default Weeklyweather;
