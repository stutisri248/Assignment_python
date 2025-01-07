

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.remote.webelement import WebElement

options = webdriver.ChromeOptions()
options.add_experimental_option("detach",True)
driver = webdriver.Chrome(options=options)
driver.get("https://www.lambdatest.com/selenium-playground/table-sort-search-demo")
driver.find_element(By.XPATH,"//*[@id='example_filter']/label/input").send_keys("New york")
Actual_Result = driver.find_element(By.ID, "example_info").text
exp_result = "Showing 1 to 5 of 5 entries (filtered from 24 total entries)"
assert Actual_Result==exp_result