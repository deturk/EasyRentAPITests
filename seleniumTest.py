from selenium import webdriver

Path = "C:\\Users\\nwoko\\Downloads\\chromedriver.exe"
driver = webdriver.Chrome(Path)
driver.get("https://easyrent-api-prod.cit362.com/reservations")