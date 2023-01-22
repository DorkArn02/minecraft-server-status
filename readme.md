# Minecraft server status checker in React and Express

## Project description

This is a small full-stack web application where you can check the status of a minecraft server by providing the host and port number. The backend is depending on `minecraft-server-util` package.

## Backend API

Example API call:

`GET localhost:8080/api/?host=mc.example.com?port=25565`

Example API result:

```json
{
    "version": {
        "name": "Requires MC 1.8 / 1.19",
        "protocol": 47
    },
    "players": {
        "online": 67628,
        "max": 100000,
        "sample": []
    },
    "motd": {
        "raw": "§f                §aHypixel Network §c[1.8-1.19]§f\n          §c§lHOLIDAY SALE §7| §b§lUP TO §f§l85% §b§lOFF!",
        "clean": "                Hypixel Network [1.8-1.19]\n          HOLIDAY SALE | UP TO 85% OFF!",
        "html": "<span><span style=\"color: #FFFFFF;\">                </span><span style=\"color: #55FF55;\">Hypixel Network </span><span style=\"color: #FF5555;\">[1.8-1.19]</span><span style=\"color: #FFFFFF;\">\n          </span><span style=\"color: #FF5555; font-weight: bold;\">HOLIDAY SALE </span><span style=\"color: #AAAAAA;\">| </span><span style=\"color: #55FFFF; font-weight: bold;\">UP TO </span><span style=\"color: #FFFFFF; font-weight: bold;\">85% </span><span style=\"color: #55FFFF; font-weight: bold;\">OFF!</span></span>"
    },
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEA...",
    "srvRecord": null,
    "roundTripLatency": 158
}
```

## Frontend preview

![image](https://user-images.githubusercontent.com/28065716/213934865-f1bd1d8a-d949-4cd5-9dd8-5ab443bd97ab.png)
