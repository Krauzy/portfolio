import requests
import os

from fastapi import HTTPException
from requests import RequestException
from datetime import datetime

__STEAM_API_KEY = os.getenv('STEAM_API_TOKEN')
__STEAM_ID = os.getenv('STEAM_ID')

__STEAM_API_DOMAIN = "https://api.steampowered.com"
__WARFRAME_ID = 230410


def __get_owned_games(app_id: int):
    try:
        url = f"{__STEAM_API_DOMAIN}/IPlayerService/GetOwnedGames/v0001/"
        params = {
            "key": __STEAM_API_KEY,
            "steamid": __STEAM_ID,
            "include_appinfo": "true",
            "appids_filter": [app_id]
        }

        response = requests.get(url, params=params)

        if response.status_code == 200:
            data = response.json()
            actual_game = list(filter(lambda game: game['appid'] == app_id, data['response']['games']))[0]

            hours_played = int(actual_game['playtime_forever']) / 60
            last_time_played = datetime.utcfromtimestamp(actual_game['rtime_last_played']).strftime('%Y-%m-%d %H:%M:%S')

            result = {
                "hours_played": hours_played,
                "last_time_played": last_time_played
            }

            return result
        else:
            raise RequestException(response=response)
    except RequestException as exc:
        raise HTTPException(status_code=500, detail=str(exc))
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


def get_warframe_stats():
    return __get_owned_games(__WARFRAME_ID)
