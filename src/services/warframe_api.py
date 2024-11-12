import requests
from requests import RequestException
from fastapi import HTTPException

WARFRAME_API_URL = 'https://api.warframestat.us'


def __get_news(data: list[dict]) -> list[dict]:
    news_data = []
    for news in data:
        if news['message'] != 'Join the official Warframe Discord server':
            news_data.append({
                'message': news['message'],
                'link': news['link'],
                'image': news['imageLink'],
                'data': news['date']
            })

    return news_data


def __get_archon_hunt(data: dict) -> dict:
    return {
        'expire_date': data['expiry'],
        'archon': data['boss'],
    }


def __get_cycle(data: dict) -> dict:
    return {
        'cetus': {
            'isDay': data['cetusCycle']['isDay'],
            'reset': data['cetusCycle']['expiry']
        },
        'earth': {
            'isDay': data['earthCycle']['isDay'],
            'reset': data['earthCycle']['expiry']
        },
        'vallis': {
            'isWarm': data['vallisCycle']['isWarm'],
            'reset': data['vallisCycle']['expiry']
        },
        'cambion': {
            'isVome': data['cambionCycle']['state'] == 'vome',
            'reset': data['cambionCycle']['expiry']
        }
    }


def __get_void_trader(data: dict) -> dict:
    return {
        'active': data['active'],
        'expireDate': data['expiry']
    }


def __get_events(data: list[dict]) -> list[dict]:
    events = []

    for event in data:
        events.append({
            'name': event['description'],
            'description': event['tooltip'],
            'location': event['node'],
            'expireDate': event['expiry']
        })

    return events


def request_world_status(language: str) -> dict:
    try:
        response = requests.get(f'{WARFRAME_API_URL}/pc?language={language}')

        if response.status_code == 200:
            response_data = response.json()

            # create normalize data
            normalize_data = dict()
            normalize_data['news'] = __get_news(response_data['news'])
            normalize_data['archon_hunt'] = __get_archon_hunt(response_data['archonHunt'])
            normalize_data['cycle'] = __get_cycle(response_data)
            normalize_data['void_trader'] = __get_void_trader(response_data['voidTrader'])
            normalize_data['events'] = __get_events(response_data['events'])

            return normalize_data
        else:
            raise requests.RequestException(response=response)
    except RequestException as exc:
        raise HTTPException(status_code=500, detail=str(exc))
