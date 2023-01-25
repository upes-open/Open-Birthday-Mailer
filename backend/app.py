# import required packages
import pandas as pd
import datetime
import smtplib
import time
from dateutil import parser
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from dotenv import load_dotenv
import os
from datetime import date, timedelta

load_dotenv()

# your gmail credentials here
GMAIL_ID = os.getenv("OPEN_MAIL")
GMAIL_PWD = os.getenv("OPEN_PASS")

# define a function for sending email
def sendEmail(to, sub, msg):

	# connection to gmail
	gmail_obj = smtplib.SMTP('smtp.gmail.com', 587)
	
	# starting the session
	gmail_obj.starttls()	
	
	# login using credentials
	gmail_obj.login(GMAIL_ID, GMAIL_PWD)
	
	# sending email
	gmail_obj.sendmail(GMAIL_ID, to, msg.as_string())
	
	# quit the session
	gmail_obj.quit()
	
	print("Email sent")

# driver code
if __name__=="__main__":

	dataframe = pd.read_csv("Dates_test.csv")
	
	# today date in format : DD-MM
	today = date.today().strftime("%d-%m")
	with open("Birthday_template.txt","r") as file:
		html=file.read()

	for index,item in dataframe.iterrows():
	
		msg = MIMEMultipart('alternative')
		msg['Subject'] = "Happy Birthday!"
		msg['From'] = GMAIL_ID
		msg['To'] = item[3]

		part2 = MIMEText(html, 'html')
		msg.attach(part2)
		# stripping the birthday in excel
		# sheet as : DD-MM
		bday = item[1]
		bday = parser.parse(bday).strftime("%d-%m")
		print(bday)
		# condition checking
		if (today == bday):
			print(1)
			# calling the sendEmail function
			sendEmail(item[3], "Happy Birthday",msg)
		# print(item[1])
