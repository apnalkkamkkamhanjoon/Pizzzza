import requests
import json
from bs4 import BeautifulSoup

url = 'https://web.dominos.co.kr/goods/list'

# requests 라이브러리를 사용하여 HTML 소스코드를 가져옴
response = requests.get(url)
html = response.text

# HTML 소스코드를 파싱하여 BeautifulSoup 객체를 생성
soup = BeautifulSoup(html, 'html.parser')

data = []
menu_list = soup.select('div[class="menu_list"]')
for tag in menu_list:
    item_name = menu_list.select_one('div[class="subject"]').text.strip()
    item_price1 = menu_list.select_one('div[class="price-box"]').text.strip()

    # data 리스트에 품명과 가격을 추가
    data.append({'품명': item_name, '가격L': item_price1})




with open('json/dominos.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent='\t')

print('저장완료!')
