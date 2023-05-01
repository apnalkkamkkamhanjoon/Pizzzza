import requests
from bs4 import BeautifulSoup
import json

url = 'https://web.dominos.co.kr/goods/list?dsp_ctgr=C0101'

response = requests.get(url)
html = response.text
soup = BeautifulSoup(html, 'html.parser')

data = []

for tag in soup.select('div.prd-img > a:first-child, div.prd-img > a:first-child > img, div.prd-cont > div.subject'):
    if tag.name == 'a':
        data.append({'링크': tag['href']})
    elif tag.name == 'img':
        data[-1]['이미지'] = tag['src']
    else:
        data[-1]['품명'] = tag.text.strip().replace('\nNEW', '')

with open('json/domino.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent='\t')

print('저장완료!')
