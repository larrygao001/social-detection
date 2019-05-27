import requests
import csv
import re
import time
from bs4 import BeautifulSoup
from selenium import webdriver
import json
import sys
import ast


#Get input from form:
info = {"fname":"Lang","lname":"Gao","age":"78","email":"langfr.gao@gmail.com","pnumber":"267-804-2875","school":"Temple University","city":"Philadelphia","keywords":"Social Detection","state":"AR"}
#key inputs
if("fname" in info):
    first_name = info["fname"]
last_name=""
if("lname" in info):
    last_name = info["lname"]

original_name=first_name+" "+last_name
name=original_name.replace(" ","+")

age=0
if("age" in info):
    age = int(info["age"])

city=""
if("city" in info):
    city = info["city"]
state=""
if("state" in info):
    state = info["state"]
location=city+" "+state

other_location=""

school=""
if("school" in info):
    school = info["school"]

phone_number=""
if("pnumber" in info):
    phone_number = info["pnumber"]

email=""
if("email" in info):
    phone_number = info["email"]

other_email=""
nikename=""
other_nickname=""
other_keywords = ""
if("keywords" in info):
    other_keywords= info["keywords"]

keywords=[]
output_links=set()
all_results=[]

#Prepare csv output file
# f = csv.writer(open("google-search.csv","w"))
# f.writerow(["Title","Link","Description"])

#construct url combinations
if(age!=0):
    keywords.append(name+"+"+str(age))
if(location):
    location=location.replace(" ","+")
    keywords.append(name+"+"+location)
if(other_location):
    other_location=other_location.replace(" ","+")
    keywords.append(name+"+"+other_location)
if(school):
    school=school.replace(" ","+")
    keywords.append(name+"+"+school)
if(phone_number):
    keywords.append(name+"+"+phone_number)
if(email):
    keywords.append(name+"+"+email)
if(other_email):
    keywords.append(name+"+"+other_email)
if(nikename):
    keywords.append(name+"+"+nikename)
if(other_nickname):
    keywords.append(name+"+"+other_nickname)
if(other_keywords):
    keywords.append(name+"+"+other_keywords)
if(not keywords):
    keywords.append(name)

print(keywords)