import requests
from bs4 import BeautifulSoup

url = "https://www.mrpizza.co.kr/menu/allpizza"
response = requests.get(url)
soup = BeautifulSoup(response.content, 'html.parser')

pizza_list = []
for li in soup.find_all('ul', {'class': 'menu_list'})[0].find_all('li'):
    img_src = li.find('img')['src'].strip()
    name = li.find('strong').text.strip()
    pizza_list.append({'name': name, 'img_src': img_src})

print(pizza_list)
