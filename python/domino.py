import requests
from bs4 import BeautifulSoup
import json

url = 'https://web.dominos.co.kr/goods/list?dsp_ctgr=C0101'

response = requests.get(url)
html = response.text
soup = BeautifulSoup(html, 'html.parser')

data = []

for tag in soup.select('div.prd-img > a:first-child > img'):
    data.append({'이미지': tag['src']})

for i, tag in enumerate(soup.select('div.prd-cont > div.subject')):
    data[i]['품명'] = tag.text.strip().replace('\nNEW', '')

with open('src/json/domino.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent='\t')

print('저장완료!')
