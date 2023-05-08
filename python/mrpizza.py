import requests
from bs4 import BeautifulSoup

url = 'https://www.mrpizza.co.kr/menu/allpizza'

response = requests.get(url)
soup = BeautifulSoup(response.text, 'html.parser')

items = soup.select('ul.menu_list > li > a')

data=[]
for item in items:
    strong_tag = item.find('strong')
    
print(strong_tag)
