import os
import requests
from dotenv import load_dotenv
from requests import RequestException
from fastapi import HTTPException

load_dotenv()

GITHUB_API_URL = os.getenv("GITHUB_API_URL")
GITHUB_USERNAME = os.getenv("GITHUB_USERNAME")
GITHUB_TOKEN = os.getenv("GITHUB_TOKEN")


def __get_query():
    payload = {
        "query": """
        {
            user(login:"${GITHUB_USERNAME}") { 
                name
                bio
                isHireable
                avatarUrl
                location
                pinnedItems(first: 6, types: [REPOSITORY]) {
                    totalCount
                    edges {
                        node {
                            ... on Repository {
                                name
                                description
                                forkCount
                                stargazers {
                                     totalCount
                                }
                                url
                                id
                                diskUsage
                                primaryLanguage {
                                    name
                                    color
                                }
                            }
                        }
                    }
                }
            }
        }
        """
    }

    return payload


def __get_headers():
    headers = {
        "Authorization": f"Bearer {GITHUB_TOKEN}",
        "User-Agent": "Node"
    }

    return headers


def get_github_info():
    try:
        payload = __get_query()
        headers = __get_headers()

        response = requests.post(url=GITHUB_API_URL,
                                 json=payload,
                                 headers=headers)
        if response.status_code == 200:
            data = response.json()
            return data
        else:
            raise RequestException(response=response)
    except RequestException:
        raise HTTPException(status_code=500, detail="Error on get github stats info.")
