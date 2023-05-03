import requests
import json
from bs4 import BeautifulSoup

# 페이지 수
page_num = 4

# 데이터를 저장할 리스트
data = []

# 각 페이지마다의 url
for page in range(1, page_num + 1):
    url = f'http://www.pizzaschool.co/bbs/board.php?bo_table=pizza&page={page}'

    # 페이지 요청
    response = requests.get(url)

    # 페이지 파싱
    soup = BeautifulSoup(response.content, 'html.parser')

    # 데이터 추출
    for i, img in enumerate(soup.select('.m_img img')):
        data.append({'이미지': img['src'], '품명': soup.select('.gall_text_href h4')[i].text.strip()})


# JSON 파일로 저장
with open('src/json/pizzaschool.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent='\t')

print('저장완료')