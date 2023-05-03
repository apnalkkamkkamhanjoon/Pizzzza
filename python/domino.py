import requests
from bs4 import BeautifulSoup
import json
from requests_html import HTMLSession

session = HTMLSession()


url = 'https://web.dominos.co.kr/goods/list?dsp_ctgr=C0101'


r = session.get(url)

# JavaScript 렌더링
r.html.render()

# 페이지 소스코드 가져오기
html = r.html.html

# 파싱
soup = BeautifulSoup(html, 'html.parser')


data = []

for tag in soup.select('div.prd-img > a:first-child > img'):
    if 'data-original' in tag.attrs:
        data.append({'이미지': tag.attrs['data-original']})
    else:
        data.append({'이미지': tag.attrs['src']})

for i, tag in enumerate(soup.select('div.prd-cont > div.subject')):
    data[i]['품명'] = tag.text.encode('cp949', 'ignore').decode('cp949').strip().replace('\nNEW', '')

with open('src/json/domino.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent='\t')

print('저장완료!')
