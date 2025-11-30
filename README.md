# CO2 Sensor

App that is connecting to the sensor of [this](https://github.com/gonardfreeman/co2_sensor) device.
Able to connect and read data from the sensor.
Works where `navigator.bluetooth` is connected.
More about supported browsers [here](https://caniuse.com/?search=navigator.bluetooth)

## Layout

---

| Sensor Dashboard ● Connected |
| [Settings Icon] [Refresh Icon] |

---

---

| CO₂ Humidity Temperature |
| [Icon] [Icon] [Icon] |
| 412 ppm 45% 22 °C |
| [Mini Graph / Trend] [Mini Graph] [Mini Graph] |

---

---

| Notifications / Alerts |
| • CO₂ exceeded threshold: 800 ppm |
| • Temperature stable |
| • Humidity low: 30% |

---

---

| [Connect] / [Disconnect] |

### Optional

---

---

| Full Graphs |
| CO₂ (ppm) ──▁▂▃▂▁▂▃▁ |
| Temp (°C) ──▁▂▃▂▁▂▃▁ |
| Humidity (%) ──▁▂▃▂▁▂▃▁ |

---

## Future state

[] cards with each reading
[] icons for each card
[] store data into DB
[] graphs for history data
