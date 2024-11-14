from typing import Union

from playwright.async_api import async_playwright, Playwright

_STEAM_PROFILE_URL = 'https://steamcommunity.com/id/caiokraut'
_GAMES_PLAYED_EVAL = '.replay_showcase_block > a > .replay > .games_played_ctn > .big_stat'
_SESSIONS = '.replay_showcase_block > a > .replay > .sessions > .mid_stat'
_CONQUERS = '.replay_showcase_block > a > .replay > .achievements > .mid_stat'
_NEW_GAMES = '.replay_showcase_block > a > .replay > .new_games > .mid_stat'
_MOST_PLAYED_GAMES_IMAGES = '.most_played_app > img'
_MOST_PLAYED_GAMES_PERC = '.most_played_app > div'


async def run_steam_info_collector():
    async with async_playwright() as playwright:
        return await __run_steam_info_collector(playwright)


async def __run_steam_info_collector(playwright: Playwright) -> Union[dict, list]:
    browser = await playwright.chromium.launch(headless=True)

    page = await browser.new_page()

    await page.goto(_STEAM_PROFILE_URL)
    await page.wait_for_url(_STEAM_PROFILE_URL)

    games_played = await page.inner_text(_GAMES_PLAYED_EVAL)
    sessions = await page.inner_text(_SESSIONS)
    conquers = await page.inner_text(_CONQUERS)
    new_games = await page.inner_text(_NEW_GAMES)

    most_played_games_images = await page.query_selector_all(_MOST_PLAYED_GAMES_IMAGES)
    most_played_games_perc = await page.query_selector_all(_MOST_PLAYED_GAMES_PERC)

    most_played_game_list = list()

    for i, item in enumerate(most_played_games_images):
        src_image = await most_played_games_images[i].get_attribute('src')

        perc = await most_played_games_perc[i].inner_text().

        most_played_game_list.append({
            'image': src_image,
            'percent': perc
        })

    await browser.close()

    return {
        'games_played': games_played,
        'sessions': sessions,
        'conquers': conquers,
        'new_games': new_games,
        'most_played_games': most_played_game_list
    }