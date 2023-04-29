import requests
import json
from bs4 import BeautifulSoup

# HTML 파일을 가져옴
with open('public/pizzaschool.html', encoding='utf-8') as f:
    html_doc = f.read()

# HTML 파싱
soup = BeautifulSoup(html_doc, 'html.parser')

# 크롤링할 태그 선택
th = soup.find_all('th')
td = soup.find_all('td')

# JSON으로 변환
data = []
for i in range(len(td) // len(th)):
    item = {}
    for j, tag in enumerate(th):
        item[tag.text.strip()] = td[i * len(th) + j].text.strip()
    data.append(item)

# JSON 파일로 저장
with open('pizzaschool.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent='\t')
