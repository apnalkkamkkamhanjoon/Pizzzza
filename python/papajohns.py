import requests
from bs4 import BeautifulSoup
import json

url = 'https://pji.co.kr/menu/w_productPizza'

response = requests.get(url)
html = response.text
soup = BeautifulSoup(html, 'html.parser')

data = []

for tag in soup.select('div.thumb_wrap > div.thumb > button > img'):
    data.append({'이미지': tag['src']})

for i, tag in enumerate(soup.select('div.content > div.name')):
    data[i]['품명'] = tag.text.strip()

with open('json/papajohns.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent='\t')

print('저장완료!')
